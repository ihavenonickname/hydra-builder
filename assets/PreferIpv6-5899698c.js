import{_ as s}from"./basic-boolean-bd11e75e.js";import{r as u,w as m,d as n,o as d,e as p}from"./index-fb5e4c4d.js";const v={__name:"PreferIpv6",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(i,{emit:t}){const r=t,e=u("No");m(e,()=>a()),n(()=>a());function a(){e.value==="Yes"?r("update:modelValue",{commandPart:"-6",error:null}):r("update:modelValue",{commandPart:"",error:null})}return(c,o)=>(d(),p(s,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),title:"Prefer IPv6",options:["Yes","No"],help:"Prefer IPv6 addresses."},null,8,["modelValue"]))}};export{v as default};
