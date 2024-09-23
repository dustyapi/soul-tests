import DexScreenerClient from "./dexscreenerClient";

const dexClient = new DexScreenerClient();

const testAddresses= [
  'So11111111111111111111111111111111111111112', 
  'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
  '8UZLqAhkYZs9McdPv4gDxScC2ARyBjYuYVcNY3nbpump',
  '3xhezws6Lk7cMqoVEfZFXu3ry9GKymFz1vbWyQ4f99uX',
  'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
]

dexClient.callApi('So11111111111111111111111111111111111111112').then(console.log);

dexClient.callApiBulk(testAddresses).then(console.log);

dexClient.fetchPricesDex(testAddresses).then(console.log);