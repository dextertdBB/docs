"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(r),c=a,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={title:"Stake / Redeem",sidebar_label:"Stake / Redeem",sidebar_position:2},o=void 0,i={unversionedId:"v5/earn/create-order",id:"v5/earn/create-order",title:"Stake / Redeem",description:'API key needs "Earn" permission',source:"@site/docs/v5/earn/create-order.mdx",sourceDirName:"v5/earn",slug:"/v5/earn/create-order",permalink:"/docs/v5/earn/create-order",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Stake / Redeem",sidebar_label:"Stake / Redeem",sidebar_position:2},sidebar:"v5SideBar",previous:{title:"Get Product Info",permalink:"/docs/v5/earn/product-info"},next:{title:"Get Stake/Redeem Order History",permalink:"/docs/v5/earn/order-history"}},p={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=m("Tabs"),u=m("TabItem"),c={toc:d};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'API key needs "Earn" permission')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In times of high demand for loans in the market for a specific cryptocurrency, the redemption of the principal\nmay encounter delays and is expected to be processed within 48 hours. Once the redemption request is initiated,\nit cannot be canceled, and your principal will continue to earn interest until the process is completed.")),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/earn/place-order")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"category"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FlexibleSaving"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Remarks"),": this phase only supports flexible savings")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderType"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Stake"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Redeem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"accountType"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FUND"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"UNIFIED"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("li",null,"Stake amount needs to satisfy minStake and maxStake"),(0,a.kt)("li",null,"Both stake and redeem amount need to satify precision requirement"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Coin name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"productId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Customised order ID, used to prevent from replay",(0,a.kt)("li",null,"support up to 36 characters"),(0,a.kt)("li",null,"The same orderLinkId can't be used in 30 mins"))))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Order ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Order link ID")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(s,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(u,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/earn/place-order HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXXX\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1739936605822\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\nContent-Length: 190\n\n{\n    "category": "FlexibleSaving",\n    "orderType": "Redeem",\n    "accountType": "FUND",\n    "amount": "0.35",\n    "coin": "BTC",\n    "productId": "430",\n    "orderLinkId": "btc-earn-001"\n}\n'))),(0,a.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},""))),(0,a.kt)(u,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-n4js"},"")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {\n        "orderId": "0572b030-6a0b-423f-88c4-b6ce31c0c82d",\n        "orderLinkId": "btc-earn-001"\n    },\n    "retExtInfo": {},\n    "time": 1739936607117\n}\n')))}k.isMDXComponent=!0}}]);