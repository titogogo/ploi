import{T as x,h as g,y as k,o as a,c as C,w as B,a as e,b as V,j as n,z as m,u as s,e as l,r as _,t as f,F as h,d as c,v as w}from"./app-DYrR7Grp.js";import{_ as D}from"./AppLayout-YqD8XSQj.js";import{i as U}from"./choices-DS0t7wfR.js";import{_ as i}from"./InputError-DWI--Z5X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DSNejwUh.js";import"./bootstrap.esm-BUwkA-Zi.js";const M={class:"py-4 container-fluid"},T={class:"row"},$={class:"mx-auto col-lg-9 col-12"},j={class:"mt-4 card card-body"},A=e("h6",{class:"mb-0"},"Buy Credits",-1),S=e("p",{class:"mb-0 text-sm"},"Add funds to your account",-1),z=e("hr",{class:"my-3 horizontal dark"},null,-1),E=e("label",{class:"form-label"},"Country",-1),F=["value"],N=e("label",{class:"form-label"},"Operator Prefix",-1),O=e("option",{value:0,selected:""}," Any ",-1),P=["value"],q=e("label",{class:"mt-3 form-label"},"Country",-1),L=e("option",{value:"text"},"TEXT",-1),R=e("option",{value:"unicode"},"Unicode",-1),X=[L,R],G=e("label",{for:"amount",class:"mt-3 form-label"},"Rate",-1),H={class:"input-group"},I=e("span",{class:"input-group-text"},"$",-1),J=e("div",{class:"mt-4 d-flex justify-content-end"},[e("button",{type:"submit",name:"button",class:"m-0 btn bg-gradient-success ms-2"}," Proceed ")],-1),oe={__name:"Create",props:{countries:{type:Object,required:!0}},setup(p){const{countries:y}=p,t=x({rate:"",operator_prefix:0,type:"text",country:null});g(()=>{U("choices-country")});const b=()=>{t.post(route("coverage.store"))},v=k(()=>{var u;return t.country!=null?(u=y[t.country])==null?void 0:u.carriers:[]});return(u,r)=>(a(),C(D,{title:"Buy Credits"},{default:B(()=>[e("div",M,[e("div",T,[e("div",$,[e("div",j,[e("form",{role:"form",onSubmit:V(b,["prevent"])},[A,S,z,E,n(e("select",{"onUpdate:modelValue":r[0]||(r[0]=o=>s(t).country=o),class:"form-control",name:"choices-country",id:"choices-country",placeholder:"Departure"},[(a(!0),l(h,null,_(p.countries,(o,d)=>(a(),l("option",{value:o.key,key:d},f(o.name),9,F))),128))],512),[[m,s(t).country]]),c(i,{class:"mt-2",message:s(t).errors.country},null,8,["message"]),N,n(e("select",{"onUpdate:modelValue":r[1]||(r[1]=o=>s(t).operator_prefix=o),class:"form-control",name:"choices-operator-prefix",id:"choices-operator-prefix",placeholder:"Departure"},[O,(a(!0),l(h,null,_(v.value,(o,d)=>(a(),l("option",{value:o.code,key:d},f(o.code+" - "+o.name),9,P))),128))],512),[[m,s(t).operator_prefix]]),c(i,{class:"mt-2",message:s(t).errors.operator_prefix},null,8,["message"]),q,n(e("select",{"onUpdate:modelValue":r[2]||(r[2]=o=>s(t).type=o),class:"form-control",name:"choices-type",id:"choices-type",placeholder:"Departure"},X,512),[[m,s(t).type]]),c(i,{class:"mt-2",message:s(t).errors.type},null,8,["message"]),G,e("div",H,[I,n(e("input",{"onUpdate:modelValue":r[3]||(r[3]=o=>s(t).rate=o),type:"number",class:"form-control","aria-label":"Amount (to the nearest dollar)",pattern:"^\\d+\\.\\d{2}$",step:"00.01"},null,512),[[w,s(t).rate]])]),c(i,{class:"mt-2",message:s(t).errors.rate},null,8,["message"]),J],32)])])])])]),_:1}))}};export{oe as default};