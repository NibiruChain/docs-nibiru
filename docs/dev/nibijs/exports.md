---
order: 2
---

[NibiJS Documentation - v0.8.3](README.md) / Exports

# NibiJS - Exports

## Table of contents

### Enumerations

- [BECH32\_PREFIX](enums/BECH32_PREFIX.md)
- [Signer](enums/Signer.md)

### Classes

- [MsgFactory](classes/MsgFactory.md)
- [QueryCmd](classes/QueryCmd.md)
- [Sdk](classes/Sdk.md)
- [TxCmd](classes/TxCmd.md)

### Interfaces

- [Chain](interfaces/Chain.md)
- [CoinMap](interfaces/CoinMap.md)
- [DexExtension](interfaces/DexExtension.md)
- [EpochsExtension](interfaces/EpochsExtension.md)
- [IEventLog](interfaces/IEventLog.md)
- [IQueryCmd](interfaces/IQueryCmd.md)
- [ISdk](interfaces/ISdk.md)
- [MsgTypeUrls](interfaces/MsgTypeUrls.md)
- [PerpExtension](interfaces/PerpExtension.md)
- [PricefeedExtension](interfaces/PricefeedExtension.md)
- [TxMessage](interfaces/TxMessage.md)
- [VpoolExtension](interfaces/VpoolExtension.md)

### Type Aliases

- [Address](exports.md#address)
- [CosmosSigner](exports.md#cosmossigner)
- [ExtendedQueryClient](exports.md#extendedqueryclient)

### Variables

- [CHAOSNET\_CONFIG](exports.md#chaosnet_config)
- [Chaosnet](exports.md#chaosnet)
- [Devnet](exports.md#devnet)
- [INT\_MULT](exports.md#int_mult)
- [Localnet](exports.md#localnet)
- [Msg](exports.md#msg)
- [Testnet](exports.md#testnet)


### Address

Ƭ **Address**: `string`

#### Defined in

[tx/tx.ts:26](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/tx/tx.ts#L26)

___

### CosmosSigner

Ƭ **CosmosSigner**: `OfflineSigner` & `OfflineDirectSigner` \| `DirectSecp256k1HdWallet`

#### Defined in

[tx/tx.ts:27](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/tx/tx.ts#L27)

___

### ExtendedQueryClient

Ƭ **ExtendedQueryClient**: `BankExtension` & `QueryClient` & `AuthExtension` & [`DexExtension`](interfaces/DexExtension.md) & [`PerpExtension`](interfaces/PerpExtension.md) & [`VpoolExtension`](interfaces/VpoolExtension.md) & [`PricefeedExtension`](interfaces/PricefeedExtension.md) & [`EpochsExtension`](interfaces/EpochsExtension.md)

#### Defined in

[query/query.ts:16](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/query/query.ts#L16)

## Variables

### CHAOSNET\_CONFIG

• `Const` **CHAOSNET\_CONFIG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `grpcPort` | `number` |
| `host` | `undefined` \| `string` |
| `lcdPort` | `number` |
| `tmPort` | `number` |

#### Defined in

[chain/chain.ts:64](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/chain/chain.ts#L64)

___

### Chaosnet

• `Const` **Chaosnet**: [`Chain`](interfaces/Chain.md)

Chaosnet is a private chain with trading bots, an oracle, and a node
running an updated version of Nibiru. This environment is useful for live
testing.

#### Defined in

[chain/chain.ts:76](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/chain/chain.ts#L76)

___

### Devnet

• `Const` **Devnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:62](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/chain/chain.ts#L62)

___

### INT\_MULT

• `Const` **INT\_MULT**: ``1000000``

#### Defined in

[chain/parse.ts:4](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/chain/parse.ts#L4)

___

### Localnet

• `Const` **Localnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:30](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/chain/chain.ts#L30)

___

### Msg

• `Const` **Msg**: [`MsgFactory`](classes/MsgFactory.md)

#### Defined in

[msg/index.ts:16](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/msg/index.ts#L16)

___

### Testnet

• `Const` **Testnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:60](https://github.com/NibiruChain/ts-sdk/blob/5bcbdf3/packages/nibijs/src/chain/chain.ts#L60)

