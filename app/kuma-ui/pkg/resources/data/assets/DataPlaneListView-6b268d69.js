import{d as P,u as V,q as r,c as I,o as S,a as b,w as y,h as u,b as h,g as k,P as G}from"./index-bdbf5b57.js";import{D as N}from"./DataPlaneList-9df1e968.js";import{g as q,i as O,A as B,_ as R}from"./RouteView.vue_vue_type_script_setup_true_lang-9e62d24f.js";import{_ as $}from"./RouteTitle.vue_vue_type_script_setup_true_lang-dcec85af.js";import{Q as c}from"./QueryParameter-70743f73.js";import"./kongponents.es-21ce59a5.js";import"./DataOverview-43dcbd85.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-ee434af6.js";import"./ErrorBlock-b1fa7c54.js";import"./TagList-af54ef62.js";import"./StatusBadge-c156d8c6.js";import"./DefinitionListItem-310ce025.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-f1cf8b3f.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-5891fe23.js";import"./TextWithCopyButton-8088f9cb.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-dedd65ac.js";const se=P({__name:"DataPlaneListView",props:{selectedDppName:{type:String,required:!1,default:null},gatewayType:{type:String,required:!1,default:"true"},offset:{type:Number,required:!1,default:0},isGatewayView:{type:Boolean,required:!1,default:!1}},setup(w){const t=w,g=q(),{t:v}=O(),_={name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},D={protocol:{description:"filter by “kuma.io/protocol” value"}},E={},F=V(),l=r([]),o=r(!0),f=r(null),n=r(null),m=r(t.offset),L=I(()=>({..._,...t.isGatewayView?E:D}));function A(){const a=c.get("filterFields"),s=a!==null?JSON.parse(a):{};d(t.offset,{...s,gateway:t.gatewayType})}A();async function d(a,s={}){m.value=a,c.set("offset",a>0?a:null),c.set("gatewayType",s.gateway==="true"?"all":s.gateway),o.value=!0;const p=F.params.mesh,i=T(s,G,a,t.isGatewayView);try{const{items:e,next:x}=await g.getAllDataplaneOverviewsFromMesh({mesh:p},i);n.value=x,l.value=e??[]}catch(e){e instanceof Error?f.value=e:console.error(e),l.value=[],n.value=null}finally{o.value=!1}}function T(a,s,p,i){const e={...a,size:s,offset:p};return i&&(!("gateway"in e)||e.gateway==="false")?e.gateway="true":i||(e.gateway="false"),e}return(a,s)=>(S(),b(R,null,{default:y(()=>[u($,{title:h(v)(`${t.isGatewayView?"gateways":"data-planes"}.routes.items.title`)},null,8,["title"]),k(),u(B,null,{default:y(()=>[u(N,{"data-plane-overviews":l.value,"is-loading":o.value,error:f.value,"next-url":n.value,"page-offset":m.value,"selected-dpp-name":t.selectedDppName,"is-gateway-view":t.isGatewayView,"gateway-type":t.gatewayType,"dpp-filter-fields":L.value,onLoadData:d},null,8,["data-plane-overviews","is-loading","error","next-url","page-offset","selected-dpp-name","is-gateway-view","gateway-type","dpp-filter-fields"])]),_:1})]),_:1}))}});export{se as default};
