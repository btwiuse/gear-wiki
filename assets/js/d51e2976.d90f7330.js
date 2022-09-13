"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1376],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:2,sidebar_label:"State Transition"},o="State transition",i={unversionedId:"gear/gear-state/state-transition",id:"gear/gear-state/state-transition",title:"State transition",description:"Each system follows the rules according to which the state of the system evolves. As the network processes new input data, the state is advanced according to state transition rules. This input data is packed in granular pieces of information called transactions.",source:"@site/docs/gear/gear-state/state-transition.md",sourceDirName:"gear/gear-state",slug:"/gear/gear-state/state-transition",permalink:"/docs/gear/gear-state/state-transition",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/gear/gear-state/state-transition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"State Transition"},sidebar:"tutorialSidebar",previous:{title:"State Components",permalink:"/docs/gear/gear-state/state"},next:{title:"Actor Model",permalink:"/docs/gear/actor-model"}},l={},c=[{value:"Create a program",id:"create-a-program",level:3},{value:"Send a message",id:"send-a-message",level:3},{value:"Dequeue messages",id:"dequeue-messages",level:3},{value:"Balance transfers",id:"balance-transfers",level:3},{value:"Messages, blocks and events lifecycle",id:"messages-blocks-and-events-lifecycle",level:3}],u={toc:c};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state-transition"},"State transition"),(0,r.kt)("p",null,"Each system follows the rules according to which the state of the system evolves. As the network processes new input data, the state is advanced according to state transition rules. This input data is packed in granular pieces of information called transactions."),(0,r.kt)("p",null,"Gear nodes maintain and synchronize a transaction pool which contains all those new transactions. When any node (validator or not) receives a transaction, the node propagates the transaction to all connected nodes. For advanced reading how the transaction pool operates, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/tx-pool"},"Substrate Documentation"),"."),(0,r.kt)("p",null,"When a Gear validator node comes to produce a new block, some (or all) transactions from the pool are merged into a block and the network undergoes a state transition via this block. Transactions that were not taken in the last block remain in the pool until the next block producing."),(0,r.kt)("p",null,"Gear supports the following types of transactions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create a program")," - user uploads new programs (smart-contracts)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Send a message")," - programs or users fill the message queue"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dequeue messages")," - validators (block producers) dequeue multiple messages, running associated programs"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Balance transfers")," - Gear engine performs user-program-validator balance transfers")),(0,r.kt)("p",null,"Message processing is performed in the reserved space of the block construction/import time. It is guaranteed that message processing will be executed in every block, and at least at some particular rate determined by current instance settings."),(0,r.kt)("h3",{id:"create-a-program"},"Create a program"),(0,r.kt)("p",null,"Designated authorities (or any user for public implementation) of Gear network can propose a new program saved to the state. For public networks, a balance associated with a program is also provided. This new balance then constitutes the initial balance (Existential Deposit)."),(0,r.kt)("h3",{id:"send-a-message"},"Send a message"),(0,r.kt)("p",null,"End-users interact with programs and as a result, send messages to Gear network. Messages sent to the Gear network fill up the global message queue. This queue can be viewed as a runtime-driven transaction queue but with the guarantee that any message accepted into it will eventually be processed. Putting a message in the queue is not free and therefore a message is guaranteed to be dispatched."),(0,r.kt)("h3",{id:"dequeue-messages"},"Dequeue messages"),(0,r.kt)("p",null,"Validators can choose which messages to dequeue when it's their turn to produce the next block. It eliminates the need for each particular validator to maintain the full memory state. Dequeuing occurs only at the end of each block. During dequeuing, new messages can be generated. They can also be processed in this phase, but also can stay in the queue for the next block (and another validator)."),(0,r.kt)("h3",{id:"balance-transfers"},"Balance transfers"),(0,r.kt)("p",null,"Regular balance transfers are performed inside Substrate Balances module."),(0,r.kt)("h3",{id:"messages-blocks-and-events-lifecycle"},"Messages, blocks and events lifecycle"),(0,r.kt)("p",null,'The picture below illustrates the eternal lifecycle of Gear machinery. As the actor model for communications dictates, nothing is shared, there are only messages. Messages with destination "system" end up in the event log to be inspected in the user space.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:a(9938).Z,width:"1400",height:"1400"})))}d.isMDXComponent=!0},9938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mq-df2e074d5eb9243488edd7b3b907cefa.jpg"}}]);