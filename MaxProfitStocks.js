
const stockPrices = [5, 4, 3, 2, 1];
// [5, 4, 3, 2, 1]
// return the max profit. 
function maxProfit(prices) {
  if (prices.length === 0) return -1;
  
  let currBuy = 0;
  let currSell = 1;
  let currProfit = prices[currSell] - prices[currBuy];
  let globalProfit = currProfit;      

  for (let i = 1; i < prices.length - 1; i++) {
    if (currProfit <= 0) {
      currBuy = i; // 2
    } 
    currSell = i + 1;
    currProfit = prices[currSell] - prices[currBuy];
    
    if (currProfit > globalProfit) {
      globalProfit = currProfit;
    }
  }
  return globalProfit;
}

console.log(maxProfit(stockPrices)); // expected: 4


// let minPrice = stockPrices[0];
// let maxProfit = stockPrices[1] - stockPrices[0];

// for (let i = 1; i < stockPrices.length; i++) {
//   const currentPrice = stockPrices[i];
//   const potentialProfit = currentPrice - minPrice;

//   maxProfit = Math.max(maxProfit, potentialProfit);
//   minPrice = Math.min(minPrice, currentPrice);
// }

// return maxProfit;