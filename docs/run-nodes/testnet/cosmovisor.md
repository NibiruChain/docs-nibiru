---
order: 3
---

# Cosmovisor

Cosmovisor is process manager for Cosmos-SDK application binaries that monitors the governance module for incoming chain upgrade proposals. 

If `cosmovisor` sees a proposal get approved, it can automatically download the new binary, stop the currently  running binary, switch from the old binary to the new one, and finally restart the node with the new binary. 

Cosmovisor allows you to download binaries ahead of time for chain upgrades, meaning that you can do **zero (or close to zero) downtime chain upgrades**. It's also useful if your timezone doesn't align well with a chain upgrade. 

::: tip 
It's recommended to use Cosmovisor to run your node, however you can alternatively use `systemd`. 
:::

Rather than having to do stressful DevOps tasks late at night, it's better if you can automate them away, and that's what Cosmovisor tries to do. It's wise to go through the `cosmovisor` setup instructions on testnet before running a full-node on mainnet. 

## Cosmovisor Setup (Option 1, recommended)

::: tip
If you have not installed `nibid`, please start with the instructions on building the [`nibid` binary](../../dev/cli/nibid-binary).
:::

::: warning
When using Cosmovisor, make sure that you do not have auto download of binaries on.
:::

1. Install Cosmovisor 
   Follow these [instructions](https://github.com/cosmos/cosmos-sdk/tree/main/tools/cosmovisor#setup) to install Cosmovisor. 

2. Set up enviroment variables

    ```bash
    export DAEMON_NAME=nibid
    export DAEMON_HOME=$HOME/.nibid
    ```

3. Create required directories

    ```bash
    mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin
    mkdir -p $DAEMON_HOME/cosmovisor/upgrades
    ```

4. Add the genesis version of the binary (currently it is `v0.16.2`) to the `cosmovisor` directory. You can verify your binary location with `which nibid` command. For example:

    ```bash
    cp $(which nibid) $DAEMON_HOME/cosmovisor/genesis/bin
    ```

5. Create the service for the Cosmovisor

    ```bash
    sudo tee /etc/systemd/system/cosmovisor-nibiru.service<<EOF
    [Unit]
    Description=Cosmovisor for Nibiru Node
    Requires=network-online.target
    After=network-online.target

    [Service]
    Type=exec
    User=<your_user>
    Group=<your_user_group>
    ExecStart=/home/<your_user>/go/bin/cosmovisor run start --home /home/<your_user>/.nibid
    Restart=on-failure
    RestartSec=3
    Environment="DAEMON_NAME=nibid"
    Environment="DAEMON_HOME=/home/<your_user>/.nibid"
    Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
    Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
    Environment="DAEMON_LOG_BUFFER_SIZE=512"
    LimitNOFILE=65535

    [Install]
    WantedBy=multi-user.target
    EOF
    ```

    Enable the service:

    ```bash
    sudo systemctl daemon-reload
    sudo systemctl enable cosmovisor-nibiru
    sudo systemctl start cosmovisor-nibiru
    ```

    You can inspect the logs using journalctl.

    ```bash
    journalctl -fu cosmovisor-nibiru
    ```

---

## nibid systemd (Option 2)

1. Create a service file

    ```bash
    sudo tee /etc/systemd/system/nibiru.service<<EOF
    [Unit]
    Description=Nibiru Node
    Requires=network-online.target
    After=network-online.target

    [Service]
    Type=exec
    User=<your_user>
    Group=<your_user_group>
    ExecStart=/home/<your_user>/go/bin/nibid start --home /home/<your_user>/.nibid
    Restart=on-failure
    ExecReload=/bin/kill -HUP $MAINPID
    KillSignal=SIGTERM
    PermissionsStartOnly=true
    LimitNOFILE=65535

    [Install]
    WantedBy=multi-user.target
    EOF
    ```

2. Enable the service

    ```bash
    sudo systemctl daemon-reload
    sudo systemctl enable nibiru
    ```