---
order: 1
---

# Joining Testnet

Testnets are testing instances of the Nibiru blockchain. Testnet tokens are separate and distinct from real assets. In order to join a network, you'll need to use its corresponding version of the binary to [run a full node](./node-daemon).{synopsis}

## Available Networks

You can find a table of each Nibiru testnet and its current status below.

| Network | Chain ID         | Description              | Version                                                               | Status |
| ------- | ---------------- | ------------------------ | --------------------------------------------------------------------- | ------ |
| Testnet | nibiru-testnet-1 | Nibiru's default testnet | [v0.15.0](https://github.com/NibiruChain/nibiru/releases/tag/v0.15.0) | Active |
| Testnet | nibiru-testnet-2 | Nibiru's default testnet | [v0.16.2](https://github.com/NibiruChain/nibiru/releases/tag/v0.16.2) | Active |

::: tip
You can see current status of the blockchain at the [Nibiru Block Explorer](https://explorer.testnet.nibiru.fi/).
The explorer allows you to search through transactions, blocks, wallet addresses, and other on-chain data.
:::

## Blockchain Parameters

| Chain ID         | Block Time | Unbonding Time | Voting Period |
| ---------------- | ---------- | -------------- | ------------- |
| nibiru-testnet-1 | 5 seconds  | 21 days        | 48 hours      |
| nibiru-testnet-2 | 2 seconds  | 2 hours        | 24 hours      |

---

## Pre-requisites

### Minimum hardware requirements

- 4CPU
- 16GB RAM
- 500GB of disk space (SSD)

### Update the system

```bash
sudo apt update && sudo apt upgrade --yes
```

### Install nibid

```bash
curl -s https://get.nibiru.fi/! | bash
```

### Verify nibid version

```bash
nibid version

# v0.16.2
```

---

## Init the Chain

1. Init the chain

    ```bash
    nibid init <moniker-name> --chain-id=nibiru-testnet-2 --home $HOME/.nibid
    ```

2. Create a local key pair

    ```bash
    nibid keys add <key-name>
    ```

3. Copy the genesis file to the `$HOME/.nibid/config` folder.
  
    You can get genesis from our networks endpoint with:

    ```bash
    NETWORK=nibiru-testnet-2
    curl -s https://networks.testnet.nibiru.fi/$NETWORK/genesis > $HOME/.nibid/config/genesis.json
    ```

    Or you can download it from the Tendermint RPC endpoint.

    ```bash
    curl -s https://rpc.testnet-2.nibiru.fi/genesis | jq -r .result.genesis > $HOME/.nibid/config/genesis.json
    ```
  
    **(Optional) Verify Genesis File Checksum**
    
    ```bash
    shasum -a 256 $HOME/.nibid/config/genesis.json

    # 5cedb9237c6d807a89468268071647649e90b40ac8cd6d1ded8a72323144880d $HOME/.nibid/config/genesis.json
    ``` 

1. Update seeds list in the configuration file `$HOME/.nibid/config/config.toml`.

    ```bash
    NETWORK=nibiru-testnet-2
    sed -i 's|seeds =.*|seeds = "'$(curl -s https://networks.testnet.nibiru.fi/$NETWORK/seeds)'"|g' $HOME/.nibid/config/config.toml
    ```

2. Set minimum gas prices

    ```bash
    sed -i 's/minimum-gas-prices =.*/minimum-gas-prices = "0.025unibi"/g' $HOME/.nibid/config/app.toml
    ```

3. Setup state-sync parameters for catching up faster with the network (optional)

    ```bash
    NETWORK=nibiru-testnet-2
    sed -i 's|enable =.*|enable = true|g' $HOME/.nibid/config/config.toml
    sed -i 's|rpc_servers =.*|rpc_servers = "'$(curl -s https://networks.testnet.nibiru.fi/$NETWORK/rpc_servers)'"|g' $HOME/.nibid/config/config.toml
    sed -i 's|trust_height =.*|trust_height = '$(curl -s https://networks.testnet.nibiru.fi/$NETWORK/trust_height)'"|g' $HOME/.nibid/config/config.toml
    sed -i 's|trust_hash =.*|trust_hash = "'$(curl -s https://networks.testnet.nibiru.fi/$NETWORK/trust_hash)'"|g' $HOME/.nibid/config/config.toml
    ```

4. Start your node (choose one of the options)

    ```bash
    # without a daemon
    nibid start

    # with systemd
    sudo systemctl start nibiru

    # with cosmovisor
    sudo systemctl start cosmovisor-nibiru
    ```

5. Request tokens from the [Web Faucet for nibiru-testnet-2](https://faucet.testnet-2.nibiru.fi/) if required.

    ```bash
    FAUCET_URL="https://faucet.testnet-2.nibiru.fi/"
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
