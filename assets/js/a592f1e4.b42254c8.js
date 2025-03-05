"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4851],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>N});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=o(r),N=n,g=k["".concat(p,".").concat(N)]||k[N]||s[N]||l;return r?a.createElement(g,i(i({ref:e},m),{},{components:r})):a.createElement(g,i({ref:e},m))}));function N(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=k;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},83995:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"Get Order History",sidebar_label:"Get Order History (2 years)",sidebar_position:6},i=void 0,d={unversionedId:"v5/order/order-list",id:"v5/order/order-list",title:"Get Order History",description:"Query order history. As order creation/cancellation is asynchronous, the data returned from this endpoint may delay. If you want to get",source:"@site/docs/v5/order/order-list.mdx",sourceDirName:"v5/order",slug:"/v5/order/order-list",permalink:"/docs/v5/order/order-list",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Get Order History",sidebar_label:"Get Order History (2 years)",sidebar_position:6},sidebar:"v5SideBar",previous:{title:"Cancel All Orders",permalink:"/docs/v5/order/cancel-all"},next:{title:"Get Trade History (2 years)",permalink:"/docs/v5/order/execution"}},p={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},s=m("Button"),k=m("Tabs"),N=m("TabItem"),g={toc:o};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Query order history. As order creation/cancellation is ",(0,n.kt)("strong",{parentName:"p"},"asynchronous"),", the data returned from this endpoint may delay. If you want to get\nreal-time order information, you could query this ",(0,n.kt)("a",{parentName:"p",href:"open-order#"},"endpoint")," or rely on the ",(0,n.kt)("a",{parentName:"p",href:"../websocket/private/order"},"websocket stream")," (recommended)."),(0,n.kt)("admonition",{title:"rule",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The orders in the ",(0,n.kt)("strong",{parentName:"li"},"last 7 days"),":",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"li",href:"../acct-mode#uta-20"},"UTA2.0"),", ",(0,n.kt)("a",{parentName:"li",href:"../acct-mode#uta-10"},"UTA1.0"),"(except inverse) support querying all ",(0,n.kt)("a",{parentName:"li",href:"../enum#orderstatus"},"closed status"),' except "Cancelled", "Rejected", "Deactivated" status.',(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"li",href:"../acct-mode#uta-10"},"UTA1.0"),"(inverse) and classic account support querying all status (open and close status)"),(0,n.kt)("li",{parentName:"ul"},"The orders in the ",(0,n.kt)("strong",{parentName:"li"},"last 24 hours"),":",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"li",href:"../acct-mode#uta-20"},"UTA2.0"),", ",(0,n.kt)("a",{parentName:"li",href:"../acct-mode#uta-10"},"UTA1.0"),'(except inverse) for the orders with "Cancelled" (fully cancelled order), "Rejected", "Deactivated" can be query'),(0,n.kt)("li",{parentName:"ul"},"The orders ",(0,n.kt)("strong",{parentName:"li"},"beyond 7 days"),": ",(0,n.kt)("br",null),"All account supports querying orders which have fills only, i.e., fully filled, partial filled but cancelled orders"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../acct-mode#uta-20"},"UTA2.0"),", ",(0,n.kt)("a",{parentName:"li",href:"../acct-mode#uta-10"},"UTA1.0"),"(except inverse) support querying the past 2 years data."))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Classic Spot can get closed order status only, and Cancelled, Rejected, Deactivated orders save up to 7 days"))),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/v5/order/history")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type ",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{parentName:"td",href:"../acct-mode#uta-20"},"UTA2.0"),", ",(0,n.kt)("a",{parentName:"td",href:"../acct-mode#uta-10"},"UTA1.0"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"spot"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"option")),(0,n.kt)("li",null,"classic account: ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"spot"))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name, like ",(0,n.kt)("inlineCode",{parentName:"td"},"BTCUSDT"),", uppercase only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Base coin, uppercase only ",(0,n.kt)("li",null,(0,n.kt)("a",{parentName:"td",href:"../acct-mode#uta-10"},"UTA1.0"),"(inverse), classic account do ",(0,n.kt)("strong",{parentName:"td"},"not")," support this param"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"settleCoin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Settle coin, uppercase only",(0,n.kt)("li",null,(0,n.kt)("a",{parentName:"td",href:"../acct-mode#uta-10"},"UTA1.0"),"(inverse), classic account do ",(0,n.kt)("strong",{parentName:"td"},"not")," support this param"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Order"),": active order",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"StopOrder"),": conditional order for Futures and Spot",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"tpslOrder"),": spot TP/SL order",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"OcoOrder"),": spot OCO orders",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"BidirectionalTpslOrder"),": Spot bidirectional TPSL order ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"classic account ",(0,n.kt)("inlineCode",{parentName:"td"},"spot"),": return ",(0,n.kt)("inlineCode",{parentName:"td"},"Order")," active order by default"),(0,n.kt)("li",null,"Others: all kinds of orders by default")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"Classic ",(0,n.kt)("inlineCode",{parentName:"td"},"spot"),": not supported"),(0,n.kt)("li",null,(0,n.kt)("a",{parentName:"td",href:"../acct-mode#uta-20"},"UTA2.0"),", ",(0,n.kt)("a",{parentName:"td",href:"../acct-mode#uta-10"},"UTA1.0"),"(except inverse): return all ",(0,n.kt)("b",null,"closed")," status orders if not passed"),(0,n.kt)("li",null,(0,n.kt)("a",{parentName:"td",href:"../acct-mode#uta-10"},"UTA1.0"),"(inverse), classic account(linear, inverse): return all status orders if not passed")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)",(0,n.kt)("ul",null,(0,n.kt)("li",null,"startTime and endTime are not passed, return 7 days by default"),(0,n.kt)("li",null,"Only startTime is passed, return range between startTime and startTime+7 days"),(0,n.kt)("li",null,"Only endTime is passed, return range between endTime-7 days and endTime"),(0,n.kt)("li",null,"If both are passed, the rule is endTime - startTime <= 7 days")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"50"),"]",". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Use the ",(0,n.kt)("inlineCode",{parentName:"td"},"nextPageCursor")," token from the response to retrieve the next page of the result set")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> blockTradeId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Block trade ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order qty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Side. ",(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> isLeverage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to borrow. ",(0,n.kt)("strong",{parentName:"td"},"Unified ",(0,n.kt)("inlineCode",{parentName:"strong"},"spot"))," only. ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),": false, ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),": true. . ",(0,n.kt)("em",{parentName:"td"},"Classic ",(0,n.kt)("inlineCode",{parentName:"em"},"spot")," is not supported, always ",(0,n.kt)("inlineCode",{parentName:"em"},"0")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#positionidx"},"positionIdx")),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Position index. Used to identify positions in different position modes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#createtype"},"createType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order create type ",(0,n.kt)("li",null,"Only for category=linear or inverse"),(0,n.kt)("li",null,"Spot, Option do not have this key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#canceltype"},"cancelType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cancel type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#rejectreason"},"rejectReason")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Reject reason. ",(0,n.kt)("em",{parentName:"td"},"Classic ",(0,n.kt)("inlineCode",{parentName:"em"},"spot")," is not supported"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> avgPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Average filled price ",(0,n.kt)("li",null,"UTA: returns ",(0,n.kt)("inlineCode",{parentName:"td"},'""')," for those orders without avg price"),(0,n.kt)("li",null,"classic account: returns ",(0,n.kt)("inlineCode",{parentName:"td"},'"0"')," for those orders without avg price, and also for those orders have partilly filled but cancelled at the end"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leavesQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The remaining qty not executed. ",(0,n.kt)("em",{parentName:"td"},"Classic ",(0,n.kt)("inlineCode",{parentName:"em"},"spot")," is not supported"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leavesValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The estimated value not executed. ",(0,n.kt)("em",{parentName:"td"},"Classic ",(0,n.kt)("inlineCode",{parentName:"em"},"spot")," is not supported"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cumulative executed order qty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cumulative executed order value. ",(0,n.kt)("em",{parentName:"td"},"Classic ",(0,n.kt)("inlineCode",{parentName:"em"},"spot")," is not supported"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecFee"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cumulative executed trading fee. ",(0,n.kt)("em",{parentName:"td"},"Classic ",(0,n.kt)("inlineCode",{parentName:"em"},"spot")," is not supported"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in force")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#ordertype"},"orderType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order type. ",(0,n.kt)("inlineCode",{parentName:"td"},"Market"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Limit"),". For TP/SL order, it means the order type after triggered ",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"Block trade Roll Back"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Block trade-Limit"),": Unique enum values for Unified account block trades"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#stopordertype"},"stopOrderType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop order type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderIv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Implied volatility")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> marketUnit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The unit for ",(0,n.kt)("inlineCode",{parentName:"td"},"qty")," when create ",(0,n.kt)("strong",{parentName:"td"},"Spot market")," orders for ",(0,n.kt)("strong",{parentName:"td"},"UTA account"),". ",(0,n.kt)("inlineCode",{parentName:"td"},"baseCoin"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"quoteCoin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> slippageToleranceType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Spot and Futures market order slippage tolerance type ",(0,n.kt)("inlineCode",{parentName:"td"},"TickSize"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Percent"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"UNKNOWN"),"(default)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> slippageTolerance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Slippage tolerance value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trigger price. If ",(0,n.kt)("inlineCode",{parentName:"td"},"stopOrderType"),"=",(0,n.kt)("em",{parentName:"td"},"TrailingStop"),", it is activate price. Otherwise, it is trigger price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Take profit price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop loss price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> tpslMode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"TP/SL mode, ",(0,n.kt)("inlineCode",{parentName:"td"},"Full"),": entire position for TP/SL. ",(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),': partial position tp/sl. Spot does not have this field, and Option returns always ""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ocoTriggerBy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The trigger type of Spot OCO order.",(0,n.kt)("inlineCode",{parentName:"td"},"OcoTriggerByUnknown"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"OcoTriggerByTp"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"OcoTriggerBySl"),". ",(0,n.kt)("em",{parentName:"td"},"Classic ",(0,n.kt)("inlineCode",{parentName:"em"},"spot")," is not supported"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> tpLimitPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The limit order price when take profit price is triggered")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> slLimitPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The limit order price when stop loss price is triggered")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The price type to trigger take profit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The price type to trigger stop loss")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> triggerDirection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Trigger direction. ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),": rise, ",(0,n.kt)("inlineCode",{parentName:"td"},"2"),": fall")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"triggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The price type of trigger price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> lastPriceOnCreated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Last price when place the order, Spot is not applicable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> basePrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Last price when place the order, Spot has this field only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> reduceOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Reduce only. ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," means reduce position size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> closeOnTrigger"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Close on trigger. ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001050"},"What is a close on trigger order?"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> placeType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Place type, ",(0,n.kt)("inlineCode",{parentName:"td"},"option")," used. ",(0,n.kt)("inlineCode",{parentName:"td"},"iv"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"price"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#smptype"},"smpType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"SMP execution type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> smpGroup"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Smp group ID. If the UID has no group, it is ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," by default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> smpOrderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The counterparty's orderID which triggers this SMP execution")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order created timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order updated timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"td"},"cursor")," request parameter")))),(0,n.kt)("a",{href:"/api-explorer/v5/trade/order-list"},(0,n.kt)(s,{mdxType:"Button"},"RUN >>")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(k,{groupId:"programming-languages",mdxType:"Tabs"},(0,n.kt)(N,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/order/history?category=linear&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672221263407\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,n.kt)(N,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.get_order_history(\n    category="linear",\n    limit=1,\n))\n'))),(0,n.kt)(N,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import com.bybit.api.client.config.BybitApiConfig;\nimport com.bybit.api.client.domain.trade.request.TradeOrderRequest;\nimport com.bybit.api.client.domain.*;\nimport com.bybit.api.client.domain.trade.*;\nimport com.bybit.api.client.service.BybitApiClientFactory;\nvar client = BybitApiClientFactory.newInstance("YOUR_API_KEY", "YOUR_API_SECRET", BybitApiConfig.TESTNET_DOMAIN).newTradeRestClient();\nvar orderHistory = TradeOrderRequest.builder().category(CategoryType.LINEAR).limit(10).build();\nSystem.out.println(client.getOrderHistory(orderHistory));\n'))),(0,n.kt)(N,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n    testnet: true,\n    key: 'apikey',\n    secret: 'apisecret',\n});\n\nclient\n    .getHistoricOrders({\n        category: 'linear',\n        limit: 1,\n    })\n    .then((response) => {\n        console.log(response);\n    })\n    .catch((error) => {\n        console.error(error);\n    });\n")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "orderId": "14bad3a1-6454-43d8-bcf2-5345896cf74d",\n                "orderLinkId": "YLxaWKMiHU",\n                "blockTradeId": "",\n                "symbol": "BTCUSDT",\n                "price": "26864.40",\n                "qty": "0.003",\n                "side": "Buy",\n                "isLeverage": "",\n                "positionIdx": 1,\n                "orderStatus": "Cancelled",\n                "cancelType": "UNKNOWN",\n                "rejectReason": "EC_PostOnlyWillTakeLiquidity",\n                "avgPrice": "0",\n                "leavesQty": "0.000",\n                "leavesValue": "0",\n                "cumExecQty": "0.000",\n                "cumExecValue": "0",\n                "cumExecFee": "0",\n                "timeInForce": "PostOnly",\n                "orderType": "Limit",\n                "stopOrderType": "UNKNOWN",\n                "orderIv": "",\n                "triggerPrice": "0.00",\n                "takeProfit": "0.00",\n                "stopLoss": "0.00",\n                "tpTriggerBy": "UNKNOWN",\n                "slTriggerBy": "UNKNOWN",\n                "triggerDirection": 0,\n                "triggerBy": "UNKNOWN",\n                "lastPriceOnCreated": "0.00",\n                "reduceOnly": false,\n                "closeOnTrigger": false,\n                "smpType": "None",\n                "smpGroup": 0,\n                "smpOrderId": "",\n                "tpslMode": "",\n                "tpLimitPrice": "",\n                "slLimitPrice": "",\n                "placeType": "",\n                "slippageToleranceType": "UNKNOWN",\n                "slippageTolerance": "",\n                "createdTime": "1684476068369",\n                "updatedTime": "1684476068372"\n            }\n        ],\n        "nextPageCursor": "page_token%3D39380%26",\n        "category": "linear"\n    },\n    "retExtInfo": {},\n    "time": 1684766282976\n}\n')))}u.isMDXComponent=!0}}]);