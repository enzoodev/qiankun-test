import{x as g,z as k,S as x,E as l,H as e,y as B,A as O,B as c,D as n,Q,W as w,F as t,C as _,J as r}from"./index1734621655117.js";import{Q as d}from"./QSkeleton1734621655117.js";import{a as E,Q as N,t as S}from"./index17346216551174.js";import{p as q}from"./patrimonyService1734621655117.js";const C=s=>{const{isFetching:o,data:i}=E({enabled:!!s,queryKey:[N.GET_PATRIMONY_OBSERVATION,{id:s}],queryFn:()=>q.getObservation(s)});return{data:i,isFetching:o}},F={key:0},R={key:1},A={class:"q-pl-sm"},I={class:"q-pl-sm"},K=g({__name:"view-observation",setup(s){const o=B(),i=o.params.id,{title:h,subtitle:b}=o.meta,{t:a}=k.global,{data:u,isFetching:v}=C(Number(i)),y=[{header:0,title:a("viewObservation"),havePermission:!0,expandItem:!0}];return(P,T)=>{const f=O("router-link");return c(),x(e(S),{container:y,title:e(h),"sub-title":e(b)},{"right-top":l(()=>[n(f,{to:{name:e(w).HOME}},{default:l(()=>[n(Q,{color:"grey-8",label:e(a)("close")},null,8,["label"])]),_:1},8,["to"])]),section0:l(()=>{var m,p;return[t("div",null,[e(v)?(c(),_("div",F,[n(d,{type:"text",height:"1.5rem",width:"25rem"}),n(d,{type:"text",height:"1.5rem",width:"25rem"})])):(c(),_("div",R,[t("div",null,[t("span",null,[t("b",null,r(e(a)("room"))+":",1)]),t("span",A,r((m=e(u))==null?void 0:m.sala),1)]),t("div",null,[t("span",null,[t("b",null,r(e(a)("observation"))+":",1)]),t("span",I,r((p=e(u))==null?void 0:p.observacao),1)])]))])]}),_:1},8,["title","sub-title"])}}});export{K as default};
