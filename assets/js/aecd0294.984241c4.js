"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_label:"Upload Program",sidebar_position:5},i="Deploy smart contracts",l={unversionedId:"developing-contracts/deploy",id:"developing-contracts/deploy",title:"Deploy smart contracts",description:"Following the principles of Actor model for communication, creating a program is just one of the specific types of transactions that contain a WASM file as a payload.",source:"@site/docs/developing-contracts/deploy.md",sourceDirName:"developing-contracts",slug:"/developing-contracts/deploy",permalink:"/docs/developing-contracts/deploy",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/deploy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Upload Program",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Program Testing",permalink:"/docs/developing-contracts/testing"},next:{title:"Prerequisites",permalink:"/docs/examples/prerequisites"}},s={},p=[{value:"Program submit events",id:"program-submit-events",level:2},{value:"How to deploy",id:"how-to-deploy",level:2},{value:"Upload via Gear GUI",id:"upload-via-gear-gui",level:3},{value:"Via gear-js library",id:"via-gear-js-library",level:3},{value:"Via <code>gear-program</code>",id:"via-gear-program",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-smart-contracts"},"Deploy smart contracts"),(0,o.kt)("p",null,"Following the principles of Actor model for communication, creating a program is just one of the specific types of transactions that contain a WASM file as a payload."),(0,o.kt)("p",null,"Uploading a new program (smart-contract) to the blockchain takes place by calling the custom extrinsic ",(0,o.kt)("inlineCode",{parentName:"p"},"gear.uploadProgram(code, salt, initPayload, gasLimit, value)"),". Where:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"code: Bytes")," - binary WASM code."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"salt: Bytes")," - the random data that is added to the hashing process to force their uniqueness."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"initPayload: Bytes"),"- the init message payload that will be processed by the init() function during program initialization."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gasLimit: u64")," - is the amount of gas that users are willing to spend on processing the upload of a new program."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"value: u128")," - the value that will be transferred to a balance of the newly created account for the program."),(0,o.kt)("h2",{id:"program-submit-events"},"Program submit events"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: while extrinsics represent information from the outside world, events represent information from the chain. Extrinsics can trigger events.")),(0,o.kt)("p",null,"The extrinsic called to submit a program triggers a series of events. ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/events#gear-events-types"},"Learn more about events")),(0,o.kt)("h2",{id:"how-to-deploy"},"How to deploy"),(0,o.kt)("p",null,"There are several ways to deploy a program:"),(0,o.kt)("h3",{id:"upload-via-gear-gui"},"Upload via Gear GUI"),(0,o.kt)("p",null,"The easiest way to deploy the program is to use the \u201cUpload program\u201d option in the official website ",(0,o.kt)("a",{parentName:"p",href:"https://idea.gear-tech.io"},"idea.gear-tech.io"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:r(6580).Z,width:"3077",height:"1730"})),(0,o.kt)("h3",{id:"via-gear-js-library"},"Via gear-js library"),(0,o.kt)("p",null,"Gear-js library provides a simple and intuitive way to connect GEAR Component APIs, including interaction with programs. More details ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/getting-started"},"Gear API"),"."),(0,o.kt)("h3",{id:"via-gear-program"},"Via ",(0,o.kt)("inlineCode",{parentName:"h3"},"gear-program")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gear-program")," is the command line (CLI) utility for interacting with the blockchain network. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear-program"},"gear-program GitHub repo")," for details."))}d.isMDXComponent=!0},6580:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/idea-upload-b5c7b24d0e0f65ba59ecf94a306a7961.png"}}]);