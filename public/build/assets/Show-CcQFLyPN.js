import{h as c,o as e,c as n,w as o,a as s,d as _,g as u,u as h,l as m,e as d,r as p,t as a,F as b}from"./app-DYrR7Grp.js";import{_ as v}from"./AppLayout-YqD8XSQj.js";import{i as f}from"./simple-datatable-BuLr7k0E.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DSNejwUh.js";import"./bootstrap.esm-BUwkA-Zi.js";const k={class:"py-4 container-fluid"},g={class:"row"},y={class:"col-12"},B={class:"card"},w={class:"pb-0 card-header"},x={class:"d-lg-flex"},N=s("div",null,[s("h5",{class:"mb-0"},"Address Book Details")],-1),D={class:"my-auto mt-4 ms-auto mt-lg-0"},V={class:"my-auto ms-auto"},A={class:"px-0 pb-0 card-body"},C={class:"table-responsive"},F={class:"table table-striped"},S=s("thead",{class:"thead-light"},[s("tr",null,[s("th",null,"#"),s("th",null,"Name"),s("th",null,"Phone")])],-1),T={__name:"Show",props:{addressBook:{type:Object,required:!0}},setup(l){return c(()=>{f("table")}),(i,j)=>(e(),n(v,{title:"Address Book Details"},{default:o(()=>[s("div",k,[s("div",g,[s("div",y,[s("div",B,[s("div",w,[s("div",x,[N,s("div",D,[s("div",V,[_(h(m),{to:i.route("address-books.create"),class:"mb-0 btn bg-gradient-success btn-sm",target:"_blank"},{default:o(()=>[u("+  New Contact")]),_:1},8,["to"])])])])]),s("div",A,[s("div",C,[s("table",F,[S,s("tbody",null,[(e(!0),d(b,null,p(l.addressBook.contacts,(t,r)=>(e(),d("tr",{key:r},[s("td",null,a(t.id),1),s("td",null,a(t.name),1),s("td",null,a(t.phone),1)]))),128))])])])])])])])])]),_:1}))}};export{T as default};
