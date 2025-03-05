"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(r),d=a,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"Borrow",sidebar_label:"Borrow",sidebar_position:5},l=void 0,p={unversionedId:"v5/spot-margin-normal/borrow",id:"v5/spot-margin-normal/borrow",title:"Borrow",description:"Covers: Margin trade (Classic Account)",source:"@site/docs/v5/spot-margin-normal/borrow.mdx",sourceDirName:"v5/spot-margin-normal",slug:"/v5/spot-margin-normal/borrow",permalink:"/docs/v5/spot-margin-normal/borrow",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Borrow",sidebar_label:"Borrow",sidebar_position:5}},s={},i=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("Button"),c=m("Tabs"),d=m("TabItem"),g={toc:i};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Covers: Margin trade (Classic Account)"))),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/spot-cross-margin-trade/loan")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Coin name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"qty"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount to borrow")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transactId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Borrow transaction ID")))),(0,a.kt)("a",{href:"/api-explorer/v5/spot-margin-normal/borrow"},(0,a.kt)(u,{mdxType:"Button"},"RUN >>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(c,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(d,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/spot-cross-margin-trade/loan HTTP/1.1\nHost: api-testnet.bybit.com\nContent-Type: application/json\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1677751838628\nX-BAPI-RECV-WINDOW: 5000\nX-BAPI-SIGN: XXXXXX\nContent-Length: 38\n\n{\n    "coin": "ETH",\n    "qty": "10"\n}\n'))),(0,a.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.spot_margin_trade_normal_borrow(\n    coin="ETH",\n    qty="10",\n))\n')))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "transactId": "21005"\n    },\n    "retExtInfo": {},\n    "time": 1677751839688\n}\n')))}b.isMDXComponent=!0}}]);