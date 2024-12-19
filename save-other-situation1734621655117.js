import{a9 as $,w as H,N as L,x as j,z,S as J,E as M,H as e,y as W,B as x,D as u,Q as V,F as l,G as X,O as v,C as Z,M as I,K as D}from"./index1734621655117.js";import{c as ee,e as T,d as A,g as oe,b as E,h as Q}from"./vee-validate1734621655117.js";import{p as ae,u as se}from"./patrimonyOtherSituationService1734621655117.js";import{b as k,u as te}from"./unitService1734621655117.js";import{u as ne,a as ie,Q as q,t as re}from"./index17346216551174.js";import{f as b}from"./formatMandatoryItem1734621655117.js";import"./auditProject1734621655117.js";const le=ee().shape({situacao:T().nullable().required("Campo Obrigatório"),numeroPatrimonio:A().test("empty-patrimony-number","Campo Obrigatório",function(r){const t=this.parent.situacao,d=!!r;return t&&t==="SEM_PATRIMONIO"?!0:d}).nonNullable("Campo Obrigatório"),descricao:T().required("Campo Obrigatório").max(255),codUnidadeResponsavel:A().required("Campo Obrigatório"),nomeUnidadeResponsavel:T().nullable()}),ue=r=>{const t=ne(),d=$(),{handleSubmit:y,errors:R,resetForm:c,defineField:m,setFieldValue:o}=oe({validationSchema:le}),{data:i,isFetching:P}=ie({enabled:!!r,queryKey:[q.GET_PATRIMONY_OTHER_SITUATION_BY_ID,{id:r}],queryFn:async()=>{const a=await ae.getById(r);return c({values:{numeroPatrimonio:a.numeroPatrimonio,situacao:a.situacao,descricao:a.descricao,codUnidadeResponsavel:a.codUnidadeResponsavel,nomeUnidadeResponsavel:a.nomeUnidadeResponsavel}}),a}});H(i,a=>{a&&c({values:{numeroPatrimonio:a.numeroPatrimonio,situacao:a.situacao,descricao:a.descricao,codUnidadeResponsavel:a.codUnidadeResponsavel,nomeUnidadeResponsavel:a.nomeUnidadeResponsavel}})},{immediate:!0});const p=E({mutationFn:a=>k.saveOtherSituation(a)}),g=E({mutationFn:a=>k.updateOtherSituation(a)}),U=y(async a=>{let S="";const F={...a,nomeUnidadeResponsavel:void 0,situacaoCadastroManual:!0};r?(S=await g.mutateAsync({...F,id:r}),t.invalidateQueries({queryKey:[q.GET_PATRIMONY_OTHER_SITUATION_BY_ID,{id:r}]})):S=await p.mutateAsync(F),L.create({type:"positive",message:S}),d.back(),t.invalidateQueries({queryKey:[q.GET_PATRIMONY_OTHER_SITUATION_LIST]})}),[N,O]=m("situacao"),[_,f]=m("descricao"),[C,h]=m("numeroPatrimonio"),[s,n]=m("codUnidadeResponsavel"),[B,G]=m("nomeUnidadeResponsavel"),w=()=>{o("nomeUnidadeResponsavel",void 0)},K=a=>{o("codUnidadeResponsavel",a)},Y=a=>{a==="SEM_PATRIMONIO"&&o("numeroPatrimonio",void 0)};return{saveOtherSituation:U,resetForm:()=>c(),isFetching:P,isPending:r?g.isPending:p.isPending,errors:R,form:{situation:N,description:_,patrimonyNumber:C,responsibleUnitCode:s,responsibleUnitName:B,situationProps:O,descriptionProps:f,patrimonyNumberProps:h,responsibleUnitCodeProps:n,responsibleUnitNameProps:G,onChangeUnitCode:w,onChangeUnitName:K,onChangeSituation:Y}}},de={class:"row q-col-gutter-md q-mt-sm"},me={class:"col-lg-3 col-sm-3 col-xs-3"},ce={key:0,class:"col-lg-3 col-sm-4 col-xs-12"},pe={class:"row q-col-gutter-md q-mt-sm"},ve={class:"col-lg-3 col-sm-6 col-xs-12"},be={class:"col-lg-9 col-sm-12 col-xs-12"},ge={class:"row q-col-gutter-md q-mt-sm"},Ue={class:"col-lg-12 col-sm-12 col-xs-12 q-mt-md"},ye={class:"flex justify-end q-mt-lg"},he=j({__name:"save-other-situation",setup(r){const{t}=z.global,d=W(),{title:y,subtitle:R}=d.meta,c=d.params.id,m=[{header:0,title:t(c?"update":"create"),havePermission:!0,expandItem:!0}],{form:o,errors:i,isPending:P,isFetching:p,resetForm:g,saveOtherSituation:U}=ue(Number(c)),{responsibleUnities:N,isFetchingResponsibleUnities:O,filterResponsibleUnitiesFn:_}=te(),{situations:f,isFetchingSituations:C}=se();return(h,s)=>(x(),J(e(re),{container:m,title:e(y),"sub-title":e(R)},{"right-top":M(()=>[u(V,{color:"grey-8",label:e(t)("close"),onClick:s[0]||(s[0]=n=>h.$router.back())},null,8,["label"])]),section0:M(()=>[l("div",null,[l("form",{novalidate:"",onSubmit:s[6]||(s[6]=X((...n)=>e(U)&&e(U)(...n),["prevent"]))},[l("div",de,[l("div",me,[u(Q,v({modelValue:e(o).situation.value,"onUpdate:modelValue":s[1]||(s[1]=n=>e(o).situation.value=n)},e(o).situationProps.value,{options:e(f),error:!!e(i).situacao,"error-message":e(i).situacao,loading:e(p)||e(C),dense:"","map-options":"","emit-value":"",clearable:"","clear-icon":"close",label:e(b)(e(t)("situation")),"onUpdate:modelValue":e(o).onChangeSituation}),null,16,["modelValue","options","error","error-message","loading","label","onUpdate:modelValue"])]),e(o).situation.value!=="SEM_PATRIMONIO"?(x(),Z("div",ce,[u(I,v({modelValue:e(o).patrimonyNumber.value,"onUpdate:modelValue":s[2]||(s[2]=n=>e(o).patrimonyNumber.value=n)},e(o).patrimonyNumberProps.value,{error:!!e(i).numeroPatrimonio,"error-message":e(i).numeroPatrimonio,loading:e(p),"no-error-icon":"",dense:"",clearable:"","clear-icon":"close","emit-value":"","map-options":"",label:e(b)(e(t)("patrimonyNumber")),type:"number"}),null,16,["modelValue","error","error-message","loading","label"])])):D("",!0)]),l("div",pe,[l("div",ve,[u(I,v({modelValue:e(o).responsibleUnitCode.value,"onUpdate:modelValue":s[3]||(s[3]=n=>e(o).responsibleUnitCode.value=n)},e(o).responsibleUnitCodeProps.value,{error:!!e(i).codUnidadeResponsavel,"error-message":e(i).codUnidadeResponsavel,"no-error-icon":"",dense:"",clearable:"","clear-icon":"close","emit-value":"","map-options":"",label:e(b)(e(t)("responsibleUnityCodeLabel")),type:"number"}),null,16,["modelValue","error","error-message","label"])]),l("div",be,[u(Q,v({modelValue:e(o).responsibleUnitName.value,"onUpdate:modelValue":s[4]||(s[4]=n=>e(o).responsibleUnitName.value=n)},e(o).responsibleUnitNameProps.value,{options:e(N),error:!!e(i).nomeUnidadeResponsavel,"error-message":e(i).nomeUnidadeResponsavel,loading:e(O),disable:!!e(o).responsibleUnitCode.value,dense:"","map-options":"","emit-value":"",clearable:"","clear-icon":"close","use-input":"","input-debounce":0,onFilter:e(_),label:e(b)(e(t)("responsibleUnity")),"option-value":"codUnidadeResponsavel","option-label":"nomeUnidadeResponsavel","onUpdate:modelValue":e(o).onChangeUnitName}),null,16,["modelValue","options","error","error-message","loading","disable","onFilter","label","onUpdate:modelValue"])])]),l("div",ge,[l("div",Ue,[u(I,v({modelValue:e(o).description.value,"onUpdate:modelValue":s[5]||(s[5]=n=>e(o).description.value=n)},e(o).descriptionProps.value,{error:!!e(i).descricao,"error-message":e(i).descricao,loading:e(p),"no-error-icon":"",dense:"",clearable:"","clear-icon":"close","emit-value":"","map-options":"",label:e(b)(e(t)("description")),maxlength:255,type:"textarea",outlined:"",counter:""}),null,16,["modelValue","error","error-message","loading","label"])])]),l("div",ye,[u(V,{label:e(t)("cancel"),class:"q-mr-sm",color:"grey-8",onClick:e(g)},null,8,["label","onClick"]),u(V,{label:e(t)("confirm"),color:"primary",type:"submit",loading:e(P)},null,8,["label","loading"])])],32)])]),_:1},8,["title","sub-title"]))}});export{he as default};