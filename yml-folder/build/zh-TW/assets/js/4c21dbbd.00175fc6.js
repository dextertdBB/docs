"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[61931],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=d(n),u=a,b=m["".concat(p,".").concat(u)]||m[u]||k[u]||l;return n?r.createElement(b,o(o({ref:e},s),{},{components:n})):r.createElement(b,o({ref:e},s))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4507:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6df1\u5ea6",sidebar_label:"\u6df1\u5ea6",sidebar_position:1,slug:"/derivatives/ws-public/orderbook"},o=void 0,i={unversionedId:"v3/derivatives/wss-public/orderbook",id:"v3/derivatives/wss-public/orderbook",title:"\u6df1\u5ea6",description:"\u8a02\u95b1\u4e0d\u540c\u6df1\u5ea6\u7684\u63a8\u9001",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/wss-public/orderbook.mdx",sourceDirName:"v3/derivatives/wss-public",slug:"/derivatives/ws-public/orderbook",permalink:"/docs/zh-TW/derivatives/ws-public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6df1\u5ea6",sidebar_label:"\u6df1\u5ea6",sidebar_position:1,slug:"/derivatives/ws-public/orderbook"}},p={},d=[{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8a02\u95b1\u793a\u4f8b",id:"\u8a02\u95b1\u793a\u4f8b",level:3},{value:"\u63a8\u9001\u793a\u4f8b",id:"\u63a8\u9001\u793a\u4f8b",level:3}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},k=s("Tabs"),m=s("TabItem"),u={toc:d};function b(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8a02\u95b1\u4e0d\u540c\u6df1\u5ea6\u7684\u63a8\u9001"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: \u6b63\u5411\u5408\u7d04, \u53cd\u5411\u5408\u7d04, \u671f\u6b0a"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u8a02\u95b1\u6210\u529f\u5f8c\uff0c\u6703\u7acb\u5373\u5f97\u5230\u4e00\u500b\u7576\u524d\u5feb\u7167\u5305\u7684\u63a8\u9001\u6d88\u606f."),(0,a.kt)("li",{parentName:"ul"},"websocket\u5c07\u6703\u7e7c\u7e8c\u63a8\u9001\u9019\u4e9b\u589e\u91cf\u6578\u64da. \u6536\u5230snapshot\u7684\u5831\u6587\uff0c\u5c31\u9700\u8981\u91cd\u7f6e\u672c\u5730\u7684orderbook."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"snapshot"),"=\u5168\u91cforderbook, ",(0,a.kt)("inlineCode",{parentName:"li"},"delta"),"=\u589e\u91cforderbook"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u56e0\u70baBybit\u670d\u52d9\u539f\u56e0\uff0c\u6703\u91cd\u65b0\u767c\u9001snapshot\u5831\u6587\uff0c\u8a72\u5831\u6587\u5df2\u4fdd\u8b49\u662f\u6700\u65b0\u4e14\u6e96\u78ba\u7684."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6b63\u5411\u5408\u7d04 & \u53cd\u5411\u5408\u7d04 1\u6a94\u6578\u64da: \u82e53\u79d2\u5167\u7121\u8b8a\u5316\uff0c\u5c07\u6703\u518d\u6b21\u63a8\u9001",(0,a.kt)("strong",{parentName:"p"},"snapshot"),"\u6578\u64da.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6b63\u5411\u5408\u7d04 & \u53cd\u5411\u5408\u7d04:"),(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.kt)("strong",{parentName:"li"},"10ms")),(0,a.kt)("li",{parentName:"ul"},"50 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.kt)("strong",{parentName:"li"},"20ms")),(0,a.kt)("li",{parentName:"ul"},"200 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.kt)("strong",{parentName:"li"},"100ms")),(0,a.kt)("li",{parentName:"ul"},"500 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.kt)("strong",{parentName:"li"},"100ms"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option:"),(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"25 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.kt)("strong",{parentName:"li"},"20ms"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"100 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.kt)("strong",{parentName:"li"},"100ms"),(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"orderbook.{depth}.{symbol}")," e.g., orderbook.1.BTCUSDT"),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6578\u64da\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"snapshot"),",",(0,a.kt)("inlineCode",{parentName:"td"},"delta"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid, \u8cb7\u65b9. ",(0,a.kt)("inlineCode",{parentName:"td"},"snapshot"),"\u6578\u64da\uff0c\u662f\u6309\u7167\u50f9\u683c\u5f9e\u5927\u5230\u5c0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> b","[0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u5831\u50f9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> b","[1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask, \u8ce3\u65b9. ",(0,a.kt)("inlineCode",{parentName:"td"},"snapshot"),"\u6578\u64da\uff0c\u662f\u6309\u7167\u50f9\u683c\u5f9e\u5c0f\u5230\u5927")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> a","[0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u5831\u50f9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> a","[1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"u"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},'\u66f4\u65b0id, \u4e00\u822c\u60c5\u6cc1\u4e0b\u8a72id\u662f\u9023\u7e8c\u7684\u3002\u5076\u723e\u6703\u56e0\u5f8c\u53f0\u7684\u91cd\u555f\u800c\u767c\u9001"u"=1\u7684\u5168\u91cf\u6578\u64da\uff0c\u63a5\u6536\u5230\u5f8c\u8acb\u8986\u84cb\u672c\u5730\u4fdd\u5b58\u7684orderbook')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"seq"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64ae\u5408\u7248\u672c\u865f")))),(0,a.kt)("h3",{id:"\u8a02\u95b1\u793a\u4f8b"},"\u8a02\u95b1\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n    "orderbook.50.BTCUSDT"\n    ],\n    "req_id": "test" // optional\n}\n')),(0,a.kt)("h3",{id:"\u63a8\u9001\u793a\u4f8b"},"\u63a8\u9001\u793a\u4f8b"),(0,a.kt)(k,{mdxType:"Tabs"},(0,a.kt)(m,{value:"orderbook-snapshot",label:"orderbook-snapshot",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "snapshot",\n    "ts": 1671179923028,\n    "data": {\n        "s": "BTCUSDT",\n        "b": [\n            [\n                "17440.00",\n                "40.833"\n            ],\n            [\n                "17439.50",\n                "0.513"\n            ],\n            ...\n            [\n                "17416.00",\n                "6.156"\n            ],\n            [\n                "17415.50",\n                "32.268"\n            ]\n    ],\n    "a": [\n        [\n            "17440.50",\n            "78.815"\n        ],\n        [\n            "17441.00",\n            "8.858"\n        ],\n        ...\n        [\n            "17464.50",\n            "4.901"\n        ],\n        [\n            "17465.00",\n            "5.744"\n        ]\n    ],\n    "u": 13079592,\n    "seq": 22520573250\n    }\n}\n'))),(0,a.kt)(m,{value:"orderbook-delta",label:"orderbook-delta",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "delta",\n    "ts": 1671179923046,\n    "data": {\n    "s": "BTCUSDT",\n    "b": [],\n    "a": [\n        [\n            "17440.50",\n            "78.857"\n        ],\n        [\n            "17442.00",\n            "1.510"\n        ]\n    ],\n    "u": 13079593,\n    "seq": 22520573262\n}\n}\n')))))}b.isMDXComponent=!0}}]);