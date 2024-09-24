"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[96276],{70963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(87462),s=(a(67294),a(3905)),i=a(26389),r=(a(94891),a(74933)),l=(a(47507),a(24310),a(63303),a(75035),a(85162));const o={id:"all-balance",title:"Get All Coins Balance",description:"Get All Coins Balance",sidebar_label:"Get All Coins Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get All Coins Balance",operationId:"all-balance",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"memberId",in:"query",description:"If query sub user balance, please input sub uid",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["SPOT","CONTRACT","UNIFIED","OPTION","INVESTMENT","FUND"]}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"withBonus",in:"query",description:"Query bonus or not. 0=false, 1=true",required:!1,schema:{type:"integer",enum:[0,1],default:0}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/transfer/query-account-coins-balance",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get All Coins Balance",description:{content:"Get All Coins Balance",type:"text/plain"},url:{path:["v5","asset","transfer","query-account-coins-balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"If query sub user balance, please input sub uid",type:"text/plain"},key:"memberId",value:""},{disabled:!1,description:{content:"(Required) Account type",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Query bonus or not. 0=false, 1=true",type:"text/plain"},key:"withBonus",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},p=void 0,c={unversionedId:"api-explorer/v5/asset/all-balance",id:"api-explorer/v5/asset/all-balance",title:"Get All Coins Balance",description:"Get All Coins Balance",source:"@site/docs/api-explorer/v5/asset/all-balance.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/all-balance",permalink:"/docs/zh-TW/api-explorer/v5/asset/all-balance",draft:!1,tags:[],version:"current",frontMatter:{id:"all-balance",title:"Get All Coins Balance",description:"Get All Coins Balance",sidebar_label:"Get All Coins Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get All Coins Balance",operationId:"all-balance",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"memberId",in:"query",description:"If query sub user balance, please input sub uid",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["SPOT","CONTRACT","UNIFIED","OPTION","INVESTMENT","FUND"]}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"withBonus",in:"query",description:"Query bonus or not. 0=false, 1=true",required:!1,schema:{type:"integer",enum:[0,1],default:0}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/transfer/query-account-coins-balance",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get All Coins Balance",description:{content:"Get All Coins Balance",type:"text/plain"},url:{path:["v5","asset","transfer","query-account-coins-balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"If query sub user balance, please input sub uid",type:"text/plain"},key:"memberId",value:""},{disabled:!1,description:{content:"(Required) Account type",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Query bonus or not. 0=false, 1=true",type:"text/plain"},key:"withBonus",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Asset Info (Spot)",permalink:"/docs/zh-TW/api-explorer/v5/asset/asset-info"},next:{title:"Get Single Coin Balance",permalink:"/docs/zh-TW/api-explorer/v5/asset/account-coin-balance"}},u={},d=[{value:"Get All Coins Balance",id:"get-all-coins-balance",level:2}],m={toc:d};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-all-coins-balance"},"Get All Coins Balance"),(0,s.kt)("p",null,"Get All Coins Balance"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"memberId",in:"query",description:"If query sub user balance, please input sub uid",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["SPOT","CONTRACT","UNIFIED","OPTION","INVESTMENT","FUND"]}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"withBonus",in:"query",description:"Query bonus or not. 0=false, 1=true",required:!1,schema:{type:"integer",enum:[0,1],default:0}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}y.isMDXComponent=!0}}]);