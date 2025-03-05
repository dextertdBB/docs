"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7758],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(i,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80764:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Get Repayment Transaction History",sidebar_label:"Get Repayment Transaction History",sidebar_position:7},o=void 0,p={unversionedId:"v5/crypto-loan/repay-transaction",id:"v5/crypto-loan/repay-transaction",title:"Get Repayment Transaction History",description:"Query repaid transaction history",source:"@site/docs/v5/crypto-loan/repay-transaction.mdx",sourceDirName:"v5/crypto-loan",slug:"/v5/crypto-loan/repay-transaction",permalink:"/docs/v5/crypto-loan/repay-transaction",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Get Repayment Transaction History",sidebar_label:"Get Repayment Transaction History",sidebar_position:7},sidebar:"v5SideBar",previous:{title:"Get Unpaid Loan Orders",permalink:"/docs/v5/crypto-loan/unpaid-loan-order"},next:{title:"Get Completed Loan Order History",permalink:"/docs/v5/crypto-loan/completed-loan-order"}},i={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},d=m("Tabs"),u=m("TabItem"),c={toc:s};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Query repaid transaction history"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Permission: "Spot trade"')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Support querying last 6 months completed loan orders"),(0,r.kt)("li",{parentName:"ul"},"Only successful repayments can be queried"))),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/crypto-loan/repayment-history")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Loan order ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"repayId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Repayment tranaction ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"loanCurrency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Loan coin name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),"]",". Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cursor. Use the ",(0,r.kt)("inlineCode",{parentName:"td"},"nextPageCursor")," token from the response to retrieve the next page of the result set")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> collateralCurrency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Collateral coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> collateralReturn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned collateral amount by this repayment. No collateral returned if this transaction does not fully repay the debt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> loanCurrency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Loan coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> loanTerm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Loan term, ",(0,r.kt)("inlineCode",{parentName:"td"},"7"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"14"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"30"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"90"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"180")," days, keep ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," for flexible loan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Loan order ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> repayAmount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Repayment amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> repayId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Repayment transaction ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> repayStatus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Repayment status, ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),": success; ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),": processing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> repayTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Repay timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> repayType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Repayment type, ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),": repay by user; ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),": repay by liquidation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"td"},"cursor")," request parameter")))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(d,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.kt)(u,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/crypto-loan/repayment-history?repayId=1794271131730737664 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXXX\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1728633716794\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,r.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},""))),(0,r.kt)(u,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n  testnet: true,\n  key: 'apikey',\n  secret: 'apisecret',\n});\n\nclient\n  .getRepaymentHistory({ repayId: '1794271131730737664' })\n  .then((response) => {\n    console.log(response);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "request.success",\n    "result": {\n        "list": [\n            {\n                "collateralCurrency": "BTC",\n                "collateralReturn": "0",\n                "loanCurrency": "USDT",\n                "loanTerm": "",\n                "orderId": "1794267532472646144",\n                "repayAmount": "100",\n                "repayId": "1794271131730737664",\n                "repayStatus": 1,\n                "repayTime": "1728629786875",\n                "repayType": "1"\n            }\n        ],\n        "nextPageCursor": ""\n    },\n    "retExtInfo": {},\n    "time": 1728633717935\n}\n')))}k.isMDXComponent=!0}}]);