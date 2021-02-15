// Stock buy sell to maximize profit
// list of stock prices for n days, find the maximum profit with a single buy or sell activity

function maximizeProfitOfStock(prices) {
  
    let localBuy = 0;
    let localSell = 1;
    let localProfit = prices[localSell] - prices[localBuy];
  
    let maxBuy = localBuy;
    let maxSell = localSell;
    let maxProfit = localProfit;
    
    prices.forEach((price, index, prices) => {
      if (localProfit < 0) {
        // if buy and sell on the same day is valid, set localBuy = localSell. 
        localBuy = index;
        localSell = index + 1;
        localProfit = prices[localSell] - prices[localBuy]; 
      } else {
        localSell = index;
        localProfit = prices[localSell] - prices[localBuy];
      }
      if (localProfit > maxProfit) {
        maxProfit = localProfit;
        maxBuy = localBuy;
        maxSell = localSell;
      }
    });
    return [maxProfit, maxBuy, maxSell];
  }
  //const [maxProfit, maxBuy, maxSell] = maximizeProfitOfStock([21, 12, 11, 9, 6, 3]);
  //console.log(`The maxProfit is ${maxProfit} from day ${maxBuy} to day ${maxSell}`);
  // Runtime: O(n) -> one time through the list of days. 
  // Memory: O(1) -> only storing constant number of poiinters. So memory doesn't increase based on input size
  // This problem could be solved recursively in the combinations approach. But it would be inefficient. 
  // i.e.. start with day one as a buy and check all combinations of sells. Then move to day 2 as a buy and check all remaing sell dates. 
  
  function maxProfitOfStockRecursive(prices) {
    let maxBuy = 0;
    let maxSell = 1;
    let maxProfit = prices[maxSell] - prices[maxBuy];
  
    let recurse = (prices, localBuy, localSell, localProfit) => {
      if (localSell === prices.length) return;
      if (localProfit > maxProfit) {
        maxProfit = localProfit;
        maxBuy = localBuy;
        maxSell = localSell;
      }
      if (localProfit >= 0) {
        localSell++;
        localProfit = prices[localSell] - prices[localBuy]; 
        recurse(prices, localBuy, localSell, localProfit);
      } 
      localBuy++;
      localSell++;
      localProfit = prices[localSell] - prices[localBuy]; 
      recurse(prices, localBuy, localSell, localProfit);
    }
  
    recurse(prices, maxBuy, maxSell, maxProfit);
    return [maxProfit, maxBuy, maxSell];
  }
  // const [maxProfit, maxBuy, maxSell] = maxProfitOfStockRecursive([21, 12, 11, 9, 6, 3]);
  const [maxProfit, maxBuy, maxSell] = maxProfitOfStockRecursive([8, 5, 12, 9, 19, 1]);
  console.log(`The maxProfit is ${maxProfit} from day ${maxBuy} to day ${maxSell}`);
  // runtime of O(2^n) -> thats a lot. 
  // memory of O(n) -> we have to maintain the call stack, n call stacks. Or the height of the tree formed by the recursion. 
  /*
  
  
  So the array is the price of the stock on the ith day. And we want to maximize profit, so we need to find the lowest value and the highest value along the time continuum. m
  
  */
  function maxSubArray(n) {
    let bestSum = 0;
    let bestStartIndex = 0;
    let bestEndIndex = 0;
    
    let currentSum = 0;
    let currentStart = 0;
    let currentEnd = 0;
    n.forEach((number, index) => {
      // end the origianl sequence and start a new sequence
      if (currentSum <= 0) {
        currentStart = index;
        currentEnd = index;
        currentSum = number;
      } else {
        // continue on the sequence, updating currentSum
        currentSum += number;
        currentEnd = index;
      }
      // at every loop, check if the localMax is greater than the global max. 
      if (currentSum > bestSum) {
        // update indexes and bestSum
        bestStartIndex = currentStart;
        bestEndIndex = currentEnd;
        bestSum = currentSum;
      }
    })
    return [bestSum, bestStartIndex, bestEndIndex];
  }
  let [bestSum , bestStart, bestEnd] = maxSubArray([1, 4, -6, 3, 4, 6, -12, 9, 1]);
  console.log(`The bestSum is ${bestSum} from index ${bestStart} to ${bestEnd}`)
  // runtime is O(n) 
  // space is O(1) since we are maintaining no list, just pointers. 
  // this is considered dynamic. The brute force method, would be 