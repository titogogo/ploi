import{i as d,T as u,o as _,c as p,w as f,a as e,b as h,d as n,u as s,j as b,v as w}from"./app-DYrR7Grp.js";import{_ as v}from"./AppLayout-YqD8XSQj.js";import{_ as l}from"./InputError-DWI--Z5X.js";import{_ as x}from"./SoftInput-DDylL9rA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DSNejwUh.js";import"./bootstrap.esm-BUwkA-Zi.js";const g={class:"py-4 container-fluid"},y={class:"row"},N={class:"mx-auto col-lg-9 col-12"},V={class:"mt-4 card card-body"},C=e("h6",{class:"mb-0"},"Create new template",-1),j=e("p",{class:"mb-0 text-sm"},"Create message template",-1),T=e("hr",{class:"my-3 horizontal dark"},null,-1),$={class:"row"},k=e("label",null,"Name",-1),B={class:"row"},S={class:"form-group"},q=e("label",null,"Content",-1),M=e("div",{class:"mt-4 d-flex justify-content-end"},[e("button",{type:"submit",name:"button",class:"m-0 btn bg-gradient-success ms-2"}," Submit ")],-1),G={__name:"Edit",props:{template:{type:Object,required:!0}},setup(i){const m=d("$swal"),{template:a}=i,t=u({name:a.name,content:a.content}),c=()=>{t.patch(route("templates.update",a.id),{onSuccess:()=>{m.fire({title:"Created!",text:"Template is edited successfully.",icon:"success"}),t.reset()},onFinish:()=>t.reset()})};return(O,o)=>(_(),p(v,{title:"New Template"},{default:f(()=>[e("div",g,[e("div",y,[e("div",N,[e("div",V,[e("form",{role:"form",onSubmit:h(c,["prevent"])},[C,j,T,e("div",$,[k,n(x,{modelValue:s(t).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(t).name=r),id:"name",type:"text",placeholder:"Name","aria-label":"Name",error:s(t).errors.hasOwnProperty("name"),"is-required":!0},null,8,["modelValue","error"]),n(l,{message:s(t).errors.name},null,8,["message"])]),e("div",B,[e("div",S,[q,b(e("textarea",{"onUpdate:modelValue":o[1]||(o[1]=r=>s(t).content=r),class:"form-control",rows:"5"},null,512),[[w,s(t).content]]),n(l,{message:s(t).errors.name},null,8,["message"])])]),M],32)])])])])]),_:1}))}};export{G as default};
