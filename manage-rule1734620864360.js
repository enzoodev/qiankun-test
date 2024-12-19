import{Q as G}from"./QForm1734620864360.js";import{d as ge,i as _e,r as p,c as V,s as Fe,v as B,o as ye,a as x,w as d,u as l,b as be,C as Ie,e as D,f as o,g as y,h as q,E as N,D as P,L as $,Q as I,p as Te,t as he,l as j}from"./index1734620864360.js";import{a as Se,Q as Ce,b as Ee}from"./q-table-column.builder1734620864360.js";import{V as Ve,_ as H,J as we,b as Ae}from"./index17346208643602.js";import{r as Le,R as k}from"./rule-enum1734620864360.js";import{_ as z}from"./header-component.vue_vue_type_style_index_0_lang1734620864360.js";import{a as T}from"./field.service1734620864360.js";import{f as J,F as U}from"./field.data1734620864360.js";import{d as r}from"./rule.data1734620864360.js";import"./pagination-store.util1734620864360.js";const Re={class:"row q-mb-lg"},Be={class:"row items-center"},xe={class:"row justify-end"},De=["textContent"],qe={class:"q-pb-xl q-mt-md"},Ne={class:"col flex justify-end q-mt-md"},Je=ge({__name:"manage-rule",setup(Pe){const Q=be(),{t:n}=_e.global,K=r.formatListItems(Le),g=Q.params.id,{sub_title:W,title:X}=Q.meta,h=p([]),u=p(null),w=p([]),S=p([]),C=p(null),_=p(!1),v=p(null),O=p(),b=V(()=>f.value===k.PREENCHIMENTO),A=V(()=>!!g),Y=V(()=>r.formatToListTValor(h.value.filter(({tipoValor:t})=>t===Ve.SELECAO),"id","nome","tipo")),{campo:m,campoAttrs:Z,valorCampo:E,valorCampoAttrs:ee,tipoRegra:f,tipoRegraAttrs:te,errors:L,impactedFields:F}=Fe(r.store),{validateFn:le,resetForm:ae,addImpactedField:oe,deleteImpactedField:se}=r.store,ie=[{header:0,title:n(g?"message.editRule":"message.create"),openItem:!0,expandItem:!0,havePermission:!0}],ne=t=>{var e,s;return(s=(e=h.value.find(({id:a})=>a==t))==null?void 0:e.nome)==null?void 0:s.split("-")[0]},re=t=>{var s,a;if(!t)return"";const e=(s=F.value.find(({valueOptions:i})=>i==null?void 0:i.some(({valor:c})=>t.id===c)))==null?void 0:s.valueOptions;return((a=e==null?void 0:e.find(({valor:i})=>t.id===i))==null?void 0:a.descricao)??""},de=V(()=>{const t=new Ee;return t.create_column("campoImpactado",n("message.field"),!1,e=>ne(e)??""),b.value&&t.create_column("valorPreenchimento",n("message.fieldValue"),!1,e=>re(e)),t.build(!0)}),M=async t=>{const s=ue(["PREENCHIMENTO_USUARIO"]),a=ce(s);if(a){const i=await J.getFieldsByTypeFromTheSameLevelToTheDeepest(a,t).then(c=>r.formatToListTValor(c,"id","nome","tipo"));w.value=i.filter(c=>c.valor!==m.value)}},ue=t=>h.value.filter(e=>e.tipoValor==="SELECAO"||e.tipoValor&&t.includes(Ae[e.tipoValor].group)),ce=t=>{var e;return(e=t.find(s=>s.id===m.value))==null?void 0:e.tipo},me=async()=>{if(!u.value||u.value===m.value)return;const t=u.value;let e;b.value&&(e=await U.getFieldValuesByFieldId(t).then(a=>r.formatToListTValor(a,"id","descricao")));const s={campoImpactado:t,valueOptions:e,valorPreenchimento:b.value?{id:v.value}:null};C.value!==null?(F.value[C.value]=s,C.value=null,_.value=!1):oe({campoImpactado:t,valueOptions:e,valorPreenchimento:{id:v.value}}),u.value=null,v.value=null};function pe(){le().then(t=>{if(g){r.updateRule({...t,id:g}).then(()=>R());return}r.saveRule(t).then(()=>R())})}const ve=(t,e)=>{C.value=t,u.value=e.campoImpactado,v.value=e.valorPreenchimento.id??null,_.value=!0},fe=t=>{r.confirmDialog(()=>se(t))},R=()=>{r.goBack(),ae()};return B(m,async t=>{t&&(S.value=await U.getFieldValuesByFieldId(t).then(e=>r.formatToListTValor(e,"valor","valor","descricao")),await M())}),B(u,async t=>{!t||f.value!==k.PREENCHIMENTO||(O.value=await U.getFieldValuesByFieldId(t).then(e=>r.formatToListTValor(e,"id","valor","descricao")))}),B(f,async t=>{if(t!==k.PREENCHIMENTO)return;const e=await r.getFieldValuesListByFieldIdsList({camposImpactados:F.value});F.value=F.value.map(s=>{const{campoImpactado:a}=s,i=(e==null?void 0:e.filter(({campo:c})=>String(c)==a))??[];return{...s,valueOptions:r.formatToListTValor(i,"valor","descricao")??[]}}),await M(t)}),ye(async()=>{h.value=await J.getAllFields(),g&&await r.getRuleById(g)}),(t,e)=>{const s=Ie("permission");return D(),x(l(we),{container:ie,title:l(X),"sub-title":l(W)},{section0:d(()=>[o(N,null,{default:d(()=>[o(G,{greedy:""},{default:d(()=>{var a;return[y("div",Re,[o(T,{event:l(m),"onUpdate:event":e[0]||(e[0]=i=>q(m)?m.value=i:null),class:"col-md-2 col-sm-6 col-xs-12",errors:l(L).campo,input:{valores:Y.value,field:l(m),nome:l(n)("message.field"),fieldAttrs:l(Z),obrigatorio:!0,proibido:A.value||_.value}},null,8,["event","errors","input"]),o(T,{event:l(E),"onUpdate:event":e[1]||(e[1]=i=>q(E)?E.value=i:null),class:"col-md-2 col-sm-6 col-xs-12",errors:l(L).valorCampo,input:{valores:S.value,field:(a=l(E))==null?void 0:a.toString(),nome:l(n)("message.fieldValue"),fieldAttrs:l(ee),obrigatorio:!0,proibido:S.value.length===0||A.value||_.value}},null,8,["event","errors","input"]),o(T,{event:l(f),"onUpdate:event":e[2]||(e[2]=i=>q(f)?f.value=i:null),class:"col-md-2 col-sm-6 col-xs-12",errors:l(L).tipoRegra,input:{valores:l(K),field:l(f),nome:l(n)("message.ruleTypeLabel"),fieldAttrs:l(te),obrigatorio:!0,proibido:A.value||_.value}},null,8,["event","errors","input"])])]}),_:1})]),_:1}),o(G,{greedy:"",onSubmit:j(pe,["prevent"])},{default:d(()=>[o(z,{class:"q-mx-md",title:l(n)("message.affectedFields"),"header-highlights":""},{slot:d(()=>[o(N,null,{default:d(()=>[y("div",Be,[o(T,{event:u.value,"onUpdate:event":e[3]||(e[3]=a=>u.value=a),class:"col-md-2 col-sm-6 col-xs-12",input:{valores:w.value,field:u.value,nome:l(n)("message.affectedField"),obrigatorio:!0,proibido:w.value.length===0||_.value}},null,8,["event","input"]),P(o(T,{event:v.value,"onUpdate:event":e[4]||(e[4]=a=>v.value=a),class:"col-md-2 col-sm-6 col-xs-12",input:{valores:O.value,field:v.value,nome:l(n)("message.fieldValue"),obrigatorio:!0,proibido:S.value.length===0}},null,8,["event","input"]),[[$,b.value]])]),y("div",xe,[o(I,{class:"q-ml-md q-mb-md",color:"primary",onClick:me},{default:d(()=>[o(Te,{name:"fa-solid fa-plus",left:"",size:"xs"}),y("span",{textContent:he(l(n)("message.add"))},null,8,De)]),_:1})])]),_:1}),o(z,{class:"q-mx-md q-mt-lg",title:"Listagem"},{slot:d(()=>[o(N,null,{default:d(()=>[y("div",qe,[o(Se,{class:"q-ma-sm",rows:l(F),columns:de.value,"rows-per-page-options":[0],flat:"",dense:""},{"body-cell-action":d(({rowIndex:a,row:i})=>[o(Ce,{key:"action","auto-width":""},{default:d(()=>[P((D(),x(I,{icon:"fa-solid fa-pen",flat:"",size:"sm",round:"",color:"grey-8",onClick:c=>ve(a,i)},{default:d(()=>[o(H,{data:l(n)("message.edit")},null,8,["data"])]),_:2},1032,["onClick"])),[[$,b.value],[s,{project:"SCSDP",functionality:"SIS",verify:["CADSIS","ALTSIS"]}]]),P((D(),x(I,{ref:"q-btn_delete_rule",color:"grey-8",flat:"",icon:"fa-solid fa-trash",round:"",size:"sm",onClick:c=>fe(a)},{default:d(()=>[o(H,{data:l(n)("message.delete")},null,8,["data"])]),_:2},1032,["onClick"])),[[s,{project:"SCSDP",functionality:"SIS",verify:["CADSIS","ALTSIS"]}]])]),_:2},1024)]),_:1},8,["rows","columns"])])]),_:1})]),_:1})]),_:1},8,["title"]),y("div",Ne,[o(I,{label:l(n)("message.cancel"),class:"q-mr-md",color:"grey-8",onClick:j(R,["prevent"])},null,8,["label"]),o(I,{label:l(n)("message.confirm"),class:"q-mr-md",color:"primary",type:"submit"},null,8,["label"])])]),_:1})]),_:1},8,["title","sub-title"])}}});export{Je as default};