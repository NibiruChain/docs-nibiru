# proto - dex
<a name="top"></a>

## Table of Contents

- [dex/v1/event.proto](#dex_v1_event-proto)
    - [EventAssetsSwapped](#nibiru-dex-v1-EventAssetsSwapped)
    - [EventPoolCreated](#nibiru-dex-v1-EventPoolCreated)
    - [EventPoolExited](#nibiru-dex-v1-EventPoolExited)
    - [EventPoolJoined](#nibiru-dex-v1-EventPoolJoined)
  
- [dex/v1/genesis.proto](#dex_v1_genesis-proto)
    - [GenesisState](#nibiru-dex-v1-GenesisState)
  
- [dex/v1/params.proto](#dex_v1_params-proto)
    - [Params](#nibiru-dex-v1-Params)
  
- [dex/v1/pool.proto](#dex_v1_pool-proto)
    - [Pool](#nibiru-dex-v1-Pool)
    - [PoolAsset](#nibiru-dex-v1-PoolAsset)
    - [PoolParams](#nibiru-dex-v1-PoolParams)
  
    - [PoolType](#nibiru-dex-v1-PoolType)
  
- [dex/v1/query.proto](#dex_v1_query-proto)
    - [QueryExitExactAmountInRequest](#nibiru-dex-v1-QueryExitExactAmountInRequest)
    - [QueryExitExactAmountInResponse](#nibiru-dex-v1-QueryExitExactAmountInResponse)
    - [QueryExitExactAmountOutRequest](#nibiru-dex-v1-QueryExitExactAmountOutRequest)
    - [QueryExitExactAmountOutResponse](#nibiru-dex-v1-QueryExitExactAmountOutResponse)
    - [QueryJoinExactAmountInRequest](#nibiru-dex-v1-QueryJoinExactAmountInRequest)
    - [QueryJoinExactAmountInResponse](#nibiru-dex-v1-QueryJoinExactAmountInResponse)
    - [QueryJoinExactAmountOutRequest](#nibiru-dex-v1-QueryJoinExactAmountOutRequest)
    - [QueryJoinExactAmountOutResponse](#nibiru-dex-v1-QueryJoinExactAmountOutResponse)
    - [QueryNumPoolsRequest](#nibiru-dex-v1-QueryNumPoolsRequest)
    - [QueryNumPoolsResponse](#nibiru-dex-v1-QueryNumPoolsResponse)
    - [QueryParamsRequest](#nibiru-dex-v1-QueryParamsRequest)
    - [QueryParamsResponse](#nibiru-dex-v1-QueryParamsResponse)
    - [QueryPoolNumberRequest](#nibiru-dex-v1-QueryPoolNumberRequest)
    - [QueryPoolNumberResponse](#nibiru-dex-v1-QueryPoolNumberResponse)
    - [QueryPoolParamsRequest](#nibiru-dex-v1-QueryPoolParamsRequest)
    - [QueryPoolParamsResponse](#nibiru-dex-v1-QueryPoolParamsResponse)
    - [QueryPoolRequest](#nibiru-dex-v1-QueryPoolRequest)
    - [QueryPoolResponse](#nibiru-dex-v1-QueryPoolResponse)
    - [QueryPoolsRequest](#nibiru-dex-v1-QueryPoolsRequest)
    - [QueryPoolsResponse](#nibiru-dex-v1-QueryPoolsResponse)
    - [QuerySpotPriceRequest](#nibiru-dex-v1-QuerySpotPriceRequest)
    - [QuerySpotPriceResponse](#nibiru-dex-v1-QuerySpotPriceResponse)
    - [QuerySwapExactAmountInRequest](#nibiru-dex-v1-QuerySwapExactAmountInRequest)
    - [QuerySwapExactAmountInResponse](#nibiru-dex-v1-QuerySwapExactAmountInResponse)
    - [QuerySwapExactAmountOutRequest](#nibiru-dex-v1-QuerySwapExactAmountOutRequest)
    - [QuerySwapExactAmountOutResponse](#nibiru-dex-v1-QuerySwapExactAmountOutResponse)
    - [QueryTotalLiquidityRequest](#nibiru-dex-v1-QueryTotalLiquidityRequest)
    - [QueryTotalLiquidityResponse](#nibiru-dex-v1-QueryTotalLiquidityResponse)
    - [QueryTotalPoolLiquidityRequest](#nibiru-dex-v1-QueryTotalPoolLiquidityRequest)
    - [QueryTotalPoolLiquidityResponse](#nibiru-dex-v1-QueryTotalPoolLiquidityResponse)
    - [QueryTotalSharesRequest](#nibiru-dex-v1-QueryTotalSharesRequest)
    - [QueryTotalSharesResponse](#nibiru-dex-v1-QueryTotalSharesResponse)
  
    - [Query](#nibiru-dex-v1-Query)
  
- [dex/v1/tx.proto](#dex_v1_tx-proto)
    - [MsgCreatePool](#nibiru-dex-v1-MsgCreatePool)
    - [MsgCreatePoolResponse](#nibiru-dex-v1-MsgCreatePoolResponse)
    - [MsgExitPool](#nibiru-dex-v1-MsgExitPool)
    - [MsgExitPoolResponse](#nibiru-dex-v1-MsgExitPoolResponse)
    - [MsgJoinPool](#nibiru-dex-v1-MsgJoinPool)
    - [MsgJoinPoolResponse](#nibiru-dex-v1-MsgJoinPoolResponse)
    - [MsgSwapAssets](#nibiru-dex-v1-MsgSwapAssets)
    - [MsgSwapAssetsResponse](#nibiru-dex-v1-MsgSwapAssetsResponse)
  
    - [Msg](#nibiru-dex-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="dex_v1_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## dex/v1/event.proto



<a name="nibiru-dex-v1-EventAssetsSwapped"></a>

### EventAssetsSwapped



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| pool_id | [uint64](#uint64) |  |  |
| token_in | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| token_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="nibiru-dex-v1-EventPoolCreated"></a>

### EventPoolCreated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creator | [string](#string) |  |  |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-EventPoolExited"></a>

### EventPoolExited



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| pool_id | [uint64](#uint64) |  |  |
| pool_shares_in | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| tokens_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="nibiru-dex-v1-EventPoolJoined"></a>

### EventPoolJoined



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| pool_id | [uint64](#uint64) |  |  |
| tokens_in | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| pool_shares_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| rem_coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |





 

 

 

 



<a name="dex_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## dex/v1/genesis.proto



<a name="nibiru-dex-v1-GenesisState"></a>

### GenesisState
GenesisState defines the dex module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#nibiru-dex-v1-Params) |  |  |





 

 

 

 



<a name="dex_v1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## dex/v1/params.proto



<a name="nibiru-dex-v1-Params"></a>

### Params
Params defines the parameters for the module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| starting_pool_number | [uint64](#uint64) |  | The start pool number, i.e. the first pool number that isn&#39;t taken yet. |
| pool_creation_fee | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The cost of creating a pool, taken from the pool creator&#39;s account. |
| whitelisted_asset | [string](#string) | repeated | The assets that can be used to create liquidity pools |





 

 

 

 



<a name="dex_v1_pool-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## dex/v1/pool.proto



<a name="nibiru-dex-v1-Pool"></a>

### Pool



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | The pool id. |
| address | [string](#string) |  | The pool account address. |
| pool_params | [PoolParams](#nibiru-dex-v1-PoolParams) |  | Fees and other pool-specific parameters. |
| pool_assets | [PoolAsset](#nibiru-dex-v1-PoolAsset) | repeated | These are assumed to be sorted by denomiation. They contain the pool asset and the information about the weight |
| total_weight | [string](#string) |  | sum of all non-normalized pool weights |
| total_shares | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | sum of all LP tokens sent out |






<a name="nibiru-dex-v1-PoolAsset"></a>

### PoolAsset
Which assets the pool contains.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | Coins we are talking about, the denomination must be unique amongst all PoolAssets for this pool. |
| weight | [string](#string) |  | Weight that is not normalized. This weight must be less than 2^50 |






<a name="nibiru-dex-v1-PoolParams"></a>

### PoolParams
Configuration parameters for the pool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| swap_fee | [string](#string) |  |  |
| exit_fee | [string](#string) |  |  |
| A | [string](#string) |  | Amplification Parameter (A): Larger value of A make the curve better resemble a straight line in the center (when pool is near balance). Highly volatile assets should use a lower value, while assets that are closer together may be best with a higher value. This is only used if the pool_type is set to 1 (stableswap) |
| pool_type | [PoolType](#nibiru-dex-v1-PoolType) |  |  |





 


<a name="nibiru-dex-v1-PoolType"></a>

### PoolType
- `balancer`: Balancer are pools defined by the equation xy=k, extended by the weighs introduced by Balancer.
- `stableswap`: Stableswap pools are defined by a combination of constant-product and constant-sum pool

| Name | Number | Description |
| ---- | ------ | ----------- |
| BALANCER | 0 |  |
| STABLESWAP | 1 |  |


 

 

 



<a name="dex_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## dex/v1/query.proto



<a name="nibiru-dex-v1-QueryExitExactAmountInRequest"></a>

### QueryExitExactAmountInRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |
| pool_shares_in | [string](#string) |  | amount of pool shares to return to pool |






<a name="nibiru-dex-v1-QueryExitExactAmountInResponse"></a>

### QueryExitExactAmountInResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tokens_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | coins obtained after exiting |






<a name="nibiru-dex-v1-QueryExitExactAmountOutRequest"></a>

### QueryExitExactAmountOutRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-QueryExitExactAmountOutResponse"></a>

### QueryExitExactAmountOutResponse







<a name="nibiru-dex-v1-QueryJoinExactAmountInRequest"></a>

### QueryJoinExactAmountInRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |
| tokens_in | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="nibiru-dex-v1-QueryJoinExactAmountInResponse"></a>

### QueryJoinExactAmountInResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_shares_out | [string](#string) |  | amount of pool shares returned to user after join |
| rem_coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | coins remaining after pool join |






<a name="nibiru-dex-v1-QueryJoinExactAmountOutRequest"></a>

### QueryJoinExactAmountOutRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-QueryJoinExactAmountOutResponse"></a>

### QueryJoinExactAmountOutResponse







<a name="nibiru-dex-v1-QueryNumPoolsRequest"></a>

### QueryNumPoolsRequest







<a name="nibiru-dex-v1-QueryNumPoolsResponse"></a>

### QueryNumPoolsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| num_pools | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is request type for the Query/Params RPC method.






<a name="nibiru-dex-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#nibiru-dex-v1-Params) |  | params holds all the parameters of this module. |






<a name="nibiru-dex-v1-QueryPoolNumberRequest"></a>

### QueryPoolNumberRequest







<a name="nibiru-dex-v1-QueryPoolNumberResponse"></a>

### QueryPoolNumberResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-QueryPoolParamsRequest"></a>

### QueryPoolParamsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-QueryPoolParamsResponse"></a>

### QueryPoolParamsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_params | [PoolParams](#nibiru-dex-v1-PoolParams) |  |  |






<a name="nibiru-dex-v1-QueryPoolRequest"></a>

### QueryPoolRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-QueryPoolResponse"></a>

### QueryPoolResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool | [Pool](#nibiru-dex-v1-Pool) |  |  |






<a name="nibiru-dex-v1-QueryPoolsRequest"></a>

### QueryPoolsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="nibiru-dex-v1-QueryPoolsResponse"></a>

### QueryPoolsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pools | [Pool](#nibiru-dex-v1-Pool) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="nibiru-dex-v1-QuerySpotPriceRequest"></a>

### QuerySpotPriceRequest
Returns the amount of tokenInDenom to produce 1 tokenOutDenom
For example, if the price of NIBI = 9.123 NUSD, then setting tokenInDenom=NUSD
and tokenOutDenom=NIBI would give &#34;9.123&#34;.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |
| token_in_denom | [string](#string) |  | the denomination of the token you are giving into the pool |
| token_out_denom | [string](#string) |  | the denomination of the token you are taking out of the pool |






<a name="nibiru-dex-v1-QuerySpotPriceResponse"></a>

### QuerySpotPriceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spot_price | [string](#string) |  |  |






<a name="nibiru-dex-v1-QuerySwapExactAmountInRequest"></a>

### QuerySwapExactAmountInRequest
Given an exact amount of tokens in and a target tokenOutDenom, calculates
the expected amount of tokens out received from a swap.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |
| token_in | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| token_out_denom | [string](#string) |  |  |






<a name="nibiru-dex-v1-QuerySwapExactAmountInResponse"></a>

### QuerySwapExactAmountInResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="nibiru-dex-v1-QuerySwapExactAmountOutRequest"></a>

### QuerySwapExactAmountOutRequest
Given an exact amount of tokens out and a target tokenInDenom, calculates
the expected amount of tokens in required to do the swap.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |
| token_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| token_in_denom | [string](#string) |  |  |






<a name="nibiru-dex-v1-QuerySwapExactAmountOutResponse"></a>

### QuerySwapExactAmountOutResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_in | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="nibiru-dex-v1-QueryTotalLiquidityRequest"></a>

### QueryTotalLiquidityRequest
--------------------------------------------
Query total liquidity the protocol






<a name="nibiru-dex-v1-QueryTotalLiquidityResponse"></a>

### QueryTotalLiquidityResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| liquidity | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="nibiru-dex-v1-QueryTotalPoolLiquidityRequest"></a>

### QueryTotalPoolLiquidityRequest
--------------------------------------------
Query total liquidity for a pool


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-QueryTotalPoolLiquidityResponse"></a>

### QueryTotalPoolLiquidityResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| liquidity | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="nibiru-dex-v1-QueryTotalSharesRequest"></a>

### QueryTotalSharesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-QueryTotalSharesResponse"></a>

### QueryTotalSharesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_shares | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | sum of all LP tokens sent out |





 

 

 


<a name="nibiru-dex-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#nibiru-dex-v1-QueryParamsRequest) | [QueryParamsResponse](#nibiru-dex-v1-QueryParamsResponse) | Parameters of the dex module. |
| PoolNumber | [QueryPoolNumberRequest](#nibiru-dex-v1-QueryPoolNumberRequest) | [QueryPoolNumberResponse](#nibiru-dex-v1-QueryPoolNumberResponse) | Next available pool id number. |
| Pool | [QueryPoolRequest](#nibiru-dex-v1-QueryPoolRequest) | [QueryPoolResponse](#nibiru-dex-v1-QueryPoolResponse) | Fetch a pool by id. |
| Pools | [QueryPoolsRequest](#nibiru-dex-v1-QueryPoolsRequest) | [QueryPoolsResponse](#nibiru-dex-v1-QueryPoolsResponse) | Returns all pools. |
| PoolParams | [QueryPoolParamsRequest](#nibiru-dex-v1-QueryPoolParamsRequest) | [QueryPoolParamsResponse](#nibiru-dex-v1-QueryPoolParamsResponse) | Parameters of a single pool. |
| NumPools | [QueryNumPoolsRequest](#nibiru-dex-v1-QueryNumPoolsRequest) | [QueryNumPoolsResponse](#nibiru-dex-v1-QueryNumPoolsResponse) | Number of pools. |
| TotalLiquidity | [QueryTotalLiquidityRequest](#nibiru-dex-v1-QueryTotalLiquidityRequest) | [QueryTotalLiquidityResponse](#nibiru-dex-v1-QueryTotalLiquidityResponse) | Total liquidity across all pools. |
| TotalPoolLiquidity | [QueryTotalPoolLiquidityRequest](#nibiru-dex-v1-QueryTotalPoolLiquidityRequest) | [QueryTotalPoolLiquidityResponse](#nibiru-dex-v1-QueryTotalPoolLiquidityResponse) | Total liquidity in a single pool. |
| TotalShares | [QueryTotalSharesRequest](#nibiru-dex-v1-QueryTotalSharesRequest) | [QueryTotalSharesResponse](#nibiru-dex-v1-QueryTotalSharesResponse) | Total shares in a single pool. |
| SpotPrice | [QuerySpotPriceRequest](#nibiru-dex-v1-QuerySpotPriceRequest) | [QuerySpotPriceResponse](#nibiru-dex-v1-QuerySpotPriceResponse) | Instantaneous price of an asset in a pool. |
| EstimateSwapExactAmountIn | [QuerySwapExactAmountInRequest](#nibiru-dex-v1-QuerySwapExactAmountInRequest) | [QuerySwapExactAmountInResponse](#nibiru-dex-v1-QuerySwapExactAmountInResponse) | Estimates the amount of assets returned given an exact amount of tokens to swap. |
| EstimateSwapExactAmountOut | [QuerySwapExactAmountOutRequest](#nibiru-dex-v1-QuerySwapExactAmountOutRequest) | [QuerySwapExactAmountOutResponse](#nibiru-dex-v1-QuerySwapExactAmountOutResponse) | Estimates the amount of tokens required to return the exact amount of assets requested. |
| EstimateJoinExactAmountIn | [QueryJoinExactAmountInRequest](#nibiru-dex-v1-QueryJoinExactAmountInRequest) | [QueryJoinExactAmountInResponse](#nibiru-dex-v1-QueryJoinExactAmountInResponse) | Estimates the amount of pool shares returned given an amount of tokens to join. |
| EstimateJoinExactAmountOut | [QueryJoinExactAmountOutRequest](#nibiru-dex-v1-QueryJoinExactAmountOutRequest) | [QueryJoinExactAmountOutResponse](#nibiru-dex-v1-QueryJoinExactAmountOutResponse) | Estimates the amount of tokens required to obtain an exact amount of pool shares. |
| EstimateExitExactAmountIn | [QueryExitExactAmountInRequest](#nibiru-dex-v1-QueryExitExactAmountInRequest) | [QueryExitExactAmountInResponse](#nibiru-dex-v1-QueryExitExactAmountInResponse) | Estimates the amount of tokens returned to the user given an exact amount of pool shares. |
| EstimateExitExactAmountOut | [QueryExitExactAmountOutRequest](#nibiru-dex-v1-QueryExitExactAmountOutRequest) | [QueryExitExactAmountOutResponse](#nibiru-dex-v1-QueryExitExactAmountOutResponse) | Estimates the amount of pool shares required to extract an exact amount of tokens from the pool. |

 



<a name="dex_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## dex/v1/tx.proto



<a name="nibiru-dex-v1-MsgCreatePool"></a>

### MsgCreatePool



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creator | [string](#string) |  |  |
| pool_params | [PoolParams](#nibiru-dex-v1-PoolParams) |  |  |
| pool_assets | [PoolAsset](#nibiru-dex-v1-PoolAsset) | repeated |  |






<a name="nibiru-dex-v1-MsgCreatePoolResponse"></a>

### MsgCreatePoolResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  |  |






<a name="nibiru-dex-v1-MsgExitPool"></a>

### MsgExitPool



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| pool_id | [uint64](#uint64) |  |  |
| pool_shares | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="nibiru-dex-v1-MsgExitPoolResponse"></a>

### MsgExitPoolResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tokens_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="nibiru-dex-v1-MsgJoinPool"></a>

### MsgJoinPool
Message to join a pool (identified by poolId) with a set of tokens to deposit.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| pool_id | [uint64](#uint64) |  |  |
| tokens_in | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| use_all_coins | [bool](#bool) |  |  |






<a name="nibiru-dex-v1-MsgJoinPoolResponse"></a>

### MsgJoinPoolResponse
Response when a user joins a pool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool | [Pool](#nibiru-dex-v1-Pool) |  | the final state of the pool after a join |
| num_pool_shares_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | sum of LP tokens minted from the join |
| remaining_coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | remaining tokens from attempting to join the pool |






<a name="nibiru-dex-v1-MsgSwapAssets"></a>

### MsgSwapAssets



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| pool_id | [uint64](#uint64) |  |  |
| token_in | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| token_out_denom | [string](#string) |  |  |






<a name="nibiru-dex-v1-MsgSwapAssetsResponse"></a>

### MsgSwapAssetsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |





 

 

 


<a name="nibiru-dex-v1-Msg"></a>

### Msg
Msg defines the Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreatePool | [MsgCreatePool](#nibiru-dex-v1-MsgCreatePool) | [MsgCreatePoolResponse](#nibiru-dex-v1-MsgCreatePoolResponse) | Used to create a pool. |
| JoinPool | [MsgJoinPool](#nibiru-dex-v1-MsgJoinPool) | [MsgJoinPoolResponse](#nibiru-dex-v1-MsgJoinPoolResponse) | Join a pool as a liquidity provider. |
| ExitPool | [MsgExitPool](#nibiru-dex-v1-MsgExitPool) | [MsgExitPoolResponse](#nibiru-dex-v1-MsgExitPoolResponse) | Exit a pool position by returning LP shares |
| SwapAssets | [MsgSwapAssets](#nibiru-dex-v1-MsgSwapAssets) | [MsgSwapAssetsResponse](#nibiru-dex-v1-MsgSwapAssetsResponse) | Swap assets in a pool |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

