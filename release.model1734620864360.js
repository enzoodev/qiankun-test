var m=Object.defineProperty;var _=(a,s,e)=>s in a?m(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var t=(a,s,e)=>_(a,typeof s!="symbol"?s+"":s,e);import{d as p,c as u,e as r,j as n,F as h,k as v,g as i,t as d}from"./index1734620864360.js";const f={class:"row q-px-md q-mt-md"},b={class:"col-12 col-md-6"},q={class:"row q-mb-sm q-mt-sm"},g={class:"text-weight-bold"},w={class:"q-ml-sm"},S=p({__name:"view-data-file",props:{values:{}},setup(a){const s=a,e=u(()=>s.values.map(({nome:o,valor:l,descricaoValor:c})=>({label:o,value:c??l})));return(o,l)=>(r(),n("div",f,[(r(!0),n(h,null,v(e.value,c=>(r(),n("div",b,[i("div",q,[i("span",g,d(c.label)+":",1),i("span",w,d(c.value),1)])]))),256))]))}});class j{constructor(s){t(this,"id");t(this,"situacao");t(this,"idSecaoPai");t(this,"numeroSecao");t(this,"valores");t(this,"idAverbacao");s&&Object.entries(s).forEach(([e,o])=>{e in this&&o!=null&&(this[e]=o)})}}export{j as R,S as _};
