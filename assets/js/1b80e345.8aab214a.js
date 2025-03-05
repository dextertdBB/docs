"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6963],{17374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=r(87462),i=(r(67294),r(3905)),n=r(26389),s=(r(94891),r(74933)),p=(r(47507),r(24310),r(63303),r(75035),r(85162));const o={id:"repay-order",title:"Get Repayment Order Detail",description:"Get Repayment Order Detail",sidebar_label:"Get Repayment Order Detail",hide_title:!0,hide_table_of_contents:!0,api:{tags:["normal-margin-trade"],operationId:"repay-order",parameters:[{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Limit for data size per page. 1 - 500. Default\uff1a500",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},description:"Get Repayment Order Detail",method:"get",path:"/v5/spot-cross-margin-trade/repay-history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade (normal)"},postman:{name:"Get Repayment Order Detail",description:{type:"text/plain"},url:{path:["v5","spot-cross-margin-trade","repay-history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Limit for data size per page. 1 - 500. Default\uff1a500",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Please use normal mode account API KEY",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Please use normal mode account API SECRET",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/spot-margin-normal/bybit-open-api-v-5-explorer-spot-margin-trade-normal"},m=void 0,d={unversionedId:"api-explorer/v5/spot-margin-normal/repay-order",id:"api-explorer/v5/spot-margin-normal/repay-order",title:"Get Repayment Order Detail",description:"Get Repayment Order Detail",source:"@site/docs/api-explorer/v5/spot-margin-normal/repay-order.api.mdx",sourceDirName:"api-explorer/v5/spot-margin-normal",slug:"/api-explorer/v5/spot-margin-normal/repay-order",permalink:"/docs/api-explorer/v5/spot-margin-normal/repay-order",draft:!1,tags:[],version:"current",frontMatter:{id:"repay-order",title:"Get Repayment Order Detail",description:"Get Repayment Order Detail",sidebar_label:"Get Repayment Order Detail",hide_title:!0,hide_table_of_contents:!0,api:{tags:["normal-margin-trade"],operationId:"repay-order",parameters:[{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Limit for data size per page. 1 - 500. Default\uff1a500",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},description:"Get Repayment Order Detail",method:"get",path:"/v5/spot-cross-margin-trade/repay-history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade (normal)"},postman:{name:"Get Repayment Order Detail",description:{type:"text/plain"},url:{path:["v5","spot-cross-margin-trade","repay-history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Limit for data size per page. 1 - 500. Default\uff1a500",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Please use normal mode account API KEY",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Please use normal mode account API SECRET",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/spot-margin-normal/bybit-open-api-v-5-explorer-spot-margin-trade-normal"},sidebar:"apiExplorerSideBar",previous:{title:"Get Borrow Order Detail",permalink:"/docs/api-explorer/v5/spot-margin-normal/borrow-order"},next:{title:"Toggle Margin Trade",permalink:"/docs/api-explorer/v5/spot-margin-normal/switch-mode"}},l={},c=[{value:"Get Repayment Order Detail",id:"get-repayment-order-detail",level:2}],u={toc:c};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-repayment-order-detail"},"Get Repayment Order Detail"),(0,i.kt)("p",null,"Get Repayment Order Detail"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit for data size per page. 1 - 500. Default\uff1a500",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);