# 💵 Nibiru Stablecoin - NUSD

![](../img/nusd-banner.png)

Nibiru implements a fractional-algorithmic stablecoin called NUSD. NUSD has an elastic supply that adjusts based on market demand and NIBI helps bolster the stability of NUSD. This gives NUSD a greater capacity to scale through a lower requirement for external collateral.

NUSD’s creation and annihilation mechanism is dependent on the prices obtained from the chain’s price feed. As a result, arbitrage opportunities arise when the price of NUSD falls from its peg given the ability for traders to profit from secondary markets.

Nibiru aims more toward a fully decentralized model in which anyone can mint or burn NUSD, which can always be exchanged for an equivalent value in NIBI and collateral on the trading app. The first token Nibiru will accept as collateral is USDC.

### Minting and burning NUSD

Users mint NUSD by placing NIBI and any accepted form of collateral into the system. In return, the protocol mints and gives an equivalent value in NUSD back to the user minus a small transaction fee. Similarly, an NUSD holder can **burn NUSD** in exchange for equivalent value of NIBI and collateral.

### Collateral Ratio

The **collateral ratio (CR)** is defined as the proportion of NUSD’s value that is transacted as collateral during mints and burns of NUSD. For example, if the collateral ratio is 70% and a user wants to mint 100 NUSD, 70 NUSD worth of collateral and 30 NUSD worth of NIBI are required. Similarly, if the user instead wants to burn 100 NUSD, the user would instead receive the same amount NIBI and collateral. At genesis, the protocol will start out with a CR of 100%. As users interact with the protocol, the CR will fluctuate based on the demand for NIBI and NUSD.

Nibiru’s collateral ratio changes in response to the price of NUSD on the open market. A decline in the collateral ratio supports protocol expansion in periods of growth, while an increase in collateral during price downturns helps to curate system trust. If the price of NUSD goes too far below its peg (in a pre-determined threshold), the collateral ratio is automatically increased. If NUSD goes far enough above its peg, the collateral ratio is decreased.

### Liquidity Ratio

Nibiru adjusts the Collateral Ratio based on changes in liquidity, measuring NIBI liquidity against the total supply of NUSD. We define the **liquidity ratio (LR)** as follows:

$$
\text{LiquidityRatio} = \dfrac{ \text{marketCap}{\text{NIBI}}}{ \text{marketCap}{\text{NUSD}}}
$$

During sustained periods of net-negative changes in the liquidity ratio, the market signals that more collateral should back the system. Using hard collateral (USDC) within the system dampens the reflexive downward spirals that are more likely to occur in systems entirely reliant upon endogenous collateral. More NUSD can be redeemed with an increasingly smaller percentage impact on NIBI supply. As a result, the system can absorb more NIBI sell pressure from the sale of tokens from NUSD redemptions without risking the potential for negative feedback spirals.

The worst-case scenario for NUSD is if NUSD holders can drain all the collateral from the system through redemptions, leaving the remaining holders with insufficiently collateralized NUSD. This situation is only possible if NIBI has a CR that contradicts the true amount of collateral in its reserves. 

The CR is not designed to rapidly fluctuate, so there will not be extended opportunities in which the CR vastly exceeds the actual percentage of collateral in the system.

If instead the liquidity ratio tends to increase for an extended period of time, the market has signaled NIBI has strong enough value to justify lowering the CR, which better facilitates scaling for NUSD.

### Re-collateralize

**Recollateralize** is a function that incentivizes the caller to add up to the amount of collateral needed to reach some **target collateral ratio** (`collRatioTarget`). Recollateralize checks if the USD value of collateral in the protocol is below the required amount defined by the current collateral ratio. Here, Nibiru's NUSD stablecoin is taken to be the dollar that determines USD value.

#### How much collateral is needed to reach a certain `collRatio`?

Suppose an amount `supplyNUSD` of NUSD is in circulation at $1 at some inital collateral ratio, `collRatioStart`. The total USD value of the collateral in Nibiru is denoted `collUSDVal`. If NUSD falls in price below the lower band, the collateral ratio will increase to `collRatioTarget`, which is the target ratio.

In order to reach the target `collRatioTarget` with a constant `supplyNUSD`, more collateral needs to be added to the system. This amount can be given by:

```go
collUSDValEnd := supplyNUSD * collRatioEnd
collNeeded := collUSDValEnd - collUSDVal
```

#### Incentives for the caller of `Recollateralize`

The caller is given bonus NIBI for bringing the value of the protocol's collateral up to the appropriate value as defined by `collRatioTarget`. This bonus rate is some percentage of the collateral value provided.

Let:
|  Term |  Definition   |
| --- | --- |
| `collNeeded` (sdk.Int) | Amount of collateral needed to reach the target `collRatio`. |
| `priceColl` (sdk.Dec) | USD price of the collateral |
| `priceNIBI` (sdk.Dec) | USD price of NIBI. |
| `bonusRate` (sdk.Dec) | Defaults to 0.2% (20 bps). The bonus rate gives the caller an incentive to recollateralize Nibiru to the target `collRatioTarget`. |

Thus, the caller receives an amount of NIBI, `nibiOut` such that:

```go
nibiOut * priceNIBI = (collNeeded * priceColl) * (1 + bonusRate)
nibiOut = (collNeeded * priceColl) * (1 + bonusRate) / priceNIBI
```

#### Implementation of `Recollateralize`

See "collateral\_ratio.go" in the stablecoin module of [NibiruChain/nibiru](https://github.com/NibiruChain/nibiru/).


### Buybacks

A user can call `Buyback` when there's too much collateral in the protocol according to the target collateral ratio. The user swaps NIBI for USDC at a 0% transaction fee and the protocol burns the NIBI it buys from the user.

**`collRatio`**: The collateral ratio, or `collRatio` (sdk.Dec), is a value beteween 0 and 1 that determines what proportion of collateral and governance token is used during stablecoin mints and burns.

**`liqRatio`**: The liquidity ratio, or `liqRatio` (sdk.Dec), is a the proportion of the circulating NIBI liquidity relvative to the NUSD (stable) value.

#### When is a "buyback" possible?

The protocol has too much collateral. Here, "protocol" refers to the module account of the `x/stablecoin` module, and "too much" refers to the difference between the `collRatio` and `liqRatio`.

For example, if there's 10M NUSD in circulation, the price of USDC collateral is 0.99 NUSD per USDC, and the protocol has 5M USDC, the `liqRatio` would be (5M \* 0.99) / 10M = 0.495.\
Thus, if the collateral ratio, or `collRatio`, is less than 0.495, then an account with sufficient funds can call `Buyback`.

#### How does a buyback work?

The protocol has an excess of collateral. Buybacks allow users to sell NIBI to the protocol in exchange for NUSD, meaning that Nibiru Chain is effectively buying back its shares. After this transfer, the NIBI purchased by protocol is burned. This raises the value of the NIBI token for all of its hodlers.

::: tip
Unlike `Recollateralize`, there is no bonus rate for this transaction.
:::
