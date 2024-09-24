"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[21493],{99019:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var s=i(87462),r=(i(67294),i(3905)),a=i(26389),n=(i(94891),i(74933)),o=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"sub-deposit-record",title:"Get Sub Account Deposit Records (on-chain)",description:"Get sub account deposit record",sidebar_label:"Get Sub Account Deposit Records (on-chain)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get sub account deposit record",operationId:"sub-deposit-record",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"subMemberId",in:"query",description:"Sub UID",required:!0,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-sub-member-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Sub Account Deposit Records (on-chain)",description:{content:"Get sub account deposit record",type:"text/plain"},url:{path:["v5","asset","deposit","query-sub-member-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Sub UID",type:"text/plain"},key:"subMemberId",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},d=void 0,c={unversionedId:"api-explorer/v5/asset/sub-deposit-record",id:"api-explorer/v5/asset/sub-deposit-record",title:"Get Sub Account Deposit Records (on-chain)",description:"Get sub account deposit record",source:"@site/docs/api-explorer/v5/asset/sub-deposit-record.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/sub-deposit-record",permalink:"/docs/api-explorer/v5/asset/sub-deposit-record",draft:!1,tags:[],version:"current",frontMatter:{id:"sub-deposit-record",title:"Get Sub Account Deposit Records (on-chain)",description:"Get sub account deposit record",sidebar_label:"Get Sub Account Deposit Records (on-chain)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get sub account deposit record",operationId:"sub-deposit-record",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"subMemberId",in:"query",description:"Sub UID",required:!0,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-sub-member-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Sub Account Deposit Records (on-chain)",description:{content:"Get sub account deposit record",type:"text/plain"},url:{path:["v5","asset","deposit","query-sub-member-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Sub UID",type:"text/plain"},key:"subMemberId",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Deposit Record (on-chain)",permalink:"/docs/api-explorer/v5/asset/deposit-record"},next:{title:"Get Internal Deposit Records (off-chain)",permalink:"/docs/api-explorer/v5/asset/internal-deposit-record"}},m={},u=[{value:"Get Sub Account Deposit Records (on-chain)",id:"get-sub-account-deposit-records-on-chain",level:2}],l={toc:u};function y(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-sub-account-deposit-records-on-chain"},"Get Sub Account Deposit Records (on-chain)"),(0,r.kt)("p",null,"Get sub account deposit record"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"subMemberId",in:"query",description:"Sub UID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}y.isMDXComponent=!0}}]);