import{i as R,h as E,T as J,D,o as d,c as N,w as k,a as e,u as t,e as c,f as V,b as z,d as a,j as p,z as y,F as h,r as w,t as x,v as F,g as f}from"./app-DYrR7Grp.js";import{_ as G}from"./AppLayout-YqD8XSQj.js";import{i as W}from"./multistep-form-D2Ki7QHK.js";import{_ as i}from"./InputError-DWI--Z5X.js";import{_ as m}from"./SoftInput-DDylL9rA.js";import{S as I}from"./SoftButton-XtrF8TAg.js";import{G as $}from"./GatewayParam-BD41-HzS.js";import{_ as Y}from"./SoftSwitch-BgsJoV2C.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DSNejwUh.js";import"./bootstrap.esm-BUwkA-Zi.js";const H={class:"py-4 container-fluid"},Q={class:"row"},X={class:"col-12"},Z={class:"multisteps-form"},ee={class:"row"},se={class:"mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5"},te={class:"multisteps-form__progress"},oe=e("button",{class:"multisteps-form__progress-btn js-active js-active position-relative",type:"button",title:"Address Book Info"},[e("span",null,"1. Gateway Information")],-1),le={key:0,class:"multisteps-form__progress-btn",type:"button",title:"Media"},ae={key:1,class:"multisteps-form__progress-btn",type:"button",title:"webhook"},ne={class:"row"},re={class:"m-auto col-12 col-lg-8"},ie={class:"p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative","data-animation":"FadeIn"},de=e("h5",{class:"font-weight-bolder"},"Gateway Information",-1),ce={class:"multisteps-form__content"},ue={class:"mt-3 row"},me={class:"col-12 col-sm-12"},_e=e("label",null,"Name",-1),pe={class:"row mb-3"},ye={class:"col-12 col-sm-12"},he=e("label",{class:"form-label"},"Type",-1),be=e("option",{value:"http"},"HTTP",-1),fe=e("option",{value:"smpp"},"SMPP",-1),ge=[be,fe],ve={class:"row"},we={class:"col-12 col-sm-12"},ke=e("label",null,"Base URL",-1),Ve={class:"row"},xe={class:"col-12 col-sm-12"},je=e("label",null,"Success Keyword",-1),Pe={class:"row"},Ue={class:"col-12 col-sm-12"},Se=e("label",{class:"form-label"},"HTTP Request Method",-1),Te=["value"],Oe={class:"mt-3 row"},Ne={class:"col-12 col-sm-12"},Ce=e("label",{class:"form-label"},"Enable JSON Encoded Request",-1),ze=e("option",{value:!0},"Yes",-1),Ie=e("option",{value:!1},"No",-1),Ae=[ze,Ie],Me={class:"mt-3 row"},qe={class:"col-12 col-sm-12"},Be=e("label",{class:"form-label"},"Content Type",-1),Ke=["value"],Le={class:"mt-3 row"},Re={class:"col-12 col-sm-12"},Ee=e("label",{class:"form-label"},"Accept Content Type",-1),Je=["value"],De={class:"mt-3 row"},Fe={class:"col-12 col-sm-12"},Ge=e("label",{class:"form-label"},"Encoding",-1),We=["value"],$e={class:"mt-3 row"},Ye={class:"col-12 col-sm-12"},He=e("label",{class:"form-label"},"Ignore SSL",-1),Qe=e("option",{value:!0},"Yes",-1),Xe=e("option",{value:!1},"No",-1),Ze=[Qe,Xe],es={class:"mt-3 row"},ss={class:"col-12 col-sm-12"},ts=e("label",{class:"form-label"},"Authorization",-1),os=["value"],ls={class:"row"},as={class:"col-12 col-sm-12"},ns=e("label",null,"IP Address",-1),rs={class:"row"},is={class:"col-12 col-sm-12"},ds=e("label",null,"Port",-1),cs={class:"row"},us={class:"col-12 col-sm-12"},ms=e("label",null,"Username",-1),_s={class:"row"},ps={class:"col-12 col-sm-12"},ys=e("label",null,"Password",-1),hs={class:"mt-3 row"},bs=e("label",{for:"amount",class:"form-label"},"Cost",-1),fs={class:"input-group"},gs=e("span",{class:"input-group-text"},"$",-1),vs={class:"mt-3 row"},ws={class:"col-12 col-sm-12"},ks=e("label",{for:"limit",class:"form-label"},"Sending Limit",-1),Vs={class:"row"},xs={class:"col-12 col-sm-12"},js=e("label",null,"Delay",-1),Ps={class:"row"},Us={class:"col-12 col-sm-12"},Ss=e("label",{class:"form-label"},"Delay Time Unit",-1),Ts=["value"],Os={class:"mt-4 row"},Ns={class:"col-12 col-sm-12"},Cs={class:"mt-4 button-row d-flex col-12"},zs={key:1,class:"btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next",type:"button",title:"Next"},Is={class:"p-3 bg-white card multisteps-form__panel border-radius-xl","data-animation":"FadeIn"},As=e("h5",{class:"font-weight-bolder"},"Parameters",-1),Ms={class:"multisteps-form__content"},qs={class:"m-auto mt-4 text-center"},Bs={class:"mt-5 button-row d-flex col-12"},Ks=e("button",{class:"btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next",type:"button",title:"Next"},"Next ",-1),Ls={class:"p-3 bg-white card multisteps-form__panel border-radius-xl","data-animation":"FadeIn"},Rs=e("h5",{class:"font-weight-bolder"},"Webhook",-1),Es={class:"multisteps-form__content"},Js={class:"row mt-3"},Ds={class:"col-12 col-sm-12"},Fs=e("label",null,[f("Response JSON Message Key "),e("span",{class:"text-xs text-secondary"},"(You can use . notion)")],-1),Gs={class:"row"},Ws={class:"col-12 col-sm-12"},$s=e("label",null,[f("Webhook JSON Message Key "),e("span",{class:"text-xs text-secondary"},"(You can use . notion)")],-1),Ys={class:"row"},Hs={class:"col-12 col-sm-12"},Qs=e("label",null,[f("Webhook JSON Status Key "),e("span",{class:"text-xs text-secondary"},"(You can use . notion)")],-1),Xs={class:"mt-5 button-row d-flex col-12"},pt={__name:"Edit",props:{gateway:{type:Object,required:!0},methodTypes:{type:Array,required:!0},contentTypes:{type:Array,required:!0},encodingTypes:{type:Array,required:!0},authTypes:{type:Array,required:!0},delayTypes:{type:Array,required:!0}},setup(g){const A=R("$swal"),{gateway:r,methodTypes:Zs,contentTypes:M,encodingTypes:et,authTypes:st,delayTypes:tt}=g;E(()=>{W(),r.params.forEach(n=>{if(n.type==="source"){P(n.type,n.name,!0,!0,!1,!1,n.value);return}if(n.type==="username"||n.type==="password"||n.type==="token"){if(s.authorization_type==="param"){b(n.type,n.name,!0,!0,!1,!1,n.value);return}if(s.authorization_type==="basic_auth"){b(n.type,n.name,!1,!0,!1,!0,n.value);return}if(s.authorization_type==="bearer_token"){b(n.type,n.name,!1,!0,!1,!0,n.value);return}}if(n.type==="destination"||n.type==="message"){P(n.type,n.name,!0,!1,!1);return}P(n.type,n.name,!0,!0,!1,!0,n.value)})});const s=J({name:r.name,type:r.type,base_url:r.info.base_url,success_keyword:r.info.success_keyword,json_message_key:r.info.json_message_key,webhook_json_message_key:r.info.webhook_json_message_key,webhook_json_status_key:r.info.webhook_json_status_key,method_type:r.info.method_type,json_encoded:r.info.json_encoded,content_type:M[0],accept:r.info.accept,encoding_type:r.info.encoding,ignore_ssl:r.info.ignore_ssl,authorization_type:r.info.authentication_type,ip_address:r.info.ip_address,port:r.info.port,username:r.info.username,password:r.info.password,limit:r.limit,cost:r.cost.amount/100,delay:r.delay,delay_type:r.delay_type,enabled:r.enabled,params:[]}),q=()=>{s.patch(route("gateway.update",r.id),{onSuccess:()=>{A.fire({title:"Success!",text:"Gateway is created successfully.!",icon:"success"})}})},C=()=>{s.authorization_type==="param"&&(U(),b("password","password",!0,!0,!1),b("username","username",!0,!0,!1)),s.authorization_type==="basic_auth"&&(U(),b("password","password",!1,!0,!1,!0),b("username","username",!1,!0,!1,!0)),s.authorization_type==="bearer_token"&&(U(),b("token","token",!1,!0,!1,!0))},U=()=>{s.params=s.params.filter(n=>n.type!=="token"&&n.type!=="username"&&n.type!=="password")},b=(n,l,_,o,u,S=!0,T="")=>{let O=s.params.reduce((v,j)=>v=v>j.id?v:j.id,0);s.params.unshift({id:O+1,type:n,name:l,value:T,hasName:_,hasValue:o,removable:u,nullable:S})},B=()=>{P()},P=(n="custom",l="custom param",_=!0,o=!0,u=!0,S=!1,T="")=>{let O=s.params.reduce((v,j)=>v=v>j.id?v:j.id,0);s.params.push({id:O+1,type:n,name:l,value:T,hasName:_,hasValue:o,removable:u,nullable:S})},K=n=>{const l=s.params.findIndex(_=>_.id===n);s.params.splice(l,1)},L=(n,l)=>{const _=s.params.findIndex(o=>o.id===n);s.params[_].name=l.name,s.params[_].value=l.value};return(n,l)=>{const _=D("Link");return d(),N(G,{title:"Create new gateway"},{default:k(()=>[e("div",H,[e("div",Q,[e("div",X,[e("div",Z,[e("div",ee,[e("div",se,[e("div",te,[oe,t(s).type==="http"?(d(),c("button",le," 2. Request Params ")):V("",!0),t(s).type==="http"?(d(),c("button",ae," 3. Webhook ")):V("",!0)])])]),e("div",ne,[e("div",re,[e("form",{class:"mb-8 multisteps-form__form",role:"form",onSubmit:z(q,["prevent"])},[e("div",ie,[de,e("div",ce,[e("div",ue,[e("div",me,[_e,a(m,{class:"multisteps-form__input",modelValue:t(s).name,"onUpdate:modelValue":l[0]||(l[0]=o=>t(s).name=o),id:"name",type:"text",placeholder:"eg. Gateway1","aria-label":"Name",error:t(s).errors.hasOwnProperty("name")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.name},null,8,["message"])])]),e("div",pe,[e("div",ye,[he,p(e("select",{"onUpdate:modelValue":l[1]||(l[1]=o=>t(s).type=o),class:"form-control",name:"choices-type",id:"choices-type"},ge,512),[[y,t(s).type]]),a(i,{class:"mt-2",message:t(s).errors.type},null,8,["message"])])]),t(s).type==="http"?(d(),c(h,{key:0},[e("div",ve,[e("div",we,[ke,a(m,{class:"multisteps-form__input",modelValue:t(s).base_url,"onUpdate:modelValue":l[2]||(l[2]=o=>t(s).base_url=o),id:"base_url",type:"text","aria-label":"Base URL",error:t(s).errors.hasOwnProperty("base_url")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.base_url},null,8,["message"])])]),e("div",Ve,[e("div",xe,[je,a(m,{class:"multisteps-form__input",modelValue:t(s).success_keyword,"onUpdate:modelValue":l[3]||(l[3]=o=>t(s).success_keyword=o),id:"success_keyword",type:"text","aria-label":"Success Keyword",error:t(s).errors.hasOwnProperty("success_keyword")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.success_keyword},null,8,["message"])])]),e("div",Pe,[e("div",Ue,[Se,p(e("select",{"onUpdate:modelValue":l[4]||(l[4]=o=>t(s).method_type=o),class:"form-control",name:"choices-method-type",id:"choices-method-type"},[(d(!0),c(h,null,w(g.methodTypes,(o,u)=>(d(),c("option",{value:o,key:u},x(o),9,Te))),128))],512),[[y,t(s).method_type]]),a(i,{class:"mt-2",message:t(s).errors.method_type},null,8,["message"])])]),e("div",Oe,[e("div",Ne,[Ce,p(e("select",{"onUpdate:modelValue":l[5]||(l[5]=o=>t(s).json_encoded=o),class:"form-control",name:"choices-json-encoded",id:"choices-json-encoded"},Ae,512),[[y,t(s).json_encoded]]),a(i,{class:"mt-2",message:t(s).errors.json_encoded},null,8,["message"])])]),e("div",Me,[e("div",qe,[Be,p(e("select",{"onUpdate:modelValue":l[6]||(l[6]=o=>t(s).content_type=o),class:"form-control",name:"choices-content-types",id:"choices-content-types"},[(d(!0),c(h,null,w(g.contentTypes,(o,u)=>(d(),c("option",{value:o,key:u},x(o),9,Ke))),128))],512),[[y,t(s).content_type]]),a(i,{class:"mt-2",message:t(s).errors.content_type},null,8,["message"])])]),e("div",Le,[e("div",Re,[Ee,p(e("select",{"onUpdate:modelValue":l[7]||(l[7]=o=>t(s).accept=o),class:"form-control",name:"choices-accept-content-type",id:"choices-accept-content-type"},[(d(!0),c(h,null,w(g.contentTypes,(o,u)=>(d(),c("option",{value:o,key:u},x(o),9,Je))),128))],512),[[y,t(s).accept]]),a(i,{class:"mt-2",message:t(s).errors.accept},null,8,["message"])])]),e("div",De,[e("div",Fe,[Ge,p(e("select",{"onUpdate:modelValue":l[8]||(l[8]=o=>t(s).encoding_type=o),class:"form-control",name:"choices-encoding",id:"choices-encoding"},[(d(!0),c(h,null,w(g.encodingTypes,(o,u)=>(d(),c("option",{value:o,key:u},x(o),9,We))),128))],512),[[y,t(s).encoding_type]]),a(i,{class:"mt-2",message:t(s).errors.encoding_type},null,8,["message"])])]),e("div",$e,[e("div",Ye,[He,p(e("select",{"onUpdate:modelValue":l[9]||(l[9]=o=>t(s).ignore_ssl=o),class:"form-control",name:"choices-ignore-ssl",id:"choices-ignore-ssl"},Ze,512),[[y,t(s).ignore_ssl]]),a(i,{class:"mt-2",message:t(s).errors.ignore_ssl},null,8,["message"])])]),e("div",es,[e("div",ss,[ts,p(e("select",{"onUpdate:modelValue":l[10]||(l[10]=o=>t(s).authorization_type=o),class:"form-control",name:"choices-authorization-type",id:"choices-authorization-type",onChange:C},[(d(!0),c(h,null,w(g.authTypes,(o,u)=>(d(),c("option",{value:o,key:u},x(o),9,os))),128))],544),[[y,t(s).authorization_type]]),a(i,{class:"mt-2",message:t(s).errors.authorization_type},null,8,["message"])])])],64)):V("",!0),t(s).type==="smpp"?(d(),c(h,{key:1},[e("div",ls,[e("div",as,[ns,a(m,{class:"multisteps-form__input",modelValue:t(s).ip_address,"onUpdate:modelValue":l[11]||(l[11]=o=>t(s).ip_address=o),id:"ip_address",type:"text","aria-label":"IP Address",error:t(s).errors.hasOwnProperty("ip_address")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.ip_address},null,8,["message"])])]),e("div",rs,[e("div",is,[ds,a(m,{class:"multisteps-form__input",modelValue:t(s).port,"onUpdate:modelValue":l[12]||(l[12]=o=>t(s).port=o),id:"port",type:"number","aria-label":"Port",min:"1",step:"1",error:t(s).errors.hasOwnProperty("port")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.port},null,8,["message"])])]),e("div",cs,[e("div",us,[ms,a(m,{class:"multisteps-form__input",modelValue:t(s).username,"onUpdate:modelValue":l[13]||(l[13]=o=>t(s).username=o),id:"username",type:"text","aria-label":"Username",error:t(s).errors.hasOwnProperty("username")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.username},null,8,["message"])])]),e("div",_s,[e("div",ps,[ys,a(m,{class:"multisteps-form__input",modelValue:t(s).password,"onUpdate:modelValue":l[14]||(l[14]=o=>t(s).password=o),id:"password",type:"text","aria-label":"Password",error:t(s).errors.hasOwnProperty("password")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.password},null,8,["message"])])])],64)):V("",!0),e("div",hs,[bs,e("div",fs,[gs,p(e("input",{"onUpdate:modelValue":l[15]||(l[15]=o=>t(s).cost=o),type:"number",class:"form-control","aria-label":"Cost",step:"0.01"},null,512),[[F,t(s).cost]])]),a(i,{class:"mt-2",message:t(s).errors.cost},null,8,["message"])]),e("div",vs,[e("div",ws,[ks,a(m,{class:"multisteps-form__input",modelValue:t(s).limit,"onUpdate:modelValue":l[16]||(l[16]=o=>t(s).limit=o),id:"limit",type:"number","aria-label":"Limit",min:"1",step:"1",error:t(s).errors.hasOwnProperty("limit")},null,8,["modelValue","error"]),a(i,{class:"mt-3",message:t(s).errors.limit},null,8,["message"])])]),e("div",Vs,[e("div",xs,[js,a(m,{class:"multisteps-form__input",modelValue:t(s).delay,"onUpdate:modelValue":l[17]||(l[17]=o=>t(s).delay=o),id:"delay",type:"number","aria-label":"Delay",min:"1",step:"1",error:t(s).errors.hasOwnProperty("delay")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.delay},null,8,["message"])])]),e("div",Ps,[e("div",Us,[Ss,p(e("select",{"onUpdate:modelValue":l[18]||(l[18]=o=>t(s).delay_type=o),class:"form-control",name:"choices-delay-unit",id:"choices-delay-unit",onChange:C},[(d(!0),c(h,null,w(g.delayTypes,(o,u)=>(d(),c("option",{value:o,key:u},x(o),9,Ts))),128))],544),[[y,t(s).delay_type]]),a(i,{class:"mt-2",message:t(s).errors.delay_type},null,8,["message"])])]),e("div",Os,[e("div",Ns,[a(Y,{modelValue:t(s).enabled,"onUpdate:modelValue":l[19]||(l[19]=o=>t(s).enabled=o),id:"enabled",name:"enabled",checked:""},{default:k(()=>[f(" Enable users to send using this gateway ")]),_:1},8,["modelValue"])])]),e("div",Cs,[t(s).type==="smpp"?(d(),N(I,{key:0,color:"dark",variant:"gradient",class:"btn mb-0 bg-gradient-dark btn-md null null ms-auto"},{default:k(()=>[f("Create ")]),_:1})):V("",!0),t(s).type==="http"?(d(),c("button",zs,"Next ")):V("",!0)])])]),e("div",Is,[As,e("div",Ms,[(d(!0),c(h,null,w(t(s).params,(o,u)=>(d(),N($,{"has-name":o.hasName,"has-value":o.hasValue,type:o.type,deletable:o.removable,index:o.id,name:o.name,value:o.value,onOnRemove:K,onOnChange:L,nullable:o.nullable??!1,key:o.id},null,8,["has-name","has-value","type","deletable","index","name","value","nullable"]))),128)),e("div",qs,[e("button",{class:"m-auto btn mb-0 bg-gradient-success btn-sm null null px-7",title:"add",onClick:z(B,["prevent"])},"Add ")]),e("div",Bs,[a(_,{as:"button",class:"btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev",title:"Prev"},{default:k(()=>[f("Prev ")]),_:1}),Ks])])]),e("div",Ls,[Rs,e("div",Es,[e("div",Js,[e("div",Ds,[Fs,a(m,{class:"multisteps-form__input",modelValue:t(s).json_message_key,"onUpdate:modelValue":l[20]||(l[20]=o=>t(s).json_message_key=o),id:"json_message_key",type:"text","aria-label":"JSON Message Key",error:t(s).errors.hasOwnProperty("json_message_key")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.json_message_key},null,8,["message"])])]),e("div",Gs,[e("div",Ws,[$s,a(m,{class:"multisteps-form__input",modelValue:t(s).webhook_json_message_key,"onUpdate:modelValue":l[21]||(l[21]=o=>t(s).webhook_json_message_key=o),id:"webhook_json_message_key",type:"text","aria-label":"Webhook JSON Message Key",error:t(s).errors.hasOwnProperty("webhook_json_message_key")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.webhook_json_message_key},null,8,["message"])])]),e("div",Ys,[e("div",Hs,[Qs,a(m,{class:"multisteps-form__input",modelValue:t(s).webhook_json_status_key,"onUpdate:modelValue":l[22]||(l[22]=o=>t(s).webhook_json_status_key=o),id:"webhook_json_status_key",type:"text","aria-label":"Webhook JSON Status Key",error:t(s).errors.hasOwnProperty("webhook_json_status_key")},null,8,["modelValue","error"]),a(i,{class:"mt-2",message:t(s).errors.webhook_json_status_key},null,8,["message"])])]),e("div",Xs,[a(_,{as:"button",class:"btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev",title:"Prev"},{default:k(()=>[f("Prev ")]),_:1}),a(I,{color:"dark",variant:"gradient",class:"btn mb-0 bg-gradient-dark btn-md null null ms-auto"},{default:k(()=>[f("Create ")]),_:1})])])])],32)])])])])])])]),_:1})}}};export{pt as default};