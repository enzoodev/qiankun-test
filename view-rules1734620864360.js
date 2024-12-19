import{d as j,i as V,r as z,s as N,o as J,a as p,w as s,u as e,b as M,C as O,e as d,D as v,Q as m,f as o,p as G,g as b,t as H,h as y,l as w,E as K}from"./index1734620864360.js";import{Q as W}from"./QForm1734620864360.js";import{b as X,a as Y,Q as Z}from"./q-table-column.builder1734620864360.js";import{u as ee,d as i,r as R}from"./rule.data1734620864360.js";import{f as x,_ as A,J as te}from"./index17346208643602.js";import{_ as oe}from"./header-component.vue_vue_type_style_index_0_lang1734620864360.js";import{a as C}from"./field.service1734620864360.js";import{r as se}from"./rule-enum1734620864360.js";import{C as ae}from"./pagination-store.util1734620864360.js";import{f as le}from"./field.data1734620864360.js";const re=["textContent"],ie={class:"row"},ne={class:"flex justify-end q-gutter-md q-my-lg q-mx-md"},Se=j({__name:"view-rules",setup(me){const h=M(),{t}=V.global,S=z([]),T=ee(),{sub_title:D,title:I}=h.meta,L=i.formatListItems(se),Q=i.formatListItems(x),{errors:g,campo:c,campoAttrs:k,tipoRegra:u,tipoCampo:f,tipoCampoAttrs:E,tipoRegraAttrs:q}=N(R()),{resetForm:P}=R(),U=[{header:0,title:t("message.search"),havePermission:!0,openItem:!0}],B=new X().create_column("campo",t("message.field")).create_column("tipoCampo",t("message.fieldType"),!1,l=>x[l]??"Não informado").create_column("valorCampo",t("message.fieldValue")).create_column("tipoRegra",t("message.ruleTypeLabel")).build(!0);async function F(){P(),await n(new ae)}async function n(l){await i.getAllRules(l)}function $(l){i.confirmDialog(()=>i.deleteRule(l).then(()=>n()))}return J(async()=>{S.value=await le.getAllFields().then(l=>i.formatToListTValor(l,"id","nome","tipo"))}),(l,r)=>{const _=O("permission");return d(),p(e(te),{container:U,"sub-title":e(D),title:e(I)},{"right-top":s(()=>[v((d(),p(m,{class:"q-mr-xs",color:"primary",type:"submit",onClick:r[0]||(r[0]=a=>e(i).go_to("CREATE_RULE"))},{default:s(()=>[o(G,{name:"fa-solid fa-plus",left:"",size:"xs"}),b("span",{textContent:H(e(t)("message.new"))},null,8,re)]),_:1})),[[_,{project:"SCSDP",functionality:"SIS",verify:["CADSIS"]}]])]),section0:s(()=>[o(W,{greedy:"",onSubmit:w(n,["prevent"])},{default:s(()=>[b("div",ie,[o(C,{class:"col-md-2 col-sm-6 col-xs-12",event:e(c),"onUpdate:event":r[1]||(r[1]=a=>y(c)?c.value=a:null),errors:e(g).campo,input:{field:e(c),nome:e(t)("message.field"),obrigatorio:!1,valores:S.value,fieldAttrs:e(k)}},null,8,["event","errors","input"]),o(C,{class:"col-md-2 col-sm-6 col-xs-12",event:e(f),"onUpdate:event":r[2]||(r[2]=a=>y(f)?f.value=a:null),errors:e(g).tipoCampo,input:{field:e(f),nome:e(t)("message.fieldType"),fieldAttrs:e(E),obrigatorio:!1,valores:e(Q)}},null,8,["event","errors","input"]),o(C,{class:"col-md-2 col-sm-6 col-xs-12",event:e(u),"onUpdate:event":r[3]||(r[3]=a=>y(u)?u.value=a:null),errors:e(g).tipoRegra,input:{field:e(u),nome:e(t)("message.ruleTypeLabel"),obrigatorio:!1,valores:e(L),fieldAttrs:e(q)}},null,8,["event","errors","input"])]),b("div",ne,[o(m,{label:e(t)("message.clear"),color:"grey-8",onClick:w(F,["prevent"])},null,8,["label"]),o(m,{label:e(t)("message.search"),color:"primary",icon:"search",type:"submit"},null,8,["label"])])]),_:1}),o(oe,{class:"q-mx-xs",title:"Listagem","icon-btn":"fa-solid fa-file-excel"},{slot:s(()=>[o(K,null,{default:s(()=>[o(Y,{rows:e(T).get_list,columns:e(B),pagination:e(T).pagination,"rows-per-page-options":[5,10,15,20,25,50],flat:"",onRequest:n,"onUpdate:pagination":n},{"body-cell-action":s(({row:{id:a}})=>[o(Z,{key:"action","auto-width":""},{default:s(()=>[v((d(),p(m,{ref:"q-btn_edit_rule",color:"grey-8",flat:"",round:"",size:"sm",icon:"fa-solid fa-pen",onClick:ce=>e(i).go_to("CREATE_RULE",{id:a})},{default:s(()=>[o(A,{data:e(t)("message.change")},null,8,["data"])]),_:2},1032,["onClick"])),[[_,{project:"SCSDP",functionality:"SIS",verify:["ALTSIS"]}]]),v((d(),p(m,{ref:"q-btn_delete_rule",color:"grey-8",flat:"",icon:"fa-solid fa-trash",round:"",size:"sm",onClick:()=>$(a)},{default:s(()=>[o(A,{data:e(t)("message.remove")},null,8,["data"])]),_:2},1032,["onClick"])),[[_,{project:"SCSDP",functionality:"SIS",verify:["CADSIS","ALTSIS"]}]])]),_:2},1024)]),_:1},8,["rows","columns","pagination"])]),_:1})]),_:1})]),_:1},8,["sub-title","title"])}}});export{Se as default};
