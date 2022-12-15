# 🔮 Price Feed Oracles

Nibiru’s price feeds are updated the end of every block from messages posted by `oracle` accounts. An `oracle` is simply a whitelisted address that is able to send a special `post_price` message on-chain that includes the asset pair, price, and an expiry time.

This message gets wrapped into a transaction to be included in the current block. At the end of each block, the median of all unexpired, oracle-posted prices is computed for each asset pair and stored by the Nibiru blockchain. Finally, the time-weighted average price (TWAP) is taken to be the “official” price for the pair. This is currently implemented in the `x/pricefeed` module.

#### Data sources for the feeds

* **AMMs**: Reading prices directly from AMMs will form the backbone of Nibiru’s price feeds. These feeds come from liquid Ethereum markets like Uniswap and SushiSwap and liquid Cosmos chains with spot DEXs such as Osmosis, Juno, and (someday) Nibi-Swap. For spot markets in the Cosmos ecosystem, we’re also onboarding validators that have infrastructure set up on both chains so that we can read prices of liquid pools without latency.
* **ChainLink**: The BTC, ETH, and ATOM feeds update roughly every 10 minutes. We have feeds set up for ChainLink, but this update time is clearly too slow to use as a standalone oracle.
* **Pyth Network**: Pyth offers an excellent solution for accurate, sub-second updates on BTC:USD and ETH:USD prices. This will also be one of the data sources. [\[Pyth protocol whitepaper\]](https://pyth.network/whitepaper.pdf) [\[Pyth network application\]](https://pyth.network/)
* **Centralized exchange REST APIs**: We’re currently setting up feeds from Binance and Kraken.

The Nibiru team sets up several price feeds through whitelisted `oracle` accounts. While the initial set of oracles will be maintained by the Nibiru team, additional oracles can also be added via on-chain governance.

#### More detailed mathematical breakdown of the price feed updates

Let’s denote the following variables to go into more detail:

<div align="center">

| Variable | Description                                                           |
| :------: | --------------------------------------------------------------------- |
|   $t$    | a block timestamp (Unix)                                              |
|  $t_b$   | the current block’s timestamp (Unix)                                  |
|   $T$    | the set of all block timestamps (Unix) from the past hour.            |
|  $p_t$   | the median of all valid, posted prices for the block at timestamp $t$ |

</div>

The time variables are Unix timestamps and, thus, integers between 0 and ∞.

$$
\text{price}(t_b) = p_{TWAP} = \dfrac{ \sum\limits_{t\in{T}} \left( p_{t} \cdot t \right) }{ \sum\limits_{t\in{T}} \left( t \right) }
$$

Later blocks have larger values, so they’re weighted more heavily. This oracle solution allows us to compose feeds from several sources with differing post rates.

Prices posted from different data sources come from different accounts (oracle addresses), but each address may be able to post for multiple pairs. For example, the price posted for BTC price from ChainLink would have an expiry set for about 15 minutes and be over-written by an early update (e.g. after 5 minutes). This same oracle could also be whitelisted to post an ETH price.

#### Reasons for an in-house Oracle solution

**Robustness:** We don’t want an outage in one chain, application, or feed to affect the utility and user experience of Nibiru. It’s important to remember that Nibiru isn’t simply a perps exchange. The price feeds are also crucial to the FRAX-style mints and redeems of NUSD. These feeds could also apply to a number of future applications.

**Different data sources have different time granularity:** Because the AMM, Pyth Network, and CEX prices would update at the block or sub-second level, we want to account for these updates as separate oracle posts, taking all of them into account for the TWAP but weighing more recent price updates more heavily.

**Customizability and adaptability to protect against oracle manipulation:** One novel improvement we'll include is to factor the size of the reserves into the calculation for the AMM prices. We call this **liquidity-weighted average price (LWAP)**.

Let's say you have an asset like ATOM with price feeds on 3 different AMMs. The post price message could include reserve amounts or the dollar value of the reserves as a field, and we could combine each of the posted prices with the liquidity values to get a liquidity weighted price:

<div align="center">

| Variable | Description     |
| :------: | --------------- |
|  $p_i$   | posted price    |
| $\ell_i$ | liquidity value |

</div>

$$ \text{liquidityWeightedPrice} = \dfrac{ \sum_i p_i\cdot\ell_i }{ \sum_{i} \ell_i }
$$

This would ensure that the exchanges with the most liquidity would contribute contribute most strongly to the oracle price, helping protect against sudden price movements on markets with low liquidity.
