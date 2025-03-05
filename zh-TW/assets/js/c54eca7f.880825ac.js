"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4697],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(n),u=r,c=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(c,o(o({ref:e},m),{},{components:n})):a.createElement(c,o({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52315:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"Order Book (\u6df1\u5ea6)",sidebar_label:"Order Book (\u6df1\u5ea6)",sidebar_position:5},o=void 0,i={unversionedId:"v5/market/orderbook",id:"v5/market/orderbook",title:"Order Book (\u6df1\u5ea6)",description:"\u7372\u53d6\u6df1\u5ea6\u6578\u64da",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/market/orderbook.mdx",sourceDirName:"v5/market",slug:"/v5/market/orderbook",permalink:"/docs/zh-TW/v5/market/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Order Book (\u6df1\u5ea6)",sidebar_label:"Order Book (\u6df1\u5ea6)",sidebar_position:5},sidebar:"v5SideBar",previous:{title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",permalink:"/docs/zh-TW/v5/market/instrument"},next:{title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",permalink:"/docs/zh-TW/v5/market/tickers"}},p={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},k=m("Button"),s=m("Tabs"),u=m("TabItem"),c={toc:d};function b(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7372\u53d6\u6df1\u5ea6\u6578\u64da"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: \u73fe\u8ca8 / USDT\u6c38\u7e8c / USDT\u4ea4\u5272 / USDC\u6c38\u7e8c / USDC\u4ea4\u5272 / \u53cd\u5411\u5408\u7d04 / \u671f\u6b0a"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u671f\u8ca8: \u6700\u591a\u8fd4\u56de500\u6a94\u7684\u6578\u64da."),(0,r.kt)("li",{parentName:"ul"},"\u73fe\u8ca8: \u6700\u591a\u8fd4\u56de200\u6a94\u7684\u6578\u64da."),(0,r.kt)("li",{parentName:"ul"},"\u671f\u6b0a: \u50c5\u8fd4\u56de25\u6a94\u7684\u6578\u64da.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u97ff\u61c9\u662f\u7576\u524d\u6642\u9593\u7684\u5207\u7247\u6578\u64da")),(0,r.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/market/orderbook")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"spot"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6df1\u5ea6\u9650\u5236.",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"spot"),": ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"200"),"]",", \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"linear"),"&",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),": ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"500"),"]",",\u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"25"),"."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"option"),": ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"25"),"]",",\u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),".")))))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Bid, \u8cb7\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5927\u5230\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> b","[0]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u5831\u50f9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> b","[1]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u6578\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Ask, \u8ce3\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5c0f\u5230\u5927")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> a","[0]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u5831\u50f9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> a","[1]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u6578\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u6642\u9593\u6233\uff08\u6beb\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"u"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u6578\u64da\u9023\u7e8c\u6027\u7684id. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u5c0d\u65bc\u671f\u8ca8, \u5b83\u548cwss\u63a8\u9001\u88e1\u7684500\u6a94\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"u"),"\u5c0d\u9f4a"),(0,r.kt)("li",null,"\u5c0d\u65bc\u73fe\u8ca8, \u5b83\u548cwss\u63a8\u9001\u88e1\u7684200\u6a94\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"u"),"\u5c0d\u9f4a")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"seq"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64ae\u5408\u7248\u672c\u865f ",(0,r.kt)("li",null,"\u8a72\u5b57\u6bb5\u53ef\u4ee5\u7528\u65bc\u95dc\u806f\u4e0d\u540c\u6a94\u4f4d\u7684orderbook, \u5982\u679c\u503c\u8d8a\u5c0f, \u5247\u8aaa\u660e\u6578\u64da\u751f\u6210\u8d8a\u65e9"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u751f\u6b64\u8a02\u55ae\u7c3f\u6578\u64da\u6642\u4f86\u81ea\u64ae\u5408\u5f15\u64ce\u7684\u6642\u9593\u6233. \u53ef\u7528\u65bc\u8207",(0,r.kt)("a",{parentName:"td",href:"../websocket/public/trade#"},"\u5e73\u53f0\u6210\u4ea4"),"\u983b\u9053\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"T"),"\u9032\u884c\u95dc\u806f")))),(0,r.kt)("a",{href:"/api-explorer/v5/market/orderbook"},(0,r.kt)(k,{mdxType:"Button"},"\u904b\u884c\u5be6\u4f8b >>")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)(s,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.kt)(u,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/orderbook?category=spot&symbol=BTCUSDT HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(testnet=True)\nprint(session.get_orderbook(\n    category="linear",\n    symbol="BTCUSDT",\n))\n'))),(0,r.kt)(u,{value:"Go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    bybit "github.com/wuhewuhe/bybit.go.api"\n)\nclient := bybit.NewBybitHttpClient("", "", bybit.WithBaseURL(bybit.TESTNET))\nparams := map[string]interface{}{"category": "spot", "symbol": "BTCUSDT"}\nclient.NewUtaBybitServiceWithParams(params).GetOrderBookInfo(context.Background())\n'))),(0,r.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.bybit.api.client.domain.CategoryType;\nimport com.bybit.api.client.domain.market.*;\nimport com.bybit.api.client.domain.market.request.MarketDataRequest;\nimport com.bybit.api.client.service.BybitApiClientFactory;\nvar client = BybitApiClientFactory.newInstance().newAsyncMarketDataRestClient();\nvar orderbookRequest = MarketDataRequest.builder().category(CategoryType.SPOT).symbol("BTCUSDT").build();\nclient.getMarketOrderBook(orderbookRequest,System.out::println);\n'))),(0,r.kt)(u,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n    testnet: true,\n});\n\nclient\n    .getOrderbook({\n        category: 'linear',\n        symbol: 'BTCUSDT',\n    })\n    .then((response) => {\n        console.log(response);\n    })\n    .catch((error) => {\n        console.error(error);\n    });\n")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "s": "BTCUSDT",\n        "a": [\n            [\n                "65557.7",\n                "16.606555"\n            ]\n        ],\n        "b": [\n            [\n                "65485.47",\n                "47.081829"\n            ]\n        ],\n        "ts": 1716863719031,\n        "u": 230704,\n        "seq": 1432604333,\n        "cts": 1716863718905\n    },\n    "retExtInfo": {},\n    "time": 1716863719382\n}\n')))}b.isMDXComponent=!0}}]);