"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2446],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89904:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5f37\u5e73\u63a8\u9001(\u5ee2\u68c4)",sidebar_label:"\u5f37\u5e73\u63a8\u9001(\u5ee2\u68c4)",sidebar_position:9},i=void 0,o={unversionedId:"v5/websocket/public/liquidation",id:"v5/websocket/public/liquidation",title:"\u5f37\u5e73\u63a8\u9001(\u5ee2\u68c4)",description:"\u8a02\u95b1Bybit\u5e73\u53f0\u4e0a\u7684\u5f37\u5e73\u63a8\u9001, symbol\u7ef4\u5ea6\u6700\u591a1\u79d2\u63a8\u4e00\u6761\u7206\u4ed3\u6570\u636e",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/websocket/public/liquidation.mdx",sourceDirName:"v5/websocket/public",slug:"/v5/websocket/public/liquidation",permalink:"/docs/zh-TW/v5/websocket/public/liquidation",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u5f37\u5e73\u63a8\u9001(\u5ee2\u68c4)",sidebar_label:"\u5f37\u5e73\u63a8\u9001(\u5ee2\u68c4)",sidebar_position:9},sidebar:"v5SideBar",previous:{title:"ETP\u6700\u65b0\u6de8\u503c\u63a8\u9001",permalink:"/docs/zh-TW/v5/websocket/public/etp-nav"},next:{title:"\u6301\u5009",permalink:"/docs/zh-TW/v5/websocket/private/position"}},p={},d=[{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8a02\u95b1\u793a\u4f8b",id:"\u8a02\u95b1\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8a02\u95b1Bybit\u5e73\u53f0\u4e0a\u7684\u5f37\u5e73\u63a8\u9001, symbol\u7ef4\u5ea6\u6700\u591a1\u79d2\u63a8\u4e00\u6761\u7206\u4ed3\u6570\u636e"),(0,a.kt)("p",null,"\u63a8\u9001\u983b\u7387: ",(0,a.kt)("strong",{parentName:"p"},"1\u79d2")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"liquidation.{symbol}")," e.g., liquidation.BTCUSDT"),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6578\u64da\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"snapshot"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6578\u64da\u66f4\u65b0\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u88ab\u5e73\u7684\u5009\u4f4d\u65b9\u5411. ",(0,a.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,a.kt)("inlineCode",{parentName:"td"},"Sell")," ",(0,a.kt)("li",null,"\u5982\u679c\u60a8\u6536\u5230\u4e00\u689dBuy\u7684\u63a8\u9001\u66f4\u65b0, \u5247\u8868\u9762\u6709\u4e00\u500b\u591a\u5009\u88ab\u5f37\u5e73\u4e86"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7834\u7522\u50f9\u683c")))),(0,a.kt)("h3",{id:"\u8a02\u95b1\u793a\u4f8b"},"\u8a02\u95b1\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import WebSocket\nfrom time import sleep\nws = WebSocket(\n    testnet=True,\n    channel_type="linear",\n)\ndef handle_message(message):\n    print(message)\nws.liquidation_stream(\n    symbol="BTCUSDT",\n    callback=handle_message\n)\nwhile True:\n    sleep(1)\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "liquidation.BTCUSDT",\n    "type": "snapshot",\n    "ts": 1703485237953,\n    "data": {\n        "updatedTime": 1703485237953,\n        "symbol": "BTCUSDT",\n        "side": "Sell",\n        "size": "0.003",\n        "price": "43511.70"\n    }\n}\n')))}u.isMDXComponent=!0}}]);