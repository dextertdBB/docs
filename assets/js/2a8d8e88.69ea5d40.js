"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(f,p(p({ref:t},d),{},{components:a})):r.createElement(f,p({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Retrieve Data Export",sidebar_label:"Retrieve Data Export",sidebar_position:4,slug:"/tax/data-export"},p=void 0,i={unversionedId:"v3/tax/data-export",id:"v3/tax/data-export",title:"Retrieve Data Export",description:"Retrieve data export",source:"@site/docs/v3/tax/data-export.mdx",sourceDirName:"v3/tax",slug:"/tax/data-export",permalink:"/docs/tax/data-export",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Retrieve Data Export",sidebar_label:"Retrieve Data Export",sidebar_position:4,slug:"/tax/data-export"},sidebar:"v3SideBar",previous:{title:"Get Export Report Status",permalink:"/docs/tax/status"},next:{title:"Data Explanation",permalink:"/docs/tax/explain"}},o={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Sample Python Script",id:"sample-python-script",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Retrieve data export"),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/fht/compliance/tax/v3/private/url")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"queryId"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Report Request ID")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"URL of files (Basepath + Files). To shorten the time it takes to generate the report, it could generate multiple files. ",(0,n.kt)("em",{parentName:"td"},"Do take note of this and combine the several files using the same base path when requesting the data export"))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Convert S3 Files To CSV using python script")),(0,n.kt)("h3",{id:"sample-python-script"},"Sample Python Script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\nimport pandas as pd\nimport os\n\nclass Bases(object):\n    @staticmethod\n    def path_list(path):\n        """\n        :param path:\n        :return: list of file paths\n        """\n        file_list = []\n        if os.path.isdir(path):\n            print("it\'s a directory")\n            for root, dirs, files in os.walk(path):\n                for f in files:\n                    file = os.path.join(root, f)\n                    file_list.append(file)\n            return file_list\n        elif os.path.isfile(path):\n            print("it\'s a normal file")\n            return [path]\n\nclass pd_service(Bases):\n    def get_data(self, file_path):\n        """\n        Read s3 files, merge forms\n        :param file_path:\n        :return:\n        """\n        df_all = pd.DataFrame()\n        for paths in self.path_list(path=file_path):\n            df_all = pd.concat([df_all, pd.read_orc(paths)], axis=0)\n        print(\'Row number of tables\uff1a\', df_all[df_all.columns[1]].count())\n        print(df_all.columns.values)\n        df_all.sort_values("TradeTime", inplace=True)\n        df_all.to_csv("test_data_s3.csv", header=True, index=False)\n        print(df_all)\n        return df_all\n\nif __name__ == \'__main__\':\n    # file path\n    path = \'XXXX\'\n    test = pd_service()\n    test.get_data(file_path=path)\n')),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'POST /fht/compliance/tax/v3/private/url HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN-TYPE: 2\nX-BAPI-SIGN: xxxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671184057480\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{"queryId":"12312312415325325"}\n')),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "url": "{\\"Files\\":[\\"20221216/adfsf34234-8e87-4c72-bc70-dsa234234daf/_SUCCESS\\",\\"20221216/dafasdf34243-8e87-4c72-bc70-dafsd34234/part-00000-adfsd34-00bd-4fe9-9591-adfasr343-c000\\"],\\"Basepath\\":\\"https://prod-bybit-tax-api-1705-rz.s3.ap-southeast-1.amazonaws.com/\\"}"\n    },\n    "retExtInfo": {},\n    "time": 1671184057646\n}\n')))}u.isMDXComponent=!0}}]);