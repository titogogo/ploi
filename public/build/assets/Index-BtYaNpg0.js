import{_ as p,a as h,b as y,c as f}from"./logo-binance-sJ5fciap.js";import{i as v,o as t,c as k,w as a,a as e,d as _,e as o,f as i,t as c,g as r,u as g,l as w,O as b}from"./app-DYrR7Grp.js";import{_ as x}from"./AppLayout-YqD8XSQj.js";import{_ as P}from"./Datatable-BJCQrJ9_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DSNejwUh.js";import"./bootstrap.esm-BUwkA-Zi.js";const B={class:"py-4 container-fluid"},C={class:"row"},N={class:"col-12"},O={class:"card"},V=e("div",{class:"pb-0 card-header"},[e("div",{class:"d-lg-flex"},[e("div",null,[e("h5",{class:"mb-0"},"Manual Payments")])])],-1),$={class:"px-0 pb-0 card-body"},j={class:"d-flex"},M={key:0,class:"w-10",src:p,alt:"revolut"},S={key:1,class:"w-10",src:h,alt:"paypal"},q={key:2,class:"w-10",src:y,alt:"paypal"},D={key:3,class:"w-10",src:f,alt:"paypal"},E={class:"ms-3 my-auto"},I={key:0,class:"badge bg-info"},R={key:1,class:"badge bg-success"},T={key:0,class:"my-auto"},z={key:1},U={__name:"Index",props:{manualPayments:{type:Object,required:!0}},setup(d){v("$swal");const l=["method","email","transaction_id","amount","status","user","created_at"],m=["preview"],u=n=>{b.get(route("manual-payments.show",n))};return(n,A)=>(t(),k(x,{title:"Manual Payments"},{default:a(()=>[e("div",B,[e("div",C,[e("div",N,[e("div",O,[V,e("div",$,[_(P,{data:d.manualPayments,columns:l,checkbox:!0,actions:m,onOnPreviewClicked:u},{method:a(({data:s})=>[e("div",j,[s.method==="Revolut"?(t(),o("img",M)):i("",!0),s.method==="Paypal"?(t(),o("img",S)):i("",!0),s.method==="Skrill"?(t(),o("img",q)):i("",!0),s.method==="Binance"?(t(),o("img",D)):i("",!0),e("h6",E,c(s.method),1)])]),payment_id:a(({data:s})=>[r(c(s.provider_id),1)]),status:a(({data:s})=>[s.status==="pending"?(t(),o("div",I,c(s.status),1)):i("",!0),s.status==="completed"?(t(),o("div",R,c(s.status),1)):i("",!0)]),amount:a(({data:s})=>[r(c(s.amount.formatted),1)]),created_at:a(({data:s})=>[r(c(s.formatted_created_at),1)]),user:a(({data:s})=>[s.user?(t(),o("h6",T,[_(g(w),{href:n.route("users.show",s.user_id)},{default:a(()=>[r(c(s.user.name),1)]),_:2},1032,["href"])])):(t(),o("span",z,"-"))]),_:1},8,["data"])])])])])])]),_:1}))}};export{U as default};
