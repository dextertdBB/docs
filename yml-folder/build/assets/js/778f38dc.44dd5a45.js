"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[46039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Create Universal Transfer",sidebar_label:"Create Universal Transfer",sidebar_position:7,slug:"/account-asset/uni-transfer"},s=void 0,i={unversionedId:"v3/account-asset/transfer/uni-transfer",id:"v3/account-asset/transfer/uni-transfer",title:"Create Universal Transfer",description:"Create Universal Transfer",source:"@site/docs/v3/account-asset/transfer/uni-transfer.mdx",sourceDirName:"v3/account-asset/transfer",slug:"/account-asset/uni-transfer",permalink:"/docs/account-asset/uni-transfer",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Create Universal Transfer",sidebar_label:"Create Universal Transfer",sidebar_position:7,slug:"/account-asset/uni-transfer"}},o={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create Universal Transfer"),(0,a.kt)("p",null,"It allows to transfer funds between sub accounts, or master-sub account."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Can use master or sub acct api key to request ",(0,a.kt)("ul",null,(0,a.kt)("li",null,'To use sub acct api key, it must have "SubMemberTransferList" permission'),(0,a.kt)("li",null,"When use sub acct api key, it can only transfer to main account"))),(0,a.kt)("li",{parentName:"ul"},"If you encounter errorCode: ",(0,a.kt)("inlineCode",{parentName:"li"},"131228")," and msg: ",(0,a.kt)("inlineCode",{parentName:"li"},"your balance is not enough"),", please go to ",(0,a.kt)("a",{parentName:"li",href:"coin-balance#"},"Get Single Coin Balance")," to check transfer safe amount."),(0,a.kt)("li",{parentName:"ul"},"Currently, the funding wallet only supports outgoing transfers in cryptocurrency, not in fiat currency."))),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/transfer/universal-transfer")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UUID, which is unique across the platform")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"enum#coin"},"coin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Currency type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange to amount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"fromMemberId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"From UserID. ",(0,a.kt)("inlineCode",{parentName:"td"},"fromMemberId")," cannot be the same as ",(0,a.kt)("inlineCode",{parentName:"td"},"toMemberId"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"toMemberId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"To UserID. ",(0,a.kt)("inlineCode",{parentName:"td"},"fromMemberId")," cannot be the same as ",(0,a.kt)("inlineCode",{parentName:"td"},"toMemberId"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"enum#accounttype"},"fromAccountType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Account type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"enum#accounttype"},"toAccountType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Account type")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UUID, which is unique across the platform")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Transfer status ",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"STATUS_UNKNOWN")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"SUCCESS")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"PENDING")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"FAILED")))))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /asset/v3/private/transfer/universal-transfer HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671163372208\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\nContent-Length: 219\n\n{\n    "transferId": "42c0cfb0-6bca-c242-bc76-4e6df6cbcb06",\n    "coin": "USDT",\n    "amount": "10",\n    "fromMemberId":"111111",\n    "toMemberId":"222222",\n    "fromAccountType": "UNIFIED",\n    "toAccountType": "SPOT"\n}\n')),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "transferId": "42c0cfb0-6bca-c242-bc76-4e6df6cbcb06",\n        "status": "SUCCESS"\n    },\n    "retExtInfo": {},\n    "time": 1671163373537\n}\n')))}m.isMDXComponent=!0}}]);