---
sidebar_position: 1
sidebar_label: Substrate
---

# Substrate

Substrate is a modular framework that enables the creation of unique blockchains by composing custom or pre-built components.

It`s easy to understand the functions of Substrate by its name. Substrate is a template that provides extensive functionality out-of-the-box, including consensus mechanisms, governance features, WASM, and more. Substrate features are the following:

- Forkless Update
- Built-in Coordination
- Cross-Language Support with WebAssembly
- Light-Client Friendly
- Deterministic Finality
- Seamless Integration

Substrate allows us to significantly reduce development time and focus on developing the main Gear component. Rust guarantees security and high performance.

See more about Substrate https://www.substrate.io/


As Gear uses a Substrate framework, the creation of different blockchains for specific applications is simplified. Substrate provides extensive functionality out-of-the-box and allows developers to focus on creating a custom engine on top of the protocol. This covers the most desired requirements for enterprise-ready decentralized projects.

Substrate is a modular framework that enables the creation of custom-built blockchains with consensus mechanism, core functionality and security out of the box. It is an important component of the Polkadot network and it allows every team creating a new blockchain not to waste efforts for implementing the networking and consensus code from scratch. Please refer to the [Substrate Documentation](https://substrate.dev/docs/en/) for more details.

Polkadot is a next-generation Layer-0 blockchain protocol intended to unite multiple purpose-built blockchains, allowing them to operate seamlessly together at scale. The critical aspect of the Polkadot network is its ability to route arbitrary messages between chains. These messages enable negotiation channels between two parachains and allow sending asynchronous messages through it.

Using Substrate allows for a quick connection for Gear instances as a parachain into the Polkadot & Kusama networks. The Polkadot Relay Chain and Gear ultimately speak the same language - asynchronous messages. Gear’s unique asynchronous messaging architecture allows Gear to be an effective and easy-to-use parachain of Polkadot network.

Launching a blockchain was previously very expensive. It required significant efforts for building a transactions application, a distributed ledger, a consensus mechanism and a virtual machine among other things. But Gear allows dApp developers to focus on their projects rather than building and operating an entirely new blockchain from scratch.
