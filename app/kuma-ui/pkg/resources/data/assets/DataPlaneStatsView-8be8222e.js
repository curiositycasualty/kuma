import{E as d}from"./EnvoyData-22589c79.js";import{d as m,a as t,o as c,b as u,w as o,e as n,p as _,f as h}from"./index-20fa483b.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-25e6a956.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-46648b7f.js";import"./ErrorBlock-2fbf8e8e.js";import"./TextWithCopyButton-f2974027.js";import"./CopyButton-5e030b9a.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c9613127.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-936d9824.js";const S=m({__name:"DataPlaneStatsView",setup(g){return(f,x)=>{const s=t("RouteTitle"),r=t("KCard"),p=t("AppView"),i=t("RouteView");return c(),u(i,{name:"data-plane-stats-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:l})=>[n(p,null,{title:o(()=>[_("h2",null,[n(s,{title:l("data-planes.routes.item.navigation.data-plane-stats-view")},null,8,["title"])])]),default:o(()=>[h(),n(r,null,{default:o(()=>[n(d,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};
