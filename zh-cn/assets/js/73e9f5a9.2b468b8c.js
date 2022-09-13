"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,sidebar_label:"\u5f00\u59cb"},i="Getting started",s={unversionedId:"api/getting-started",id:"api/getting-started",title:"Getting started",description:"Gear-JS API",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/getting-started.mdx",sourceDirName:"api",slug:"/api/getting-started",permalink:"/zh-cn/docs/api/getting-started",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u5f00\u59cb"},sidebar:"tutorialSidebar",previous:{title:"NFT pixelboard",permalink:"/zh-cn/docs/examples/nft-pixelboard"},next:{title:"Keyring",permalink:"/zh-cn/docs/api/keyring"}},p={},c=[{value:"Gear-JS API",id:"gear-js-api",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("h2",{id:"gear-js-api"},"Gear-JS API"),(0,r.kt)("p",null,"Gear-JS API \u63d0\u4f9b\u4e86\u4e00\u7ec4\u5b9e\u7528\u7a0b\u5e8f\u3001\u5e93\u548c\u5de5\u5177\uff0c\u4f7f JavaScript \u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u901a\u8fc7\u5bf9 Gear \u8282\u70b9\u7684\u67e5\u8be2\u4e0e\u5728 Gear \u7f51\u7edc\u4e2d\u8fd0\u884c\u7684\u667a\u80fd\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u90e8\u5206\u63cf\u8ff0\u4e86\u4f60\u53ef\u4ee5\u5728 JS \u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u5de5\u5177\u6765\u5b9e\u73b0\u57fa\u672c\u529f\u80fd\uff0c\u4f8b\u5982\u7ba1\u7406\u5bc6\u94a5\u5bf9\uff08\u5e10\u6237\uff09\u3001\u8ba1\u7b97\u7f51\u7edc\u64cd\u4f5c\u6240\u9700\u7684gas\u3001\u5728\u7f51\u7edc\u4e2d\u4e0a\u4f20\u7a0b\u5e8f\u3001\u5411\u7a0b\u5e8f\u53d1\u9001\u6d88\u606f\u3001\u8bfb\u53d6\u7a0b\u5e8f\u7684\u72b6\u6001\u3001 \u4ece mailbox \u4e2d\u83b7\u53d6\u6d88\u606f\uff0c\u4f7f\u7528\u5143\u6570\u636e\u7b49\u7b49\u3002 Cookbook \u90e8\u5206\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u4ee3\u7801\u7247\u6bb5\u3002"),(0,r.kt)("p",null,"\u57fa\u672c\u7684API\u662f\u5728Substrate\u5c42\u5b9e\u73b0\u7684\uff0c\u5bf9\u6240\u6709\u57fa\u4e8eSubstrate\u7684\u7f51\u7edc\u90fd\u662f\u4e00\u6837\u7684\u3002Gear-JS\u7684API\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear-js"},"GitHub"),"\u4e0a\u627e\u5230\u3002\u5b8c\u6574\u7684API\u6982\u8ff0\u53ef\u4ee5\u5728","[Polkadot \u6587\u6863]","\uff08",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/%EF%BC%89%E4%B8%8A%E6%89%BE%E5%88%B0%E3%80%82"},"https://polkadot.js.org/docs/\uff09\u4e0a\u627e\u5230\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @gear-js/api\n")),(0,r.kt)("p",null,"\u6216\u8005"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @gear-js/api\n")),(0,r.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,r.kt)("p",null,"\u4f7f\u7528 API \u8fde\u63a5\u672c\u5730\u8282\u70b9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GearApi } from '@gear-js/api';\n\nconst gearApi = await GearApi.create();\n")),(0,r.kt)("p",null,"\u6216\u8005\u8fde\u63a5\u4e0d\u540c\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const gearApi = await GearApi.create({\n  providerAddress: 'wss://someIP:somePort',\n});\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u662f\u4e0eGear RPC\u8282\u70b9\u51e0\u4e2a\u5165\u53e3\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8fde\u63a5\u672c\u5730\u8282\u70b9\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ws://127.0.0.1:9944\n")),(0,r.kt)("p",{parentName:"admonition"},"\u8fde\u63a5\u6d4b\u8bd5\u8282\u70b9\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wss://rpc-node.gear-tech.io:443\n"))),(0,r.kt)("p",null,"\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const chain = await gearApi.chain();\nconst nodeName = await gearApi.nodeName();\nconst nodeVersion = await gearApi.nodeVersion();\nconst genesis = gearApi.genesisHash.toHex();\n")),(0,r.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba2\u9605\u4e00\u4e2a\u65b0\u7684\u533a\u5757\u5e76\u83b7\u5f97\u94fe\u7684\u57fa\u672c\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function connect() {\n  const gearApi = await GearApi.create();\n\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    gearApi.chain(),\n    gearApi.nodeName(),\n    gearApi.nodeVersion(),\n  ]);\n\n  console.log(\n    `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`,\n  );\n\n  const unsub = await gearApi.gearEvents.subscribeToNewBlocks((header) => {\n    console.log(\n      `New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`,\n    );\n  });\n}\nconnect().catch(console.error);\n")))}d.isMDXComponent=!0}}]);