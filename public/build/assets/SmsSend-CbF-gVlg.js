import{i as d,T as i,o as m,e as _,a as e,b as u,d as p,u as t}from"./app-DYrR7Grp.js";import{_ as f}from"./SoftInput-DDylL9rA.js";const y={id:"sms-send",class:"card mt-4"},b=e("div",{class:"card-header pb-3"},[e("h5",null,"SMS-Send.co"),e("p",{class:"text-sm"}," sms-send.co settings will be here ")],-1),h={class:"card-body pt-0"},S=e("label",{class:"form-label"},"API Key",-1),k={class:"form-group"},v=e("button",{class:"btn bg-gradient-dark btn-sm null null float-end mt-3 mb-0"},"Save",-1),V={__name:"SmsSend",props:{apiKey:{type:String,required:!0,nullable:!0}},setup(a){const r=d("$swal"),{apiKey:n}=a,s=i({sms_send_co_key:n}),l=()=>{s.post(route("settings.store"),{onSuccess:()=>{r.fire({title:"Saved!",text:"Settings is saved successfully!",icon:"success"})}})};return(g,o)=>(m(),_("div",y,[b,e("div",h,[e("form",{role:"form",class:"text-left",onSubmit:u(l,["prevent"])},[S,e("div",k,[p(f,{id:"key",modelValue:t(s).sms_send_co_key,"onUpdate:modelValue":o[0]||(o[0]=c=>t(s).sms_send_co_key=c),type:"text",placeholder:"API Key",name:"key",autofocus:"",error:t(s).errors.hasOwnProperty("sms_send_co_key")},null,8,["modelValue","error"])]),v],32)])]))}};export{V as default};
