---
sidebar_label: Gear Node Q&A
sidebar_position: 9
---

# Gear Node Q&A

Summary of common questions and answers from the official Discord #node channel.

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

## Unavailable `LOCK` file

- **Error:** `IO error: While lock file /root/.local/share/gear-node/chains/staging_testnet_v2/db/full/LOCK: Resource temporarily unavailable`

- **Solution:** You seem to be running several Gear node instances. Note that only one node instance is allowed to run. You likely have configured the node as a service and then ran the second instance from the command line. You should either stop the service or don't run the Gear node from the command line.

    You can see the current node processes by running the command:

    ```shell
    ps aux | grep gear-node
    ```

    If you want to break all node processes you may run:

    ```shell
    pkill -sigint gear-node
    ```

    Note that the SystemD service can't be stopped by the command above. Run instead:

    ```shell
    sudo systemctl stop gear-node
    ```

## Unexpected argument when starting the node service

- **Error:** `Found argument '\' which wasn't expected, or isn't valid in this context`

- **Solution:** The `gear-node.service` configuration file seems to be misconfigured. Some versions of SystemD do not accept the backslash character (`\`) as a line break. Therefore, it is better to write each of the config entry on one line.

    Refer to https://wiki.gear-tech.io/node/node-as-service for properly configuring the node as a service.

    Don't forget to restart the node after fixing the service configuration:

    ```shell
    sudo systemctl daemon-reload
    sudo systemctl restart gear-node
    ```

## Corrupted data base

- **Error:** `Database version cannot be read from existing db_version file`

- **Alternative error:** `Invalid argument: Column families not opened: ..., col2, col1, col0`

- **Solution:** The root of this problem is the lack of the disk free space. You may check the free space using the following command:

    ```shell
    df -h
    ```

    Also, you may check how many space is used by the blockchain DB:

    ```shell
    du -h $HOME/.local/share/gear-node/chains/staging_testnet_v2/db/full
    ```

    Please refer to the [System Requirements](/docs/node/setting-up#system-requirements) to see the minimum disk space required.

    You need to free more space then purge the chain:

    ```shell
    sudo systemctl stop gear-node
    # Provide more free space on the disk
    gear-node purge-chain
    sudo systemctl start gear-node
    ```

## Node executable file obsolescence

- **Error:** `Verification failed for block <block-id> received from peer <peer-id>`

- **Alternative error:** `runtime requires function imports which are not present on the host`

- **Solution:** [Update](/docs/node/node-as-service#update-the-node-with-the-new-version) the node binary to the latest version.

## Masked service

- **Error:** `Failed to start gear-node.service: Unit gear-node.service is masked.`

- **Solution:** Please check: https://askubuntu.com/questions/1017311/what-is-a-masked-service
