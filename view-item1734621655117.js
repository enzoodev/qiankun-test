import{x as te,z as oe,c as ne,S as L,E as X,H as o,y as ie,B as n,D as ue,Q as re,F as i,C as d,ab as se,X as Y,J as j,_ as ve}from"./index1734621655117.js";import{Q as me}from"./QSkeleton1734621655117.js";import{a as ce,Q as de,t as be}from"./index17346216551174.js";import{p as pe}from"./patrimonyService1734621655117.js";import{f as ye}from"./formatCurrency1734621655117.js";import{f as u}from"./formatDateTime1734621655117.js";const De=r=>{const{isFetching:s,data:c}=ce({enabled:!!r,queryKey:[de.GET_PATRIMONY_ITEM,{id:r}],queryFn:()=>pe.getById(r)});return{data:c,isFetching:s}},ge={class:"grid-container"},fe={class:"q-pl-sm"},Ce=te({__name:"view-item",setup(r){const s=ie(),c=s.params.id,{title:W,subtitle:Z}=s.meta,{t:e}=oe.global,{data:a,isFetching:ee}=De(Number(c)),ae=[{header:0,title:e("view"),havePermission:!0,expandItem:!0}],le=ne(()=>{var v,t,l,m,b,p,y,D,g,f,C,I,_,U,T,h,B,R,k,M,P,x,N,E,Q,S,w,F,V,q,G,O,z,A,K,$,H,J;return[{label:e("responsibleUnityCode"),value:(v=a.value)==null?void 0:v.codUnidadeResponsavel},{label:e("responsibleUnity"),value:(t=a.value)==null?void 0:t.nomeUnidadeResponsavel},{label:e("patrimonyNumber"),value:(l=a.value)==null?void 0:l.numeroPatrimonio},{label:e("materialItem"),value:(m=a.value)==null?void 0:m.descricaoItemMaterial},{label:e("accountingUnitCode"),value:(b=a.value)==null?void 0:b.codUnidadeContabil},{label:e("patrimonyType"),value:(p=a.value)==null?void 0:p.tipoBemPatrimonial},{label:e("patrimonyConservationStatus"),value:(y=a.value)==null?void 0:y.estadoConservacaoBem},{label:e("listingDate"),value:u((D=a.value)==null?void 0:D.dataTombamento)},{label:e("patrimonyValue"),value:ye((g=a.value)==null?void 0:g.valorBemPatrimonial)},{label:e("patrimonyDescription"),value:(f=a.value)==null?void 0:f.descricaoItemMaterial},{label:e("expenseItemElementCode"),value:(C=a.value)==null?void 0:C.codElementoItemDespesa},{label:e("numericManagementUnitCode"),value:(I=a.value)==null?void 0:I.codUnidadeGerencial},{label:e("managementUnit"),value:(_=a.value)==null?void 0:_.nomeUnidadeGerencial},{label:e("responsibleThirdPartyBody"),value:(U=a.value)==null?void 0:U.nomeOrgaoTerceiroResponsavel},{label:e("codeItemMaterialNumeric"),value:(T=a.value)==null?void 0:T.codItemMaterial},{label:e("brand"),value:(h=a.value)==null?void 0:h.marca},{label:e("model"),value:(B=a.value)==null?void 0:B.modelo},{label:e("serialNumber"),value:(R=a.value)==null?void 0:R.numeroSerie},{label:e("patrimonyDestination"),value:(k=a.value)==null?void 0:k.destinacaoBem},{label:e("thirdDestinyOrgan"),value:(M=a.value)==null?void 0:M.orgaoTerceiroDestino},{label:e("unitAndDestinationCode"),value:(P=a.value)==null?void 0:P.codUnidadeDestino},{label:e("destinationUnit"),value:(x=a.value)==null?void 0:x.nomeUnidadeDestino},{label:e("agreement"),value:(N=a.value)==null?void 0:N.convenio},{label:e("lastMovementDocument"),value:(E=a.value)==null?void 0:E.documentoUltimaMovimentacao},{label:e("responsibleName"),value:(Q=a.value)==null?void 0:Q.nomeResponsavel},{label:e("coResponsible"),value:(S=a.value)==null?void 0:S.nomeCorresponsavel},{label:e("listingValue"),value:(w=a.value)==null?void 0:w.valorTombamento},{label:e("incorporationDocumentType"),value:(F=a.value)==null?void 0:F.tipoDocumentoIncorporacao},{label:e("patrimonyIncorporationDocument"),value:(V=a.value)==null?void 0:V.documentoIncorporacao},{label:e("accountingDate"),value:u((q=a.value)==null?void 0:q.dataContabilizacao)},{label:e("plate"),value:(G=a.value)==null?void 0:G.numeroPlaca},{label:e("revaluationDate"),value:u((O=a.value)==null?void 0:O.dataReavaliacao)},{label:e("revaluationDocumentType"),value:(z=a.value)==null?void 0:z.tipoReavaliacao},{label:e("revaluationDocument"),value:(A=a.value)==null?void 0:A.documentoReavaliacao},{label:e("revaluationValue"),value:(K=a.value)==null?void 0:K.valorReavaliacao},{label:e("plateType"),value:($=a.value)==null?void 0:$.tipoPlaqueta},{label:e("documentConfirmationDate"),value:u((H=a.value)==null?void 0:H.dataConfirmacaoDocumento)},{label:e("lastRevaluationDate"),value:u((J=a.value)==null?void 0:J.dataUltimaExtracaoSiad)}]});return(v,t)=>(n(),L(o(be),{container:ae,title:o(W),"sub-title":o(Z)},{"right-top":X(()=>[ue(re,{color:"grey-8",label:o(e)("close"),onClick:t[0]||(t[0]=l=>v.$router.back())},null,8,["label"])]),section0:X(()=>[i("div",null,[i("div",ge,[(n(!0),d(Y,null,se(le.value,(l,m)=>(n(),d("div",{key:m},[o(ee)?(n(),L(me,{key:0,type:"text",height:"1.5rem",width:"25rem"})):(n(),d(Y,{key:1},[i("span",null,[i("b",null,j(l.label)+":",1)]),i("span",fe,j(l.value),1)],64))]))),128))])])]),_:1},8,["title","sub-title"]))}}),Re=ve(Ce,[["__scopeId","data-v-5cdf862b"]]);export{Re as default};
