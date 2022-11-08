const e="ZoneOverview",s="default",t="zone-1",r="2020-07-28T23:08:22.317322+07:00",a="2020-07-28T23:08:22.317322+07:00",n={enabled:!0},o={subscriptions:[{config:'{"apiServer":{"auth":{"allowFromLocalhost":true,"clientCertsDir":""},"corsAllowedDomains":[".*"],"http":{"enabled":true,"interface":"0.0.0.0","port":6681},"https":{"enabled":true,"interface":"0.0.0.0","port":6682,"tlsCertFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.crt","tlsKeyFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.key"},"readOnly":false},"bootstrapServer":{"apiVersion":"v3","params":{"adminAccessLogPath":"/dev/null","adminAddress":"127.0.0.1","adminPort":0,"xdsConnectTimeout":"1s","xdsHost":"","xdsPort":5678}},"defaults":{"skipMeshCreation":false},"diagnostics":{"debugEndpoints":false,"serverPort":6680},"dnsServer":{"CIDR":"240.0.0.0/4","domain":"mesh","port":5653},"dpServer":{"auth":{"type":"dpToken"},"hds":{"checkDefaults":{"healthyThreshold":1,"interval":"1s","noTrafficInterval":"1s","timeout":"2s","unhealthyThreshold":1},"enabled":true,"interval":"5s","refreshInterval":"10s"},"port":5678,"tlsCertFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.crt","tlsKeyFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.key"},"environment":"universal","general":{"dnsCacheTTL":"10s","tlsCertFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.crt","tlsKeyFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.key","workDir":"/Users/tomasz.wylezek/.kuma"},"guiServer":{"apiServerUrl":""},"metrics":{"dataplane":{"enabled":true,"idleTimeout":"5m0s","subscriptionLimit":2},"mesh":{"maxResyncTimeout":"20s","minResyncTimeout":"1s"},"zone":{"enabled":true,"idleTimeout":"5m0s","subscriptionLimit":10}},"mode":"zone","monitoringAssignmentServer":{"apiVersions":["v1"],"assignmentRefreshInterval":"1s","defaultFetchTimeout":"30s","grpcPort":0,"port":5676},"multizone":{"global":{"kds":{"grpcPort":5685,"maxMsgSize":10485760,"refreshInterval":"1s","tlsCertFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.crt","tlsKeyFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.key","zoneInsightFlushInterval":"10s"}},"zone":{"globalAddress":"grpcs://localhost:5685","kds":{"maxMsgSize":10485760,"refreshInterval":"1s","rootCaFile":""},"name":"zone-1"}},"reports":{"enabled":true},"runtime":{"kubernetes":{"admissionServer":{"address":"","certDir":"","port":5443},"controlPlaneServiceName":"kuma-control-plane","injector":{"builtinDNS":{"enabled":true,"port":15053},"caCertFile":"","cniEnabled":false,"exceptions":{"labels":{"openshift.io/build.name":"*","openshift.io/deployer-pod-for.name":"*"}},"initContainer":{"image":"kuma/kuma-init:latest"},"sidecarContainer":{"adminPort":9901,"drainTime":"30s","envVars":{},"gid":5678,"image":"kuma/kuma-dp:latest","livenessProbe":{"failureThreshold":12,"initialDelaySeconds":60,"periodSeconds":5,"timeoutSeconds":3},"readinessProbe":{"failureThreshold":12,"initialDelaySeconds":1,"periodSeconds":5,"successThreshold":1,"timeoutSeconds":3},"redirectPortInbound":15006,"redirectPortInboundV6":15010,"redirectPortOutbound":15001,"resources":{"limits":{"cpu":"1000m","memory":"512Mi"},"requests":{"cpu":"50m","memory":"64Mi"}},"uid":5678},"sidecarTraffic":{"excludeInboundPorts":[],"excludeOutboundPorts":[]},"virtualProbesEnabled":true,"virtualProbesPort":9000},"marshalingCacheExpirationTime":"5m0s"},"universal":{"dataplaneCleanupAge":"72h0m0s"}},"store":{"cache":{"enabled":true,"expirationTime":"1s"},"kubernetes":{"systemNamespace":"kuma-system"},"postgres":{"connectionTimeout":5,"dbName":"kuma","host":"127.0.0.1","maxIdleConnections":0,"maxOpenConnections":0,"maxReconnectInterval":"1m0s","minReconnectInterval":"10s","password":"*****","port":15432,"tls":{"caPath":"","certPath":"","keyPath":"","mode":"disable"},"user":"kuma"},"type":"memory","upsert":{"conflictRetryBaseBackoff":"100ms","conflictRetryMaxTimes":5}},"xdsServer":{"dataplaneConfigurationRefreshInterval":"1s","dataplaneStatusFlushInterval":"10s","nackBackoff":"5s"}}',id:"466aa63b-70e8-4435-8bee-a7146e2cdf11",globalInstanceId:"66309679-ee95-4ea8-b17f-c715ca03bb38",connectTime:"2020-07-28T16:08:09.743141Z",disconnectTime:"2020-07-28T16:08:09.743194Z",status:{total:{}},version:{kumaCp:{version:"1.2.0-rc2-211-g823fe8ce",gitTag:"1.0.0-rc2-211-g823fe8ce",gitCommit:"823fe8cef6430a8f75e72a7224eb5a8ab571ec42",buildDate:"2021-02-18T13:22:30Z"}}},{config:'{"apiServer":{"auth":{"allowFromLocalhost":true,"clientCertsDir":""},"corsAllowedDomains":[".*"],"http":{"enabled":true,"interface":"0.0.0.0","port":6681},"https":{"enabled":true,"interface":"0.0.0.0","port":6682,"tlsCertFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.crt","tlsKeyFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.key"},"readOnly":false},"bootstrapServer":{"apiVersion":"v3","params":{"adminAccessLogPath":"/dev/null","adminAddress":"127.0.0.1","adminPort":0,"xdsConnectTimeout":"1s","xdsHost":"","xdsPort":5678}},"defaults":{"skipMeshCreation":false},"diagnostics":{"debugEndpoints":false,"serverPort":6680},"dnsServer":{"CIDR":"240.0.0.0/4","domain":"mesh","port":5653},"dpServer":{"auth":{"type":"dpToken"},"hds":{"checkDefaults":{"healthyThreshold":1,"interval":"1s","noTrafficInterval":"1s","timeout":"2s","unhealthyThreshold":1},"enabled":true,"interval":"5s","refreshInterval":"10s"},"port":5678,"tlsCertFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.crt","tlsKeyFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.key"},"environment":"universal","general":{"dnsCacheTTL":"10s","tlsCertFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.crt","tlsKeyFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.key","workDir":"/Users/tomasz.wylezek/.kuma"},"guiServer":{"apiServerUrl":""},"metrics":{"dataplane":{"enabled":true,"idleTimeout":"5m0s","subscriptionLimit":2},"mesh":{"maxResyncTimeout":"20s","minResyncTimeout":"1s"},"zone":{"enabled":true,"idleTimeout":"5m0s","subscriptionLimit":10}},"mode":"zone","monitoringAssignmentServer":{"apiVersions":["v1"],"assignmentRefreshInterval":"1s","defaultFetchTimeout":"30s","grpcPort":0,"port":5676},"multizone":{"global":{"kds":{"grpcPort":5685,"maxMsgSize":10485760,"refreshInterval":"1s","tlsCertFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.crt","tlsKeyFile":"/Users/tomasz.wylezek/.kuma/kuma-cp.key","zoneInsightFlushInterval":"10s"}},"zone":{"globalAddress":"grpcs://localhost:5685","kds":{"maxMsgSize":10485760,"refreshInterval":"1s","rootCaFile":""},"name":"zone-1"}},"reports":{"enabled":true},"runtime":{"kubernetes":{"admissionServer":{"address":"","certDir":"","port":5443},"controlPlaneServiceName":"kuma-control-plane","injector":{"builtinDNS":{"enabled":true,"port":15053},"caCertFile":"","cniEnabled":false,"exceptions":{"labels":{"openshift.io/build.name":"*","openshift.io/deployer-pod-for.name":"*"}},"initContainer":{"image":"kuma/kuma-init:latest"},"sidecarContainer":{"adminPort":9901,"drainTime":"30s","envVars":{},"gid":5678,"image":"kuma/kuma-dp:latest","livenessProbe":{"failureThreshold":12,"initialDelaySeconds":60,"periodSeconds":5,"timeoutSeconds":3},"readinessProbe":{"failureThreshold":12,"initialDelaySeconds":1,"periodSeconds":5,"successThreshold":1,"timeoutSeconds":3},"redirectPortInbound":15006,"redirectPortInboundV6":15010,"redirectPortOutbound":15001,"resources":{"limits":{"cpu":"1000m","memory":"512Mi"},"requests":{"cpu":"50m","memory":"64Mi"}},"uid":5678},"sidecarTraffic":{"excludeInboundPorts":[],"excludeOutboundPorts":[]},"virtualProbesEnabled":true,"virtualProbesPort":9000},"marshalingCacheExpirationTime":"5m0s"},"universal":{"dataplaneCleanupAge":"72h0m0s"}},"store":{"cache":{"enabled":true,"expirationTime":"1s"},"kubernetes":{"systemNamespace":"kuma-system"},"postgres":{"connectionTimeout":5,"dbName":"kuma","host":"127.0.0.1","maxIdleConnections":0,"maxOpenConnections":0,"maxReconnectInterval":"1m0s","minReconnectInterval":"10s","password":"*****","port":15432,"tls":{"caPath":"","certPath":"","keyPath":"","mode":"disable"},"user":"kuma"},"type":"memory","upsert":{"conflictRetryBaseBackoff":"100ms","conflictRetryMaxTimes":5}},"xdsServer":{"dataplaneConfigurationRefreshInterval":"1s","dataplaneStatusFlushInterval":"10s","nackBackoff":"5s"}}',id:"f586f89c-2c4e-4f93-9a56-f0ea2ff010b7",globalInstanceId:"66309679-ee95-4ea8-b17f-c715ca03bb38",connectTime:"2020-07-28T16:08:24.760801Z",status:{lastUpdateTime:"2020-07-28T16:08:25.770774Z",total:{responsesSent:"11",responsesAcknowledged:"11"},stat:{CircuitBreaker:{responsesSent:"124",responsesAcknowledged:"4509369"},Dataplane:{responsesSent:"9018614",responsesAcknowledged:"13527859"},FaultInjection:{responsesSent:"18037104",responsesAcknowledged:"22546349"},HealthCheck:{responsesSent:"27055594",responsesAcknowledged:"31564839"},Mesh:{responsesSent:"36074084",responsesAcknowledged:"40583329"},ProxyTemplate:{responsesSent:"45092574",responsesAcknowledged:"49601819"},Secret:{responsesSent:"54111064",responsesAcknowledged:"58620309"},TrafficLog:{responsesSent:"63129554",responsesAcknowledged:"67638799"},TrafficPermission:{responsesSent:"72148044",responsesAcknowledged:"76657289"},TrafficRoute:{responsesSent:"81166534",responsesAcknowledged:"85675779"},TrafficTrace:{responsesSent:"90185024",responsesAcknowledged:"94694269"}}},version:{kumaCp:{version:"1.0.0-rc2-211-g823fe8ce",gitTag:"1.0.0-rc2-211-g823fe8ce",gitCommit:"823fe8cef6430a8f75e72a7224eb5a8ab571ec42",buildDate:"2021-02-18T13:22:30Z",kumaCpGlobalCompatible:!0}}}]},i={type:e,mesh:s,name:t,creationTime:r,modificationTime:a,zone:n,zoneInsight:o};export{r as creationTime,i as default,s as mesh,a as modificationTime,t as name,e as type,n as zone,o as zoneInsight};