import{d as y,k as I,o as r,c as p,e as i,w as e,f as s,t as a,l as n,X as u,b as d,F as v,a as c,m,v as S,x as V,aC as O,_ as b}from"./index-5f4feb06.js";import{S as A}from"./StatusBadge-2db39c5c.js";import{T as g}from"./TextWithCopyButton-1098d691.js";import{_ as B}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-7f79002a.js";import"./CopyButton-2ffc661c.js";import"./index-fce48c05.js";const C={class:"stack"},R=y({__name:"ZoneIngressSummary",props:{zoneIngressOverview:{}},setup(l){const{t}=I(),o=l;return(z,w)=>(r(),p("div",C,[i(u,null,{title:e(()=>[s(a(n(t)("http.api.property.status")),1)]),body:e(()=>[i(A,{status:o.zoneIngressOverview.state},null,8,["status"])]),_:1}),s(),i(u,null,{title:e(()=>[s(a(n(t)("http.api.property.address")),1)]),body:e(()=>[o.zoneIngressOverview.zoneIngress.socketAddress.length>0?(r(),d(g,{key:0,text:o.zoneIngressOverview.zoneIngress.socketAddress},null,8,["text"])):(r(),p(v,{key:1},[s(a(n(t)("common.detail.none")),1)],64))]),_:1}),s(),i(u,null,{title:e(()=>[s(a(n(t)("http.api.property.advertisedAddress")),1)]),body:e(()=>[o.zoneIngressOverview.zoneIngress.advertisedSocketAddress.length>0?(r(),d(g,{key:0,text:o.zoneIngressOverview.zoneIngress.advertisedSocketAddress},null,8,["text"])):(r(),p(v,{key:1},[s(a(n(t)("common.detail.none")),1)],64))]),_:1})]))}}),Z=l=>(S("data-v-b0f6778d"),l=l(),V(),l),T={class:"summary-title-wrapper"},N=Z(()=>m("img",{"aria-hidden":"true",src:O},null,-1)),$={class:"summary-title"},D={key:1,class:"stack"},F=y({__name:"ZoneIngressSummaryView",props:{zoneIngressOverview:{default:void 0}},setup(l){const{t}=I(),o=l;return(z,w)=>{const f=c("RouteTitle"),h=c("RouterLink"),k=c("AppView"),x=c("RouteView");return r(),d(x,{name:"zone-ingress-summary-view",params:{zone:"",zoneIngress:""}},{default:e(({route:_})=>[i(k,null,{title:e(()=>[m("div",T,[N,s(),m("h2",$,[i(h,{to:{name:"zone-ingress-detail-view",params:{zone:_.params.zone,zoneIngress:_.params.zoneIngress}}},{default:e(()=>[i(f,{title:n(t)("zone-ingresses.routes.item.title",{name:_.params.zoneIngress})},null,8,["title"])]),_:2},1032,["to"])])])]),default:e(()=>[s(),o.zoneIngressOverview===void 0?(r(),d(B,{key:0},{message:e(()=>[m("p",null,a(n(t)("common.collection.summary.empty_message",{type:"ZoneIngress"})),1)]),default:e(()=>[s(a(n(t)("common.collection.summary.empty_title",{type:"ZoneIngress"}))+" ",1)]),_:1})):(r(),p("div",D,[m("div",null,[m("h3",null,a(n(t)("zone-ingresses.routes.item.overview")),1),s(),i(R,{class:"mt-4","zone-ingress-overview":o.zoneIngressOverview},null,8,["zone-ingress-overview"])])]))]),_:2},1024)]),_:1})}}});const G=b(F,[["__scopeId","data-v-b0f6778d"]]);export{G as default};