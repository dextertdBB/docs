"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2717],{3905:(t,l,e)=>{e.d(l,{Zo:()=>o,kt:()=>p});var n=e(67294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function a(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?a(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function d(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),u=function(t){var l=n.useContext(i),e=l;return t&&(e="function"==typeof t?t(l):k(k({},l),t)),e},o=function(t){var l=u(t.components);return n.createElement(i.Provider,{value:l},t.children)},s={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),c=u(e),p=r,m=c["".concat(i,".").concat(p)]||c[p]||s[p]||a;return e?n.createElement(m,k(k({ref:l},o),{},{components:e})):n.createElement(m,k({ref:l},o))}));function p(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var a=e.length,k=new Array(a);k[0]=c;var d={};for(var i in l)hasOwnProperty.call(l,i)&&(d[i]=l[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,k[1]=d;for(var u=2;u<a;u++)k[u]=e[u];return n.createElement.apply(null,k)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},50689:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>i,contentTitle:()=>k,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=e(87462),r=(e(67294),e(3905));const a={title:"Rate Limit",sidebar_label:"Rate Limit"},k=void 0,d={unversionedId:"v5/rate-limit",id:"v5/rate-limit",title:"Rate Limit",description:"IP Rate Limit",source:"@site/docs/v5/rate-limit.mdx",sourceDirName:"v5",slug:"/v5/rate-limit",permalink:"/docs/v5/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"Rate Limit",sidebar_label:"Rate Limit"},sidebar:"v5SideBar",previous:{title:"Websocket Trade Guideline",permalink:"/docs/v5/websocket/trade/guideline"},next:{title:"Enums Definitions",permalink:"/docs/v5/enum"}},i={},u=[{value:"IP Rate Limit",id:"ip-rate-limit",level:2},{value:"API Rate Limit",id:"api-rate-limit",level:2},{value:"API Rate Limit Table",id:"api-rate-limit-table",level:3},{value:"Trade",id:"trade",level:4},{value:"Position",id:"position",level:4},{value:"Account",id:"account",level:4},{value:"Asset",id:"asset",level:4},{value:"User",id:"user",level:4},{value:"Spot Leverage Token",id:"spot-leverage-token",level:4},{value:"Spot Margin Trade (UTA)",id:"spot-margin-trade-uta",level:4},{value:"API Rate Limit Rules For VIPs",id:"api-rate-limit-rules-for-vips",level:2},{value:"How to increase API Limit",id:"how-to-increase-api-limit",level:2}],o=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",l)},s=o("Tabs"),c=o("TabItem"),p={toc:u};function m(t){let{components:l,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,e,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ip-rate-limit"},"IP Rate Limit"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you receive an ",(0,r.kt)("strong",{parentName:"p"},"HTTP 403")," (Access Denied) response, your IP has been either temporarily or permanently banned.\n",(0,r.kt)("strong",{parentName:"p"},"You should immediately review the below guidelines to ensure your application does not continue to violate the limit."),"\nIf you are still banned after 30 minutes, you likely have a permanent ban.")),(0,r.kt)("p",null,"We do not recommend running your application at the very edge of these limits in case abnormal network activity results\nin an unexpected violation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," method (shared):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No more than 600 requests are allowed in any 5-second window.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All traffic to ",(0,r.kt)("inlineCode",{parentName:"p"},"api.bybit.com")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"api.bytick.com")," share this limit regardless of if it accesses Spot, Derivatives or Options.")),(0,r.kt)("p",null,"After violating the limit your IP will be banned for a set period of time (usually 30 minutes). Continually violating\nthe limit will result in a permanent ban. We cannot undo permanent bans or shorten temporary bans."),(0,r.kt)("h2",{id:"api-rate-limit"},"API Rate Limit"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you receive ",(0,r.kt)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"')," in the JSON response, you have hit the API rate limit.")),(0,r.kt)("p",null,"The API rate limit is based on the ",(0,r.kt)("strong",{parentName:"p"},"rolling time window per second and UID"),". In other words, it is per second per UID.\nEvery request to the API returns response header shown in the code panel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - your remaining requests for current endpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - your current limit for current endpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - the timestamp indicating when your request limit resets if you have exceeded your rate_limit. Otherwise, this is just the current timestamp (it may not exactly match ",(0,r.kt)("inlineCode",{parentName:"li"},"timeNow"),").")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Http Response Header Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,r.kt)("h3",{id:"api-rate-limit-table"},"API Rate Limit Table"),(0,r.kt)("h4",{id:"trade"},"Trade"),(0,r.kt)(s,{groupId:"account-type",mdxType:"Tabs"},(0,r.kt)(c,{value:"classic",label:"Classic account",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"Method"),(0,r.kt)("th",{rowSpan:"2"},"Path"),(0,r.kt)("th",{colSpan:"3",align:"center"},"Classic account"),(0,r.kt)("th",{rowSpan:"2"},"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"4"},"POST"),(0,r.kt)("td",null,"/v5/order/create"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/amend"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel-all"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"GET"),(0,r.kt)("td",null,"/v5/order/realtime"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/history"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/execution/list"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro-1.0",label:"UTA1.0 Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"Method"),(0,r.kt)("th",{rowSpan:"2"},"Path"),(0,r.kt)("th",{colSpan:"4",align:"center"},"UTA1.0 Pro"),(0,r.kt)("th",{rowSpan:"2"},"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"option"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"8"},"POST"),(0,r.kt)("td",null,"/v5/order/create"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/amend"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel-all"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"1/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/create-batch"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/amend-batch"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel-batch"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/disconnected-cancel-all"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{colSpan:"3",align:"center"},"5/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"4"},"GET"),(0,r.kt)("td",null,"/v5/order/realtime"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{colSpan:"3",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/history"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{colSpan:"3",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/execution/list"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{colSpan:"3",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/spot-borrow-check"),(0,r.kt)("td",{colSpan:"3",align:"center"},"-"),(0,r.kt)("td",{align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro-2.0",label:"UTA2.0 Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"Method"),(0,r.kt)("th",{rowSpan:"2"},"Path"),(0,r.kt)("th",{colSpan:"4",align:"center"},"UTA2.0 Pro"),(0,r.kt)("th",{rowSpan:"2"},"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"option"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"8"},"POST"),(0,r.kt)("td",null,"/v5/order/create"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/amend"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel-all"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"1/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/create-batch"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/amend-batch"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel-batch"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/disconnected-cancel-all"),(0,r.kt)("td",{colSpan:"4",align:"center"},"5/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"4"},"GET"),(0,r.kt)("td",null,"/v5/order/realtime"),(0,r.kt)("td",{colSpan:"4",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/history"),(0,r.kt)("td",{colSpan:"4",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/execution/list"),(0,r.kt)("td",{colSpan:"4",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/spot-borrow-check"),(0,r.kt)("td",{colSpan:"3",align:"center"},"-"),(0,r.kt)("td",{align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")))))),(0,r.kt)("h4",{id:"position"},"Position"),(0,r.kt)(s,{groupId:"account-type",mdxType:"Tabs"},(0,r.kt)(c,{value:"classic",label:"Classic account",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"Method"),(0,r.kt)("th",{rowSpan:"2"},"Path"),(0,r.kt)("th",{colSpan:"3",align:"center"},"Classic account"),(0,r.kt)("th",{rowSpan:"2"},"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"GET"),(0,r.kt)("td",null,"/v5/position/list"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/position/closed-pnl"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"POST"),(0,r.kt)("td",null,"/v5/position/set-leverage"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro-1.0",label:"UTA1.0 Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"Method"),(0,r.kt)("th",{rowSpan:"2"},"Path"),(0,r.kt)("th",{colSpan:"4",align:"center"},"UTA1.0 Pro"),(0,r.kt)("th",{rowSpan:"2"},"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"option"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"GET"),(0,r.kt)("td",null,"/v5/position/list"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{colSpan:"2",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/position/closed-pnl"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"POST"),(0,r.kt)("td",null,"/v5/position/set-leverage"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro-2.0",label:"UTA2.0 Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"Method"),(0,r.kt)("th",{rowSpan:"2"},"Path"),(0,r.kt)("th",{colSpan:"4",align:"center"},"UTA2.0 Pro"),(0,r.kt)("th",{rowSpan:"2"},"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"option"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"GET"),(0,r.kt)("td",null,"/v5/position/list"),(0,r.kt)("td",{colSpan:"3",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/position/closed-pnl"),(0,r.kt)("td",{colSpan:"2",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"POST"),(0,r.kt)("td",null,"/v5/position/set-leverage"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")))))),(0,r.kt)("h4",{id:"account"},"Account"),(0,r.kt)(s,{groupId:"account-type",mdxType:"Tabs"},(0,r.kt)(c,{value:"classic",label:"Classic account",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Method"),(0,r.kt)("th",null,"Path"),(0,r.kt)("th",null),(0,r.kt)("th",null,"Limit"),(0,r.kt)("th",null,"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"6"},"GET"),(0,r.kt)("td",null,"/v5/account/contract-transaction-log"),(0,r.kt)("td",null),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"/v5/account/wallet-balance"),(0,r.kt)("td",null,"accountType=SPOT"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"accountType=CONTRACT"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"/v5/account/fee-rate"),(0,r.kt)("td",null,"category=linear"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=spot"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=option"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro-1.0",label:"UTA1.0 Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Method"),(0,r.kt)("th",null,"Path"),(0,r.kt)("th",null),(0,r.kt)("th",null,"Limit"),(0,r.kt)("th",null,"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"10"},"GET"),(0,r.kt)("td",{rowSpan:"2"},"/v5/account/wallet-balance"),(0,r.kt)("td",null,"accountType=CONTRACT"),(0,r.kt)("td",{rowSpan:"2"},"50/s"),(0,r.kt)("td",{rowSpan:"2",align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"accountType=UNIFIED")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/withdrawal"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/borrow-history"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/collateral-info"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/coin-greeks"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/transaction-log"),(0,r.kt)("td",null,"accountType=UNIFIED"),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"/v5/account/fee-rate"),(0,r.kt)("td",null,"category=linear"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=spot"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=option"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro-2.0",label:"UTA2.0 Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Method"),(0,r.kt)("th",null,"Path"),(0,r.kt)("th",null),(0,r.kt)("th",null,"Limit"),(0,r.kt)("th",null,"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"10"},"GET"),(0,r.kt)("td",null,"/v5/account/wallet-balance"),(0,r.kt)("td",null,"accountType=UNIFIED"),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/withdrawal"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/borrow-history"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/collateral-info"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/coin-greeks"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/transaction-log"),(0,r.kt)("td",null,"accountType=UNIFIED"),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"/v5/account/fee-rate"),(0,r.kt)("td",null,"category=linear"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=spot"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=option"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N")))))),(0,r.kt)("h4",{id:"asset"},"Asset"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Method"),(0,r.kt)("th",null,"Path"),(0,r.kt)("th",null,"Limit"),(0,r.kt)("th",null,"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"13"},"GET"),(0,r.kt)("td",null,"/v5/asset/transfer/query-asset-info"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-transfer-coin-list"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-inter-transfer-list"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-sub-member-list"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-universal-transfer-list"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-account-coins-balance"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/deposit/query-record"),(0,r.kt)("td",null,"100 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/deposit/query-sub-member-record"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/deposit/query-address"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/deposit/query-sub-member-address"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/withdraw/query-record"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/coin/query-info"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/exchange/order-record"),(0,r.kt)("td",null,"600 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"5"},"POST"),(0,r.kt)("td",null,"/v5/asset/transfer/inter-transfer"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/save-transfer-sub-member"),(0,r.kt)("td",null,"20 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/universal-transfer"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/withdraw/create"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/withdraw/cancel"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")))),(0,r.kt)("h4",{id:"user"},"User"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Method"),(0,r.kt)("th",null,"Path"),(0,r.kt)("th",null,"Limit"),(0,r.kt)("td",null,"upgradable")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"7"},"POST"),(0,r.kt)("td",null,"v5/user/create-sub-member"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/create-sub-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/frozen-sub-member"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/update-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/update-sub-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/delete-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/delete-sub-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"GET"),(0,r.kt)("td",null,"/v5/user/query-sub-members"),(0,r.kt)("td",null,"10 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/query-api"),(0,r.kt)("td",null,"10 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/aff-customer-info"),(0,r.kt)("td",null,"10 req/s"),(0,r.kt)("td",null,"N")))),(0,r.kt)("h4",{id:"spot-leverage-token"},"Spot Leverage Token"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Limit"),(0,r.kt)("th",{parentName:"tr",align:null},"Upgradable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-lever-token/order-record"),(0,r.kt)("td",{parentName:"tr",align:null},"50 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-lever-token/purchase"),(0,r.kt)("td",{parentName:"tr",align:null},"20 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-lever-token/redeem"),(0,r.kt)("td",{parentName:"tr",align:null},"20 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N"))))),(0,r.kt)("h4",{id:"spot-margin-trade-uta"},"Spot Margin Trade (UTA)"),(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("td",null,"For now, there is no limit for endpoints under this category"))),(0,r.kt)("h2",{id:"api-rate-limit-rules-for-vips"},"API Rate Limit Rules For VIPs"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The values in the table represent the application upper limit of the corresponding level, and do not mean that users at\nthis level will automatically enjoy the corresponding API Rate Limit by default.")),(0,r.kt)("admonition",{title:"instructions for batch endpoints ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The batch order endpoint, which includes operations for creating, amending, and canceling, has its own rate limit and\ndoes not share it with single requests, ",(0,r.kt)("em",{parentName:"p"},"e.g., let's say the rate limit of single create order endpoint is 100/s, and batch create order endpoint\nis 100/s, so in this case, I can place 200 linear orders in one second if I use both endpoints to place orders")),(0,r.kt)("h4",{parentName:"admonition",id:"when-category--linear-spot-or-inverse"},"When category = linear spot or inverse"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API for batch create/amend/cancel order, the frequency of the API will be consistent with the current configuration,\nbut the counting consumption will be consumed according to the actual number of orders. (Number of consumption = number\nof requests * number of orders included in a single request), and the configuration of business lines is independent of each other.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The batch APIs allows 1-10 orders/request. For example, if a batch order request is made once and contains 5 orders,\nthen the request limit will consume 5.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If part of the last batch of orders requested within 1s exceeds the limit, the part that exceeds the limit will fail, and\nthe part that does not exceed the limit will succeed. For example, in the 1 second, the remaining limit is 5, but a batch request\ncontaining 8 orders is placed at this time, then the first 5 orders will be successfully placed, and the 6-8th orders\nwill report an error exceeding the limit, and these orders will fail.")))),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{class:"custom_table"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",{colSpan:"3",align:"center"},"Classic account & UTA"),(0,r.kt)("th",{colSpan:"3"},"UTA Pro")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Level\\Product"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Futures")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Option")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Spot")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Futures")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Option")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Spot"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Default"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",null,"20/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 1"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"25/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"25/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 2"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"30/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"30/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 3"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 4"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 5"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP Supreme"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO1"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",null,"150/s"),(0,r.kt)("td",null,"150/s"),(0,r.kt)("td",null,"150/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO2"),(0,r.kt)("td",null,"150/s"),(0,r.kt)("td",null,"150/s"),(0,r.kt)("td",null,"75/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO3"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"250/s"),(0,r.kt)("td",null,"250/s"),(0,r.kt)("td",null,"250/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO4"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO5"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO6"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s")))),(0,r.kt)("h2",{id:"how-to-increase-api-limit"},"How to increase API Limit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Institutional account will be automatically upgraded or downgraded according to the trading volume"),(0,r.kt)("li",{parentName:"ul"},"VIP account needs to contact your VIP relational manager to change the api rate limit")))}m.isMDXComponent=!0}}]);