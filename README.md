**Note**: This repository has not been initialized with TypeScript, and it is expected that the test-taker will handle the TypeScript setup as part of the task.

For references you may look at 
https://docs.dexscreener.com/api/reference

An example response from the DexScreener API for the token address JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN looks like this:

```json
{
  "chainId": "solana",
  "dexId": "orca",
  "url": "https://dexscreener.com/solana/c1mglojnlwbkadvu9bhdtgzz1ozx4dz5zgdgcgvvw8wz",
  "pairAddress": "C1MgLojNLWBKADvu9BHdtgzz1oZX4dZ5zGdGcgvvW8Wz",
  "labels": [
    "wp"
  ],
  "baseToken": {
    "address": "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
    "name": "Jupiter",
    "symbol": "JUP"
  },
  "quoteToken": {
    "address": "So11111111111111111111111111111111111111112",
    "name": "Wrapped SOL",
    "symbol": "SOL"
  },
  "priceUsd": "0.8132"
}

In this example:

The quoteToken is SOL (So11111111111111111111111111111111111111112).
The priceUsd represents the price of the token pair, in this case, 0.8132 USD.
Expected Output
The function findLargestPoolWithSol is expected to return the above pair because:

The quoteToken is SOL, matching the SOL_MINT constant (So11111111111111111111111111111111111111112).
This indicates the largest liquidity pool with SOL for the given token pair.
fetchPricesDex

For the method fetchPricesDex, the priceUsd from the API response (in this case, 0.8132) should be extracted and returned as the price of the token pair.

You're expected to complete the dexscreener client with the implementations of the given methods.