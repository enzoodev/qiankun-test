const u=(r,e)=>{if(!r)return"";const t=new Date(r),n=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear(),a=`${n}/${s}/${o}`;if(!(e!=null&&e.showTime))return a;const S=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0");return`${a}, ${S}:${d}h`};export{u as f};
