"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3129],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={sidebar_position:6,sidebar_label:"Send Message"},o="Send Message",i={unversionedId:"api/send-message",id:"api/send-message",title:"Send Message",description:"Use api.message.send method to send messages to the program:",source:"@site/docs/api/send-message.mdx",sourceDirName:"api",slug:"/api/send-message",permalink:"/docs/api/send-message",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/send-message.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Send Message"},sidebar:"tutorialSidebar",previous:{title:"Upload code",permalink:"/docs/api/submit-code"},next:{title:"Read State",permalink:"/docs/api/read-state"}},p={},c=[{value:"Send reply message",id:"send-reply-message",level:3}],l={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-message"},"Send Message"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"api.message.send")," method to send messages to the program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  const message = {\n    destination: destination, // programId\n    payload: somePayload,\n    gasLimit: 10000000,\n    value: 1000,\n  };\n  // In that case payload will be encoded using meta.handle_input type\n  let extrinsic = gearApi.message.send(message, meta);\n  // So if you want to use another type you can specify it\n  extrinsic = gearApi.message.send(message, meta, meta.async_handle_input);\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\ntry {\n  await extrinsic.signAndSend(keyring, (event) => {\n    console.log(event.toHuman());\n  });\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In real conditions to ensure successful message processing, the calculation of the required gas for processing the message should be performed by using ",(0,a.kt)("inlineCode",{parentName:"p"},"api.program.calculateGas")," method."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/api/calculate-gas"},"more info"))),(0,a.kt)("h3",{id:"send-reply-message"},"Send reply message"),(0,a.kt)("p",null,"When you need to reply to a message received from a program, use ",(0,a.kt)("inlineCode",{parentName:"p"},"api.message.reply"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  const reply = {\n    replyToId: messageId,\n    payload: somePayload,\n    gasLimit: 10000000,\n    value: 1000,\n  };\n  // In this case payload will be encoded using `meta.async_handle_input` type if it exsits,\n  // otherwise `meta.async_init_input` will be used\n  const extrinsic = gearApi.message.sendReply(reply, meta);\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\ntry {\n  await extrinsic(keyring, (events) => {\n    console.log(event.toHuman());\n  });\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\n")))}d.isMDXComponent=!0}}]);