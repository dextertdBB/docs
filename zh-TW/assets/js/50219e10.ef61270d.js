"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7593],{60150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var o=a(87462),i=(a(67294),a(3905)),l=a(26389),r=a(94891),s=a(74933),n=(a(47507),a(24310)),c=(a(63303),a(75035),a(85162));const p={id:"set-collateral",title:"Set Collateral Coin",description:"Set collateral coin",sidebar_label:"Set Collateral Coin",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Set collateral coin",operationId:"set-collateral",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{coin:{type:"string",description:"coin",example:"BTC"},collateralSwitch:{type:"string",description:"coin",example:"ON",enum:["ON","OFF"]}},required:["coin","collateralSwitch"]}}}},method:"post",path:"/v5/account/set-collateral-switch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{coin:"BTC",collateralSwitch:"ON"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Set Collateral Coin",description:{content:"Set collateral coin",type:"text/plain"},url:{path:["v5","account","set-collateral-switch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},d=void 0,u={unversionedId:"api-explorer/v5/account/set-collateral",id:"api-explorer/v5/account/set-collateral",title:"Set Collateral Coin",description:"Set collateral coin",source:"@site/docs/api-explorer/v5/account/set-collateral.api.mdx",sourceDirName:"api-explorer/v5/account",slug:"/api-explorer/v5/account/set-collateral",permalink:"/docs/zh-TW/api-explorer/v5/account/set-collateral",draft:!1,tags:[],version:"current",frontMatter:{id:"set-collateral",title:"Set Collateral Coin",description:"Set collateral coin",sidebar_label:"Set Collateral Coin",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Set collateral coin",operationId:"set-collateral",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{coin:{type:"string",description:"coin",example:"BTC"},collateralSwitch:{type:"string",description:"coin",example:"ON",enum:["ON","OFF"]}},required:["coin","collateralSwitch"]}}}},method:"post",path:"/v5/account/set-collateral-switch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{coin:"BTC",collateralSwitch:"ON"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Set Collateral Coin",description:{content:"Set collateral coin",type:"text/plain"},url:{path:["v5","account","set-collateral-switch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Upgrade to Unified Account",permalink:"/docs/zh-TW/api-explorer/v5/account/upgrade-unified-account"},next:{title:"Get Borrow History",permalink:"/docs/zh-TW/api-explorer/v5/account/borrow-history"}},m={},y=[{value:"Set Collateral Coin",id:"set-collateral-coin",level:2}],b={toc:y};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-collateral-coin"},"Set Collateral Coin"),(0,i.kt)("p",null,"Set collateral coin"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"coin",required:!0,schemaDescription:"coin",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"collateralSwitch",required:!0,schemaDescription:"coin",schemaName:"string",qualifierMessage:"**Possible values:** [`ON`, `OFF`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}h.isMDXComponent=!0}}]);