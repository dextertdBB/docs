"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[29538],{18264:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=i(87462),s=(i(67294),i(3905)),a=i(26389),n=(i(94891),i(74933)),o=(i(47507),i(24310),i(63303),i(75035),i(85162));const d={id:"deposit-record",title:"Get Deposit Record (on-chain)",description:"Get deposit record",sidebar_label:"Get Deposit Record (on-chain)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get deposit record",operationId:"deposit-record",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Deposit Record (on-chain)",description:{content:"Get deposit record",type:"text/plain"},url:{path:["v5","asset","deposit","query-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},p=void 0,c={unversionedId:"api-explorer/v5/asset/deposit-record",id:"api-explorer/v5/asset/deposit-record",title:"Get Deposit Record (on-chain)",description:"Get deposit record",source:"@site/docs/api-explorer/v5/asset/deposit-record.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/deposit-record",permalink:"/docs/api-explorer/v5/asset/deposit-record",draft:!1,tags:[],version:"current",frontMatter:{id:"deposit-record",title:"Get Deposit Record (on-chain)",description:"Get deposit record",sidebar_label:"Get Deposit Record (on-chain)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get deposit record",operationId:"deposit-record",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Deposit Record (on-chain)",description:{content:"Get deposit record",type:"text/plain"},url:{path:["v5","asset","deposit","query-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set Deposit Account",permalink:"/docs/api-explorer/v5/asset/set-deposit-acct"},next:{title:"Get Sub Account Deposit Records (on-chain)",permalink:"/docs/api-explorer/v5/asset/sub-deposit-record"}},m={},l=[{value:"Get Deposit Record (on-chain)",id:"get-deposit-record-on-chain",level:2}],u={toc:l};function y(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-deposit-record-on-chain"},"Get Deposit Record (on-chain)"),(0,s.kt)("p",null,"Get deposit record"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}y.isMDXComponent=!0}}]);