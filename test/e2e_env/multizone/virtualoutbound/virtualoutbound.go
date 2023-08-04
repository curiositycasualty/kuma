package virtualoutbound

import (
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	. "github.com/kumahq/kuma/test/framework"
	"github.com/kumahq/kuma/test/framework/client"
	"github.com/kumahq/kuma/test/framework/deployments/democlient"
	"github.com/kumahq/kuma/test/framework/deployments/testserver"
	"github.com/kumahq/kuma/test/framework/envs/multizone"
)

func VirtualOutbound() {
	namespace := "virtual-outbounds"
	meshName := "virtual-outbound"

	BeforeAll(func() {
		Expect(multizone.Global.Install(MTLSMeshUniversal(meshName))).To(Succeed())
		Expect(WaitForMesh(meshName, multizone.Zones())).To(Succeed())

		err := NewClusterSetup().
			Install(NamespaceWithSidecarInjection(namespace)).
			Install(democlient.Install(democlient.WithNamespace(namespace), democlient.WithMesh(meshName))).
			Setup(multizone.KubeZone1)
		Expect(err).ToNot(HaveOccurred())

		err = NewClusterSetup().
			Install(NamespaceWithSidecarInjection(namespace)).
			Install(testserver.Install(
				testserver.WithNamespace(namespace),
				testserver.WithMesh(meshName),
				testserver.WithStatefulSet(true),
				testserver.WithReplicas(2),
			)).
			Setup(multizone.KubeZone2)
		Expect(err).ToNot(HaveOccurred())
	})

	E2EAfterAll(func() {
		Expect(multizone.KubeZone1.TriggerDeleteNamespace(namespace)).To(Succeed())
		Expect(multizone.KubeZone2.TriggerDeleteNamespace(namespace)).To(Succeed())
		Expect(multizone.Global.DeleteMesh(meshName)).To(Succeed())
	})

	It("simple virtual outbound", func() {
		virtualOutboundAll := `
type: VirtualOutbound
mesh: virtual-outbound
name: instance
selectors:
  - match:
      kuma.io/service: "*"
conf:
  host: "{{.svc}}.foo"
  port: "8080"
  parameters:
  - name: "svc"
    tagKey: "kuma.io/service"
`
		err := multizone.Global.Install(YamlUniversal(virtualOutboundAll))
		Expect(err).ToNot(HaveOccurred())

		// Succeed with virtual-outbound
		Eventually(func(g Gomega) {
			response, err := client.CollectEchoResponse(
				multizone.KubeZone1, "demo-client", "test-server_virtual-outbounds_svc_80.foo:8080",
				client.FromKubernetesPod(namespace, "demo-client"),
			)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(response.Instance).To(ContainSubstring("test-server"))
		}, "30s", "1s").Should(Succeed())
	})

	It("virtual outbounds on statefulSet", func() {
		virtualOutboundAll := `
type: VirtualOutbound
mesh: virtual-outbound
name: statefulsets
selectors:
- match:
    kuma.io/service: "*"
    statefulset.kubernetes.io/pod-name: "*"
conf:
  host: "{{.svc}}.{{.inst}}"
  port: "8080"
  parameters:
  - name: "svc"
    tagKey: "kuma.io/service"
  - name: "inst"
    tagKey: "statefulset.kubernetes.io/pod-name"
`
		err := multizone.Global.Install(YamlUniversal(virtualOutboundAll))
		Expect(err).ToNot(HaveOccurred())

		Eventually(func(g Gomega) {
			response, err := client.CollectEchoResponse(
				multizone.KubeZone1, "demo-client", "test-server_virtual-outbounds_svc_80.test-server-0:8080",
				client.FromKubernetesPod(namespace, "demo-client"),
			)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(response.Instance).To(Equal("test-server-0"))
		}, "30s", "1s").Should(Succeed())

		Eventually(func(g Gomega) {
			response, err := client.CollectEchoResponse(
				multizone.KubeZone1, "demo-client", "test-server_virtual-outbounds_svc_80.test-server-1:8080",
				client.FromKubernetesPod(namespace, "demo-client"),
			)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(response.Instance).To(ContainSubstring("test-server-1"))
		}, "30s", "1s").Should(Succeed())
	})
}