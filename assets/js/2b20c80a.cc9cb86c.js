"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8023],{55551:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=i(87462),a=(i(67294),i(3905)),n=i(26389),s=(i(94891),i(74933)),o=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"execution",title:"Get Execution (2 years)",description:"Get execution list",sidebar_label:"Get Execution (2 years)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Get execution list",operationId:"execution",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","inverse","spot","option"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"},example:null},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"execType",in:"query",description:"Execution type",required:!1,schema:{type:"string",enum:["Trade","AdlTrade","Funding","BustTrade","Settle"]}},{name:"limit",in:"query",description:"1-100. max 100",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"cursor to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/execution/list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Get Execution (2 years)",description:{content:"Get execution list",type:"text/plain"},url:{path:["v5","execution","list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Execution type",type:"text/plain"},key:"execType",value:""},{disabled:!1,description:{content:"1-100. max 100",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},d=void 0,c={unversionedId:"api-explorer/v5/position/execution",id:"api-explorer/v5/position/execution",title:"Get Execution (2 years)",description:"Get execution list",source:"@site/docs/api-explorer/v5/position/execution.api.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/execution",permalink:"/docs/api-explorer/v5/position/execution",draft:!1,tags:[],version:"current",frontMatter:{id:"execution",title:"Get Execution (2 years)",description:"Get execution list",sidebar_label:"Get Execution (2 years)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Get execution list",operationId:"execution",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","inverse","spot","option"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"},example:null},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"execType",in:"query",description:"Execution type",required:!1,schema:{type:"string",enum:["Trade","AdlTrade","Funding","BustTrade","Settle"]}},{name:"limit",in:"query",description:"1-100. max 100",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"cursor to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/execution/list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Get Execution (2 years)",description:{content:"Get execution list",type:"text/plain"},url:{path:["v5","execution","list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Execution type",type:"text/plain"},key:"execType",value:""},{disabled:!1,description:{content:"1-100. max 100",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Add Or Reduce Margin",permalink:"/docs/api-explorer/v5/position/manual-add-margin"},next:{title:"Get Closed PnL",permalink:"/docs/api-explorer/v5/position/close-pnl"}},m={},u=[{value:"Get Execution (2 years)",id:"get-execution-2-years",level:2}],l={toc:u};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-execution-2-years"},"Get Execution (2 years)"),(0,a.kt)("p",null,"Get execution list"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","inverse","spot","option"]}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"},example:null},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderId",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"execType",in:"query",description:"Execution type",required:!1,schema:{type:"string",enum:["Trade","AdlTrade","Funding","BustTrade","Settle"]}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-100. max 100",required:!1,schema:{type:"integer",default:50}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);