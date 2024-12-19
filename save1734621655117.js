import{a9 as me,w as ce,N as ue,x as de,z as pe,S as w,E as x,H as e,y as be,A as ye,B as p,D as f,Q as q,W as ve,F as k,C as I,ab as fe,X as ge,G as Pe,U as he,M as Se,O as A,_ as _e}from"./index1734621655117.js";import{c as Me,e as n,i as we,g as xe,b as V,h as qe}from"./vee-validate1734621655117.js";import{u as ke,a as Le,Q as L,t as Oe}from"./index17346216551174.js";import{i as O}from"./itPatrimonyService1734621655117.js";import{i as Ne}from"./itListStatus1734621655117.js";import{f as C}from"./formatMandatoryItem1734621655117.js";import"./auditProject1734621655117.js";const Ie=Me().shape({numPatrimonio:n().required("Campo obrigatório").max(15,"Número do patrimônio deve ter menos que 15 caracteres"),nomeMaquina:n().required("Campo obrigatório"),modelo:n().nullable(),marca:n().nullable(),versaoOffice:n().nullable(),sistemaOperacional:n().nullable(),serialMaquina:n().required("Campo obrigatório"),serialWindows:n().nullable(),serialOffice:n().nullable(),processador:n().nullable(),memoria:n().nullable(),ativo:we().required("Campo obrigatório"),lotacao:n().nullable(),hd:n().nullable(),macAdress:n().nullable(),nomeResponsavel:n().nullable(),observacao:n().nullable()}),Ae=l=>{const i=ke(),m=me(),{handleSubmit:g,errors:P,defineField:r,resetForm:b}=xe({validationSchema:Ie}),c=a=>{b({values:{numPatrimonio:a.numPatrimonio,nomeMaquina:a.nomeMaquina,modelo:a.modelo,marca:a.marca,versaoOffice:a.versaoOffice,sistemaOperacional:a.sistemaOperacional,serialMaquina:a.serialMaquina,serialWindows:a.serialWindows,serialOffice:a.serialOffice,macAdress:a.macAdress,processador:a.processador,memoria:a.memoria,hd:a.hd,lotacao:a.lotacao,nomeResponsavel:a.nomeResponsavel,observacao:a.observacao,ativo:!!a.ativo}})},{data:h,isFetching:o}=Le({enabled:!!l,queryKey:[L.GET_IT_PATRIMONY_ITEM,{id:l}],queryFn:async()=>{const a=await O.getById(l);return c(a),a}});ce(h,a=>{a&&c(a)},{immediate:!0});const t=V({mutationFn:a=>O.create(a)}),y=V({mutationFn:a=>O.update(a)}),[u,N]=r("numPatrimonio"),[v,S]=r("nomeMaquina"),[s,_]=r("modelo"),[d,T]=r("marca"),[F,R]=r("versaoOffice"),[Q,E]=r("sistemaOperacional"),[B,W]=r("serialMaquina"),[U,G]=r("serialWindows"),[K,D]=r("serialOffice"),[Y,$]=r("processador"),[z,H]=r("memoria"),[j,X]=r("ativo"),[J,Z]=r("lotacao"),[ee,oe]=r("hd"),[ae,re]=r("macAdress"),[se,te]=r("nomeResponsavel"),[ne,le]=r("observacao"),ie=()=>{b()};return{onSubmit:g(async a=>{let M;l?(M=await y.mutateAsync({...a,id:l}),i.invalidateQueries({queryKey:[L.GET_IT_PATRIMONY_ITEM,{id:l}]})):M=await t.mutateAsync(a),ue.create({message:M,color:"positive"}),m.back(),i.invalidateQueries({queryKey:[L.GET_IT_PATRIMONY_LIST]})}),reset:ie,errors:P,isFetching:o,isPending:l?y.isPending:t.isPending,form:{patrimonyNumber:u,desktopName:v,model:s,brand:d,officeVersion:F,operationalSystem:Q,desktopSerial:B,windowsSerial:U,officeSerial:K,processor:Y,memory:z,status:j,capacity:J,hd:ee,macAdress:ae,accountable:se,observation:ne,patrimonyNumberProps:N,desktopNameProps:S,modelProps:_,brandProps:T,officeVersionProps:R,operationalSystemProps:E,desktopSerialProps:W,windowsSerialProps:G,officeSerialProps:D,processorProps:$,memoryProps:H,statusProps:X,capacityProps:Z,hdProps:oe,macAdressProps:re,accountableProps:te,observationProps:le}}},Ve={class:"grid-container"},Ce={class:"justify-end row q-mt-lg"},Te="windows",Fe=de({__name:"save",setup(l){const i=be(),m=i.params.id,{title:g,subtitle:P}=i.meta,{t:r}=pe.global,b=[{header:0,title:r(m?"update":"create"),havePermission:!0,expandItem:!0}],{onSubmit:c,reset:h,form:o,errors:t,isPending:y,isFetching:u}=Ae(m?Number(m):void 0);return(N,v)=>{const S=ye("router-link");return p(),w(e(Oe),{container:b,title:e(g),"sub-title":e(P)},{"right-top":x(()=>[f(S,{to:{name:e(ve).IT_HOME}},{default:x(()=>[f(q,{color:"grey-8",label:e(r)("close")},null,8,["label"])]),_:1},8,["to"])]),section0:x(()=>[k("form",{onSubmit:v[0]||(v[0]=Pe((...s)=>e(c)&&e(c)(...s),["prevent"])),novalidate:""},[k("div",Ve,[(p(!0),I(ge,null,fe([{model:e(o).patrimonyNumber,bind:e(o).patrimonyNumberProps,error:e(t).numPatrimonio,label:"patrimonyNumber",isMandatory:!0},{model:e(o).desktopName,bind:e(o).desktopNameProps,error:e(t).nomeMaquina,maxLength:20,label:"desktopName",isMandatory:!0},{model:e(o).model,bind:e(o).modelProps,error:e(t).modelo,maxLength:50,label:"model"},{model:e(o).brand,bind:e(o).brandProps,error:e(t).marca,maxLength:20,label:"brand"},{model:e(o).officeVersion,bind:e(o).officeVersionProps,error:e(t).versaoOffice,maxLength:50,label:"officeVersion"},{model:e(o).operationalSystem,bind:e(o).operationalSystemProps,error:e(t).sistemaOperacional,maxLength:25,label:"operationalSystem"},{model:e(o).desktopSerial,bind:e(o).desktopSerialProps,error:e(t).serialMaquina,maxLength:50,label:"desktopSerial",isMandatory:!0},{model:e(o).windowsSerial,bind:e(o).windowsSerialProps,error:e(t).serialWindows,maxLength:50,label:"windowsSerial",isDisable:e(o).operationalSystem.value!==Te.toLowerCase()},{model:e(o).officeSerial,bind:e(o).officeSerialProps,error:e(t).serialOffice,maxLength:50,label:"officeSerial"},{model:e(o).processor,bind:e(o).processorProps,error:e(t).processador,maxLength:50,label:"processor"},{model:e(o).memory,bind:e(o).memoryProps,error:e(t).memoria,maxLength:10,label:"memory"},{model:e(o).status,bind:e(o).statusProps,error:e(t).ativo,label:"status",isSelect:!0,isMandatory:!0},{model:e(o).capacity,bind:e(o).capacityProps,error:e(t).lotacao,maxLength:50,label:"capacity"},{model:e(o).hd,bind:e(o).hdProps,error:e(t).hd,maxLength:50,label:"hd"},{model:e(o).macAdress,bind:e(o).macAdressProps,error:e(t).macAdress,maxLength:50,label:"macAdress"},{model:e(o).accountable,bind:e(o).accountableProps,error:e(t).nomeResponsavel,maxLength:50,label:"accountable"},{model:e(o).observation,bind:e(o).observationProps,error:e(t).observacao,maxLength:100,label:"observation"}],(s,_)=>(p(),I("div",{key:_,class:he({"grid-full-row":s.label==="observation"})},[s.isSelect?(p(),w(qe,A({key:1,modelValue:s.model.value,"onUpdate:modelValue":d=>s.model.value=d,ref_for:!0},s.bind.value,{options:e(Ne),error:!!s.error,"error-message":s.error,loading:e(u),dense:"","map-options":"","emit-value":"",clearable:"","clear-icon":"close",label:s.isMandatory?e(C)(e(r)(s.label)):e(r)(s.label)}),null,16,["modelValue","onUpdate:modelValue","options","error","error-message","loading","label"])):(p(),w(Se,A({key:0,modelValue:s.model.value,"onUpdate:modelValue":d=>s.model.value=d,ref_for:!0},s.bind.value,{"no-error-icon":"",dense:"",clearable:"","clear-icon":"close","emit-value":"","map-options":"",error:!!s.error,"error-message":s.error,label:s.isMandatory?e(C)(e(r)(s.label)):e(r)(s.label),disable:s.isDisable,loading:e(u),maxlength:s.maxLength}),null,16,["modelValue","onUpdate:modelValue","error","error-message","label","disable","loading","maxlength"]))],2))),128))]),k("div",Ce,[f(q,{label:e(r)("cancel"),class:"q-mr-sm",color:"grey-8",onClick:e(h)},null,8,["label","onClick"]),f(q,{color:"primary",type:"submit",label:e(r)("confirm"),loading:e(y),disable:e(u)},null,8,["label","loading","disable"])])],32)]),_:1},8,["title","sub-title"])}}}),De=_e(Fe,[["__scopeId","data-v-bf9f6c4c"]]);export{De as default};