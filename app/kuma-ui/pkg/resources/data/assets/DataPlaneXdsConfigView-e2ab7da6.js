import{_ as l}from"./EnvoyData.vue_vue_type_script_setup_true_lang-65ea8e3b.js";import{d as c,a as o,o as m,b as _,w as t,e as n,m as u,f}from"./index-d54c8871.js";import"./index-fce48c05.js";import"./CodeBlock-42ba9eaf.js";import"./uniqueId-90cc9b93.js";import"./ErrorBlock-1c8f2f7b.js";import"./TextWithCopyButton-5e3bdfaf.js";import"./CopyButton-6c37d361.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-7f954bc0.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-08e6a739.js";const B=c({__name:"DataPlaneXdsConfigView",setup(g){return(h,x)=>{const s=o("RouteTitle"),p=o("KCard"),r=o("AppView"),i=o("RouteView");return m(),_(i,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:d})=>[n(r,null,{title:t(()=>[u("h2",null,[n(s,{title:d("data-planes.routes.item.navigation.data-plane-xds-config-view")},null,8,["title"])])]),default:t(()=>[f(),n(p,null,{default:t(()=>[n(l,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/xds`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};