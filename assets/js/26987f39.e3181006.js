"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||i[d]||o;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Get SMP Group ID",sidebar_label:"Get SMP Group ID",sidebar_position:9.5},p=void 0,l={unversionedId:"v5/account/smp-group",id:"v5/account/smp-group",title:"Get SMP Group ID",description:"Query the SMP group ID of self match prevention",source:"@site/docs/v5/account/smp-group.mdx",sourceDirName:"v5/account",slug:"/v5/account/smp-group",permalink:"/docs/v5/account/smp-group",draft:!1,tags:[],version:"current",sidebarPosition:9.5,frontMatter:{title:"Get SMP Group ID",sidebar_label:"Get SMP Group ID",sidebar_position:9.5},sidebar:"v5SideBar",previous:{title:"Get Transaction Log (Classic)",permalink:"/docs/v5/account/contract-transaction-log"},next:{title:"Set Margin Mode",permalink:"/docs/v5/account/set-margin-mode"}},s={},u=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},i=c("Tabs"),m=c("TabItem"),d={toc:u};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Query the SMP group ID of self match prevention"),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/account/smp-group")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"smpGroup"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Smp group ID. If the UID has no group, it is ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," by default")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(i,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(m,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/account/smp-group HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXXX\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1702363848192\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,a.kt)(m,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},""))),(0,a.kt)(m,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n  testnet: true,\n  key: 'apikey',\n  secret: 'apisecret',\n});\n\nclient\n  .getSMPGroup()\n  .then((response) => {\n    console.log(response);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "smpGroup": 0\n    },\n    "retExtInfo": {},\n    "time": 1702363848539\n}\n')))}g.isMDXComponent=!0}}]);