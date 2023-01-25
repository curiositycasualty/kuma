import{u as R}from"./vue-router-573afc44.js";import{P as U,D as G}from"./kongponents.es-3df60cd6.js";import{d as H,e as W,k as Z,u as X}from"./store-2fff246d.js";import{b as N}from"./constants-31fdaf55.js";import{Q as O}from"./QueryParameter-70743f73.js";import{a as Y,A as j}from"./AccordionItem-5cf952b5.js";import{D as J}from"./DataOverview-66f4d3ae.js";import{E as I}from"./EnvoyData-b1ca0b5a.js";import{F as K}from"./FrameSkeleton-256a9a83.js";import{_ as ee}from"./LabelList.vue_vue_type_style_index_0_lang-f4e0fb40.js";import{_ as te}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-b19f4f41.js";import{_ as ae,S as se}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-875d835a.js";import{T as ne}from"./TabsWidget-143f1d2e.js";import{d as re,r as o,y as oe,_ as ie,h as g,u as p,a as d,w as a,o as i,e as l,f as z,b as q,g as v,t as w,F as B,v as L}from"./runtime-dom.esm-bundler-91b41870.js";import"./vuex.esm-bundler-df5bd11e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./datadogLogEvents-4578cfa7.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js";import"./ErrorBlock-a792d9a1.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js";import"./StatusBadge-81464ebd.js";import"./TagList-91d1133a.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-525d6c39.js";import"./_commonjsHelpers-87174ba5.js";import"./index-aa5ee4ee.js";const le={class:"zoneingresses"},ue={class:"entity-heading"},Be=re({__name:"ZoneIngresses",props:{selectedZoneIngressName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(C){const y=C,F={title:"No Data",message:"There are no Zone Ingresses present."},P=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Ingress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],h=R(),k=X(),m=o(!0),c=o(!1),f=o(null),_=o({headers:[{label:"Actions",key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]}),u=o(null),S=o([]),D=o(null),x=o([]),A=o(y.offset);oe(()=>h.params.mesh,function(){h.name==="zoneingresses"&&(m.value=!0,c.value=!1,f.value=null,b(0))}),ie(function(){V(y.offset)});function V(t){k.getters["config/getMulticlusterStatus"]&&b(t)}async function b(t){A.value=t,O.set("offset",t>0?t:null),m.value=!0,c.value=!1;const s=h.query.ns||null,r=N;try{const{data:e,next:n}=await M(s,r,t);D.value=n,e.length?(c.value=!1,S.value=e,E({name:y.selectedZoneIngressName??e[0].name}),_.value.data=e.map(T=>{const{zoneIngressInsight:$={}}=T,Q=H($);return{...T,status:Q}})):(_.value.data=[],c.value=!0)}catch(e){e instanceof Error?f.value=e:console.error(e),c.value=!0}finally{m.value=!1}}function E({name:t}){var e;const s=S.value.find(n=>n.name===t),r=((e=s==null?void 0:s.zoneIngressInsight)==null?void 0:e.subscriptions)??[];x.value=Array.from(r).reverse(),u.value=W(s,["type","name"]),O.set("zoneIngress",t)}async function M(t,s,r){if(t)return{data:[await Z.getZoneIngressOverview({name:t},{size:s,offset:r})],next:null};{const{items:e,next:n}=await Z.getAllZoneIngressOverviews({size:s,offset:r});return{data:e??[],next:n}}}return(t,s)=>(i(),g("div",le,[p(k).getters["config/getMulticlusterStatus"]===!1?(i(),d(te,{key:0})):(i(),d(K,{key:1},{default:a(()=>{var r;return[l(J,{"selected-entity-name":(r=u.value)==null?void 0:r.name,"page-size":p(N),"is-loading":m.value,error:f.value,"empty-state":F,"table-data":_.value,"table-data-is-empty":c.value,next:D.value,"page-offset":A.value,onTableAction:E,onLoadData:b},{additionalControls:a(()=>[t.$route.query.ns?(i(),d(p(U),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"zoneingresses"}},{default:a(()=>[z(`
            View all
          `)]),_:1})):q("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"]),z(),c.value===!1&&u.value!==null?(i(),d(ne,{key:0,"has-error":f.value!==null,"is-loading":m.value,tabs:P},{tabHeader:a(()=>[v("h1",ue,`
            Zone Ingress: `+w(u.value.name),1)]),overview:a(()=>[l(ee,null,{default:a(()=>[v("div",null,[v("ul",null,[(i(!0),g(B,null,L(u.value,(e,n)=>(i(),g("li",{key:n},[v("h4",null,w(n),1),z(),v("p",null,w(e),1)]))),128))])])]),_:1})]),insights:a(()=>[l(p(G),{"border-variant":"noBorder"},{body:a(()=>[l(Y,{"initially-open":0},{default:a(()=>[(i(!0),g(B,null,L(x.value,(e,n)=>(i(),d(j,{key:n},{"accordion-header":a(()=>[l(ae,{details:e},null,8,["details"])]),"accordion-content":a(()=>[l(se,{details:e,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":a(()=>[l(I,{"data-path":"xds","zone-ingress-name":u.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-stats":a(()=>[l(I,{"data-path":"stats","zone-ingress-name":u.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-clusters":a(()=>[l(I,{"data-path":"clusters","zone-ingress-name":u.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),_:1},8,["has-error","is-loading"])):q("",!0)]}),_:1}))]))}});export{Be as default};