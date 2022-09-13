"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Concert (FT to NFT transition)",sidebar_position:13},c="Concert Contract (FT to NFT transition)",i={unversionedId:"examples/concert",id:"examples/concert",title:"Concert Contract (FT to NFT transition)",description:"Introduction",source:"@site/docs/examples/concert.md",sourceDirName:"examples",slug:"/examples/concert",permalink:"/docs/examples/concert",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/concert.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"Concert (FT to NFT transition)",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Multisig Wallet",permalink:"/docs/examples/multisig-wallet"},next:{title:"NFT Marketplace",permalink:"/docs/examples/marketplace"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Interface",id:"interface",level:2},{value:"Events",id:"events",level:3},{value:"Functions",id:"functions",level:3},{value:"Init Config",id:"init-config",level:3},{value:"<code>Action</code> Structure",id:"action-structure",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concert-contract-ft-to-nft-transition"},"Concert Contract (FT to NFT transition)"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This smart contract example created by Gear represents a Concert tickets distribution with the idea of converting fungible tokens (gFT) to non-fungible tokens (gNFT) in time."),(0,o.kt)("p",null,"The article explains the programming interface, data structure, basic functions and explains their purpose. It can be used as is or modified to suit your own scenarios. Anyone can easily create their own application and run it on the Gear Network. The source code is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/concert"},"GitHub"),". "),(0,o.kt)("p",null,"In this example, a single deployed contract can hold one concert at time. Firstly, all the tickets for the concert come as fungible-tokens. In order to buy tickets one should provide the metadata (e.g. seat/row number) that will later be included in NFTs. When the concert ends, all the fungible tokens of all users (ticket holders) will turn into NFTs."),(0,o.kt)("p",null,"The idea is simple - all the internal token interactions are handled using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/gmt-1155"},"gMT-1155")," contract, which address must be provided upon initiliazing a concert contract."),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum ConcertEvent {\n    Creation {\n        creator: ActorId,\n        concert_id: u128,\n        number_of_tickets: u128,\n        date: u128,\n    },\n    Hold {\n        concert_id: u128,\n    },\n    Purchase {\n        concert_id: u128,\n        amount: u128,\n    },\n}\n")),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/// Create a concert.\n/// `concert_id` - is the id of the concert (will become a TokenId for FT minted later).\n/// `number_of_tickets` - is the amount of FT minted later.\n/// `date` - is the date of the concert holding.\nfn create_concert(\n    &mut self,\n    creator: ActorId,\n    concert_id: u128,\n    number_of_tickets: u128,\n    date: u128,\n);\n\n/// Buy tickets.\n/// `concert_id` - is the id of the concert.\n/// `amount` - is the number of tickets one is trying to purchase.\n/// `mtd` - is the tickets metadata (e.g. seat/row). This argument length should equal the `amount` value.\nasync fn buy_tickets(\n    &mut self,\n    concert_id: u128,\n    amount: u128,\n    mtd: Vec<Option<TokenMetadata>>,\n);\n\n/// Hold a concert, turning of the FT (aka tickets) into NFTs.\n/// `concert_id` - is the id of the concert\nasync fn hold_concert(&mut self, concert_id: u128)\n")),(0,o.kt)("h3",{id:"init-config"},"Init Config"),(0,o.kt)("p",null,"To successfully initialize a concert contract one should provide an ActorID of a GMT-1155 contract to hold all the tokens manipulations. The sender of this message becomes the owner of the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct InitConcert {\n    pub owner_id: ActorId,\n    pub mtk_contract: ActorId,\n}\n")),(0,o.kt)("h3",{id:"action-structure"},(0,o.kt)("inlineCode",{parentName:"h3"},"Action")," Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum ConcertAction {\n    Create {\n        creator: ActorId,\n        concert_id: u128,\n        number_of_tickets: u128,\n        date: u128,\n    },\n    Hold {\n        concert_id: u128,\n    },\n    BuyTickets {\n        concert_id: u128,\n        amount: u128,\n        metadata: Vec<Option<TokenMetadata>>,\n    },\n}\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"A source code of the contract example provided by Gear is available on GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/concert/blob/master/src/lib.rs"},(0,o.kt)("inlineCode",{parentName:"a"},"concert/src/lib.rs")),"."),(0,o.kt)("p",null,"See also an example of the smart contract testing implementation based on gtest: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/concert/blob/master/tests/concert_tests.rs"},(0,o.kt)("inlineCode",{parentName:"a"},"concert/tests/concert_tests.rs")),"."),(0,o.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to this article: ",(0,o.kt)("a",{parentName:"p",href:"/docs/developing-contracts/testing"},"Program Testing"),"."))}d.isMDXComponent=!0}}]);