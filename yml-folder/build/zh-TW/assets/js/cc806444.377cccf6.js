"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[83922],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,m=s["".concat(u,".").concat(c)]||s[c]||k[c]||a;return n?l.createElement(m,o(o({ref:e},p),{},{components:n})):l.createElement(m,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},54278:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var l=n(87462),r=(n(67294),n(3905));const a={title:"\u5207\u63db\u5009\u4f4d\u6a21\u5f0f",sidebar_label:"\u5207\u63db\u5009\u4f4d\u6a21\u5f0f",sidebar_position:4,slug:"/derivatives/contract/position-mode"},o=void 0,i={unversionedId:"v3/derivatives/rest-contract/position/position-mode",id:"v3/derivatives/rest-contract/position/position-mode",title:"\u5207\u63db\u5009\u4f4d\u6a21\u5f0f",description:"\u8a72\u63a5\u53e3\u53ef\u4ee5\u5207\u63dbUSDT\u6c38\u7e8c\u548c\u53cd\u5411\u4ea4\u5272\u7684\u5009\u4f4d\u6a21\u5f0f\u3002\u55ae\u5009\u6a21\u5f0f\u4e0b\uff0c\u53ea\u80fd\u5728\u55ae\u65b9\u5411\u4e0b\u6301\u5009; \u96d9\u5009\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u540c\u6642\u5728\u5169\u500b\u65b9\u5411\u6301\u5009\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/position/position-mode.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/position-mode",permalink:"/docs/zh-TW/derivatives/contract/position-mode",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5207\u63db\u5009\u4f4d\u6a21\u5f0f",sidebar_label:"\u5207\u63db\u5009\u4f4d\u6a21\u5f0f",sidebar_position:4,slug:"/derivatives/contract/position-mode"}},u={},d=[{value:"\u8209\u4f8b",id:"\u8209\u4f8b",level:3},{value:"\u7576\u524d\u5408\u7d04\u55ae\u96d9\u5411\u6301\u5009\u5207\u63db\u80fd\u529b",id:"\u7576\u524d\u5408\u7d04\u55ae\u96d9\u5411\u6301\u5009\u5207\u63db\u80fd\u529b",level:3},{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],p={toc:d};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8a72\u63a5\u53e3\u53ef\u4ee5\u5207\u63db",(0,r.kt)("strong",{parentName:"p"},"USDT\u6c38\u7e8c"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u53cd\u5411\u4ea4\u5272"),"\u7684\u5009\u4f4d\u6a21\u5f0f\u3002\u55ae\u5009\u6a21\u5f0f\u4e0b\uff0c\u53ea\u80fd\u5728\u55ae\u65b9\u5411\u4e0b\u6301\u5009; \u96d9\u5009\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u540c\u6642\u5728\u5169\u500b\u65b9\u5411\u6301\u5009\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u751f\u6548\u7684\u512a\u5148\u7d1a\uff1asymbol \u914d\u7f6e > coin \u914d\u7f6e > \u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u7cfb\u7d71\u9ed8\u8a8d\u914d\u7f6e\uff1a\u55ae\u5411\u6301\u5009\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8acb\u6c42\u53c3\u6578\u4e2d\u662f\u6309\u7167coin\u7684\u914d\u7f6e\u53c3\u6578\uff08\u6b64coin=settleCoin\uff09\uff0c\u5247\u50c5\u5c0d\u8a72settleCoin\u4e0b\u7121\u6301\u5009\u7121\u59d4\u8a17\u55ae\u7684symbol\u9032\u884c\u6279\u91cf\u8a2d\u7f6e\uff0c\u4e26\u4e14\u672a\u4f86\u65b0\u4e0a\u7dda\u57fa\u65bc\u8a72settleCoin\u7684\u7d50\u7b97\u7684symol\u4e5f\u662f\u8a72\u6a21\u5f0f\u3002"))),(0,r.kt)("h3",{id:"\u8209\u4f8b"},"\u8209\u4f8b"),(0,r.kt)("table",{class:"custom_table"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null,"\u7cfb\u7d71\u9ed8\u8a8d"),(0,r.kt)("th",null,"coin"),(0,r.kt)("th",null,"symbol")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u521d\u59cb\u914d\u7f6e"),(0,r.kt)("td",null,"\u55ae\u5411\u6301\u5009"),(0,r.kt)("td",null,"\u672a\u8a2d\u7f6e\u904e"),(0,r.kt)("td",null,"\u672a\u8a2d\u7f6e\u904e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u751f\u6548\u7d50\u679c"),(0,r.kt)("td",{colspan:"3"},"\u6240\u6709USDT\u6b63\u5411\u4ea4\u6613\u5c0d\u90fd\u662f\u55ae\u5411\u6301\u5009")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"\u8b8a\u66f4 1")),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"BTCUSDT \u8a2d\u7f6e\u70ba\u96d9\u5411\u6301\u5009\u6a21\u5f0f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u751f\u6548\u7d50\u679c"),(0,r.kt)("td",{colspan:"3"},"\u7576\u524d\u4ea4\u6613\u5c0dBTCUSDT\u70ba\u96d9\u5411\u6301\u5009\uff0c\u5176\u4ed6\u4ea4\u6613\u5c0d\u90fd\u662f\u55ae\u5411\u6301\u5009\uff08\u7e7c\u627f\u7cfb\u7d71\u9ed8\u8a8d\u898f\u5247\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u65b0\u4e0a\u7dda\u4ea4\u6613\u5c0d ETHUSDT"),(0,r.kt)("td",{colspan:"3"},"\u65b0\u4e0a\u7dda\u7684ETHUSDT\u70ba\u55ae\u5411\u6301\u5009 \uff08\u7e7c\u627f\u7cfb\u7d71\u9ed8\u8a8d\u898f\u5247\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"\u8b8a\u66f4 2")),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"USDT \u8a2d\u7f6e\u70ba\u96d9\u5411\u6301\u5009"),(0,r.kt)("td",null,"-")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u751f\u6548\u7d50\u679c"),(0,r.kt)("td",{colspan:"3"},"\u7576\u524d\u6240\u6709\u672a\u6301\u5009\u672a\u6709\u8a02\u55ae\u7684\u4ea4\u6613\u5c0d\u90fd\u662f\u96d9\u5411\u6301\u5009\uff0c\u6709\u6301\u5009\u548c\u6709\u59d4\u8a17\u55ae\u7684\u4ea4\u6613\u5c0d\u4e0d\u505a\u8abf\u6574")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u65b0\u4e0a\u7dda\u4ea4\u6613\u5c0d SOLUSDT"),(0,r.kt)("td",{colspan:"3"},"\u65b0\u4e0a\u7dda\u7684SOLUSDT\u70ba\u96d9\u5411\u6301\u5009 (\u7e7c\u627fcoin\u898f\u5247)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"\u8b8a\u66f4 3")),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"ASXUSDT \u8a2d\u7f6e\u70ba\u55ae\u5411\u6301\u5009\u6a21\u5f0f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u751f\u6548\u7d50\u679c"),(0,r.kt)("td",{colspan:"3"},"AXSUSDT\u70ba\u55ae\u5411\u6301\u5009\u6a21\u5f0f\uff0c\u5176\u9918\u4ea4\u6613\u5c0d\u4e0d\u505a\u4efb\u4f55\u8b8a\u66f4\uff08\u7e7c\u627fcoin\u898f\u5247\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u65b0\u4e0a\u7dda\u4ea4\u6613\u5c0d BITUSDT"),(0,r.kt)("td",{colspan:"3"},"\u65b0\u4e0a\u7dda\u7684BITUSDT\u70ba\u96d9\u5411\u6301\u5009 (\u7e7c\u627fcoin\u898f\u5247)"))),(0,r.kt)("h3",{id:"\u7576\u524d\u5408\u7d04\u55ae\u96d9\u5411\u6301\u5009\u5207\u63db\u80fd\u529b"},"\u7576\u524d\u5408\u7d04\u55ae\u96d9\u5411\u6301\u5009\u5207\u63db\u80fd\u529b"),(0,r.kt)("table",{class:"custom_table"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null,"\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f"),(0,r.kt)("th",null,"\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"USDT\u6c38\u7e8c\u5408\u7d04"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u652f\u6301\u55ae\u96d9\u5411\u6301\u5009")),(0,r.kt)("td",null,"\u50c5\u652f\u6301\u55ae\u5411\u6301\u5009")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"USDC\u6c38\u7e8c\u5408\u7d04"),(0,r.kt)("td",null,"\u50c5\u652f\u6301\u55ae\u5411\u6301\u5009"),(0,r.kt)("td",null,"\u50c5\u652f\u6301\u55ae\u5411\u6301\u5009")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u53cd\u5411\u6c38\u7e8c\u5408\u7d04"),(0,r.kt)("td",null,"\u50c5\u652f\u6301\u55ae\u5411\u6301\u5009"),(0,r.kt)("td",null,"\u4e0d\u652f\u6301\u8a72\u6a21\u5f0f\u4e0b\u4ea4\u6613\u8a72\u5408\u7d04")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u53cd\u5411\u4ea4\u5272\u5408\u7d04"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u652f\u6301\u55ae\u96d9\u5411\u6301\u5009")),(0,r.kt)("td",null,"\u4e0d\u652f\u6301\u8a72\u6a21\u5f0f\u4e0b\u4ea4\u6613\u8a72\u5408\u7d04"))),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/position/switch-mode")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31. ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"coin"),"\u4e8c\u8005\u5fc5\u50b3\u4e00\u500b. ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),"\u512a\u5148\u7d1a\u66f4\u9ad8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#positionmode"},"mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6a21\u5f0f. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),": \u55ae\u5411\u6301\u5009. ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),": \u96d9\u5411\u6301\u5009")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("p",null,"\u7121"),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/position/switch-mode HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670848915553\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{\n    "symbol":"CHZUSDT",\n    "coin": null,\n    "mode": 0\n}\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1670848915768\n}\n')))}k.isMDXComponent=!0}}]);