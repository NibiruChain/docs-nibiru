---
order: 1
---

# Joining Testnet

Testnets are testing instances of the Nibiru blockchain. Testnet tokens are separate and distinct from real assets. In order to join a network, you'll need to use its corresponding version of the binary to [run a full node](./node-daemon).{synopsis}

## Available Networks

You can find a table of each Nibiru testnet and its current status below. 

| Network | Chain ID         | Description              | Version | Status |
| ------- | ---------------- | ------------------------ | ------- | ------ |
| Testnet | nibiru-testnet-1 | Nibiru's default testnet | v0.15.0 | Active |

::: tip
You can see current status of the blockchain at the [Nibiru Block Explorer](https://explorer.testnet.nibiru.fi/).
The explorer allows you to search through transactions, blocks, wallet addresses, and other on-chain data.
:::

## Blockchain Parameters

| Block Time | Unbonding Time | Voting Period |
| ---------- | -------------- | ------------- |
| 2 seconds  | 21 days        | 10 hours      |

---

## Pre-requisites 

### Minimum hardware requirements

- 2CPU
- 4GB RAM
- 100GB of disk space (SSD)

### Update the system

```bash
sudo apt update
sudo apt upgrade --yes
```

### Verify nibid version

Please check for the correct version of the binary. 

::: tip
If you have not installed `nibid`, please start with the instructions on building the [`nibid` binary](../../dev/cli/nibid-binary).
:::

```bash
nibid version
v0.15.0
```

---

## Cosmovisor 

Please follow the [`cosmovisor` setup instructions](./cosmovisor) if you haven't already.

## Init the Chain

1. Init the chain

    ```bash
    nibid init <moniker-name> --chain-id=nibiru-testnet-1 --home $HOME/.nibid
    ```

2. Create a local key pair

    ```bash
    nibid keys add <key-name>
    nibid keys show <key-name> -a
    ```

3. Copy the genesis file to the `$HOME/.nibid/config` folder.
  
    You can download a copy of the genesis file from the Tendermint RPC endpoint. 
    
    ```bash
    curl -s https://rpc.testnet-1.nibiru.fi/genesis | jq -r .result.genesis > genesis.json
    ```
    
    Then copy the genesis file to the `$HOME/.nibid/config` folder.
    
    ```bash
    cp genesis.json $HOME/.nibid/config/genesis.json
    ```
  
<!-- 
    **Genesis.json sha256**
    
    ```bash
    shasum -a 256 $HOME/.nibid/config/genesis.json
    94fbd99543f4b7da14f292ea1c61b21ba753e3a84cca64454b8c2fd2d209e6de $HOME/.nibid/config/genesis.json
    ``` 
-->

4. Update persistent peers list in the configuration file `$HOME/.nibid/config/config.toml` with the ones from the persistent\_peers.txt.

    Navigate to the directory with the `persistent_peers.txt` file you've received from the Nibiru team manually and run

    ```bash
    export PEERS=$(cat persistent_peers.txt| tr '\n' '_' | sed 's/_/,/g;s/,$//;s/^/"/;s/$/"/') && sed -i "s/persistent_peers = \"\"/persistent_peers = ${PEERS}/g" $HOME/.nibid/config/config.toml
    ```

5. Set minimum gas prices

    ```bash
    sed -i 's/minimum-gas-prices =.*/minimum-gas-prices = "0.025unibi"/g' $HOME/.nibid/config/app.toml
    ```

6. Update block time parameters

    ```bash
    CONFIG_TOML="$HOME/.nibid/config/config.toml"
     sed -i 's/timeout_propose =.*/timeout_propose = "100ms"/g' $CONFIG_TOML
     sed -i 's/timeout_propose_delta =.*/timeout_propose_delta = "500ms"/g' $CONFIG_TOML
     sed -i 's/timeout_prevote =.*/timeout_prevote = "100ms"/g' $CONFIG_TOML
     sed -i 's/timeout_prevote_delta =.*/timeout_prevote_delta = "500ms"/g' $CONFIG_TOML
     sed -i 's/timeout_precommit =.*/timeout_precommit = "100ms"/g' $CONFIG_TOML
     sed -i 's/timeout_precommit_delta =.*/timeout_precommit_delta = "500ms"/g' $CONFIG_TOML
     sed -i 's/timeout_commit =.*/timeout_commit = "1s"/g' $CONFIG_TOML
     sed -i 's/skip_timeout_commit =.*/skip_timeout_commit = false/g' $CONFIG_TOML
    ```

7. Start your node (choose one of the options)

    ```bash
    # without a daemon
    nibid start

    # with systemd
    sudo systemctl start nibiru

    # with cosmovisor
    sudo systemctl start cosmovisor-nibiru
    ```

8. Request tokens from the [Web Faucet for nibiru-testnet-1](https://faucet.testnet-1.nibiru.fi/) if required.

    ```bash
    FAUCET_URL="https://faucet.testnet-1.nibiru.fi/"
    ADDR="..." # your address 
    curl -X POST -d '{"address": "'"$ADDR"'", "coins": ["10000000unibi","100000000000unusd"]}' $FAUCET_URL
    ```

    Please note, that current daily limit for the Web Faucet is 10NIBI (`10000000unibi`) and 100,000 NUSD (`100000000000unusd`).

    You can also use the testnet Faucet from the `#faucet` channel of the [Nibiru Chain Discord](https://discord.gg/sgPw8ZYfpQ).

---

## Next Steps

::: tip
See the [validator docs](../validators) on how to participate as a validator.
:::


## Example `nibid` commands

Ex: Query to see which pools are open for trading on Nibi-Perps and the current mark and index prices.

```bash
nibid query vpool all-pools
```

Ex: Open a long position on BTC with 10 leverage with 100 μNUSD as margin and uncapped slippage tolerance.

```bash
# command
nibid tx perp open-position buy|sell pair leverage quoteAmt baseAmtLimit [flags]
# example
nibid tx perp open-position buy ubtc:unusd 10 100 0 --from <key> --home $HOME/.nibid
```

For the full list of `nibid` commands, see:
- The [`nibid` CLI introduction](../../dev/cli)
- Nibiru [Module Reference](../../dev/x)
