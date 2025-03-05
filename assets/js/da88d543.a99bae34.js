"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"Get Leveraged Token Market",sidebar_label:"Get Leveraged Token Market",sidebar_position:2},o=void 0,i={unversionedId:"v5/lt/leverage-token-reference",id:"v5/lt/leverage-token-reference",title:"Get Leveraged Token Market",description:"Get leverage token market information",source:"@site/docs/v5/lt/leverage-token-reference.mdx",sourceDirName:"v5/lt",slug:"/v5/lt/leverage-token-reference",permalink:"/docs/v5/lt/leverage-token-reference",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Get Leveraged Token Market",sidebar_label:"Get Leveraged Token Market",sidebar_position:2},sidebar:"v5SideBar",previous:{title:"Get Leverage Token Info",permalink:"/docs/v5/lt/leverage-token-info"},next:{title:"Purchase",permalink:"/docs/v5/lt/purchase"}},p={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("Button"),d=m("Tabs"),c=m("TabItem"),k={toc:s};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get leverage token market information"),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/spot-lever-token/reference")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ltCoin"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Abbreviation of the LT, such as BTC3L")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ltCoin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Abbreviation of the LT, such as BTC3L")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nav"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"net value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"navTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Update time for net asset value (in milliseconds and UTC time zone)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"circulation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Circulating supply in the secondary market")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"basket"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"basket")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"leverage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Real leverage calculated by last traded price")))),(0,a.kt)("a",{href:"/api-explorer/v5/lt/leverage-token-reference"},(0,a.kt)(u,{mdxType:"Button"},"RUN >>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(d,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(c,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/spot-lever-token/reference?ltCoin=BTC3S HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,a.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(testnet=True)\nprint(session.get_leveraged_token_market(\n    ltCoin="BTC3L",\n))\n')))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "basket": "-132.460000082171973364",\n        "circulation": "30097.901900052619091704",\n        "leverage": "-2.666924651755770729",\n        "ltCoin": "BTC3S",\n        "nav": "27.692082719770373048",\n        "navTime": "1672991679858"\n    },\n    "retExtInfo": {},\n    "time": 1672991679937\n}\n')))}g.isMDXComponent=!0}}]);