import{i as V,T as z,o as l,c as S,w as m,a as s,b as u,t as _,j as P,v as B,u as t,d as n,R as $,n as j,k as C,e as i,r as T,g as A,F as E}from"./app-DYrR7Grp.js";import{_ as I}from"./AppLayout-YqD8XSQj.js";import{_ as c}from"./InputError-DWI--Z5X.js";import{_ as p}from"./SoftInput-DDylL9rA.js";import{u as R}from"./index.esm-Bga-vxv6.js";import{S as q}from"./SoftButton-XtrF8TAg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DSNejwUh.js";import"./bootstrap.esm-BUwkA-Zi.js";const F={class:"py-4 container-fluid"},N={class:"row"},U={class:"mx-auto col-lg-9 col-12"},M={class:"mt-4 card card-body"},O={class:"mb-0"},X=s("p",{class:"mb-0 text-sm"},"Add funds to your account",-1),Y=s("hr",{class:"my-3 horizontal dark"},null,-1),G={class:"row"},H=s("label",{for:"amount",class:"form-label"},"Amount",-1),J={class:"input-group"},K=s("span",{class:"input-group-text"},"$",-1),L=s("span",{class:"input-group-text"},".00",-1),Q={class:"mt-3 row"},W=s("label",null,"Email",-1),Z={class:"row"},ss=s("label",null,"Transaction ID",-1),es={class:"row"},ts={class:"col-12"},os=s("label",null,"Proof",-1),as={class:"dz-default dz-message"},rs={key:0,class:"dz-button"},ns={key:1,class:"dz-button"},ls={class:"mt-3 row"},is={class:"col-12"},cs={class:"border badge bg-success mx-1"},ds={class:"me-sm-2"},ms=s("div",{class:"mt-4 d-flex justify-content-end"},[s("button",{type:"submit",name:"button",class:"m-0 btn bg-gradient-success ms-2"}," Submit ")],-1),xs={__name:"Create",props:{method:{type:String,required:!0}},setup(d){const h=V("$swal"),{method:f}=d,e=z({amount:0,email:"",transaction_id:"",files:[]}),b=(a,o)=>{e.files=a},{getRootProps:g,getInputProps:v,isDragActive:y,open:us}=R({accept:[".jpg",".jpeg",".png"],onDrop:b}),w=()=>{e.post(route("manual-payments.store",f),{onSuccess:()=>{h.fire({title:"Success!",text:"Your payment is created successfully.",icon:"success"})}})},k=a=>{e.files[a]&&e.files.splice(a,1)},x=(a="",o=50)=>a.length>o?`${a.substring(0,o)}…`:a;return(a,o)=>(l(),S(I,{title:"Buy Credits"},{default:m(()=>[s("div",F,[s("div",N,[s("div",U,[s("div",M,[s("form",{role:"form",onSubmit:u(w,["prevent"])},[s("h6",O,"Buy Credits through "+_(d.method),1),X,Y,s("div",G,[H,s("div",J,[K,P(s("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>t(e).amount=r),type:"number",class:"form-control","aria-label":"Amount (to the nearest dollar)"},null,512),[[B,t(e).amount]]),L]),n(c,{class:"mt-2",message:t(e).errors.amount},null,8,["message"])]),s("div",Q,[W,n(p,{modelValue:t(e).email,"onUpdate:modelValue":o[1]||(o[1]=r=>t(e).email=r),id:"email",type:"email",placeholder:"Email","aria-label":"Email",error:t(e).errors.hasOwnProperty("email"),"is-required":!0},null,8,["modelValue","error"]),n(c,{message:t(e).errors.email},null,8,["message"])]),s("div",Z,[ss,n(p,{modelValue:t(e).transaction_id,"onUpdate:modelValue":o[2]||(o[2]=r=>t(e).transaction_id=r),id:"transaction_id",type:"text",placeholder:"Transaction ID","aria-label":"Transaction ID",error:t(e).errors.hasOwnProperty("transaction_id"),"is-required":!0},null,8,["modelValue","error"]),n(c,{message:t(e).errors.transaction_id},null,8,["message"])]),s("div",es,[s("div",ts,[os,s("div",$({class:"form-control dropzone dz-clickable"},t(g)()),[s("input",j(C(t(v)())),null,16),s("div",as,[t(y)?(l(),i("p",rs,"Drop the files here ...")):(l(),i("p",ns,"Drag 'n' drop some files here, or click to select files"))])],16),s("div",ls,[s("div",is,[(l(!0),i(E,null,T(t(e).files,(r,D)=>(l(),i("div",cs,[s("span",ds,_(x(r.name,10)),1),n(q,{class:"btn btn-light btn-sm",onClick:u(_s=>k(D),["prevent"])},{default:m(()=>[A("X ")]),_:2},1032,["onClick"])]))),256))])])])]),ms],32)])])])])]),_:1}))}};export{xs as default};