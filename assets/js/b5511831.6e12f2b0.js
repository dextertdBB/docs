"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9438],{47807:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),s=a(26389),i=(a(94891),a(74933)),o=(a(47507),a(24310),a(63303),a(75035),a(85162));const p={id:"transferable-coin",title:"Get Transferable Coin",description:"Get transferable coins",sidebar_label:"Get Transferable Coin",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get transferable coins",operationId:"transferable-coin",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"fromAccountType",in:"query",description:"From account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT","OPTION","INVESTMENT","FUND"]}},{name:"toAccountType",in:"query",description:"To account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT","OPTION","INVESTMENT","FUND"]}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/transfer/query-transfer-coin-list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Transferable Coin",description:{content:"Get transferable coins",type:"text/plain"},url:{path:["v5","asset","transfer","query-transfer-coin-list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) From account type",type:"text/plain"},key:"fromAccountType",value:""},{disabled:!1,description:{content:"(Required) To account type",type:"text/plain"},key:"toAccountType",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},c=void 0,l={unversionedId:"api-explorer/v5/asset/transferable-coin",id:"api-explorer/v5/asset/transferable-coin",title:"Get Transferable Coin",description:"Get transferable coins",source:"@site/docs/api-explorer/v5/asset/transferable-coin.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/transferable-coin",permalink:"/docs/api-explorer/v5/asset/transferable-coin",draft:!1,tags:[],version:"current",frontMatter:{id:"transferable-coin",title:"Get Transferable Coin",description:"Get transferable coins",sidebar_label:"Get Transferable Coin",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get transferable coins",operationId:"transferable-coin",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"fromAccountType",in:"query",description:"From account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT","OPTION","INVESTMENT","FUND"]}},{name:"toAccountType",in:"query",description:"To account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT","OPTION","INVESTMENT","FUND"]}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/transfer/query-transfer-coin-list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Transferable Coin",description:{content:"Get transferable coins",type:"text/plain"},url:{path:["v5","asset","transfer","query-transfer-coin-list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) From account type",type:"text/plain"},key:"fromAccountType",value:""},{disabled:!1,description:{content:"(Required) To account type",type:"text/plain"},key:"toAccountType",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Single Coin Balance",permalink:"/docs/api-explorer/v5/asset/account-coin-balance"},next:{title:"Create Internal Transfer",permalink:"/docs/api-explorer/v5/asset/create-inter-transfer"}},d={},u=[{value:"Get Transferable Coin",id:"get-transferable-coin",level:2}],m={toc:u};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-transferable-coin"},"Get Transferable Coin"),(0,n.kt)("p",null,"Get transferable coins"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(i.Z,{className:"paramsItem",param:{name:"fromAccountType",in:"query",description:"From account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT","OPTION","INVESTMENT","FUND"]}},mdxType:"ParamsItem"}),(0,n.kt)(i.Z,{className:"paramsItem",param:{name:"toAccountType",in:"query",description:"To account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT","OPTION","INVESTMENT","FUND"]}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(i.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(i.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);