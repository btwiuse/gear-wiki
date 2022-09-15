---
sidebar_label: Gear Node Q&A
sidebar_position: 9
---

# Gear Node Q&A

[Edit this page on GitHub](https://github.com/btwiuse/gear-wiki/edit/gear-node-qna/docs/node/gear-node-qna.md)

Summary of common questions and answers from the official Discord [#node](https://discord.com/channels/891063355526217738/907067604928188426) channel.

For questions that have already been answered in one of the following pages,

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

- **Solution:** Such error messages usually indicate insufficient memory. Consider upgrade your machine's memory or increase swap space on your operating system.

    The node could take up to 8 GB of memory during syncing. The memory consumption will decrease after blocks are synced.

    So if your machine has less than 8 GB of memory, it is recommended to enable swap to prevent potential memory exhaustion.

    Please refer to [Increasing the Swap Space on Ubuntu](https://askubuntu.com/questions/1066358/increasing-the-swap-space-on-ubuntu) for instructions.

    For Windows, refer to [How to increase swap memory in Windows](https://superuser.com/questions/793304/how-to-increase-swap-memory-in-windows) instead.
    
## Version `GLIBC_2.2x` not found

> Hi guys! I am trying to run a gear  node but there's and error /gear-node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.29' not found (required by ./gear-node)
> is there anybody who can help me solve that ? 🙂

[context](https://discord.com/channels/891063355526217738/907067604928188426/949378744282402826)

> Guys, help pls, what happened? Why do not work?

[context](https://discord.com/channels/891063355526217738/907067604928188426/953923624954388500)

You have too old linux distro. To settle the issue you could build the node from sources - https://wiki.gear-tech.io/node/setting-up#compile-gear-node-by-yourself


## Failed to execute command / no such file or directory / Exec format error / status `203/exec`

> ?????????

[context](https://discord.com/channels/891063355526217738/907067604928188426/1007509716764737599)

> I have read all the chat above but I still couldn’t solve the problem. Please help

[context](https://discord.com/channels/891063355526217738/907067604928188426/1013913638362435595)

> 
> ```
> Started Gear Node.
> gear-node.service: Failed to execute command: No such file or directory
> gear-node.service: Failed at step EXEC spawning /root/gear-node: No such file or directory
> gear-node.service: Main process exited, code=exited, status=203/EXEC
> gear-node.service: Failed with result 'exit-code'.
> gear-node.service: Scheduled restart job, restart counter is at 15.
> Stopped Gear Node.
> ```

[context](https://discord.com/channels/891063355526217738/907067604928188426/1015569065189834762)

> Hello! As I understood, it was not necessary to update!
> 
> Please help me, what can cause such an error?

[context](https://discord.com/channels/891063355526217738/907067604928188426/1005011014183551016)

> HI! Can anyone help me ?

[context](https://discord.com/channels/891063355526217738/907067604928188426/950132609449599026)

> Whats wrong?

[context](https://discord.com/channels/891063355526217738/907067604928188426/953912712650428476)

> Hello everyone. After updating the node, such an error appeared. What to do? and can you help how to set up telemetry? I didn't understand how and what to write at all

[context](https://discord.com/channels/891063355526217738/907067604928188426/958858359119949844)

You've specified path /root/gear-node for executable binary of the node. Please check that file is located under the path


## Permission denied

> Thanks. However, when I use the command  "touch gear-node.service" I get the following error: "touch: cannot touch 'gear-node.service': Permission denied". When I'm using "sudo nano" I am able to configure the file gear-node.service.

[context](https://discord.com/channels/891063355526217738/907067604928188426/950470082277040138)

> whats wrong?

[context](https://discord.com/channels/891063355526217738/907067604928188426/953899958925406208)

## Can't find node in telemetry

> Hey! I need a help. I can't find my node name in telemetry. Everything works fine as I see in logs

[context](https://discord.com/channels/891063355526217738/907067604928188426/947527619153379479)

> Hello everyone. Tell me what to do. When I close putty, I have to log out of telemetry

[context](https://discord.com/channels/891063355526217738/907067604928188426/947511331660103690)

> good logs?
I don't see myself in telemetry v2 :/

[context](https://discord.com/channels/891063355526217738/907067604928188426/1006220462155649074)

> How to find exactly your node in https://telemetry.gear-tech.io/?)

[context](https://discord.com/channels/891063355526217738/907067604928188426/1014250716723937290)

> after what time will the node appear in telemetry?

[context](https://discord.com/channels/891063355526217738/907067604928188426/1014257244025659393)

> However, I do not find out my account from 
https://telemetry.gear-tech.io/#/0x70f04c10c85b57482a63514576e6fab6b0df4ddcfbfdf1da8f03dc3f59ba5439

[context](https://discord.com/channels/891063355526217738/907067604928188426/958669927420686356)

> Logs ok? Can’t find name in telemetry

[context](https://discord.com/channels/891063355526217738/907067604928188426/1011170842526363698)

Please use filter for quick access.

https://discord.com/channels/891063355526217738/907067604928188426/958669927420686356

If you want to see the node in telemetry, you are to add --telemetry-url ... parameter: https://wiki.gear-tech.io/docs/node/telemetry

https://discord.com/channels/891063355526217738/907067604928188426/1011367354690707526

by the name you entered in the service file

https://discord.com/channels/891063355526217738/907067604928188426/1014250891362193448

## Is it necessary to upgrade whenever a new version is released?

> new  update  31/03/2022?  need  install?

[context](https://discord.com/channels/891063355526217738/907067604928188426/959106441065693224)

No need to update the node after every change. But it is important to update it after some breaking changes. We will announce such kind of updates.

## How to save node key?

> @Shamil hey
could you be so kind as to share docs on "adding session key"?
cannot find any info on that

[context](https://discord.com/channels/891063355526217738/907067604928188426/1006204505500688417)

> yes，Thank you very much！
Now it automatically drops to 3G
Image
How do I save the Node key？

[context](https://discord.com/channels/891063355526217738/907067604928188426/959120864798998628)

> Hey guys, question – If I want to move my node to another server, should I save and later import private key or there is no reason to do so right now? 

[context](https://discord.com/channels/891063355526217738/907067604928188426/1008728419581833317)

There is no dedicated node key at the moment.

Hi,
What do you mean by session key? There is a network key:
 https://wiki.gear-tech.io/node/backup-restore#network-key 
 
https://discord.com/channels/891063355526217738/907067604928188426/1006212517766385745

## Is there any incentive? How to get reward?

> hi, its node has incentive?

[context](https://discord.com/channels/891063355526217738/907067604928188426/1006602175088181388)

> someone knows when incentivised TN is planned?

[context](https://discord.com/channels/891063355526217738/907067604928188426/959436921371762740)

Hi, no at the moment.

## How to keep my node running?

> I saw my node running on Telemetry, but as soon as I'm being logged off from the Terminal, it disappears. Anyone knows how to keep the node running after quitting the Terminal?

[context](https://discord.com/channels/891063355526217738/907067604928188426/946495080808734720)

You can use systemd to run the node as a daemon. We are going to prepare the manual for it. But you can search in internet "configure service with systemd" at the moment, it is quite usual operation for deploying web-services.

https://discord.com/channels/891063355526217738/907067604928188426/946496878671986709

## Can I use `screen`/`tmux` instead of systemd service?

> Hey guys. Is it ok to just install from binary and run a node in a dev mode through screen ?
> or it has to be done through service creation for sure
> ?

[context](https://discord.com/channels/891063355526217738/907067604928188426/1014152345136939049)

For long time node running the service is preferable.

If you use `screen`/`tmux`, your node will not automatically restart after system reboot. 

## How to check node status?

> Tell me, I launched the node and exited the server via ssh, what command should I use to see if the node is working when I re-enter the server?

[context](https://discord.com/channels/891063355526217738/907067604928188426/1014248733833171065)

You can check your node at https://telemetry.gear-tech.io/ or https://wiki.gear-tech.io/docs/node/node-as-service#checking-logs

https://discord.com/channels/891063355526217738/907067604928188426/1014248989601824868

## Unavailable `LOCK` file

> I get an error: Error: Service(Client(Backend("IO error: While lock file: /root/.local/share/gear-node/chains/staging_testnet_v2/db/full/LOCK: Resource temporarily unavailable")))

[context](https://discord.com/channels/891063355526217738/907067604928188426/1014254500510433301)

> Help me pls

[context](https://discord.com/channels/891063355526217738/907067604928188426/1014162662873116812)

> Hello. Tell me what the reason is.
> 
> Service(Client(Backend("IO error: While lock file: /root/.local/share/gear-node/chains/staging_testnet/db/full/LOCK: Resource temporarily unavailable")))

[context](https://discord.com/channels/891063355526217738/907067604928188426/960162534541910076)

> what to do?I did it according to the guide

[context](https://discord.com/channels/891063355526217738/907067604928188426/949351710969725018)

> how to solve a problem? 
Error: Service(Client(Backend("IO error: While lock file: /root/.local/share/gear-node/chains/staging_testnet/db/full/LOCK: Resource temporarily unavailable")))

[context](https://discord.com/channels/891063355526217738/907067604928188426/949604903939104851)

> can somebody help me?
Error: Service(Client(Backend("IO error: While lock file: /root/.local/share/gear-node/chains/staging_testnet/db/full/LOCK: Resource temporarily unavailable"))
it shows when i try ./gear-node

[context](https://discord.com/channels/891063355526217738/907067604928188426/956535962895278120)

> but, my node showed me this: 
> what the case?
> what i should do?

[context](https://discord.com/channels/891063355526217738/907067604928188426/957740421595922512)

> Hey, did I made something error?

[context](https://discord.com/channels/891063355526217738/907067604928188426/958038170900000788)

> Who knows what this error is?

[context](https://discord.com/channels/891063355526217738/907067604928188426/958216052683178034)

> what part do i have to make up?
> Any idea....??

[context](https://discord.com/channels/891063355526217738/907067604928188426/958398319904821279)

> What should i do with that error? Error: Service(Client(Backend("IO error: While lock file: /root/.local/share/gear-node/chains/staging_testnet/db/full/LOCK: Resource temporarily unavailable")))

[context](https://discord.com/channels/891063355526217738/907067604928188426/947529375635607552)

- **Error:** `IO error: While lock file /root/.local/share/gear-node/chains/staging_testnet_v2/db/full/LOCK: Resource temporarily unavailable`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#unavailable-lock-file)

## Program `0x...` terminated with a trap

> guys any idea what this error is about?
>
> `Program 0x5060…77d2 terminated with a trap: Not enough gas for loading memory.`

[context](https://discord.com/channels/891063355526217738/907067604928188426/960855915291111425)

> After I restart the node
> ```
> ...
> Jul 25 09:34:53 sm-server-1 gear-node[2956069]: 2022-07-25 09:34:53 👻 Program 0x9572…102d will stay in limbo until explicitly removed
> Jul 25 09:34:53 sm-server-1 gear-node[2956069]: 2022-07-25 09:34:53 👻 Program 0xa0ec…9f7d will stay in limbo until explicitly removed
> Jul 25 09:34:53 sm-server-1 gear-node[2956069]: 2022-07-25 09:34:53 👻 Program 0x8b85…759c will stay in limbo until explicitly removed
> Jul 25 09:34:53 sm-server-1 gear-node[2956069]: 2022-07-25 09:34:53 👻 Program 0x7796…92d6 will stay in limbo until explicitly removed
> Jul 25 09:34:53 sm-server-1 gear-node[2956069]: 2022-07-25 09:34:53 🪤 Program 0x7e59…96ee terminated with a trap: Gas limit exceeded
> Jul 25 09:34:53 sm-server-1 gear-node[2956069]: 2022-07-25 09:34:53 👻 Program 0xf048…8a45 will stay in limbo until explicitly removed
> Jul 25 09:34:55 sm-server-1 gear-node[2956069]: 2022-07-25 09:34:54 🪤 Program 0xaaa8…37a9 terminated with a trap: Gas limit exceeded
> ...
> ```

[context](https://discord.com/channels/891063355526217738/907067604928188426/1001030187263201370)

You just fetch old log messages, while syncing. That’s ok

## 💔 Error importing block `0x...`: block has an unknown parent

> Why these errors? 

[context](https://discord.com/channels/891063355526217738/907067604928188426/1007595025913360384)

> Have this logs after update, its stopped at 866244, and according to telemetry not only me

[context](https://discord.com/channels/891063355526217738/907067604928188426/1007294339732480070)

> Hello.What was the solution with 866244? Thank you.

[context](https://discord.com/channels/891063355526217738/907067604928188426/1007314923182895165)

> after update 🤨

[context](https://discord.com/channels/891063355526217738/907067604928188426/1007910646299500554)

> Here is a part of console output
> [2m2022-09-02 13:50:21[0m 💔 Error importing block 0x2142a83ff4a352ee0400bb371e8ffded2e8e6bd60fb98b71e6ea9aa418f382f8: block has an unknown parent
> [2m2022-09-02 13:50:21[0m Cannot set page protection for addr=0x2ada9200000 size=0x120000 mask=---: System call failed: Попытка обращения к неверному адресу. (os error 487)
> [2m2022-09-02 13:50:25[0m ⚙️  Syncing  0.0 bps, target=#2745800 (24 peers), best: #338499 (0x8ab4…9291), finalized #338432 (0x99d9…6483), ⬇ 652.5kiB/s ⬆ 16.5kiB/s
> [2m2022-09-02 13:50:41[0m failed to associate send_message response to the sender
> [2m2022-09-02 13:50:41[0m failed to associate send_message response to the sender
> [2m2022-09-02 13:50:41[0m failed to associate send_message response to the sender
> [2m2022-09-02 13:50:47[0m panicked at 'Cannot set/unset protection for wasm mem: MprotectError { interval: 2944890044416..=2944891224064, mask: 0 }', /Users/vadimsmirnov/Documents/projects/gear/common/src/lazy_pages.rs:56:5
> [2m2022-09-02 13:50:47[0m Block prepare storage changes error: Error at calling runtime api: Execution failed: Execution aborted due to trap: wasm trap: wasm unreachable instruction executed

[context](https://discord.com/channels/891063355526217738/907067604928188426/1015182822245408818)

Need to purge the chain:
```
sudo systemctl stop gear-node
/root/gear-node purge-chain
sudo systemctl start gear-node
```

## 💔 The bootnode you want to connect to provided a different peer ID than the one you expect

> Hi! Have some problem with node:Jul 31 20:26:03 vmi955015.contaboserver.net gear-node[41467]: 2022-07-31 20:26:03 💔 The bootnode you want to connect to at /dns4/testnet-validator-node2.gear-tech.io/tcp/30333/p2p/12D3KooWCfm5T1uRq3rCNzqjsq3eFwu8fjHkUo1XBZmZvo611BwA provided a different peer ID 12D3KooWRf7vAr79yAyDxGvYAdSqhh2EoeWe35Lx4QH4N6XMv2gH than the one you expect 12D3KooWCfm5T1uRq3rCNzqjsq3eFwu8fjHkUo1XBZmZvo611BwA.

[context](https://discord.com/channels/891063355526217738/907067604928188426/1003368149728637008)

## Is it normal?

> logs after udate
> 
> is it good logs?

[context](https://discord.com/channels/891063355526217738/907067604928188426/1004347149036830770)

## How do I change default ports for node?

> Hello everyone. Does anyone know how to change ports for node?

[context](https://discord.com/channels/891063355526217738/907067604928188426/1004394938550726676
)

## Unexpected argument when starting the node service

- **Error:** `Found argument '\' which wasn't expected, or isn't valid in this context`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#unexpected-argument-when-starting-the-node-service)

## Corrupted data base

> Asked this in general , but it seems i should have asked this here.
> 
> Guys, do you know what to do with it? Configuration of PC is 3gb RAM/20gb memory. Node restart doesn't help

[context](https://discord.com/channels/891063355526217738/907067604928188426/947174959623573614)

- **Error:** `Database version cannot be read from existing db_version file`

> help me please, i just restart node and start get this

[context](https://discord.com/channels/891063355526217738/907067604928188426/960855896886505482)

- **Alternative error:** `Invalid argument: Column families not opened: ..., col2, col1, col0`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#corrupted-data-base)

## Node executable file obsolescence


> Why it's not working?

[context](https://discord.com/channels/891063355526217738/907067604928188426/956917236101156915)


- **Error:** `Verification failed for block <block-id> received from peer <peer-id>`

> Please help

[context](https://discord.com/channels/891063355526217738/907067604928188426/956588552777506927)

> whats wrong?

[context](https://discord.com/channels/891063355526217738/907067604928188426/957203189021704232)


> I updated the node, but still the error, help me fix it

[context](https://discord.com/channels/891063355526217738/907067604928188426/959409095612461056)

> Hello! My node stops synchronize, I was trying to restart it and catch such errors

[context](https://discord.com/channels/891063355526217738/907067604928188426/1003034122974924820)

- **Alternative error:** `runtime requires function imports which are not present on the host`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#node-executable-file-obsolescence)

## Masked service

> what is the problem?

[context](https://discord.com/channels/891063355526217738/907067604928188426/950686508514414603)

- **Error:** `Failed to start gear-node.service: Unit gear-node.service is masked.`

- **Solution:** Please check [existing solution](/docs/node/troubleshooting#masked-service)
