# 🔮 Decentralized Oracle

Nibiru’s pricefeeds are updated once per configurable epoch (currently 30 seconds) by validators. Validators are expected to run a pricefeed sidecar process along with their nodes to scrape prices from trusted sources and post them on the chain. Regular PoS consensus is used to ensure no single validator can manipulate prices.

## Algorithm

At the end of a price vote epoch, validators votes are sorted by price and tallied up by voting power. The weighted median price is chosen as the price for that asset for that epoch. Validators that voted within a certain standard deviation of this weighted median price receive additional rewards. Validators that vote outside of this range get slashed.

## MEV Protection

In actuality, validators submit hashes of the asset price onchain in one epoch, and the actual price in the following epoch, similar to a commit-reveal scheme. This is so that validators can't see what other validators have already voted for in the current epoch and adjust their votes based on that information. The algorithm can be made more efficient by piggy-backing the vote reveal for the previous epoch along with the hidden vote for the current epoch.

## Data Sources

It is up to the validator to select which data sources they want to provide to the chain. The Nibiru team has developed a reference Golang implementation that reads price data from reputable centralized exchanges.

TODO(heisenberg): add link to price-feeder repo

## Mathematical Details

Let us define the following variables:

| Variable  | Description                                       |
| :-------: | ------------------------------------------------- |
|   $t_e$   | the current epoch                                 |
| $t_{e+1}$ | the next epoch                                    |
| $v_{e,i}$ | the price vote value of validator i at epoch e    |
| $w_{e,i}$ | the staked voting power of validator i at epoch e |

For a given epoch, consider $n$ ordered elements $v_{e,i}$ with corresponding weights $w_{e,i}$, $i=0...n$. The weighted median is the element $v_{e,k}$ such that

$$
\sum\limits_{i=1}^{k-1} w_{e,i} < \frac{1}{2}
$$

and

$$
\sum\limits_{i=k+1}^{n} w_{e,i} < \frac{1}{2}
$$

This is achieved via the following pseudo-code:

```js
// class Vote {
//     Decimal weight;
//     Decimal price;
// }

const sortedVotes = sort(votes);

let cumulativeWeight = 0.0;

for(Vote vote in sortedVotes){
    cumulativeWeight += vote.weight;
    if(cumulativeWeight >= 0.5) {
        return vote.price;
    }
}
```

## Reasons for Decentralized Oracles

**Robustness**: We don’t want an outage in one chain, application, or feed to affect the utility and user experience of Nibiru. It’s important to remember that Nibiru isn’t simply a perps exchange. The price feeds are also crucial to the FRAX-style mints and redeems of NUSD. These feeds could also apply to a number of future applications.

**Speed**: Some oracle solutions like Chainlink don't have a price freshness guarantee, so applications on Nibiru could be using outdated prices, which is disastrous for DeFi use cases. The decentralized oracle solution guarantees that prices are updated every voting period and the algorithm is deterministic on its inputs.

**Extra Incentives**: Keeping the pricefeed healthy requires participation from validators. In exchange for their participation, validators receive additional staking rewards which get distributed to their delegators as well. These incentives could be in the form of NIBI, NUSD, or any other asset whose utility is derived from having an oracle pricefeed.
