import{r as n,w as u,d as p,o as m,e as c,f,c as V,g as v,b as _,v as k,a as N,h as x}from"./index-fb5e4c4d.js";import{_ as b}from"./basic-boolean-bd11e75e.js";const w={key:0},P={__name:"CustomParallelism",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(C,{emit:d}){const o=d,e=n("No"),a=n("");u(e,()=>s()),u(a,()=>s()),p(()=>s());function s(){if(e.value==="Yes"){const t=parseInt(a.value);isNaN(t)||t<1?o("update:modelValue",{commandPart:null,error:"Inform a valid number of tasks"}):o("update:modelValue",{commandPart:`-t ${t}`,error:null})}else o("update:modelValue",{commandPart:"",error:null})}return(t,l)=>(m(),c(b,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=r=>e.value=r),title:"Custom parallelism",options:["Yes","No"],help:"Run this number of connects in parallel."},{default:f(r=>[r.picked==="Yes"?(m(),V("label",w,[v(" Tasks "),_(N("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=i=>a.value=i)},null,512),[[k,a.value]])])):x("",!0)]),_:1},8,["modelValue"]))}};export{P as default};
