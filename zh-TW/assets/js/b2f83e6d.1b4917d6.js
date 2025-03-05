"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9871],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),f=s(a),u=r,m=f["".concat(p,".").concat(u)]||f[u]||c[u]||l;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},28585:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u6578\u64da\u5c0e\u51fa",sidebar_label:"\u6578\u64da\u5c0e\u51fa",sidebar_position:4,slug:"/tax/data-export"},i=void 0,o={unversionedId:"v3/tax/data-export",id:"v3/tax/data-export",title:"\u6578\u64da\u5c0e\u51fa",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/tax/data-export.mdx",sourceDirName:"v3/tax",slug:"/tax/data-export",permalink:"/docs/zh-TW/tax/data-export",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u6578\u64da\u5c0e\u51fa",sidebar_label:"\u6578\u64da\u5c0e\u51fa",sidebar_position:4,slug:"/tax/data-export"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5831\u544a\u5c0e\u51fa\u72c0\u614b",permalink:"/docs/zh-TW/tax/status"},next:{title:"\u6578\u64da\u8aaa\u660e",permalink:"/docs/zh-TW/tax/explain"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"Python\u8173\u672c",id:"python\u8173\u672c",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:s};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/fht/compliance/tax/v3/private/url")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5831\u544a\u8acb\u6c42 ID")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u7684URL\u7db2\u5740 (Basepath+Files)\u3002\u70ba\u4e86\u7e2e\u77ed\u751f\u6210\u5831\u544a\u6240\u9700\u7684\u6642\u9593\uff0c\u5b83\u53ef\u4ee5\u751f\u6210\u591a\u500b\u6587\u4ef6\u3002",(0,r.kt)("em",{parentName:"td"},"\u8acb\u6ce8\u610f\u9019\u4e00\u9ede\uff0c\u4e26\u5728\u8acb\u6c42\u6578\u64da\u5c0e\u51fa\u6642\u4f7f\u7528\u76f8\u540c\u7684\u57fa\u672c\u8def\u5f91\u7d44\u5408\u591a\u500b\u6587\u4ef6"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528python\u5c07S3\u6587\u4ef6\u8f49\u63db\u70ba CSV\u7684\u793a\u4f8b")),(0,r.kt)("h3",{id:"python\u8173\u672c"},"Python\u8173\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nimport pandas as pd\nimport os\n\nclass Bases(object):\n    @staticmethod\n    def path_list(path):\n        """\n        :param path:\n        :return: list of file paths\n        """\n        file_list = []\n        if os.path.isdir(path):\n            print("it\'s a directory")\n            for root, dirs, files in os.walk(path):\n                for f in files:\n                    file = os.path.join(root, f)\n                    file_list.append(file)\n            return file_list\n        elif os.path.isfile(path):\n            print("it\'s a normal file")\n            return [path]\n\nclass pd_service(Bases):\n    def get_data(self, file_path):\n        """\n        Read s3 files, merge forms\n        :param file_path:\n        :return:\n        """\n        df_all = pd.DataFrame()\n        for paths in self.path_list(path=file_path):\n            df_all = pd.concat([df_all, pd.read_orc(paths)], axis=0)\n        print(\'Row number of tables\uff1a\', df_all[df_all.columns[1]].count())\n        print(df_all.columns.values)\n        df_all.sort_values("TradeTime", inplace=True)\n        df_all.to_csv("test_data_s3.csv", header=True, index=False)\n        print(df_all)\n        return df_all\n\nif __name__ == \'__main__\':\n    # file path\n    path = \'XXXX\'\n    test = pd_service()\n    test.get_data(file_path=path)\n')),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /fht/compliance/tax/v3/private/url HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN-TYPE: 2\nX-BAPI-SIGN: xxxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671184057480\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{"queryId":"12312312415325325"}\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "url": "{\\"Files\\":[\\"20221216/adfsf34234-8e87-4c72-bc70-dsa234234daf/_SUCCESS\\",\\"20221216/dafasdf34243-8e87-4c72-bc70-dafsd34234/part-00000-adfsd34-00bd-4fe9-9591-adfasr343-c000\\"],\\"Basepath\\":\\"https://prod-bybit-tax-api-1705-rz.s3.ap-southeast-1.amazonaws.com/\\"}"\n    },\n    "retExtInfo": {},\n    "time": 1671184057646\n}\n')))}c.isMDXComponent=!0}}]);