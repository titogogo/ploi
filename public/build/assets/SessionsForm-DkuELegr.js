import{J as c,h as k,T as x,o,e as t,a as e,F as i,r as S,b as B,j as M,v as C,u as g,d as L,w as p,f as r,t as n,g as u,c as T}from"./app-DYrR7Grp.js";import{S as b}from"./SoftButton-XtrF8TAg.js";import{M as U}from"./bootstrap.esm-BUwkA-Zi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={key:0,id:"sessions",class:"card mt-4"},F=e("div",{class:"card-header pb-3"},[e("h5",null,"Sessions"),e("p",{class:"text-sm"}," This is a list of devices that have logged into your account. Remove those that you do not recognize. ")],-1),N={class:"card-body pt-0"},O={class:"d-flex align-items-center"},P=e("div",{class:"text-center w-5"},[e("i",{class:"fas fa-desktop text-lg opacity-6","aria-hidden":"true"})],-1),I={class:"my-auto ms-3"},z={key:0,class:"h-100"},A={class:"text-sm mb-1"},D=e("p",{class:"mb-0 text-xs"},"Your current session",-1),E={key:0,class:"badge bg-success badge-sm null null my-auto ms-auto me-3"},j={key:0,class:"horizontal dark"},J={class:"modal-dialog modal-dialog-centered modal-md",role:"document"},R={class:"modal-content"},Y={class:"modal-body p-0"},q={class:"card card-plain"},G=e("div",{class:"card-header pb-0 text-left"},[e("h3",{class:"font-weight-normal text-danger"},"Log Out Other Browser Sessions"),e("p",{class:"mb-0"},"Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.")],-1),H={class:"card-body"},K=e("label",null,"Password",-1),Q={class:"input-group mb-3"},W={class:"text-center"},oe={__name:"SessionsForm",props:{sessions:Array},setup(d){const m=c(!1),l=c(null),_=c(null);k(()=>{_.value=U.getOrCreateInstance("#modal-form")});const a=x({password:""}),v=()=>{m.value=!0,a.reset(),setTimeout(()=>l.value.focus(),250)},w=()=>{a.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>y(),onError:()=>l.value.focus(),onFinish:()=>a.reset()})},y=()=>{m.value=!1,a.reset()};return(X,f)=>d.sessions.length>0?(o(),t("div",V,[F,e("div",N,[(o(!0),t(i,null,S(d.sessions,(s,h)=>(o(),t(i,{key:h},[e("div",O,[P,e("div",I,[s.is_current_device?(o(),t("div",z,[e("p",A,n(s.agent.browser?s.agent.browser:"Unknown")+" on "+n(s.agent.platform?s.agent.platform:"Unknown"),1),D])):(o(),t(i,{key:1},[u(n(s.agent.browser?s.agent.browser:"Unknown")+" on "+n(s.agent.platform?s.agent.platform:"Unknown"),1)],64))]),s.is_current_device?(o(),t("span",E,"Active")):r("",!0),s.is_current_device?r("",!0):(o(),T(b,{key:1,"data-bs-toggle":"modal","data-bs-target":"#modal-form",onClick:v,class:"bg-gradient-danger btn-sm null null my-sm-auto mt-2 mb-0 ms-auto"},{default:p(()=>[u("Logout")]),_:1}))]),h+1!==d.sessions.length?(o(),t("hr",j)):r("",!0)],64))),128))]),e("div",{class:"modal fade",id:"modal-form",tabindex:"-1",role:"dialog","aria-labelledby":"modal-form","aria-hidden":"true",ref_key:"modal",ref:_},[e("div",J,[e("div",R,[e("div",Y,[e("div",q,[G,e("div",H,[e("form",{role:"form",class:"text-left",onSubmit:B(w,["prevent"])},[K,e("div",Q,[M(e("input",{ref_key:"passwordInput",ref:l,"onUpdate:modelValue":f[0]||(f[0]=s=>g(a).password=s),type:"password",class:"form-control",placeholder:"Password","aria-label":"Password","aria-describedby":"password-addon"},null,512),[[C,g(a).password]])]),e("div",W,[L(b,{class:"bg-gradient-danger btn-lg w-100 mt-4 mb-0"},{default:p(()=>[u("Confirm")]),_:1})])],32)])])])])])],512)])):r("",!0)}};export{oe as default};