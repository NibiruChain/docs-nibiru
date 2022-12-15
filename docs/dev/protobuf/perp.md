# proto - perp
<a name="top"></a>

## Table of Contents

- [perp/v1/event.proto](#perp_v1_event-proto)
    - [FundingRateChangedEvent](#nibiru-perp-v1-FundingRateChangedEvent)
    - [MetricsEvent](#nibiru-perp-v1-MetricsEvent)
    - [PositionChangedEvent](#nibiru-perp-v1-PositionChangedEvent)
    - [PositionLiquidatedEvent](#nibiru-perp-v1-PositionLiquidatedEvent)
    - [PositionSettledEvent](#nibiru-perp-v1-PositionSettledEvent)
  
- [perp/v1/genesis.proto](#perp_v1_genesis-proto)
    - [GenesisState](#nibiru-perp-v1-GenesisState)
  
- [perp/v1/query.proto](#perp_v1_query-proto)
    - [QueryCumulativePremiumFractionRequest](#nibiru-perp-v1-QueryCumulativePremiumFractionRequest)
    - [QueryCumulativePremiumFractionResponse](#nibiru-perp-v1-QueryCumulativePremiumFractionResponse)
    - [QueryMetricsRequest](#nibiru-perp-v1-QueryMetricsRequest)
    - [QueryMetricsResponse](#nibiru-perp-v1-QueryMetricsResponse)
    - [QueryParamsRequest](#nibiru-perp-v1-QueryParamsRequest)
    - [QueryParamsResponse](#nibiru-perp-v1-QueryParamsResponse)
    - [QueryPositionRequest](#nibiru-perp-v1-QueryPositionRequest)
    - [QueryPositionResponse](#nibiru-perp-v1-QueryPositionResponse)
    - [QueryPositionsRequest](#nibiru-perp-v1-QueryPositionsRequest)
    - [QueryPositionsResponse](#nibiru-perp-v1-QueryPositionsResponse)
  
    - [Query](#nibiru-perp-v1-Query)
  
- [perp/v1/state.proto](#perp_v1_state-proto)
    - [LiquidateResp](#nibiru-perp-v1-LiquidateResp)
    - [Metrics](#nibiru-perp-v1-Metrics)
    - [PairMetadata](#nibiru-perp-v1-PairMetadata)
    - [Params](#nibiru-perp-v1-Params)
    - [Position](#nibiru-perp-v1-Position)
    - [PositionResp](#nibiru-perp-v1-PositionResp)
    - [PrepaidBadDebt](#nibiru-perp-v1-PrepaidBadDebt)
  
    - [MarginCalculationPriceOption](#nibiru-perp-v1-MarginCalculationPriceOption)
    - [PnLCalcOption](#nibiru-perp-v1-PnLCalcOption)
    - [PnLPreferenceOption](#nibiru-perp-v1-PnLPreferenceOption)
    - [Side](#nibiru-perp-v1-Side)
  
- [perp/v1/tx.proto](#perp_v1_tx-proto)
    - [MsgAddMargin](#nibiru-perp-v1-MsgAddMargin)
    - [MsgAddMarginResponse](#nibiru-perp-v1-MsgAddMarginResponse)
    - [MsgClosePosition](#nibiru-perp-v1-MsgClosePosition)
    - [MsgClosePositionResponse](#nibiru-perp-v1-MsgClosePositionResponse)
    - [MsgDonateToEcosystemFund](#nibiru-perp-v1-MsgDonateToEcosystemFund)
    - [MsgDonateToEcosystemFundResponse](#nibiru-perp-v1-MsgDonateToEcosystemFundResponse)
    - [MsgLiquidate](#nibiru-perp-v1-MsgLiquidate)
    - [MsgLiquidateResponse](#nibiru-perp-v1-MsgLiquidateResponse)
    - [MsgMultiLiquidate](#nibiru-perp-v1-MsgMultiLiquidate)
    - [MsgMultiLiquidate.MultiLiquidation](#nibiru-perp-v1-MsgMultiLiquidate-MultiLiquidation)
    - [MsgMultiLiquidateResponse](#nibiru-perp-v1-MsgMultiLiquidateResponse)
    - [MsgMultiLiquidateResponse.MultiLiquidateResponse](#nibiru-perp-v1-MsgMultiLiquidateResponse-MultiLiquidateResponse)
    - [MsgOpenPosition](#nibiru-perp-v1-MsgOpenPosition)
    - [MsgOpenPositionResponse](#nibiru-perp-v1-MsgOpenPositionResponse)
    - [MsgRemoveMargin](#nibiru-perp-v1-MsgRemoveMargin)
    - [MsgRemoveMarginResponse](#nibiru-perp-v1-MsgRemoveMarginResponse)
  
    - [Msg](#nibiru-perp-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="perp_v1_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## perp/v1/event.proto



<a name="nibiru-perp-v1-FundingRateChangedEvent"></a>

### FundingRateChangedEvent
Emitted when a new funding rate is calculated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [string](#string) |  | The pair for which the funding rate was calculated. |
| mark_price | [string](#string) |  | The mark price of the pair. |
| index_price | [string](#string) |  | The oracle index price of the pair. |
| latest_funding_rate | [string](#string) |  | The latest funding rate. |
| latest_premium_fraction | [string](#string) |  | The latest premium fraction just calculated. |
| cumulative_premium_fraction | [string](#string) |  | The latest cumulative premium fraction. The funding payment a position will pay is the difference between this value and the latest cumulative premium fraction on the position, multiplied by the position size. |
| block_height | [int64](#int64) |  | The block number at which the funding rate was calculated. |
| block_time_ms | [int64](#int64) |  | The block time in unix milliseconds at which the funding rate was calculated. |






<a name="nibiru-perp-v1-MetricsEvent"></a>

### MetricsEvent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [string](#string) |  |  |
| net_size | [string](#string) |  | Sum of all active position sizes for the pair. |
| volumeQuote | [string](#string) |  | Total notional volume for the pair. |
| volumeBase | [string](#string) |  | Total size volume for the pair. |
| block_height | [int64](#int64) |  | The block number at which metrics were generated. |
| block_time_ms | [int64](#int64) |  | The block time in unix milliseconds at which metrics were generated. |






<a name="nibiru-perp-v1-PositionChangedEvent"></a>

### PositionChangedEvent
Emitted when a position changes.
TODO: Is there a way to split this into different events without creating too much complexity?


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [string](#string) |  | identifier of the corresponding virtual pool for the position |
| trader_address | [string](#string) |  | owner of the position. |
| margin | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | Amount of collateral (quote units) backing the position after the change. |
| position_notional | [string](#string) |  | Position notional (quote units) after the change. In general, &#39;notional = baseAmount * priceQuotePerBase&#39;, where size is the baseAmount. |
| exchanged_size | [string](#string) |  | Exchanged size is the magnitude of the change to position size (base units). The size is a signed quantity expressing how much exposure a position has in base units of the pair. |
| exchanged_notional | [string](#string) |  | Exchanged notional is the value of the exchanged size in quote units. exchangedNotional = posBefore.OpenNotional &#43; (direction * realizedPnl), where &#39;posBefore&#39; is the position before the change, and direction is 1 if posBefore.Size &gt; 0 or -1 if posBefore.Size &lt; 0, |
| transaction_fee | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | Transaction fee paid. A &#34;taker&#34; fee. |
| position_size | [string](#string) |  | Position size after the change. |
| realized_pnl | [string](#string) |  | realize profits and losses after the change |
| unrealized_pnl_after | [string](#string) |  | unrealized profits and losses after the change |
| bad_debt | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | Amount of bad debt cleared by the PerpEF during the change. Bad debt is negative net margin past the liquidation point of a position. |
| mark_price | [string](#string) |  | Mark price, synonymous with mark price in this context, is the quotient of the quote reserves and base reserves |
| funding_payment | [string](#string) |  | A funding payment made or received by the trader on the current position. &#39;fundingPayment&#39; is positive if &#39;owner&#39; is the sender and negative if &#39;owner&#39; is the receiver of the payment. Its magnitude is abs(vSize * fundingRate). Funding payments act to converge the mark price (vPrice) and index price (average price on major exchanges). |
| block_height | [int64](#int64) |  | The block number at which this position was changed. |
| block_time_ms | [int64](#int64) |  | The block time in unix milliseconds at which this position was changed. |






<a name="nibiru-perp-v1-PositionLiquidatedEvent"></a>

### PositionLiquidatedEvent
Emitted when a position is liquidated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [string](#string) |  | identifier of the corresponding virtual pool for the position |
| trader_address | [string](#string) |  | owner of the position. |
| exchanged_quote_amount | [string](#string) |  | margin * leverage * vPrice. &#39;notional&#39; is the virtual size times the virtual price on &#39;vpool&#39;. |
| exchanged_position_size | [string](#string) |  | virtual amount of base assets for the position, which would be margin * leverage * priceBasePerQuote. |
| liquidator_address | [string](#string) |  | Address of the account that executed the tx. |
| fee_to_liquidator | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | Commission (in margin units) received by &#39;liquidator&#39;. |
| fee_to_ecosystem_fund | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | Commission (in margin units) given to the ecosystem fund. |
| bad_debt | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | Bad debt (margin units) cleared by the PerpEF during the tx. Bad debt is negative net margin past the liquidation point of a position. |
| margin | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | Remaining margin in the position after liquidation |
| position_notional | [string](#string) |  | Remaining position notional in the position after liquidation |
| position_size | [string](#string) |  | Remaining position size in the position after liquidation |
| unrealizedPnl | [string](#string) |  | Unrealized PnL in the position after liquidation |
| mark_price | [string](#string) |  | Spot price of the vAMM after liquidation |
| block_height | [int64](#int64) |  | The block number at which this liquidation occured. |
| block_time_ms | [int64](#int64) |  | The unix timestamp in milliseconds at which this liquidation occured. |






<a name="nibiru-perp-v1-PositionSettledEvent"></a>

### PositionSettledEvent
Emitted when a position is settled.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [string](#string) |  | Identifier for the virtual pool of the position. |
| trader_address | [string](#string) |  | Owner of the position. |
| settled_coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Settled coin as dictated by the settlement price of the vpool. |





 

 

 

 



<a name="perp_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## perp/v1/genesis.proto



<a name="nibiru-perp-v1-GenesisState"></a>

### GenesisState
GenesisState defines the perp module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#nibiru-perp-v1-Params) |  |  |
| pair_metadata | [PairMetadata](#nibiru-perp-v1-PairMetadata) | repeated |  |
| positions | [Position](#nibiru-perp-v1-Position) | repeated |  |
| prepaid_bad_debts | [PrepaidBadDebt](#nibiru-perp-v1-PrepaidBadDebt) | repeated |  |





 

 

 

 



<a name="perp_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## perp/v1/query.proto



<a name="nibiru-perp-v1-QueryCumulativePremiumFractionRequest"></a>

### QueryCumulativePremiumFractionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [string](#string) |  | the pair to query for |






<a name="nibiru-perp-v1-QueryCumulativePremiumFractionResponse"></a>

### QueryCumulativePremiumFractionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cumulative_premium_fraction | [string](#string) |  | The latest cumulative premium fraction. |
| estimated_next_cumulative_premium_fraction | [string](#string) |  |  |






<a name="nibiru-perp-v1-QueryMetricsRequest"></a>

### QueryMetricsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [string](#string) |  | the pair to query for |






<a name="nibiru-perp-v1-QueryMetricsResponse"></a>

### QueryMetricsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metrics | [Metrics](#nibiru-perp-v1-Metrics) |  | list of perp metrics |






<a name="nibiru-perp-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is request type for the Query/Params RPC method.






<a name="nibiru-perp-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#nibiru-perp-v1-Params) |  | params holds all the parameters of this module. |






<a name="nibiru-perp-v1-QueryPositionRequest"></a>

### QueryPositionRequest
QueryPositionRequest is the request type for the position of the x/perp
module account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_pair | [string](#string) |  |  |
| trader | [string](#string) |  |  |






<a name="nibiru-perp-v1-QueryPositionResponse"></a>

### QueryPositionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| position | [Position](#nibiru-perp-v1-Position) |  | The position as it exists in the blockchain state |
| position_notional | [string](#string) |  | The position&#39;s current notional value, if it were to be entirely closed (in margin units). |
| unrealized_pnl | [string](#string) |  | The position&#39;s unrealized PnL. |
| margin_ratio_mark | [string](#string) |  | margin ratio of the position based on the mark price, mark TWAP. The higher value of the possible margin ratios (TWAP and instantaneous) is taken to be &#39;marginRatioMark&#39;. Calculated from margin, unrealized PnL, and position notional. |
| margin_ratio_index | [string](#string) |  | margin ratio of the position based on the index price. Calculated from margin, unrealized PnL, and position notional. |
| block_number | [int64](#int64) |  | BlockNumber is current block number at the time of query. |






<a name="nibiru-perp-v1-QueryPositionsRequest"></a>

### QueryPositionsRequest
---------------------------------------- Positions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trader | [string](#string) |  |  |






<a name="nibiru-perp-v1-QueryPositionsResponse"></a>

### QueryPositionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| positions | [QueryPositionResponse](#nibiru-perp-v1-QueryPositionResponse) | repeated |  |





 

 

 


<a name="nibiru-perp-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#nibiru-perp-v1-QueryParamsRequest) | [QueryParamsResponse](#nibiru-perp-v1-QueryParamsResponse) | Parameters queries the parameters of the x/perp module. |
| QueryPosition | [QueryPositionRequest](#nibiru-perp-v1-QueryPositionRequest) | [QueryPositionResponse](#nibiru-perp-v1-QueryPositionResponse) |  |
| QueryPositions | [QueryPositionsRequest](#nibiru-perp-v1-QueryPositionsRequest) | [QueryPositionsResponse](#nibiru-perp-v1-QueryPositionsResponse) |  |
| CumulativePremiumFraction | [QueryCumulativePremiumFractionRequest](#nibiru-perp-v1-QueryCumulativePremiumFractionRequest) | [QueryCumulativePremiumFractionResponse](#nibiru-perp-v1-QueryCumulativePremiumFractionResponse) | Queries the latest cumulative premium fraction and the estimated next cumulative premium fraction. |
| Metrics | [QueryMetricsRequest](#nibiru-perp-v1-QueryMetricsRequest) | [QueryMetricsResponse](#nibiru-perp-v1-QueryMetricsResponse) |  |

 



<a name="perp_v1_state-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## perp/v1/state.proto



<a name="nibiru-perp-v1-LiquidateResp"></a>

### LiquidateResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bad_debt | [string](#string) |  | Amount of bad debt created by the liquidation event |
| fee_to_liquidator | [string](#string) |  | Fee paid to the liquidator |
| fee_to_perp_ecosystem_fund | [string](#string) |  | Fee paid to the Perp EF fund |
| liquidator | [string](#string) |  | Address of the liquidator |
| position_resp | [PositionResp](#nibiru-perp-v1-PositionResp) |  | Position response from the close or open reverse position |






<a name="nibiru-perp-v1-Metrics"></a>

### Metrics
PoolMetrics is a structure that displays a snapshot of perp metrics for each pair.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [string](#string) |  | Pair identifier for the two assets. Always in format &#39;base:quote&#39; |
| net_size | [string](#string) |  | Sum of all active position sizes for the pair. |
| volumeQuote | [string](#string) |  | Total notional volume for the pair. |
| volumeBase | [string](#string) |  | Total size volume for the pair. |






<a name="nibiru-perp-v1-PairMetadata"></a>

### PairMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pair | [nibiru.common.AssetPair](#nibiru-common-AssetPair) |  |  |
| latest_cumulative_premium_fraction | [string](#string) |  | Latest cumulative premium fraction for a given pair. Calculated once per funding rate interval. A premium fraction is the difference between mark and index, divided by the number of payments per day. (mark - index) / # payments in a day |






<a name="nibiru-perp-v1-Params"></a>

### Params



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| stopped | [bool](#bool) |  | stopped identifies if the perp exchange is stopped or not |
| fee_pool_fee_ratio | [string](#string) |  | FeePoolFeeRatio is the ratio transferred to the the fee pool |
| ecosystem_fund_fee_ratio | [string](#string) |  | EcosystemFundFeeRatio is the ratio transferred to the PerpEF. |
| liquidation_fee_ratio | [string](#string) |  | LiquidationFeeRatio is the percentage of liquidated position that will be given to out as a reward. Half of the liquidation fee is given to the liquidator, and the other half is given to the ecosystem fund. |
| partial_liquidation_ratio | [string](#string) |  | PartialLiquidationRatio is the share we try to liquidate if the margin is higher than liquidation fee |
| funding_rate_interval | [string](#string) |  | specifies the interval on which the funding rate is updated |
| twap_lookback_window | [google.protobuf.Duration](#google-protobuf-Duration) |  | amount of time to look back for TWAP calculations |
| whitelisted_liquidators | [string](#string) | repeated | whitelisted_liquidators defines the list of addresses which are allowed to liquidate a position. |






<a name="nibiru-perp-v1-Position"></a>

### Position
Position identifies and records information on a user&#39;s position on one of
the virtual liquidity pools.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trader_address | [string](#string) |  | address identifies the address owner of this position |
| pair | [nibiru.common.AssetPair](#nibiru-common-AssetPair) |  | pair identifies the pair associated with this position |
| size | [string](#string) |  | Position size.

signed int |
| margin | [string](#string) |  | Amount of margin remaining in the position. |
| open_notional | [string](#string) |  | OpenNotional is the quote denom value of the position when opening. Used to calculate PnL. |
| latest_cumulative_premium_fraction | [string](#string) |  | The most recent cumulative premium fraction this position has. Used to calculate the next funding payment. |
| block_number | [int64](#int64) |  | BlockNumber is the last block number when this position was updated. |






<a name="nibiru-perp-v1-PositionResp"></a>

### PositionResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| position | [Position](#nibiru-perp-v1-Position) |  |  |
| exchanged_notional_value | [string](#string) |  | The amount of quote assets exchanged. |
| exchanged_position_size | [string](#string) |  | The amount of base assets exchanged. |
| bad_debt | [string](#string) |  | The amount of bad debt accrued during this position change. Measured in absolute value of quote units. If greater than zero, then the position change event will likely fail. |
| funding_payment | [string](#string) |  | The funding payment applied on this position change. |
| realized_pnl | [string](#string) |  | The amount of PnL realized on this position changed, measured in quote units. |
| unrealized_pnl_after | [string](#string) |  | The unrealized PnL in the position after the position change. |
| margin_to_vault | [string](#string) |  | The amount of margin the trader has to give to the vault. A negative value means the vault pays the trader. |
| position_notional | [string](#string) |  | The position&#39;s notional value after the position change, measured in quote units. |






<a name="nibiru-perp-v1-PrepaidBadDebt"></a>

### PrepaidBadDebt



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |
| amount | [string](#string) |  |  |





 


<a name="nibiru-perp-v1-MarginCalculationPriceOption"></a>

### MarginCalculationPriceOption


| Name | Number | Description |
| ---- | ------ | ----------- |
| MARGIN_CALCULATION_PRICE_OPTION_UNSPECIFIED | 0 |  |
| SPOT | 1 |  |
| INDEX | 2 |  |
| MAX_PNL | 3 |  |



<a name="nibiru-perp-v1-PnLCalcOption"></a>

### PnLCalcOption


| Name | Number | Description |
| ---- | ------ | ----------- |
| PNL_CALC_OPTION_UNSPECIFIED | 0 |  |
| SPOT_PRICE | 1 |  |
| TWAP | 2 |  |
| ORACLE | 3 |  |



<a name="nibiru-perp-v1-PnLPreferenceOption"></a>

### PnLPreferenceOption


| Name | Number | Description |
| ---- | ------ | ----------- |
| PNL_PREFERENCE_UNSPECIFIED | 0 |  |
| MAX | 1 |  |
| MIN | 2 |  |



<a name="nibiru-perp-v1-Side"></a>

### Side


| Name | Number | Description |
| ---- | ------ | ----------- |
| SIDE_UNSPECIFIED | 0 |  |
| BUY | 1 |  |
| SELL | 2 |  |


 

 

 



<a name="perp_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## perp/v1/tx.proto



<a name="nibiru-perp-v1-MsgAddMargin"></a>

### MsgAddMargin
MsgAddMargin: Msg to remove margin.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| token_pair | [string](#string) |  |  |
| margin | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="nibiru-perp-v1-MsgAddMarginResponse"></a>

### MsgAddMarginResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| funding_payment | [string](#string) |  |  |
| position | [Position](#nibiru-perp-v1-Position) |  |  |






<a name="nibiru-perp-v1-MsgClosePosition"></a>

### MsgClosePosition



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| token_pair | [string](#string) |  |  |






<a name="nibiru-perp-v1-MsgClosePositionResponse"></a>

### MsgClosePositionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exchanged_notional_value | [string](#string) |  | The amount of quote assets exchanged. |
| exchanged_position_size | [string](#string) |  | The amount of base assets exchanged. |
| funding_payment | [string](#string) |  | The funding payment applied on this position change, measured in quote units. |
| realized_pnl | [string](#string) |  | The amount of PnL realized on this position changed, measured in quote units. |
| margin_to_trader | [string](#string) |  | The amount of margin the trader receives after closing the position, from the vault. Should never be negative. |






<a name="nibiru-perp-v1-MsgDonateToEcosystemFund"></a>

### MsgDonateToEcosystemFund



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| donation | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | donation to the EF |






<a name="nibiru-perp-v1-MsgDonateToEcosystemFundResponse"></a>

### MsgDonateToEcosystemFundResponse







<a name="nibiru-perp-v1-MsgLiquidate"></a>

### MsgLiquidate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the liquidator address |
| token_pair | [string](#string) |  | TokenPair is the identifier for the position&#39;s virtual pool |
| trader | [string](#string) |  | Trader is the address of the owner of the position |






<a name="nibiru-perp-v1-MsgLiquidateResponse"></a>

### MsgLiquidateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fee_to_liquidator | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| fee_to_perp_ecosystem_fund | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="nibiru-perp-v1-MsgMultiLiquidate"></a>

### MsgMultiLiquidate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| liquidations | [MsgMultiLiquidate.MultiLiquidation](#nibiru-perp-v1-MsgMultiLiquidate-MultiLiquidation) | repeated |  |






<a name="nibiru-perp-v1-MsgMultiLiquidate-MultiLiquidation"></a>

### MsgMultiLiquidate.MultiLiquidation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_pair | [string](#string) |  |  |
| trader | [string](#string) |  |  |






<a name="nibiru-perp-v1-MsgMultiLiquidateResponse"></a>

### MsgMultiLiquidateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| liquidation_responses | [MsgMultiLiquidateResponse.MultiLiquidateResponse](#nibiru-perp-v1-MsgMultiLiquidateResponse-MultiLiquidateResponse) | repeated |  |






<a name="nibiru-perp-v1-MsgMultiLiquidateResponse-MultiLiquidateResponse"></a>

### MsgMultiLiquidateResponse.MultiLiquidateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [string](#string) |  |  |
| liquidation | [MsgLiquidateResponse](#nibiru-perp-v1-MsgLiquidateResponse) |  |  |






<a name="nibiru-perp-v1-MsgOpenPosition"></a>

### MsgOpenPosition



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| token_pair | [string](#string) |  |  |
| side | [Side](#nibiru-perp-v1-Side) |  |  |
| quote_asset_amount | [string](#string) |  |  |
| leverage | [string](#string) |  |  |
| base_asset_amount_limit | [string](#string) |  |  |






<a name="nibiru-perp-v1-MsgOpenPositionResponse"></a>

### MsgOpenPositionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| position | [Position](#nibiru-perp-v1-Position) |  |  |
| exchanged_notional_value | [string](#string) |  | The amount of quote assets exchanged. |
| exchanged_position_size | [string](#string) |  | The amount of base assets exchanged. |
| funding_payment | [string](#string) |  | The funding payment applied on this position change, measured in quote units. |
| realized_pnl | [string](#string) |  | The amount of PnL realized on this position changed, measured in quote units. |
| unrealized_pnl_after | [string](#string) |  | The unrealized PnL in the position after the position change, measured in quote units. |
| margin_to_vault | [string](#string) |  | The amount of margin the trader has to give to the vault. A negative value means the vault pays the trader. |
| position_notional | [string](#string) |  | The position&#39;s notional value after the position change, measured in quote units. |






<a name="nibiru-perp-v1-MsgRemoveMargin"></a>

### MsgRemoveMargin
MsgRemoveMargin: Msg to remove margin.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| token_pair | [string](#string) |  |  |
| margin | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="nibiru-perp-v1-MsgRemoveMarginResponse"></a>

### MsgRemoveMarginResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| margin_out | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | tokens transferred back to the trader |
| funding_payment | [string](#string) |  | the funding payment applied on this position interaction |
| position | [Position](#nibiru-perp-v1-Position) |  | The resulting position |





 

 

 


<a name="nibiru-perp-v1-Msg"></a>

### Msg
Msg defines the x/perp Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| RemoveMargin | [MsgRemoveMargin](#nibiru-perp-v1-MsgRemoveMargin) | [MsgRemoveMarginResponse](#nibiru-perp-v1-MsgRemoveMarginResponse) |  |
| AddMargin | [MsgAddMargin](#nibiru-perp-v1-MsgAddMargin) | [MsgAddMarginResponse](#nibiru-perp-v1-MsgAddMarginResponse) |  |
| Liquidate | [MsgLiquidate](#nibiru-perp-v1-MsgLiquidate) | [MsgLiquidateResponse](#nibiru-perp-v1-MsgLiquidateResponse) | Liquidate is a transaction that allows the caller to fully or partially liquidate an existing position. |
| MultiLiquidate | [MsgMultiLiquidate](#nibiru-perp-v1-MsgMultiLiquidate) | [MsgMultiLiquidateResponse](#nibiru-perp-v1-MsgMultiLiquidateResponse) |  |
| OpenPosition | [MsgOpenPosition](#nibiru-perp-v1-MsgOpenPosition) | [MsgOpenPositionResponse](#nibiru-perp-v1-MsgOpenPositionResponse) |  |
| ClosePosition | [MsgClosePosition](#nibiru-perp-v1-MsgClosePosition) | [MsgClosePositionResponse](#nibiru-perp-v1-MsgClosePositionResponse) |  |
| DonateToEcosystemFund | [MsgDonateToEcosystemFund](#nibiru-perp-v1-MsgDonateToEcosystemFund) | [MsgDonateToEcosystemFundResponse](#nibiru-perp-v1-MsgDonateToEcosystemFundResponse) |  |

 



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

