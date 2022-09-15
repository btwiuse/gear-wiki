---
sidebar_label: Gear Node Q&A
sidebar_position: 9
---

# Gear Node Q&A

[Edit this page on GitHub](https://github.com/btwiuse/gear-wiki/edit/gear-node-qna/docs/node/gear-node-qna.md)

Summary of common questions and answers from the official Discord [#node](https://discord.com/channels/891063355526217738/907067604928188426) channel.

For questions that have already been answered in one of the pages below,

- [Gear Node FAQ](https://docs.google.com/document/d/1abxQfOLR1iDQFCtTlKQST-rhGkfHX3cBuNhlhUz3pzU/)

- [Node FAQ](https://gear-node-qna.vercel.app/docs/node/node-faq)

- [Troubleshooting](https://gear-node-qna.vercel.app/docs/node/troubleshooting)

the link to its existing answer will be placed in the solution section in order to avoid duplication.

## Verification failed for block ... rejected: too far in the future

> Hi guys! Please help me to understand what could be wrong, my node seems like doesn't work properly now. I'll attach a screenshot below. Too many verification failed errors.

[context](https://discord.com/channels/891063355526217738/907067604928188426/1019534927827587072)

- **Error:** `Verification failed for block xxxxxx received from peer: xxxxxx , Header xxxxxx rejected: too far in the future`

    ```
    10:06:37 💤 Idle (19 peers), best: #6505505 (0xe347…aa2b), finalized #6505488 (0x12e0…4fa5), ⬇ 4.8kiB/s ⬆ 220.0kiB/s
    10:06:40 💔 Verification failed for block 0xe2f7243f630c10282082a6249e349d679d770467fa3d3523212f6ccc18d49eb0 received from peer: 12D3KooWPyu2AyUAkpK9VAh8HnraVRVg2SAGZqQwBEScz649MYiC, "Header 0xe2f7243f630c10282082a6249e349d679d770467fa3d3523212f6ccc18d49eb0 rejected: too far in the future"
    10:06:40 ✨ Imported #6505506 (0x2564…7a99)
    10:06:40 💔 Verification failed for block 0xe2f7243f630c10282082a6249e349d679d770467fa3d3523212f6ccc18d49eb0 received from peer: 12D3KooWQPjTpadV5n5We2kr27UDTmeMHPm53AYQ3Po26YXANDph, "Header 0xe2f7243f630c10282082a6249e349d679d770467fa3d3523212f6ccc18d49eb0 rejected: too far in the future"
    10:06:41 💔 Verification failed for block 0xe2f7243f630c10282082a6249e349d679d770467fa3d3523212f6ccc18d49eb0 received from peer: 12D3KooWEE3iEPtkkGToXPmUfSAjps3HKEKTTLB7LPYriHxxHHcL, "Header 0xe2f7243f630c10282082a6249e349d679d770467fa3d3523212f6ccc18d49eb0 rejected: too far in the future"
    ```

- **Solution:** The clock of your machine is most likely not accurate. You should sync the time of your machine with an NTP server then restart the node.

    First check your current time skew by running:

    ```shell
    ntpdate -q pool.ntp.org
    ```

    Then check the status of timesyncd by running:

    ```shell
    systemctl status systemd-timesyncd.service
    ```

    If the service is disabled enable it first:

    ```shell
    sudo systemctl start systemd-timesyncd.service
    ```

    After that, restart the node to see if the issue is gone

    ```shell
    sudo systemctl restart gear-node
    ```
## Windows node stuck at block #157437

> Hi! My Windows-based nodes stucked at block №157437.
> What shall i do?

[context](https://discord.com/channels/891063355526217738/907067604928188426/1016053228003151932)

> hi friends. Can anybody help me with this issue? This is about win based node.
> My Windows-based nodes stucked at block №157437.

[context](https://discord.com/channels/891063355526217738/907067604928188426/1016715984251404398)

> Hi. My node stuck at 157437 block. Could someone please help me? Here https://telemetry.gear-tech.io/#list/0x6f022bd353c56b3e441507e1173601fd9dc0fb7547e6a95bbaf9b21f311bcab6 I see a lot of stucks at this block

[context](https://discord.com/channels/891063355526217738/907067604928188426/1018132301852450836)

- **Error:** `Execution failed: Execution aborted due to trap: wasm trap: wasm unreachable instruction executed`

    ```
    2022-09-12 15:25:14.506 ERROR tokio-runtime-worker runtime: panicked at 'Storage root must match that calculated.', /Users/vadimsmirnov/.cargo/git/checkouts/substrate-e6594450811c5caa/abc1345/frame/executive/src/lib.rs:479:9
    2022-09-12 15:25:14.509  WARN tokio-runtime-worker sc_service::client::client: Block prepare storage changes error: Error at calling runtime api: Execution failed: Execution aborted due to trap: wasm trap: wasm `unreachable` instruction executed
    WASM backtrace:

	0: 0x3ab3 - <unknown>!rust_begin_unwind
	1: 0x15d7 - <unknown>!core::panicking::panic_fmt::h6b1842d842074d9f
	2: 0x11e22f - <unknown>!Core_execute_block
    ```

- **Solution:** The problem was fixed so update your nodes.

    You need to download node executable from https://builds.gear.rs/gear-nightly-windows-x86_64.zip and replace old executable.

## Cannot allocate memory

> hello everyone. I updated the node according to the latest update, but the node stopped at block 14,523,318 and there is such an error in the logs. Can you tell me what to do?

[context](https://discord.com/channels/891063355526217738/907067604928188426/993119260383641630)

> Error importing block 0x4ae7f75de9466c4425487186152a5f31ae7da7e0c867dfc2c8603ebbf235c86c: consensus error: Import failed: Import failed: Error at calling runtime api: Execution failed: Execution aborted due to trap: host code panicked while being called by the runtime: Failed to create new memory with sandbox: "Sandbox error: Memory: encountered failure while operating with virtual memory: System call failed: Cannot allocate memory (os error 12)

[context](https://discord.com/channels/891063355526217738/907067604928188426/1016273739127734292)


- **Error:** `Failed to create new memory with sandbox: ... System call failed: Cannot allocate memory (os error 12)`

    ```
    14:39:35 elyqq gear-node2382149]:2022-07-03 14:39:35 0 Error importing block 0xee7fd629ca528f25b46f4f3aceesc0724920157ffc86871bcaea801d31379987: consensus error: Import failed: Import failed: Error at calling runtime api: Execution failed: Excution aborted due to trap: host code panicked while being called by the runtime: Failed to create new memory with sandbox: "sandbox error Memory: System call failed: Cannot allocate memory (os error 12)" Jul 03 14:39:35 elygggear-node[2382149]: WASM backtrace:
    14:39:35 elyqq gear-node[2382149]: 0:0x173800 <unknown>!spio::sandbox:extern host function impls::memory new::h86494df2b46f540 
    14:39:35 elygq gear-node 12282140 1:0x743dg-<unknown>!kaear backendsandbox::env::SandboxEnvironment<e>as dear backend common::Environment<E>>::new::ha62a9b16c2aa43e8 
    ```

- **Solution:** Such error messages usually indicate insufficient memory. Upgrade your node's memory or increase swap space on your operating system.

    The node could take up to 8 GB of memory during syncing. The memory consumption will decrease after blocks are synced.

    So if your machine has less than 8 GB of memory, it is recommended to enable swap to prevent potential memory exhaustion.

    Please refer to [Increasing the Swap Space on Ubuntu](https://askubuntu.com/questions/1066358/increasing-the-swap-space-on-ubuntu) for instructions.

    For Windows, refer to [How to increase swap memory in Windows](https://superuser.com/questions/793304/how-to-increase-swap-memory-in-windows) instead.

## Unavailable `LOCK` file

- **Error:** `IO error: While lock file /root/.local/share/gear-node/chains/staging_testnet_v2/db/full/LOCK: Resource temporarily unavailable`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#unavailable-lock-file)

## Unexpected argument when starting the node service

- **Error:** `Found argument '\' which wasn't expected, or isn't valid in this context`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#unexpected-argument-when-starting-the-node-service)

## Corrupted data base

- **Error:** `Database version cannot be read from existing db_version file`

- **Alternative error:** `Invalid argument: Column families not opened: ..., col2, col1, col0`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#corrupted-data-base)

## Node executable file obsolescence

- **Error:** `Verification failed for block <block-id> received from peer <peer-id>`

- **Alternative error:** `runtime requires function imports which are not present on the host`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#node-executable-file-obsolescence)

## Masked service

- **Error:** `Failed to start gear-node.service: Unit gear-node.service is masked.`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#masked-service)
