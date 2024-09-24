"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[30561],{11909:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var r=i(87462),a=(i(67294),i(3905)),n=i(26389),o=(i(94891),i(74933)),s=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"recent-trade",title:"Get Public Recent Trading History",description:"Get public trade",sidebar_label:"Get Public Recent Trading History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get public trade",operationId:"recent-trade",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"symbol",in:"query",description:"Symbol name.",required:!0,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. Valid for option. Default is BTC",required:!1,schema:{type:"string",default:"BTC"}},{name:"optionType",in:"query",description:"Option type. Valid for option.",required:!1,schema:{type:"string",enum:["Call","Put"]}},{name:"limit",in:"query",description:"Maximum 60 for spot. Maximum 1000 for others",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/recent-trade",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Public Recent Trading History",description:{content:"Get public trade",type:"text/plain"},url:{path:["v5","market","recent-trade"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name.",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. Valid for option. Default is BTC",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Option type. Valid for option.",type:"text/plain"},key:"optionType",value:""},{disabled:!1,description:{content:"Maximum 60 for spot. Maximum 1000 for others",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},l=void 0,d={unversionedId:"api-explorer/v5/market/recent-trade",id:"api-explorer/v5/market/recent-trade",title:"Get Public Recent Trading History",description:"Get public trade",source:"@site/docs/api-explorer/v5/market/recent-trade.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/recent-trade",permalink:"/docs/api-explorer/v5/market/recent-trade",draft:!1,tags:[],version:"current",frontMatter:{id:"recent-trade",title:"Get Public Recent Trading History",description:"Get public trade",sidebar_label:"Get Public Recent Trading History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get public trade",operationId:"recent-trade",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"symbol",in:"query",description:"Symbol name.",required:!0,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. Valid for option. Default is BTC",required:!1,schema:{type:"string",default:"BTC"}},{name:"optionType",in:"query",description:"Option type. Valid for option.",required:!1,schema:{type:"string",enum:["Call","Put"]}},{name:"limit",in:"query",description:"Maximum 60 for spot. Maximum 1000 for others",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/recent-trade",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Public Recent Trading History",description:{content:"Get public trade",type:"text/plain"},url:{path:["v5","market","recent-trade"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name.",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. Valid for option. Default is BTC",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Option type. Valid for option.",type:"text/plain"},key:"optionType",value:""},{disabled:!1,description:{content:"Maximum 60 for spot. Maximum 1000 for others",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Funding Rate History",permalink:"/docs/api-explorer/v5/market/history-fund-rate"},next:{title:"Get Open Interest",permalink:"/docs/api-explorer/v5/market/open-interest"}},m={},c=[{value:"Get Public Recent Trading History",id:"get-public-recent-trading-history",level:2}],u={toc:c};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-public-recent-trading-history"},"Get Public Recent Trading History"),(0,a.kt)("p",null,"Get public trade"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin. Valid for option. Default is BTC",required:!1,schema:{type:"string",default:"BTC"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"optionType",in:"query",description:"Option type. Valid for option.",required:!1,schema:{type:"string",enum:["Call","Put"]}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 60 for spot. Maximum 1000 for others",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);