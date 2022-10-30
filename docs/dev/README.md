# Protocol Development 

Summary on all developer tooling for protocol and smart contract development on Nibiru. {synopsis}
## Modules of the Nibiru Blockchain

See the [Module Reference](./x/) for comprehensive documentation.

Nibiru's Cosmos-SDK modules define the core logic for Nibi-Perps, Nibi-Swap, and the decentralized oracle network. Nibiru's modules are defined in the `/x` subfolder of the protocol's Golang code (e.g. the `perp` module is defined in the `x/perp` folder).  

## Clients

Both the TypeScript SDK and Python SDK provide comprehensive clients for interacting with the Nibiru blockchain and broadcasting transactions programmatically. Each client enables you to 
1. Create accounts or restore them from mnemnoncis and private keys
2. Query balances, events, and the state of the chain
3. Sign and broadcast transactions

::: tip
You can send multi-message transactions with both NibiJS and `nibiru.py` but not the `nibid` CLI. 
:::

### [Nibid Command-Line Interface (CLI) [docs]](./cli)

The **`nibid` binary is needed for running nodes** and sending IBC transfers without using a wallet extension.

### [NibiJS — Nibiru TypeScript SDK [docs]](./nibijs)

NibiJS is particularly useful for building web applications in frameworks like Vue and React, and interacting with wallet extensions like Keplr and MetaMask.

- GitHub repo: [NibiruChain/ts-sdk][repo-ts-sdk]
- Published as [@nibiruchain/nibijs npm package](https://www.npmjs.com/package/@nibiruchain/nibijs)

### [Nibiru Python SDK [docs]](./py-sdk)

- GitHub repo: [NibiruChain/py-sdk][repo-py-sdk]
- Published as [nibiru - PyPI package](https://pypi.org/project/nibiru/)

## Other Tools

### Block Explorer

- [Nibiru Block Explorer][tool-explorer]: Block explorer for Nibiru 

### Testnet Faucet

- [Testnet Faucet (Repo)][repo-faucet]: Send tokens to your wallet on testnet 
- [Usage Example GitHub Gist](https://gist.github.com/Unique-Divine/f2692c42a758afb98db55be3c4304f40#file-04_faucet-sh)
    ```shell
    FAUCET_URL="https://faucet.testnet-1.nibiru.fi/"
    ADDR="..." # ← with your address
    curl -X POST -d '{"address": "'"$ADDR"'", "coins": ["10000000unibi","100000000000unusd"]}' $FAUCET_URL
    ```


[tool-explorer]: https://explorer.testnet.nibiru.fi/
[repo-faucet]: https://github.com/NibiruChain/faucet
[repo-py-sdk]: https://github.com/NibiruChain/py-sdk
[repo-ts-sdk]: https://github.com/NibiruChain/ts-sdk

## Nibiru Discord Server

If you would like to connect with the developer community and ask questions related to software development on Nibiru, join the [Nibiru Discord server][discord-url]. Once you've joined the server:

[discord-url]: https://discord.gg/sgPw8ZYfpQ
