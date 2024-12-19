import{B as J,d as M,i as Y,r as S,s as G,o as H,a as g,w as e,u as s,b as W,C as X,e as b,D,Q as p,f as t,p as Z,g as i,t as r,E as I,x as ee}from"./index1734620864360.js";import{f as te,Q as se,v as ae,a as E,J as le}from"./index17346208643602.js";import{b as oe,a as ne,Q as c}from"./q-table-column.builder1734620864360.js";import{Q as ie,_ as re}from"./_plugin-vue_export-helper1734620864360.js";import{_ as de}from"./header-component.vue_vue_type_style_index_0_lang1734620864360.js";import{f as d}from"./field.data1734620864360.js";import"./field.service1734620864360.js";const F=J("list-field-state-store",{state(){return{fieldTypeKey:"NOME_ARQUIVO",orderedFields:[]}},actions:{SET_KEY(_){this.fieldTypeKey=_},SET_FIELDS(_){this.orderedFields=_}},getters:{}}),ce=["textContent"],ue={class:"flex q-my-md"},me=["textContent"],fe=["textContent"],pe=["textContent"],_e=["textContent"],ye=["textContent"],ve=["textContent"],ge=["textContent"],be={class:"row q-mt-md full-width"},Ce={class:"col flex justify-end"},xe=M({__name:"view-field",setup(_){const Q=W(),{sub_title:w,title:L}=Q.meta,{t:n}=Y.global,u=S(!0),T=S([]),{SET_FIELDS:k,SET_KEY:q}=F(),{fieldTypeKey:C,orderedFields:y}=G(F()),O=d.formatListItems(te),m=S([]);let v=null;const B=()=>{u.value=!0,k([...T.value])},x=async a=>{const{dados:l}=await d.getFieldsByType(a);k(l),T.value=[...l],u.value=!0},A=async a=>{q(a),await x(a)},P=async()=>{await d.saveFieldsOrder(y.value).then(()=>u.value=!0)},U=async a=>{d.confirmDialog(()=>d.deleteField(a).then(()=>x(C.value)))},V=[{header:0,title:n("message.search"),havePermission:!0,expandItem:!0}],K=new oe().create_column("order",n("message.fieldOrder")).create_column("name",n("message.fieldNameLabel")).create_column("description",n("message.description")).create_column("valueType",n("message.fieldTypeValueLabel")).create_column("charsQuantity",n("message.fieldCharsQuantityLabel")).build(!0),$=({id:a})=>v=a,j=a=>a.preventDefault(),z=(a,l)=>{if(!v)return;const f=()=>{u.value=!1,v=null};d.dropItemTable(a,l,v,y,"id","y",f)};function N(a){var l;if(((l=m.value[0])==null?void 0:l.id)===a.id){m.value=[];return}m.value=[a]}return H(async()=>{await x(C.value)}),(a,l)=>{const f=X("permission");return b(),g(s(le),{container:V,"sub-title":s(w),title:s(L)},{"right-top":e(()=>[D((b(),g(p,{class:"q-mr-xs",color:"primary",type:"submit",onClick:l[0]||(l[0]=()=>s(d).go_to("UPDATE_FIELD"))},{default:e(()=>[t(Z,{name:"fa-solid fa-plus",left:"",size:"xs"}),i("span",{textContent:r(s(n)("message.new"))},null,8,ce)]),_:1})),[[f,{project:"SCSDP",functionality:"SIS",verify:["CADSIS"]}]])]),section0:e(()=>[t(I,null,{default:e(()=>[i("div",ue,[t(se,{style:{"margin-left":"5px",width:"400px"},class:"q-mb-lg",label:s(n)("message.fieldType"),"model-value":s(C),options:s(O),dense:"","emit-value":"","hide-bottom-space":"","map-options":"","no-error-icon":"","option-label":"descricao","option-value":"valor","onUpdate:modelValue":l[1]||(l[1]=o=>A(o))},null,8,["label","model-value","options"])])]),_:1}),t(de,{class:"q-mx-xs",title:"Listagem"},{slot:e(()=>[t(I,null,{default:e(()=>[t(ne,{ref:"q_table_manage_fields",columns:s(K),rows:s(y),"rows-per-page-options":[0],class:"shadow-0",selection:"single",selected:m.value,"onUpdate:selected":l[2]||(l[2]=o=>m.value=o),"row-key":"id"},{body:e(({row:o,selected:R})=>[t(ie,{draggable:"true",onDragstart:h=>$(o),onDragover:j,onDrop:h=>z(h,o),onClick:h=>N(o),class:ee(`${!R||"bg-grey-2"} cursor-pointer`)},{default:e(()=>[t(c),t(c,{key:"order"},{default:e(()=>[i("span",{textContent:r(`${s(y).indexOf(o)+1}`)},null,8,me)]),_:2},1024),t(c,{key:"name",class:"format-colum-table",style:{"max-width":"10rem"}},{default:e(()=>[i("span",{textContent:r(o.nome)},null,8,fe)]),_:2},1024),t(c,{key:"description",class:"format-colum-table",style:{"max-width":"16rem"}},{default:e(()=>[i("span",{textContent:r(o.descricao)},null,8,pe)]),_:2},1024),t(c,{key:"valueType",class:"format-colum-table",style:{"max-width":"10rem"}},{default:e(()=>[i("span",{textContent:r(s(ae)[o.tipoValor])},null,8,_e)]),_:2},1024),t(c,{key:"charsQuantity",class:"format-colum-table",style:{"max-width":"2rem"}},{default:e(()=>[i("span",{textContent:r(o.quantidadeCaracteres)},null,8,ye)]),_:2},1024),t(c,{key:"action","auto-width":""},{default:e(()=>[D((b(),g(p,{ref:"q-btn_edit_field",color:"grey-8",flat:"",round:"",size:"sm",icon:"fa-solid fa-pen",onClick:()=>s(d).go_to("UPDATE_FIELD",{id:o.id})},{default:e(()=>[t(E,null,{default:e(()=>[i("span",{textContent:r(s(n)("message.editField"))},null,8,ve)]),_:1})]),_:2},1032,["onClick"])),[[f,{project:"SCSDP",functionality:"SIS",verify:["ALTSIS"]}]]),D((b(),g(p,{ref:"q-btn_delete_field",color:"grey-8",flat:"",icon:"fa-solid fa-trash",round:"",size:"sm",onClick:()=>U(o.id)},{default:e(()=>[t(E,null,{default:e(()=>[i("span",{textContent:r(s(n)("message.deleteField"))},null,8,ge)]),_:1})]),_:2},1032,["onClick"])),[[f,{project:"SCSDP",functionality:"SIS",verify:["CADSIS","ALTSIS"]}]])]),_:2},1024)]),_:2},1032,["onDragstart","onDrop","onClick","class"])]),bottom:e(()=>[i("div",be,[i("div",Ce,[t(p,{disable:u.value,label:s(n)("message.cancel"),class:"q-mr-sm",color:"grey-8",onClick:B},null,8,["disable","label"]),t(p,{color:"primary",type:"submit",disable:u.value,label:s(n)("message.confirm"),onClick:P},null,8,["disable","label"])])])]),_:1},8,["columns","rows","selected"])]),_:1})]),_:1})]),_:1},8,["sub-title","title"])}}}),Fe=re(xe,[["__scopeId","data-v-f72fe8ec"]]);export{Fe as default};
