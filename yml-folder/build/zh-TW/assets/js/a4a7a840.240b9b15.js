"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[39066],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=o(a),u=r,N=s["".concat(d,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},72365:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u4fee\u6539\u5b50\u5e33\u6236\u7684API Key\u8a2d\u7f6e",sidebar_label:"\u4fee\u6539\u5b50\u5e33\u6236\u7684API Key\u8a2d\u7f6e",sidebar_position:7},i=void 0,p={unversionedId:"v5/user/modify-sub-apikey",id:"v5/user/modify-sub-apikey",title:"\u4fee\u6539\u5b50\u5e33\u6236\u7684API Key\u8a2d\u7f6e",description:"\u4fee\u6539\u5b50\u5e33\u6236API key\u7684\u8a2d\u7f6e, \u652f\u6301\u6bcd\u5e33\u6236\u7ba1\u7406\u5b50\u5e33\u6236key\u7684\u8a2d\u7f6e, \u6216\u8005\u5b50\u5e33\u6236key\u76f4\u63a5\u4fee\u6539\u672c\u8eab\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/user/modify-sub-apikey.mdx",sourceDirName:"v5/user",slug:"/v5/user/modify-sub-apikey",permalink:"/docs/zh-TW/v5/user/modify-sub-apikey",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u4fee\u6539\u5b50\u5e33\u6236\u7684API Key\u8a2d\u7f6e",sidebar_label:"\u4fee\u6539\u5b50\u5e33\u6236\u7684API Key\u8a2d\u7f6e",sidebar_position:7},sidebar:"v5SideBar",previous:{title:"\u4fee\u6539\u6bcd\u5e33\u6236\u7684API Key\u8a2d\u7f6e",permalink:"/docs/zh-TW/v5/user/modify-master-apikey"},next:{title:"\u522a\u9664\u5b50\u5e33\u6236",permalink:"/docs/zh-TW/v5/user/rm-subuid"}},d={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},k=m("Tabs"),s=m("TabItem"),u={toc:o};function N(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4fee\u6539\u5b50\u5e33\u6236API key\u7684\u8a2d\u7f6e, \u652f\u6301\u6bcd\u5e33\u6236\u7ba1\u7406\u5b50\u5e33\u6236key\u7684\u8a2d\u7f6e, \u6216\u8005\u5b50\u5e33\u6236key\u76f4\u63a5\u4fee\u6539\u672c\u8eab\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u8abf\u7528\u63a5\u53e3\u6642\uff0c\u4f7f\u7528\u7684API key\u81f3\u5c11\u9700\u8981\u64c1\u6709\u4ee5\u4e0b\u5176\u4e2d\u4e00\u7a2e\u6b0a\u9650"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'\u5b50API key: "Account Transfer\uff08\u8cc7\u7522\u5e33\u6236\u5283\u8f49\uff09", "Subaccount Transfer\uff08\u6bcd\u5b50\u5e33\u6236\u5283\u8f49\uff09"'),(0,r.kt)("li",{parentName:"ul"},'\u6bcdAPI key: "Account Transfer\uff08\u8cc7\u7522\u5e33\u6236\u5283\u8f49\uff09", "Subaccount Transfer\uff08\u6bcd\u5b50\u5e33\u6236\u5283\u8f49\uff09", "Withdrawal\uff08\u63d0\u5e63\uff09"'))),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/user/update-sub-api")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"apikey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u5e33\u6236\u7684api key ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u7576\u60a8\u8981\u4f7f\u7528\u6bcd\u5e33\u6236\u4f86\u7ba1\u7406\u5b50\u5e33\u6236\u7684key\u6642, \u8a72\u5b57\u6bb5\u5fc5\u50b3"),(0,r.kt)("li",null,"\u5982\u679c\u60a8\u662f\u7528\u5c0d\u61c9\u7684\u5b50\u5e33\u6236api key\u4fee\u6539\u672c\u8eab, \u8a72\u5b57\u6bb5\u8acb\u4e0d\u8981\u50b3\u5165, \u5426\u5247\u5831\u932f")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," (\u9ed8\u8a8d)\uff1a\u53ef\u8b80\u53ef\u5beb. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u53ea\u8b80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ips"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'\u7d81\u5b9aIP. \u6bd4\u5982: "192.168.0.1,192.168.0.2"',(0,r.kt)("b",null,"\u6ce8\u610f:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4e0d\u50b3\u53c3\u6578ips \u6216\u8005\u5165\u53c2\u503c\u70ba",(0,r.kt)("inlineCode",{parentName:"td"},'"*"'),"\u610f\u5473\u8457\u4e0d\u7d81\u5b9a"),(0,r.kt)("li",null,"\u4e0d\u7d81\u5b9aIP\u7684api key\u5c07\u6709",(0,r.kt)("b",null,"90\u5929\u7684\u6709\u6548\u671f\u9650")),(0,r.kt)("li",null,"\u4e00\u65e6\u5e33\u6236\u5bc6\u78bc\u505a\u4e86\u4fee\u6539\uff0c\u5e33\u6236\u4e0b\u7684\u975e\u6c38\u4e45api key\u5c07\u5728",(0,r.kt)("b",null,"7\u5929\u5f8c\u5931\u6548"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"permissions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52fe\u9078api key\u6b0a\u9650. \u5982\u679c\u4e0d\u4fee\u6539\u6b0a\u9650, \u5247\u4e0d\u8981\u50b3\u5165\u8a72\u53c3\u6578")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ContractTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04. ",'["Order","Position"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Spot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u73fe\u8ca8. ",'["SpotTrade"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Wallet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305. ",'["AccountTransfer","SubMemberTransferList"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"USDC\u5408\u7d04. ",'["OptionsTrade"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Derivatives"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d71\u4e00\u5e33\u6236\u6b0a\u9650. \u8a72\u5b57\u6bb5\u5931\u6548, \u56e0\u70ba\u7cfb\u7d71\u5c07\u6703\u81ea\u52d5\u6839\u64da\u60a8\u7684\u5e33\u6236\u985e\u578b(\u7d93\u5178\u5e33\u6236\u548c\u7d71\u4e00\u5e33\u6236)\u4f86\u6c7a\u5b9a\u662f\u5426\u589e\u52a0\u8a72\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u514c\u63db. ",'["ExchangeHistory"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> CopyTrading"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ddf\u55ae\u4ea4\u6613. ",'["CopyTrading"]')))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00id. \u5167\u90e8\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"note"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5099\u8a3b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"apiKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"api key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1a\u53ef\u8b80\u53ef\u5beb. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u53ea\u8b80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7e3d\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"permissions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b0a\u9650\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ContractTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u4ea4\u6613\u7684\u6b0a\u9650e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Spot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u73fe\u8ca8\u4ea4\u6613\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Wallet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"USDC\u5408\u7d04\u7684\u6b0a\u9650. \u8a72\u6b0a\u9650\u652f\u6301USDC\u5408\u7d04\u4e0b\u7684\u671f\u6b0a\u548c\u6c38\u7e8c\u4ea4\u6613")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Derivatives"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d71\u4e00\u5e33\u6236\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> CopyTrading"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ddf\u55ae\u4ea4\u6613\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> BlockTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5927\u5b97\u4ea4\u6613\u7684\u6b0a\u9650. \u5b50\u5e33\u6236\u66ab\u4e0d\u652f\u6301\uff0c\u7e3d\u662f[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u514c\u63db\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> NFT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"NFT\u7684\u6b0a\u9650. \u5b50\u5e33\u6236\u66ab\u4e0d\u652f\u6301, \u7e3d\u662f[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ips"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"IP\u7d81\u5b9a")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)(k,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.kt)(s,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/user/update-sub-api HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXXX\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1676431795752\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "readOnly": 0,\n    "ips": "*",\n    "permissions": {\n            "ContractTrade": [],\n            "Spot": [\n                "SpotTrade"\n            ],\n            "Wallet": [\n                "AccountTransfer"\n            ],\n            "Options": [],\n            "CopyTrading": [],\n            "BlockTrade": [],\n            "Exchange": [],\n            "NFT": []\n        }\n}\n'))),(0,r.kt)(s,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.modify_sub_api_key(\n    readOnly=0,\n    ips=["*"],\n    permissions={\n            "ContractTrade": [],\n            "Spot": [\n                "SpotTrade"\n            ],\n            "Wallet": [\n                "AccountTransfer"\n            ],\n            "Options": [],\n            "Derivatives": [],\n            "CopyTrading": [],\n            "BlockTrade": [],\n            "Exchange": [],\n            "NFT": []\n        }\n))\n'))),(0,r.kt)(s,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n  testnet: true,\n  key: 'apikey',\n  secret: 'apisecret',\n});\n\nclient\n  .updateSubApiKey({\n    readOnly: 0,\n    ips: ['*'],\n    permissions: {\n      ContractTrade: [],\n      Spot: ['SpotTrade'],\n      Wallet: ['AccountTransfer'],\n      Options: [],\n      Derivatives: [],\n      CopyTrading: [],\n      BlockTrade: [],\n      Exchange: [],\n      NFT: [],\n    },\n  })\n  .then((response) => {\n    console.log(response);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {\n        "id": "16651472",\n        "note": "testxxx",\n        "apiKey": "xxxxxx",\n        "readOnly": 0,\n        "secret": "",\n        "permissions": {\n            "ContractTrade": [],\n            "Spot": [\n                "SpotTrade"\n            ],\n            "Wallet": [\n                "AccountTransfer"\n            ],\n            "Options": [],\n            "Derivatives": [],\n            "CopyTrading": [],\n            "BlockTrade": [],\n            "Exchange": [],\n            "NFT": []\n        },\n        "ips": [\n            "*"\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1676431796263\n}\n')))}N.isMDXComponent=!0}}]);