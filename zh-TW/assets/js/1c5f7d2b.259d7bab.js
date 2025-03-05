"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u5b50\u5e33\u6236UID\u5217\u8868 (\u9650\u5236)",sidebar_label:"\u67e5\u8a62\u5b50\u5e33\u6236UID\u5217\u8868 (\u9650\u5236)",sidebar_position:3},i=void 0,o={unversionedId:"v5/user/subuid-list",id:"v5/user/subuid-list",title:"\u67e5\u8a62\u5b50\u5e33\u6236UID\u5217\u8868 (\u9650\u5236)",description:"\u6700\u591a\u8fd4\u56de10000\u500b\u5b50\u5e33\u6236, \u9069\u5408\u5c11\u65bc1\u842c\u500b\u5b50\u5e33\u6236\u7684\u6bcd\u5e33\u6236\u8abf\u7528\u3002\u9700\u4f7f\u7528\u6bcd\u5e33\u6236\u7684API key\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/user/subuid-list.mdx",sourceDirName:"v5/user",slug:"/v5/user/subuid-list",permalink:"/docs/zh-TW/v5/user/subuid-list",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u67e5\u8a62\u5b50\u5e33\u6236UID\u5217\u8868 (\u9650\u5236)",sidebar_label:"\u67e5\u8a62\u5b50\u5e33\u6236UID\u5217\u8868 (\u9650\u5236)",sidebar_position:3},sidebar:"v5SideBar",previous:{title:"\u65b0\u5efa\u5b50\u5e33\u6236\u7684API Key",permalink:"/docs/zh-TW/v5/user/create-subuid-apikey"},next:{title:"\u67e5\u8a62\u5b50\u5e33\u6236UID\u5217\u8868 (\u7121\u9650\u5236)",permalink:"/docs/zh-TW/v5/user/page-subuid"}},u={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=s("Tabs"),m=s("TabItem"),c={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u591a\u8fd4\u56de10000\u500b\u5b50\u5e33\u6236, \u9069\u5408\u5c11\u65bc1\u842c\u500b\u5b50\u5e33\u6236\u7684\u6bcd\u5e33\u6236\u8abf\u7528\u3002\u9700\u4f7f\u7528",(0,a.kt)("b",null,"\u6bcd"),"\u5e33\u6236\u7684API key\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u8abf\u7528\u63a5\u53e3\u6642\uff0c\u4f7f\u7528\u7684API key\u81f3\u5c11\u9700\u8981\u64c1\u6709\u4ee5\u4e0b\u5176\u4e2d\u4e00\u7a2e\u6b0a\u9650"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'\u6bcdAPI key: "Account Transfer\uff08\u8cc7\u7522\u5e33\u6236\u5283\u8f49\uff09", "Subaccount Transfer\uff08\u6bcd\u5b50\u5e33\u6236\u5283\u8f49\uff09", "Withdrawal\uff08\u63d0\u5e63\uff09"'))),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/user/query-sub-members")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"subMembers"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> uid"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b50\u5e33\u6236userId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> username"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> memberType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"),": \u666e\u901a\u5b50\u5e33\u6236, ",(0,a.kt)("inlineCode",{parentName:"td"},"6"),": \u8a17\u7ba1\u5b50\u5e33\u6236")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e33\u6236\u72c0\u614b.",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"1"),": \u6b63\u5e38"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"2"),": \u767b\u9678\u5c01\u7981"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"4"),": \u51cd\u7d50 ")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> accountMode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e33\u6236\u6a21\u5f0f.",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"1"),": \u7d93\u5178\u5e33\u6236"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"2"),": UMA\u5e33\u6236"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"3"),": UTA\u5e33\u6236 ")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> remark"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5099\u8a3b")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(d,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(m,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/user/query-sub-members HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1676430318405\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,a.kt)(m,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.get_sub_uid())\n'))),(0,a.kt)(m,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n  testnet: true,\n  key: 'apikey',\n  secret: 'apisecret',\n});\n\nclient\n  .getSubUIDList()\n  .then((response) => {\n    console.log(response);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {\n        "subMembers": [\n            {\n                "uid": "53888001",\n                "username": "xxx001",\n                "memberType": 1,\n                "status": 1,\n                "remark": "test",\n                "accountMode": 1\n            },\n            {\n                "uid": "53888002",\n                "username": "xxx002",\n                "memberType": 6,\n                "status": 1,\n                "remark": "",\n                "accountMode": 3\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1676430319452\n}\n')))}k.isMDXComponent=!0}}]);