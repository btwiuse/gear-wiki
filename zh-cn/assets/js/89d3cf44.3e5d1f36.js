"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(m,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"DEX",sidebar_position:20},s="DEX (decentralized exchange)",i={unversionedId:"examples/dex",id:"examples/dex",title:"DEX (decentralized exchange)",description:"Introduction",source:"@site/docs/examples/dex.md",sourceDirName:"examples",slug:"/examples/dex",permalink:"/zh-cn/docs/examples/dex",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/dex.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"DEX",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u731c\u62f3\u6e38\u620f",permalink:"/zh-cn/docs/examples/rock-paper-scissors"},next:{title:"NFT pixelboard",permalink:"/zh-cn/docs/examples/nft-pixelboard"}},m={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Math",id:"math",level:3},{value:"Factory contract description",id:"factory-contract-description",level:2},{value:"Actions",id:"actions",level:3},{value:"Events",id:"events",level:3},{value:"State",id:"state",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Source code",id:"source-code",level:3},{value:"Pair contract description",id:"pair-contract-description",level:2},{value:"Actions",id:"actions-1",level:3},{value:"Events",id:"events-1",level:3},{value:"State",id:"state-1",level:3},{value:"Interfaces",id:"interfaces-1",level:3},{value:"Source code",id:"source-code-1",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dex-decentralized-exchange"},"DEX (decentralized exchange)"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A decentralized exchange (DEX for short) is a peer-to-peer marketplace where transactions occur directly between crypto traders. Unlike centralized exchanges like Binance, DEXs don\u2019t allow for exchanges between fiat and crypto \u2014 instead, they exclusively trade cryptocurrency tokens for other cryptocurrency tokens.\nDecentralized exchanges, on the other hand, are simply a set of smart contracts. They establish the prices of various cryptocurrencies against each algorithmically and use \u201cliquidity pools\u201d \u2014 in which investors lock funds in exchange for interest-like rewards \u2014 to facilitate trades.\nWhile transactions on a centralized exchange are recorded on that exchange\u2019s internal database, DEX transactions are settled directly on the blockchain.\nDEXs are usually built on open-source code, meaning that anyone interested can see exactly how they work. That also means that developers can adapt existing code to create new competing projects \u2014 which is how Uniswap\u2019s code has been adapted by an entire host of DEXs with \u201cswap\u201d in their names like Sushiswap and Pancakeswap."),(0,r.kt)("p",null,"The exchange uses ",(0,r.kt)("a",{parentName:"p",href:"/examples/gft-20"},"Gear fungible tokens (GFT-20)")," underneath for the tokens and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/src/fungible_token"},"Gear-lib FT wrapper")," for the pair to keep track of the liquidity."),(0,r.kt)("h3",{id:"math"},"Math"),(0,r.kt)("p",null,"As it was said all the prices are algorithmically calculated. Investors provide funds to the liquidity pools and price is calculated according to the amount of tokens in the reserves using the following formula: ",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"K")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"reserve0 * reserve1 = K")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"reser"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"reser"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"reserve0, reserve1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"reser"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"reser"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," - are the reserves of token0 and token1 respectively provided by the investors, and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"K")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"K")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K")))))," - is the constant.\nAll the prices/amounts all calculated in the way that the ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"K")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"K")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K")))))," ",(0,r.kt)("strong",null,"MUST")," remain constant. This basically means that the more token0 we have in pool, the lower price of token1 will be when performing a swap."),(0,r.kt)("h2",{id:"factory-contract-description"},"Factory contract description"),(0,r.kt)("p",null,"Taking into account that we might have a large amount of trading pairs, we should have a way to monitor them/deploy another one and etc. That's where a factory comes into play. Factory helps to create a new pair and monitor all the existing pairs."),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"All of the actions are pretty straightforward. We have an action to initialize a factory, to create a pair and to modify fee related stuff."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\npub type TokenId = ActorId;\n\n/// Initializes a factory.\n///\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct InitFactory {\n    /// The address that can actually set the fee.\n    pub fee_to_setter: ActorId,\n    /// Code hash to successfully deploy a pair with this contract.\n    pub pair_code_hash: [u8; 32],\n}\n\n\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum FactoryAction {\n    /// Creates an exchange pair\n    ///\n    /// Deploys a pair exchange contract and saves the info about it.\n    /// # Requirements:\n    /// * both `TokenId` MUST be non-zero addresss and represent the actual fungible-token contracts\n    ///\n    /// On success returns `FactoryEvery::PairCreated`\n    CreatePair(TokenId, TokenId),\n\n    /// Sets fee_to variable\n    ///\n    /// Sets an address where the fees will be sent.\n    /// # Requirements:\n    /// * `fee_to` MUST be non-zero address\n    /// * action sender MUST be the same as `fee_to_setter` in this contract\n    ///\n    /// On success returns `FactoryEvery::FeeToSet`\n    SetFeeTo(ActorId),\n\n    /// Sets fee_to_setter variable\n    ///\n    /// Sets an address that will be able to change fee_to\n    /// # Requirements:\n    /// * `fee_to_setter` MUST be non-zero address\n    /// * action sender MUST be the same as `fee_to_setter` in this contract\n    ///\n    /// On success returns `FactoryEvery::FeeToSetterSet`\n    SetFeeToSetter(ActorId),\n\n    /// Returns a `fee_to` variables.\n    ///\n    /// Just returns a variable `fee_to` from the state.\n    ///\n    /// On success returns `FactoryEvery::FeeTo`\n    FeeTo,\n}\n")),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"All of the actions above have the exact counterparts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum FactoryEvent {\n    PairCreated {\n        /// The first token address\n        token_a: TokenId,\n        /// The second token address\n        token_b: TokenId,\n        /// Pair address (the pair exchange contract).\n        pair_address: ActorId,\n        /// The amount of pairs that already were deployed though this factory.\n        pairs_length: u32,\n    },\n    FeeToSet(ActorId),\n    FeeToSetterSet(ActorId),\n    FeeTo(ActorId),\n}\n")),(0,r.kt)("h3",{id:"state"},"State"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum FactoryStateQuery {\n    FeeTo,\n    FeeToSetter,\n    PairAddress { token_a: TokenId, token_b: TokenId },\n    AllPairsLength,\n    Owner,\n}\n\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum FactoryStateReply {\n    FeeTo { address: ActorId },\n    FeeToSetter { address: ActorId },\n    PairAddress { address: ActorId },\n    AllPairsLength { length: u32 },\n    Owner { address: ActorId },\n}\n")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"According to the list of actions, we have functions to cover them all:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Sets a fee_to address\n/// `fee_to` MUST be a non-zero address\n/// Message source MUST be a fee_to_setter of the contract\n/// Arguments:\n/// * `fee_to` is a new fee_to address\nfn set_fee_to(&mut self, fee_to: ActorId);\n\n/// Sets a fee_to_setter address\n/// `fee_to_setter` MUST be a non-zero address\n/// Message source MUST be a fee_to_setter of the contract\n/// Arguments:\n/// * `fee_to_setter` is a new fee_to_setter address\nfn set_fee_to_setter(&mut self, fee_to_setter: ActorId);\n\n/// Creates and deploys a new pair\n/// Both token address MUST be different and non-zero\n/// Also the pair MUST not be created already\n/// Arguments:\n/// * `token_a` is the first token address\n/// * `token_b` is the second token address\nasync fn create_pair(&mut self, mut token_a: ActorId, mut token_b: ActorId);\n")),(0,r.kt)("h3",{id:"source-code"},"Source code"),(0,r.kt)("p",null,"The source code of this example of DEX factory smart contract and the example of an implementation of its testing is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dex/tree/master/factory"},"gear-dapps/dex/tree/master/factory"),"."),(0,r.kt)("p",null,"See also an example of the smart contract testing implementation based on ",(0,r.kt)("inlineCode",{parentName:"p"},"gtest"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dex/tree/master/factory/tests"},"gear-dapps/dex/tree/master/factory/tests"),"."),(0,r.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/developing-contracts/testing"},"Program Testing")," article."),(0,r.kt)("h2",{id:"pair-contract-description"},"Pair contract description"),(0,r.kt)("p",null,"The pair contract is where all the exchange magic happens. Each pair contract handles the liquidity provided to this pair only. All swap operations are performed applying the formula in the Math section."),(0,r.kt)("h3",{id:"actions-1"},"Actions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\npub type TokenId = ActorId;\n\n/// Initializes a pair.\n///\n/// # Requirements:\n/// * both `TokenId` MUST be fungible token contracts with a non-zero address.\n/// * factory MUST be a non-zero address.\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct InitPair {\n    /// Factory address which deployed this pair.\n    pub factory: ActorId,\n    /// The first FT token address.\n    pub token0: TokenId,\n    /// The second FT token address.\n    pub token1: TokenId,\n}\n\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum PairAction {\n    /// Adds liquidity to the pair.\n    ///\n    /// Adds a specified amount of both tokens to the pair contract.\n    /// # Requirements:\n    /// * all the values MUST non-zero positive numbers.\n    /// * `to` MUST be a non-zero adddress.\n    ///\n    /// On success returns `PairEvent::AddedLiquidity`.\n    AddLiquidity {\n        /// The amount of token 0 which is desired by a user.\n        amount0_desired: u128,\n        /// The amount of token 1 which is desired by a user.\n        amount1_desired: u128,\n        /// The minimum amount of token 0 which a user is willing to add.\n        amount0_min: u128,\n        /// The minimum amount of token 1 which a user is willing to add.\n        amount1_min: u128,\n        /// Who is adding the liquidity.\n        to: ActorId,\n    },\n\n    /// Removes liquidity from the pair.\n    ///\n    /// Removes a specified amount of liquidity from the pair contact.\n    /// # Requirements:\n    /// * all the values MUST non-zero positive numbers.\n    /// * `to` MUST be a non-zero adddress.\n    ///\n    /// On success returns `PairEvent::RemovedLiquidity`.\n    RemoveLiquidity {\n        /// Liquidity amount to be removed.\n        liquidity: u128,\n        /// The minimal amount of token 0 a user is willing to get.\n        amount0_min: u128,\n        /// The minimal amount of token 1 a user is willing to get.\n        amount1_min: u128,\n        // Who is removing liquidity.\n        to: ActorId,\n    },\n\n    /// Forces the reserves to match the balances.\n    ///\n    /// On success returns `PairEvent::Sync`.\n    Sync,\n\n    /// Forces the reserves to match the balances.\n    ///\n    /// Forces the reserves to match the balances while sending all the extra tokens to a specified user.\n    /// On success returns `PairEvent::Skim`\n    Skim {\n        /// Who will get extra tokens.\n        to: ActorId,\n    },\n\n    /// Swaps token 0 for token 1.\n    ///\n    /// Swaps the provided amount of token 0 for token 1.\n    /// Requirements:\n    /// * `to` - MUST be a non-zero address.\n    /// * `amount_in` - MUST be a positive number and less than the liquidity of token 0.\n    ///\n    /// On success returns `PairEvent::SwapExactTokensFor`.\n    SwapExactTokensFor {\n        /// Who is performing a swap.\n        to: ActorId,\n        /// Amount of token0 you wish to trade.\n        amount_in: u128,\n    },\n\n    /// Swaps token 1 for token 0.\n    ///\n    /// Swaps the provided amount of token 1 for token 0.\n    /// Requirements:\n    /// * `to` - MUST be a non-zero address.\n    /// * `amount_out` - MUST be a positive number and less than the liquidity of token 1.\n    ///\n    /// On sucess returns `PairEvent::SwapTokensForExact`.\n    SwapTokensForExact {\n        /// Who is performing a swap.\n        to: ActorId,\n        /// Amount of token 0 the user with to trade.\n        amount_out: u128,\n    },\n}\n")),(0,r.kt)("h3",{id:"events-1"},"Events"),(0,r.kt)("p",null,"All of the actions above have the exact counterparts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum PairEvent {\n    AddedLiquidity {\n        /// The amount of token0 added to liquidity.\n        amount0: u128,\n        /// The amount of token1 added to liquidity.\n        amount1: u128,\n        /// Overall liquidity amount that has been added.\n        liquidity: u128,\n        /// Liquidity provider.\n        to: ActorId,\n    },\n    Sync {\n        /// The balance of token0.\n        balance0: u128,\n        /// The balance of token1.\n        balance1: u128,\n        /// The amount of token0 stored on the contract.\n        reserve0: u128,\n        /// The amount of token1 stored on the contract.\n        reserve1: u128,\n    },\n    Skim {\n        /// Fee collector.\n        to: ActorId,\n        /// The amount of extra token0.\n        amount0: u128,\n        /// The amount of extra token1.\n        amount1: u128,\n    },\n    SwapExactTokensFor {\n        /// Swap performer.\n        to: ActorId,\n        /// The amount of token0 a user is providing.\n        amount_in: u128,\n        /// The amount of token1 a user is getting.\n        amount_out: u128,\n    },\n    SwapTokensForExact {\n        /// Swap performed.\n        to: ActorId,\n        /// The amount of token0 a user is getting.\n        amount_in: u128,\n        /// The amount of token1 a user is providing.\n        amount_out: u128,\n    },\n}\n")),(0,r.kt)("h3",{id:"state-1"},"State"),(0,r.kt)("p",null,"The state is pretty straightforward and self-explanatory as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum PairStateQuery {\n    TokenAddresses,\n    Reserves,\n    Prices,\n    BalanceOf(ActorId),\n}\n\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum PairStateReply {\n    TokenAddresses { token0: TokenId, token1: TokenId },\n    Reserves { reserve0: u128, reserve1: u128 },\n    Prices { price0: u128, price1: u128 },\n    Balance(u128),\n}\n")),(0,r.kt)("h3",{id:"interfaces-1"},"Interfaces"),(0,r.kt)("p",null,"To successfully implement all the logic, we should provide additional math methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Calculates the amount of token1 for given amount of token0 and reserves\n/// using the simple formula: amount1 = (amount0 * reserve1)/reserve0.\n/// `reserve0` - MUST be a positive number\n/// Arguments:\n/// * `amount0` - the amount of token0\n/// * `reserve0` - the amount of available token0\n/// * `reserve1` - the amount of available token1\npub fn quote(amount0: u128, reserve0: u128, reserve1: u128) -> u128;\n\n/// Calculates the amount of token1 for given amount of token0 and reserves.\n/// Takes the fee of 3% into account, so the formula is:\n/// amount1 = (amount0 * reserve1)/reserve1 * 0.997\n/// Where * 0.997 is represented as * 997 / 1000\n/// Arguments:\n/// * `amount_in` - the amount of token0\n/// * `reserve_in` - the amount of available token0\n/// * `reserve_out` - the amount of available token1\npub fn get_amount_out(amount_in: u128, reserve_in: u128, reserve_out: u128) -> u128;\n\n/// Calculates the amount of token0 for given amount of token1 and reserves.\n/// Takes the fee of 3% into account, so the formula is:\n/// amount1 = (amount0 * reserve1)/reseve1 * 0.997\n/// Where * 0.997 is represented as * 997 / 1000\n/// Arguments:\n/// * `amount_in` - the amount of token0\n/// * `reserve_in` - the amount of available token0\n/// * `reserve_out` - the amount of available token1\npub fn get_amount_in(amount_out: u128, reserve_in: u128, reserve_out: u128) -> u128;\n")),(0,r.kt)("p",null,"Now we can start implementing the contract. We start by introducing some of the internal methods to handle of the balances/reserves math:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// A simple wrapper for balance calculations to facilitate mint & burn.\nfn update_balance(&mut self, to: ActorId, amount: u128, increase: bool);\n\n// Mints the liquidity.\n// `to` - MUST be a non-zero address\n// Arguments:\n// * `to` - is the operation performer\nasync fn mint(&mut self, to: ActorId) -> u128;\n\n// Mint liquidity if fee is on.\n// If fee is on, mint liquidity equivalent to 1/6th of the growth in sqrt(k). So the math if the following.\n// Calculate the sqrt of current k using the reserves. Compare it.\n// If the current one is greater, than calculate the liquidity using the following formula:\n// liquidity = (total_supply * (root_k - last_root_k)) / (root_k * 5 + last_root_k).\n// where root_k - is the sqrt of the current product of reserves, and last_root_k - is the sqrt of the previous product.\n// Multiplication by 5 comes from the 1/6 of growrth is sqrt.\n// `reserve0` - MUST be a positive number\n// `reserve1` - MUST be a positive number\n// Arguments:\n// * `reserve0` - the available amount of token0\n// * `reserve1` - the available amount of token1\nasync fn mint_fee(&mut self, reserve0: u128, reserve1: u128) -> bool;\n\n// Updates reserves and, on the first call per block, price accumulators\n// `balance0` - MUST be a positive number\n// `balance1` - MUST be a positive number\n// `reserve0` - MUST be a positive number\n// `reserve1` - MUST be a positive number\n// Arguments:\n// * `balance0` - token0 balance\n// * `balance1` - token1 balance\n// * `reserve0` - the available amount of token0\n// * `reserve1` - the available amount of token1\nfn update(&mut self, balance0: u128, balance1: u128, reserve0: u128, reserve1: u128);\n\n// Burns the liquidity.\n// `to` - MUST be a non-zero address\n// Arguments:\n// * `to` - is the operation performer\nasync fn burn(&mut self, to: ActorId) -> (u128, u128);\n\n// Swaps two tokens just by calling transfer_tokens from the token contracts.\n// Also maintains the balances and updates the reservers to match the balances.\n// `amount0` - MUST be more than self.reserve0\n// `amount1` - MUST be more than self.reserve1\n// `to` - MUST be a non-zero address\n// Arguments:\n// * `amount0` - amount of token0\n// * `amount1` - amount of token1\n// * `to` - is the operation performer\n// * `forward` - is the direction. If true - user inputs token0 and gets token1, otherwise - token1 -> token0\nasync fn _swap(&mut self, amount0: u128, amount1: u128, to: ActorId, forward: bool);\n")),(0,r.kt)("p",null,"After that we can move on with the external methods implementation to cover all of the actions for our contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Forces balances to match the reserves.\n/// `to` - MUST be a non-zero address\n/// Arguments:\n/// * `to` - where to perform tokens' transfers\npub async fn skim(&mut self, to: ActorId);\n\n/// Forces reserves to match balances.\npub async fn sync(&mut self);\n\n/// Adds liquidity to the pool.\n/// `to` - MUST be a non-zero address\n/// Arguments:\n/// * `amount0_desired` - is the desired amount of token0 the user wants to add\n/// * `amount1_desired` - is the desired amount of token1 the user wants to add\n/// * `amount0_min` - is the minimum amount of token0 the user wants to add\n/// * `amount1_min` - is the minimum amount of token1 the user wants to add\n/// * `to` - is the liquidity provider\npub async fn add_liquidity(\n    &mut self,\n    amount0_desired: u128,\n    amount1_desired: u128,\n    amount0_min: u128,\n    amount1_min: u128,\n    to: ActorId,\n);\n\n/// Removes liquidity from the pool.\n/// Internally calls self.burn function while transferring `liquidity` amount of internal tokens\n/// `to` - MUST be a non-zero address\n/// Arguments:\n/// * `liquidity` - is the desired liquidity the user wants to remove (e.g. burn)\n/// * `amount0_min` - is the minimum amount of token0 the user wants to receive\n/// * `amount1_min` - is the minimum amount of token1 the user wants to receive\n/// * `to` - is the liquidity provider\npub async fn remove_liquidity(\n    &mut self,\n    liquidity: u128,\n    amount0_min: u128,\n    amount1_min: u128,\n    to: ActorId,\n);\n\n/// Swaps exact token0 for some token1\n/// Internally calculates the price from the reserves and call self._swap\n/// `to` - MUST be a non-zero address\n/// `amount_in` - MUST be non-zero\n/// Arguments:\n/// * `amount_in` - is the amount of token0 user want to swap\n/// * `to` - is the receiver of the swap operation\npub async fn swap_exact_tokens_for(&mut self, amount_in: u128, to: ActorId);\n\n/// Swaps exact token1 for some token0\n/// Internally calculates the price from the reserves and call self._swap\n/// `to` - MUST be a non-zero address\n/// `amount_in` - MUST be non-zero\n/// Arguments:\n/// * `amount_out` - is the amount of token1 user want to swap\n/// * `to` - is the receiver of the swap operation\npub async fn swap_tokens_for_exact(&mut self, amount_out: u128, to: ActorId);\n")),(0,r.kt)("h3",{id:"source-code-1"},"Source code"),(0,r.kt)("p",null,"The source code of this example of DEX pair smart contract and the example of an implementation of its testing is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dex/tree/master/pair"},"gear-dapps/dex/tree/master/pair"),"."),(0,r.kt)("p",null,"See also an example of the smart contract testing implementation based on ",(0,r.kt)("inlineCode",{parentName:"p"},"gtest"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dex/tree/master/pair/tests"},"gear-dapps/dex/tree/master/pair/tests"),"."),(0,r.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/developing-contracts/testing"},"Program Testing")," article."))}p.isMDXComponent=!0}}]);