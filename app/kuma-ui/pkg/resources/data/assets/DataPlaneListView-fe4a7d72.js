import{d as _,o,a as l,w as t,h as i,i as f,b as p,g,l as h}from"./index-f1b8ae6a.js";import{D as y,K as b}from"./KFilterBar-a3e7ab9f.js";import{h as z,i as k,A as v,E as q,_ as w,f as V}from"./RouteView.vue_vue_type_script_setup_true_lang-4a32e1ca.js";import{_ as $}from"./RouteTitle.vue_vue_type_script_setup_true_lang-6484968f.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-14dd845b.js";import"./dataplane-e7ae9fed.js";import"./notEmpty-7f452b20.js";const x=_({__name:"DataPlaneListView",props:{page:{},size:{},search:{},query:{},mesh:{}},setup(c){const e=c,{t:u}=z();return(m,C)=>(o(),l(w,{name:"data-planes-list-view"},{default:t(({route:n})=>[i(k,{src:`/meshes/${e.mesh}/dataplanes?page=${e.page}&size=${m.size}&search=${e.search}`},{default:t(({data:a,error:r})=>[i(v,null,{title:t(()=>[f("h2",null,[i($,{title:p(u)("data-planes.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[g(),i(p(h),null,{body:t(()=>[r!==void 0?(o(),l(q,{key:0,error:r},null,8,["error"])):(o(),l(y,{key:1,"data-testid":"data-plane-collection",class:"data-plane-collection","page-number":e.page,"page-size":e.size,total:a==null?void 0:a.total,items:a==null?void 0:a.items,error:r,onChange:({page:s,size:d})=>{n.update({page:String(s),size:String(d)})}},{toolbar:t(()=>[i(b,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:e.query,fields:{name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:s=>n.update({query:s.query,s:s.query.length>0?JSON.stringify(s.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"])]),_:2},1032,["page-number","page-size","total","items","error","onChange"]))]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1}))}});const A=V(x,[["__scopeId","data-v-ed46ed4e"]]);export{A as default};