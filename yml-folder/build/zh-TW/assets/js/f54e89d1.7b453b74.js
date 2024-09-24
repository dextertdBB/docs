"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2050],{18505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var s=r(87462),i=(r(67294),r(3905)),a=r(26389),n=(r(94891),r(74933)),d=(r(47507),r(24310),r(63303),r(75035),r(85162));const p={id:"inter-transfer-list",title:"Get Internal Transfer Records",description:"Get internal transfer records",sidebar_label:"Get Internal Transfer Records",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get internal transfer records",operationId:"inter-transfer-list",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"transferId",in:"query",description:"Transfer id",required:!1,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"status",in:"query",description:"Status",required:!1,schema:{type:"string",enum:["SUCCESS","PENDING","FAILED"]}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/transfer/query-inter-transfer-list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Internal Transfer Records",description:{content:"Get internal transfer records",type:"text/plain"},url:{path:["v5","asset","transfer","query-inter-transfer-list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Transfer id",type:"text/plain"},key:"transferId",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Status",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},o=void 0,m={unversionedId:"api-explorer/v5/asset/inter-transfer-list",id:"api-explorer/v5/asset/inter-transfer-list",title:"Get Internal Transfer Records",description:"Get internal transfer records",source:"@site/docs/api-explorer/v5/asset/inter-transfer-list.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/inter-transfer-list",permalink:"/docs/zh-TW/api-explorer/v5/asset/inter-transfer-list",draft:!1,tags:[],version:"current",frontMatter:{id:"inter-transfer-list",title:"Get Internal Transfer Records",description:"Get internal transfer records",sidebar_label:"Get Internal Transfer Records",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get internal transfer records",operationId:"inter-transfer-list",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"transferId",in:"query",description:"Transfer id",required:!1,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"status",in:"query",description:"Status",required:!1,schema:{type:"string",enum:["SUCCESS","PENDING","FAILED"]}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/transfer/query-inter-transfer-list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Internal Transfer Records",description:{content:"Get internal transfer records",type:"text/plain"},url:{path:["v5","asset","transfer","query-inter-transfer-list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Transfer id",type:"text/plain"},key:"transferId",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Status",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Create Internal Transfer",permalink:"/docs/zh-TW/api-explorer/v5/asset/create-inter-transfer"},next:{title:"Get Sub UID",permalink:"/docs/zh-TW/api-explorer/v5/asset/sub-uid-list"}},l={},c=[{value:"Get Internal Transfer Records",id:"get-internal-transfer-records",level:2}],u={toc:c};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-internal-transfer-records"},"Get Internal Transfer Records"),(0,i.kt)("p",null,"Get internal transfer records"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"transferId",in:"query",description:"Transfer id",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"status",in:"query",description:"Status",required:!1,schema:{type:"string",enum:["SUCCESS","PENDING","FAILED"]}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);