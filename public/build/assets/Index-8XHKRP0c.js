import{i as u,o,c,w as a,a as e,u as f,l as h,g as r,f as g,d as v,t as i,e as d,F as n,O as y}from"./app-DYrR7Grp.js";import{_ as b}from"./AppLayout-YqD8XSQj.js";import{_ as x}from"./Datatable-BJCQrJ9_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DSNejwUh.js";import"./bootstrap.esm-BUwkA-Zi.js";const k={class:"py-4 container-fluid"},C={class:"row"},S={class:"col-12"},w={class:"card"},B={class:"pb-0 card-header"},N={class:"d-lg-flex"},O=e("div",null,[e("h5",{class:"mb-0"},"SMS Coverage & Pricing")],-1),V={class:"my-auto mt-4 ms-auto mt-lg-0"},$={class:"my-auto ms-auto"},D={class:"px-0 pb-0 card-body"},I={__name:"Index",props:{rates:{type:Object,required:!0}},setup(l){u("$swal");const _=["country_name","country_code","operator_prefix","type","rate"],m=["delete"],p=t=>{y.delete(route("coverage.destroy",t),{preserveScroll:!0})};return(t,j)=>(o(),c(b,{title:"SMS Coverage & Pricing"},{default:a(()=>[e("div",k,[e("div",C,[e("div",S,[e("div",w,[e("div",B,[e("div",N,[O,e("div",V,[e("div",$,[t.$page.props.auth.user.admin?(o(),c(f(h),{key:0,href:t.route("coverage.create"),class:"mb-0 btn bg-gradient-success btn-sm"},{default:a(()=>[r("+  Add Rating")]),_:1},8,["href"])):g("",!0)])])])]),e("div",D,[v(x,{data:l.rates,columns:_,actions:m,checkbox:!0,onOnDeleteClicked:p},{rate:a(({data:s})=>[r(i(s.rate.formatted),1)]),operator_prefix:a(({data:s})=>[s.operator_prefix===0?(o(),d(n,{key:0},[r(" Any ")],64)):(o(),d(n,{key:1},[r(i(s.operator_prefix),1)],64))]),_:1},8,["data"])])])])])])]),_:1}))}};export{I as default};