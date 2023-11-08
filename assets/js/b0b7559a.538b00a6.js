"use strict";(self.webpackChunkhalcyon=self.webpackChunkhalcyon||[]).push([[18],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>h});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var p=n.createContext({}),u=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=u(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,p=a.parentName,l=o(a,["components","mdxType","originalType","parentName"]),c=u(t),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return t?n.createElement(h,s(s({ref:e},l),{},{components:t})):n.createElement(h,s({ref:e},l))}));function h(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=a,o[c]="string"==typeof a?a:r,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7284:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const i={slug:"/docs/pendaftaran",sidebar_position:2},s="Pendaftaran WhatsApp Gateway",o={unversionedId:"docs/pendaftaran",id:"docs/pendaftaran",title:"Pendaftaran WhatsApp Gateway",description:"Proses runutan pendaftaran API melalui :",source:"@site/docs/docs/pendaftaran.md",sourceDirName:"docs",slug:"/docs/pendaftaran",permalink:"/build/docs/pendaftaran",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/docs/pendaftaran",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Persiapan WhatsAuth gateway",permalink:"/build/docs/persiapan"},next:{title:"QR Code Login",permalink:"/build/docs/qr_login"}},p={},u=[],l={toc:u},c="wrapper";function m(a){let{components:e,...t}=a;return(0,r.kt)(c,(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pendaftaran-whatsapp-gateway"},"Pendaftaran WhatsApp Gateway"),(0,r.kt)("p",null,"Proses runutan pendaftaran API melalui :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Buka website ",(0,r.kt)("a",{parentName:"li",href:"https://wa.my.id"},"wa.my.id")," kemudian scan QR Code dengan menggunakan WhatsApp yang akan dijadikan API Gateway.Jika berhasil masuk akan mendapatkan token sementara yang berlaku 2 jam.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/b8689bbb-25f4-44fc-8356-231844e24a8f",alt:"image"}),"   "),(0,r.kt)("li",{parentName:"ol"},"Buka web ",(0,r.kt)("a",{parentName:"li",href:"https://wa.my.id/apidocs/"},"apidocs")," klik bagian Authorize dan masukkan token ke dalam kolom Value: dan klik Authorize",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/78d313a7-345f-40fe-9cf6-7cbf58fbba2e",alt:"image"}),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/54826caf-597a-4151-938c-bbb077b23741",alt:"image"}),"  "),(0,r.kt)("li",{parentName:"ol"},"Klik API signup, klik Try it out. Kemudian masukkan URL dan Secret dari WebHook yang sudah dibuat sebelumnya. Lihat respon, simpan baik baik token yang diterima, token tersebut berlaku selama 30 hari.\n",(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/fd89a320-3228-4cad-85d8-ecefd9a324e5",alt:"image"}),"  "),(0,r.kt)("li",{parentName:"ol"},"Daftarkan device pada bagian API device. Klik Try it out, kemudian masukkan token pada langkah sebelumnya. Ketika execute, maka akan ada notifikasi Pair Device pada handphone. Masukkan kode unik dari respon server field code ke WhatsApp pair device di handphone.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/c55f0c20-1586-4c54-a676-b0ffa9b73f17",alt:"image"}),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/a3e3bca7-d78e-4f74-a2fb-34ef850e91c3",alt:"WhatsApp Image 2023-11-07 at 01 07 50_3f9cbb85"}),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/9e44609e-321d-43f6-b760-6a8f038a7411",alt:"WhatsApp Image 2023-11-07 at 01 07 45_d9155096"}),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/249fab3a-7bba-4b50-b160-41cd6fa825db",alt:"WhatsApp Image 2023-11-07 at 01 07 39_e0a1d259"}),(0,r.kt)("br",{parentName:"li"}),"Tunggu beberapa menit hingga proses sinkronisasi WhatsApp selesai berjalan."),(0,r.kt)("li",{parentName:"ol"},"Mencoba mengirimkan notif pesan kepada nomor telepon tujuan. Buka API message klik Try it out, isi to,isgroup dan message. Ketika klik execute maka akan ada notif pesan ke nomor tujuan dari nomor Gateway yang didaftarkan.\n",(0,r.kt)("img",{parentName:"li",src:"https://github.com/whatsauth/whatsauth.github.io/assets/11188109/74d73883-2c91-4c22-a35c-1a4e2ef88977",alt:"image"}))))}m.isMDXComponent=!0}}]);