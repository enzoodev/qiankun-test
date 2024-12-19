import{d as J,s as M,c as C,r as k,n as H,o as K,a as m,w as o,u as i,b as O,e as r,f as s,g as f,j as w,k as W,F as X,Q as u,p as L,t as S,q as p,l as Y,m as Z}from"./index1734620864360.js";import{Q as ee}from"./QForm1734620864360.js";import{a as _,d as T,_ as te}from"./depe.data1734620864360.js";import{form_store_batch as $}from"./form_batch_store1734620864360.js";import{_ as q,J as ae}from"./index17346208643602.js";import{_ as oe,R as se}from"./release.model1734620864360.js";import{m as ne}from"./field.service1734620864360.js";import{t as ie}from"./table.data1734620864360.js";import{d as l}from"./file.data1734620864360.js";import"./q-table-column.builder1734620864360.js";import"./pagination-store.util1734620864360.js";import"./form-store.util1734620864360.js";import"./rule-enum1734620864360.js";const le={class:"row"},re={class:"flex justify-end q-gutter-md q-mb-lg"},ce=["textContent"],ue={key:0,class:"flex justify-end q-gutter-md q-mb-lg"},de=["textContent"],me={class:"flex justify-end q-gutter-md q-mb-lg"},De=J({__name:"manage-batch",setup(fe){const R=O(),d=R.params.id,{sub_title:V,title:E}=R.meta,v=M($()),{validateFn:I,setValues:N,filling:z,resetForm:D}=$(),Q=C(()=>ne().getComponentBatch),a=k(),x=k([]),B=k([]),g=C(()=>$().fields.length),j=C(()=>[{header:0,title:"Dados do Arquivo",havePermission:!0,openItem:!0},g.value?{header:1,title:a.value?"Alterar":"Cadastrar",havePermission:!0,expandItem:!0,bgColor:"#d6f2de"}:{},a.value?{}:{header:2,title:"Listagem",havePermission:!0,openItem:!0}]);async function A(e){a.value=e,await l.get_release_batch_by_id(e).then(n=>N(l.getValoresFormatSelect(v.fields.value,l.getReduceValores(n))))}function P(e){const n=()=>{l.delete_batch(e).then(()=>h(_().pagination))};l.confirmDialog(n)}async function h(e){await T.get_table_batch(e,d)}async function b(){a.value=void 0,await h(),D()}function y(){I().then(e=>{const{pagination:{rowsNumber:n}}=_(),t=a.value?void 0:(n||0)+1,c=new se({idSecaoPai:d,numeroSecao:t,valores:e});if(a.value){l.put_batch({...c,id:a.value}).then(()=>b());return}l.post_batch(c).then(()=>b())})}H(()=>{D(),!window.history.state.current.includes("linha")&&_().$reset()});async function U(){d&&await l.get_release_file_by_id(d).then(e=>B.value=e)}return K(async()=>{const e=await ie.get_colum_table_batch();x.value.push(...e),await l.get_list_field_batch(),z(),U()}),(e,n)=>(r(),m(i(ae),{container:j.value,title:i(E),"sub-title":i(V)},{section0:o(()=>[s(oe,{values:B.value},null,8,["values"])]),section1:o(()=>[s(ee,{greedy:"",onSubmit:Y(y,["prevent"])},{default:o(()=>[f("div",le,[(r(!0),w(X,null,W(i(v).fields.value,(t,c)=>{var F;return r(),w("div",{class:"col-md-3 col-sm-6 col-xs-12",key:t.id},[(r(),m(Z((F=Q.value)==null?void 0:F[c]),{event:t.field,"onUpdate:event":G=>t.field=G,input:{...t,valores:i(l).formatToListTValor(t.valores,"id","valor","descricao")},errors:i(v).errors.value[t.id]},null,40,["event","onUpdate:event","input","errors"]))])}),128))]),f("div",re,[a.value?p("",!0):(r(),m(u,{key:0,color:"primary",type:"submit"},{default:o(()=>[s(L,{name:"fa-solid fa-plus",left:"",size:"xs"}),f("span",{textContent:S(e.$t("message.add"))},null,8,ce)]),_:1}))])]),_:1})]),"after-section0":o(()=>[!g.value&&!a.value?(r(),w("div",ue,[s(u,{color:"primary",onClick:y},{default:o(()=>[s(L,{name:"fa-solid fa-plus",left:"",size:"xs"}),f("span",{textContent:S(e.$t("message.add"))},null,8,de)]),_:1})])):p("",!0)]),section2:o(()=>[s(te,{col:x.value,rows:i(_)().get_list,pagination:i(_)().pagination,request:h,"have-actions":!0},{default:o(({action:{row:{id:t}}})=>[s(u,{icon:"fa-solid fa-plus",flat:"",size:"sm",round:"",color:"grey-8",onClick:c=>i(T).go_to("GERENCIAR_LINHA",{id:t,idFile:i(d)})},{default:o(()=>[s(q,{data:"Gerenciar Linha"})]),_:2},1032,["onClick"]),g.value?(r(),m(u,{key:0,icon:"fa-solid fa-pen",flat:"",size:"sm",round:"",color:"grey-8",onClick:c=>A(t)},{default:o(()=>[s(q,{data:"Editar Lote"})]),_:2},1032,["onClick"])):p("",!0),s(u,{icon:"fa-solid fa-trash",flat:"",size:"sm",round:"",color:"grey-8",onClick:c=>P(t)},{default:o(()=>[s(q,{data:"Remover Lote"})]),_:2},1032,["onClick"])]),_:1},8,["col","rows","pagination"])]),"after-inner-page":o(()=>[f("div",me,[s(u,{label:(a.value,e.$t("message.cancel")),color:"grey-8",onClick:n[0]||(n[0]=t=>a.value?b():e.$router.back())},null,8,["label"]),a.value?(r(),m(u,{key:0,label:e.$t("message.confirm"),color:"primary",onClick:n[1]||(n[1]=t=>y())},null,8,["label"])):p("",!0)])]),_:1},8,["container","title","sub-title"]))}});export{De as default};