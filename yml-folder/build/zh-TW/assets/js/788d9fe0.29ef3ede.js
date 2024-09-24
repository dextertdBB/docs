"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[64549],{95068:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>m,toc:()=>y});var o=t(87462),s=(t(67294),t(3905)),a=t(26389),n=t(94891),r=t(74933),p=(t(47507),t(24310)),d=(t(63303),t(75035),t(85162));const l={id:"position-mode",title:"Switch Position Mode",description:"Switch Position Mode",sidebar_label:"Switch Position Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Switch Position Mode",operationId:"position-mode",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type",enum:["linear","inverse"],example:"linear"},symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},coin:{type:"string",description:"Coin name",example:"USDT"},mode:{type:"integer",description:"Position mode. 0 - Merged single, 3 - Both sides",enum:[0,3],example:0}},required:["category","mode"]}}}},method:"post",path:"/v5/position/switch-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"ETHUSDT",coin:"USDT",mode:0},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Switch Position Mode",description:{content:"Switch Position Mode",type:"text/plain"},url:{path:["v5","position","switch-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},c=void 0,m={unversionedId:"api-explorer/v5/position/position-mode",id:"api-explorer/v5/position/position-mode",title:"Switch Position Mode",description:"Switch Position Mode",source:"@site/docs/api-explorer/v5/position/position-mode.api.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/position-mode",permalink:"/docs/zh-TW/api-explorer/v5/position/position-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"position-mode",title:"Switch Position Mode",description:"Switch Position Mode",sidebar_label:"Switch Position Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Switch Position Mode",operationId:"position-mode",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type",enum:["linear","inverse"],example:"linear"},symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},coin:{type:"string",description:"Coin name",example:"USDT"},mode:{type:"integer",description:"Position mode. 0 - Merged single, 3 - Both sides",enum:[0,3],example:0}},required:["category","mode"]}}}},method:"post",path:"/v5/position/switch-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"ETHUSDT",coin:"USDT",mode:0},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Switch Position Mode",description:{content:"Switch Position Mode",type:"text/plain"},url:{path:["v5","position","switch-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set TP/SL Mode",permalink:"/docs/zh-TW/api-explorer/v5/position/tpsl-mode"},next:{title:"Set Risk Limit",permalink:"/docs/zh-TW/api-explorer/v5/position/set-risk-limit"}},u={},y=[{value:"Switch Position Mode",id:"switch-position-mode",level:2}],h={toc:y};function v(e){let{components:i,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},h,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"switch-position-mode"},"Switch Position Mode"),(0,s.kt)("p",null,"Switch Position Mode"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `inverse`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"coin",required:!1,schemaDescription:"Coin name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"mode",required:!0,schemaDescription:"Position mode. 0 - Merged single, 3 - Both sides",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `3`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}v.isMDXComponent=!0}}]);