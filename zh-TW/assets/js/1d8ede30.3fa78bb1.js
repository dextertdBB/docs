"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u8a2d\u7f6e\u62b5\u62bc\u54c1\u5e63\u7a2e",sidebar_label:"\u8a2d\u7f6e\u62b5\u62bc\u54c1\u5e63\u7a2e",sidebar_position:4.5},o=void 0,i={unversionedId:"v5/account/set-collateral",id:"v5/account/set-collateral",title:"\u8a2d\u7f6e\u62b5\u62bc\u54c1\u5e63\u7a2e",description:"\u7528\u6236\u53ef\u4ee5\u81ea\u884c\u6c7a\u5b9a\u662f\u5426\u958b\u555f\u7d71\u4e00\u5e33\u6236\u4e2d\u5e63\u7a2e\u662f\u5426\u9032\u884c\u62b5\u62bc\uff0c\u9ed8\u8a8d\u90fd\u662f\u95dc\u9589\u7684",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/account/set-collateral.mdx",sourceDirName:"v5/account",slug:"/v5/account/set-collateral",permalink:"/docs/zh-TW/v5/account/set-collateral",draft:!1,tags:[],version:"current",sidebarPosition:4.5,frontMatter:{title:"\u8a2d\u7f6e\u62b5\u62bc\u54c1\u5e63\u7a2e",sidebar_label:"\u8a2d\u7f6e\u62b5\u62bc\u54c1\u5e63\u7a2e",sidebar_position:4.5},sidebar:"v5SideBar",previous:{title:"\u4e00\u9375\u9084\u6b3e",permalink:"/docs/zh-TW/v5/account/repay-liability"},next:{title:"\u6279\u91cf\u8a2d\u7f6e\u62b5\u62bc\u54c1\u5e63\u7a2e",permalink:"/docs/zh-TW/v5/account/batch-set-collateral"}},c={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=s("Button"),d=s("Tabs"),m=s("TabItem"),k={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u6236\u53ef\u4ee5\u81ea\u884c\u6c7a\u5b9a\u662f\u5426\u958b\u555f\u7d71\u4e00\u5e33\u6236\u4e2d\u5e63\u7a2e\u662f\u5426\u9032\u884c\u62b5\u62bc\uff0c\u9ed8\u8a8d\u90fd\u662f",(0,a.kt)("strong",{parentName:"p"},"\u95dc\u9589"),"\u7684"),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/account/set-collateral-switch")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u540d\u7a31 ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u60a8\u53ef\u4ee5\u5f9e",(0,a.kt)("a",{parentName:"td",href:"collateral-info"},"\u9019\u88e1"),"\u7372\u53d6\u62b5\u62bc\u54c1\u5e63\u7a2e"),(0,a.kt)("li",null,"USDT, USDC\u4e0d\u652f\u6301\u8a2d\u7f6e")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"collateralSwitch"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ON"),": \u958b\u555f\u62b5\u62bc, ",(0,a.kt)("inlineCode",{parentName:"td"},"OFF"),": \u95dc\u9589\u62b5\u62bc")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("a",{href:"/api-explorer/v5/account/set-collateral"},(0,a.kt)(u,{mdxType:"Button"},"\u904b\u884c\u5be6\u4f8b >>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(d,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(m,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/account/set-collateral-switch HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXXX\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1690513916181\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\nContent-Length: 55\n\n{\n    "coin": "BTC",\n    "collateralSwitch": "ON"\n}\n'))),(0,a.kt)(m,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.set_collateral_coin(\n    coin="BTC",\n    collateralSwitch="ON"\n))\n'))),(0,a.kt)(m,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n  testnet: true,\n  key: 'apikey',\n  secret: 'apisecret',\n});\n\nclient\n  .setCollateralCoin({\n    coin: 'BTC',\n    collateralSwitch: 'ON',\n  })\n  .then((response) => {\n    console.log(response);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "SUCCESS",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1690515818656\n}\n')))}f.isMDXComponent=!0}}]);