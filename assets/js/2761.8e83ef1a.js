(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2761],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},170:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(87462),o=n(67294),c=n(72389),a=n(86010),s=n(66412),l=n(35281),i=n(37016);const u="codeBlockContainer_Ckt0";function d(e){let{as:t,...n}=e;const c=(0,s.p)(),d=(0,i.QC)(c);return o.createElement(t,(0,r.Z)({},n,{style:d,className:(0,a.Z)(n.className,u,l.k.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function m(e){let{children:t,className:n}=e;return o.createElement(d,{as:"pre",tabIndex:0,className:(0,a.Z)(p.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:p.codeBlockLines},t))}var f=n(86668),g=n(85448),h=n(23746);const y="codeLine_lJS_",v="codeLineNumber_Tfdd",b="codeLineContent_feaV";function k(e){let{line:t,classNames:n,showLineNumbers:c,getLineProps:s,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,a.Z)(n,c&&y)}),u=t.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},l({token:e,key:t})))));return o.createElement("span",i,c?o.createElement(o.Fragment,null,o.createElement("span",{className:v}),o.createElement("span",{className:b},u)):o.createElement(o.Fragment,null,u,o.createElement("br",null)))}var E=n(95999);const w={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function L(e){let{code:t,className:n}=e;const[r,c]=(0,o.useState)(!1),s=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const c=document.getSelection();let a=!1;c.rangeCount>0&&(a=c.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}r.remove(),a&&(c.removeAllRanges(),c.addRange(a)),o&&o.focus()}(t),c(!0),s.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),o.createElement("button",{type:"button","aria-label":r?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,w.copyButton,r&&w.copyButtonCopied),onClick:l},o.createElement("span",{className:w.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:w.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:w.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const N="wordWrapButtonIcon_Bwma",B="wordWrapButtonEnabled_EoeP";function C(e){let{className:t,onClick:n,isEnabled:r}=e;const c=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,r&&B),"aria-label":c,title:c},o.createElement("svg",{className:N,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function j(e){let{children:t,className:n="",metastring:c,title:l,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:y,magicComments:v}}=(0,f.L)(),b=m??(0,i.Vo)(n)??y,E=(0,s.p)(),w=(0,g.F)(),N=(0,i.bc)(c)||l,{lineClassNames:B,code:j}=(0,i.nZ)(t,{metastring:c,language:b,magicComments:v}),O=u??(0,i.nt)(c);return o.createElement(d,{as:"div",className:(0,a.Z)(n,b&&!n.includes(`language-${b}`)&&`language-${b}`)},N&&o.createElement("div",{className:p.codeBlockTitle},N),o.createElement("div",{className:p.codeBlockContent},o.createElement(h.ZP,(0,r.Z)({},h.lG,{theme:E,code:j,language:b??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:c}=e;return o.createElement("pre",{tabIndex:0,ref:w.codeBlockRef,className:(0,a.Z)(t,p.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,a.Z)(p.codeBlockLines,O&&p.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(k,{key:t,line:e,getLineProps:r,getTokenProps:c,classNames:B[t],showLineNumbers:O})))))})),o.createElement("div",{className:p.buttonGroup},(w.isEnabled||w.isCodeScrollable)&&o.createElement(C,{className:p.codeButton,onClick:()=>w.toggle(),isEnabled:w.isEnabled}),o.createElement(L,{className:p.codeButton,code:j}))))}function O(e){let{children:t,...n}=e;const a=(0,c.Z)(),s=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof s?j:m;return o.createElement(l,(0,r.Z)({key:String(a)},n),s)}},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),o=n(86010);const c="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(c,a),hidden:n},t)}},85448:(e,t,n)=>{"use strict";n.d(t,{F:()=>s});var r=n(67294),o=n(902);const c={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,t){const[n,a]=(0,r.useState)(),s=(0,r.useCallback)((()=>{var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((()=>{s()}),[s]),function(e,t,n){void 0===n&&(n=c);const a=(0,o.zX)(t),s=(0,o.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,s),()=>t.disconnect()}),[e,a,s])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function s(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),c=(0,r.useRef)(null),s=(0,r.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),l=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return a(c,l),(0,r.useEffect)((()=>{l()}),[e,l]),(0,r.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:s}}},66412:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var r=n(92949),o=n(86668);function c(){const{prism:e}=(0,o.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,c=e.darkTheme||n;return"dark"===t?c:n}},96841:(e,t,n)=>{"use strict";n.d(t,{S:()=>l});var r=n(67294),o=n(86668);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function a(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>c(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function s(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function l(e){const t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:s}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let o=t;o<=n;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:c,maxHeadingLevel:s}),i=a(l,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}},37016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>m,Vo:()=>d,bc:()=>i,nZ:()=>p,nt:()=>u});var r=n(87594),o=n.n(r);const c=/title=(?<quote>["'])(?<title>.*?)\1/,a=/\{(?<range>[\d,-]+)\}/,s={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,t){const n=e.map((e=>{const{start:n,end:r}=s[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){var t;return(null==e||null==(t=e.match(c))?void 0:t.groups.title)??""}function u(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}function p(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:c,metastring:i}=t;if(i&&a.test(i)){const e=i.match(a).groups.range;if(0===c.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=c[0].className,r=o()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],t);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],t);case"html":return l(["js","jsBlock","html"],t);case"python":case"py":case"bash":return l(["bash"],t);case"markdown":case"md":return l(["html","jsx","bash"],t);default:return l(Object.keys(s),t)}}(r,c),d=n.split("\n"),p=Object.fromEntries(c.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(c.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),g=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let o=0;o<d.length;){const e=d[o].match(u);if(!e){o+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?p[m[t]].range+=`${o},`:f[t]?p[f[t]].start=o:g[t]&&(p[g[t]].range+=`${p[g[t]].start}-${o-1},`),d.splice(o,1)}n=d.join("\n");const h={};return Object.entries(p).forEach((e=>{let[t,{range:n}]=e;o()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}function m(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const c=t[r];c&&"string"==typeof o&&(n[c]=o)})),n}},39665:(e,t,n)=>{"use strict";n.d(t,{a:()=>c,b:()=>s});var r=n(67294);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):r.push(o)})),r}function c(e){return(0,r.useMemo)((()=>o(e)),[e])}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:c}=e;return(0,r.useMemo)((()=>a({toc:o(t),minHeadingLevel:n,maxHeadingLevel:c})),[t,n,c])}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,c]=t;if(r&&c){r=parseInt(r),c=parseInt(c);const e=r<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=r;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},23746:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f,lG:()=>a});var r=n(87410);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c=n(67294),a={Prism:r.Z,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,c=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(c.style=a.plain),void 0!==o&&(c.style=void 0!==c.style?l({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return c[n[0]];var a=r?{display:"inline-block"}:{},s=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[a].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,c=e.token,a=l({},m(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var c=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,c=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],c=0,a=0,s=[],l=[s];a>-1;){for(;(c=r[a]++)<o[a];){var p=void 0,m=t[a],f=n[a][c];if("string"==typeof f?(m=a>0?m:["plain"],p=f):(m=d(m,f.type),f.alias&&(m=d(m,f.alias)),p=f.content),"string"==typeof p){var g=p.split(i),h=g.length;s.push({types:m,content:g[0]});for(var y=1;y<h;y++)u(s),l.push(s=[]),s.push({types:m,content:g[y]})}else a++,t.push(m),n.push(p),r.push(0),o.push(p.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return u(s),l}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(c.Component)},34155:e=>{var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var s,l=[],i=!1,u=-1;function d(){i&&s&&(i=!1,s.length?l=s.concat(l):u=-1,l.length&&p())}function p(){if(!i){var e=a(d);i=!0;for(var t=l.length;t;){for(s=l,l=[];++u<t;)s&&s[u].run();u=-1,t=l.length}s=null,i=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||i||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);