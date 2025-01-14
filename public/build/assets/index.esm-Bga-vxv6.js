import{J as R,B as De,K as be,h as Ee,S as Fe,y as z,V as we}from"./app-DYrR7Grp.js";function A(e,n,r,i){function a(t){return t instanceof r?t:new r(function(l){l(t)})}return new(r||(r=Promise))(function(t,l){function c(f){try{o(i.next(f))}catch(v){l(v)}}function g(f){try{o(i.throw(f))}catch(v){l(v)}}function o(f){f.done?t(f.value):a(f.value).then(c,g)}o((i=i.apply(e,n||[])).next())})}function C(e,n){var r={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},i,a,t,l;return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(o){return function(f){return g([o,f])}}function g(o){if(i)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(r=0)),r;)try{if(i=1,a&&(t=o[0]&2?a.return:o[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,o[1])).done)return t;switch(a=0,t&&(o=[o[0]&2,t.value]),o[0]){case 0:case 1:t=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(t=r.trys,!(t=t.length>0&&t[t.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!t||o[1]>t[0]&&o[1]<t[3])){r.label=o[1];break}if(o[0]===6&&r.label<t[1]){r.label=t[1],t=o;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(o);break}t[2]&&r.ops.pop(),r.trys.pop();continue}o=n.call(e,r)}catch(f){o=[6,f],a=0}finally{i=t=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}function Oe(e,n){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var i=r.call(e),a,t=[],l;try{for(;(n===void 0||n-- >0)&&!(a=i.next()).done;)t.push(a.value)}catch(c){l={error:c}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(l)throw l.error}}return t}function xe(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(Oe(arguments[n]));return e}var Ae=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function _(e,n){var r=Ce(e);if(typeof r.path!="string"){var i=e.webkitRelativePath;Object.defineProperty(r,"path",{value:typeof n=="string"?n:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}function Ce(e){var n=e.name,r=n&&n.lastIndexOf(".")!==-1;if(r&&!e.type){var i=n.split(".").pop().toLowerCase(),a=Ae.get(i);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var Se=[".DS_Store","Thumbs.db"];function Te(e){return A(this,void 0,void 0,function(){return C(this,function(n){return[2,Ie(e)&&e.dataTransfer?Pe(e.dataTransfer,e.type):Le(e)]})})}function Ie(e){return!!e.dataTransfer}function Le(e){var n=ke(e.target)?e.target.files?G(e.target.files):[]:[];return n.map(function(r){return _(r)})}function ke(e){return e!==null}function Pe(e,n){return A(this,void 0,void 0,function(){var r,i;return C(this,function(a){switch(a.label){case 0:return e.items?(r=G(e.items).filter(function(t){return t.kind==="file"}),n!=="drop"?[2,r]:[4,Promise.all(r.map(je))]):[3,2];case 1:return i=a.sent(),[2,V(ee(i))];case 2:return[2,V(G(e.files).map(function(t){return _(t)}))]}})})}function V(e){return e.filter(function(n){return Se.indexOf(n.name)===-1})}function G(e){for(var n=[],r=0;r<e.length;r++){var i=e[r];n.push(i)}return n}function je(e){if(typeof e.webkitGetAsEntry!="function")return q(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?re(n):q(e)}function ee(e){return e.reduce(function(n,r){return xe(n,Array.isArray(r)?ee(r):[r])},[])}function q(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=_(n);return Promise.resolve(r)}function Re(e){return A(this,void 0,void 0,function(){return C(this,function(n){return[2,e.isDirectory?re(e):ze(e)]})})}function re(e){var n=e.createReader();return new Promise(function(r,i){var a=[];function t(){var l=this;n.readEntries(function(c){return A(l,void 0,void 0,function(){var g,o,f;return C(this,function(v){switch(v.label){case 0:if(c.length)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return g=v.sent(),r(g),[3,4];case 3:return o=v.sent(),i(o),[3,4];case 4:return[3,6];case 5:f=Promise.all(c.map(Re)),a.push(f),t(),v.label=6;case 6:return[2]}})})},function(c){i(c)})}t()})}function ze(e){return A(this,void 0,void 0,function(){return C(this,function(n){return[2,new Promise(function(r,i){e.file(function(a){var t=_(a,e.fullPath);r(t)},function(a){i(a)})})]})})}var ne=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),i=e.name||"",a=(e.type||"").toLowerCase(),t=a.replace(/\/.*$/,"");return r.some(function(l){var c=l.trim().toLowerCase();return c.charAt(0)==="."?i.toLowerCase().endsWith(c):c.endsWith("/*")?t===c.replace(/\/.*$/,""):a===c})}return!0},p=function(){return p=Object.assign||function(n){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},p.apply(this,arguments)};function U(e,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]]);return r}function Be(e,n,r,i){function a(t){return t instanceof r?t:new r(function(l){l(t)})}return new(r||(r=Promise))(function(t,l){function c(f){try{o(i.next(f))}catch(v){l(v)}}function g(f){try{o(i.throw(f))}catch(v){l(v)}}function o(f){f.done?t(f.value):a(f.value).then(c,g)}o((i=i.apply(e,n||[])).next())})}function Me(e,n){var r={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},i,a,t,l;return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(o){return function(f){return g([o,f])}}function g(o){if(i)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(r=0)),r;)try{if(i=1,a&&(t=o[0]&2?a.return:o[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,o[1])).done)return t;switch(a=0,t&&(o=[o[0]&2,t.value]),o[0]){case 0:case 1:t=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(t=r.trys,!(t=t.length>0&&t[t.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!t||o[1]>t[0]&&o[1]<t[3])){r.label=o[1];break}if(o[0]===6&&r.label<t[1]){r.label=t[1],t=o;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(o);break}t[2]&&r.ops.pop(),r.trys.pop();continue}o=n.call(e,r)}catch(f){o=[6,f],a=0}finally{i=t=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}function N(e,n,r){if(r||arguments.length===2)for(var i=0,a=n.length,t;i<a;i++)(t||!(i in n))&&(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))}function _e(e){return e.includes("MSIE")||e.includes("Trident/")}function Ge(e){return e.includes("Edge/")}function Ne(e){return e===void 0&&(e=window.navigator.userAgent),_e(e)||Ge(e)}function Q(e){e.preventDefault()}function B(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function M(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}var $e="file-invalid-type",Ke="file-too-large",We="file-too-small",He="too-many-files",Ye={code:He,message:"Too many files"},Je=function(e){e=Array.isArray(e)&&e.length===1?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:$e,message:"File type must be ".concat(n)}};function x(e){return e!=null}var Ve=ne.default,qe=Ve||ne;function te(e,n){var r=e.type==="application/x-moz-file"||qe(e,n);return[r,r?null:Je(n)]}var X=function(e){return{code:Ke,message:"File is larger than ".concat(e," bytes")}},Z=function(e){return{code:We,message:"File is smaller than ".concat(e," bytes")}};function ae(e,n,r){if(x(e.size)&&e.size)if(x(n)&&x(r)){if(e.size>r)return[!1,X(r)];if(e.size<n)return[!1,Z(n)]}else{if(x(n)&&e.size<n)return[!1,Z(n)];if(x(r)&&e.size>r)return[!1,X(r)]}return[!0,null]}function b(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e.some(function(t){return!M(r)&&t&&t.apply(void 0,N([r],i,!1)),M(r)})}}function Ue(e){var n=e.files,r=e.accept,i=e.minSize,a=e.maxSize,t=e.multiple,l=e.maxFiles;return!t&&n.length>1||t&&l>=1&&n.length>l?!1:n.every(function(c){var g=te(c,r)[0],o=ae(c,i,a)[0];return g&&o})}var Qe={disabled:!1,getFilesFromEvent:Te,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1};function Ze(e){e===void 0&&(e={});var n=R(p(p({},Qe),e));De(function(){return p({},e)},function(u){n.value=p(p({},n.value),u)});var r=R(),i=R(),a=be({isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]}),t=function(){i.value&&(a.isFileDialogActive=!0,i.value.value="",i.value.click())},l=function(){var u=n.value.onFileDialogCancel;a.isFileDialogActive&&setTimeout(function(){if(i.value){var s=i.value.files;s&&!s.length&&(a.isFileDialogActive=!1,typeof u=="function"&&u())}},300)};function c(){a.isFocused=!0}function g(){a.isFocused=!1}function o(){var u=n.value.noClick;u||(Ne()?setTimeout(t,0):t())}var f=R([]),v=function(u){if(r.value){var s=r.value.$el||r.value;s.contains(u.target)||(u.preventDefault(),f.value=[])}};Ee(function(){window.addEventListener("focus",l,!1);var u=n.value.preventDropOnDocument;u&&(document.addEventListener("dragover",Q,!1),document.addEventListener("drop",v,!1))}),Fe(function(){window.removeEventListener("focus",l,!1);var u=n.value.preventDropOnDocument;u&&(document.removeEventListener("dragover",Q),document.removeEventListener("drop",v))});function S(u){var s=n.value.noDragEventsBubbling;s&&u.stopPropagation()}function ie(u){return Be(this,void 0,void 0,function(){var s,d,m,y,h;return Me(this,function(E){switch(E.label){case 0:return s=n.value,d=s.getFilesFromEvent,m=s.noDragEventsBubbling,y=s.onDragEnter,u.preventDefault(),S(u),f.value=N(N([],f.value,!0),[u.target],!1),B(u)?d?[4,d(u)]:[2]:[3,2];case 1:if(h=E.sent(),h||(h=[]),M(u)&&!m)return[2];a.draggedFiles=h,a.isDragActive=!0,y&&y(u),E.label=2;case 2:return[2]}})})}function oe(u){var s=n.value.onDragOver;if(u.preventDefault(),S(u),u.dataTransfer)try{u.dataTransfer.dropEffect="copy"}catch{}return B(u)&&s&&s(u),!1}function ue(u){u.preventDefault(),S(u);var s=f.value.filter(function(y){if(!r.value)return!1;var h=r.value.$el||r.value;return h.contains(y)}),d=s.indexOf(u.target);if(d!==-1&&s.splice(d,1),f.value=s,!(s.length>0)){a.draggedFiles=[],a.isDragActive=!1;var m=n.value.onDragLeave;B(u)&&m&&m(u)}}function $(u){u.preventDefault(),S(u),f.value=[];var s=n.value,d=s.getFilesFromEvent,m=s.noDragEventsBubbling,y=s.accept,h=s.minSize,E=s.maxSize,I=s.multiple,L=s.maxFiles,k=s.onDrop,P=s.onDropRejected,j=s.onDropAccepted;if(B(u)){if(!d)return;Promise.resolve(d(u)).then(function(ve){if(!(M(u)&&!m)){var D=[],w=[];ve.forEach(function(O){var Y=te(O,y),ge=Y[0],de=Y[1],J=ae(O,h,E),pe=J[0],me=J[1];if(ge&&pe)D.push(O);else{var ye=[de,me].filter(function(he){return he});w.push({file:O,errors:ye})}}),(!I&&D.length>1||I&&L>=1&&D.length>L)&&(D.forEach(function(O){w.push({file:O,errors:[Ye]})}),D.splice(0)),a.acceptedFiles=D,a.fileRejections=w,k&&k(D,w,u),w.length>0&&P&&P(w,u),D.length>0&&j&&j(D,u)}})}a.isFileDialogActive=!1,a.isDragActive=!1,a.draggedFiles=[],a.acceptedFiles=[],a.fileRejections=[]}var F=function(u){return n.value.disabled?void 0:u},K=function(u){return n.value.noKeyboard?void 0:F(u)},T=function(u){return n.value.noDrag?void 0:F(u)},le=function(u){u===void 0&&(u={});var s=u.onFocus,d=u.onBlur,m=u.onClick,y=u.onDragEnter,h=u.onDragenter,E=u.onDragOver,I=u.onDragover,L=u.onDragLeave,k=u.onDragleave,P=u.onDrop,j=U(u,["onFocus","onBlur","onClick","onDragEnter","onDragenter","onDragOver","onDragover","onDragLeave","onDragleave","onDrop"]);return p(p({onFocus:K(b(s,c)),onBlur:K(b(d,g)),onClick:F(b(m,o)),onDragenter:T(b(y,h,ie)),onDragover:T(b(E,I,oe)),onDragleave:T(b(L,k,ue)),onDrop:T(b(P,$)),ref:r},!n.value.disabled&&!n.value.noKeyboard?{tabIndex:0}:{}),j)},se=function(u){u.stopPropagation()};function fe(u){u===void 0&&(u={});var s=u.onChange,d=u.onClick,m=U(u,["onChange","onClick"]),y={accept:n.value.accept,multiple:n.value.multiple,style:"display: none",type:"file",onChange:F(b(s,$)),onClick:F(b(d,se)),autoComplete:"off",tabIndex:-1,ref:i};return p(p({},y),m)}var W=z(function(){return a.draggedFiles?a.draggedFiles.length:0}),H=z(function(){return W.value>0&&Ue({files:a.draggedFiles,accept:n.value.accept,minSize:n.value.minSize,maxSize:n.value.maxSize,multiple:n.value.multiple,maxFiles:n.value.maxFiles})}),ce=z(function(){return W.value>0&&!H.value});return p(p({},we(a)),{isDragAccept:H,isDragReject:ce,isFocused:z(function(){return a.isFocused&&!n.value.disabled}),getRootProps:le,getInputProps:fe,rootRef:r,inputRef:i,open:F(t)})}export{Ze as u};
