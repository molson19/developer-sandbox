// Knapsack problem

// weights and profits of N items, put items in knapsack of capacity C.

// goal: maximize profit in the bag

function maximizeKnapsackIterative(wieghts, profits, capacity) { // O(n^2)
  
    if (weights.length !== profits.length) {
      throw new Error(`weights and profits must be the same length. Weights: ${weights}, Profits: ${profits}`);
    }
  
    // iterative solution
    // two pointers, moving along array of wieghts and profits
    // keeping track of a maximium profit, once done iterating, return index of the two items that maximize profit. (or put them in a subarray) 
    let size = profits.length;
    let maxProfit = 0;
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        if (weights[i] + weights[j] <= capacity) {
          let currTotal = profits[i] + profits[j];
          if (currTotal > maxProfit) {
            maxProfit = currTotal;
            index1 = i;
            index2 = j;
          }
        }
      }
    }
    return [index1, index2]; // list of indexes for the two items that maximize profit in the knapsack
  
  }
  
  function maximizeKnapsack(wieghts, profits, capacity) { 
    if (weights.length !== profits.length) {
      throw new Error(`weights and profits must be the same length. Weights: ${weights}, Profits: ${profits}`);
    }
    return knapsackRecursive(weights, profits, capacity, 0);
  }
  
  function knapsackRecursive(w, p, c, index) {
  
    if (c <= 0 || index >= p.length) return 0;
  
    let profit1 = 0;
    if (w[index] <= c) {
      profit1 = p[index] + knapsackRecursive(w, p, c - w[index], index + 1);
    const profit2 = knapsackRecursive(w, p, c, index + 1);
    return Math.max(profit1, profit2);
  }
  
  // const items = ['Apple', 'Orange', 'Banana', 'Melon'];
  // const weights = [2, 3, 1, 4];
  // const profits = [4, 5, 3, 7];
  // const capacity = 5;
  // const result = maximizeKnapsack(weights, profits, capacity);
  // console.log(`${items[result[0]]} and ${items[result[1]]} maximize profits.`);


  // write a recursive function that tells you the length of a string

function lenghtOfString(s) {
    return (s === '') 
      ? 0
      : 1 + lenghtOfString(s.slice(1));
  }
  
  console.log(lenghtOfString('abcdefg'));
  
  function sumOfNumString(n) { // '4'
    if (n === '') return 0;
    if (n.length === 1) return parseInt(n, 10);
    else return parseInt(n.slice(0, 1), 10) + sumOfNumString(n.slice(1));
  }
  
  console.log(sumOfNumString('456'));
  
  /* Knapsack problem
  
  weights and profits of N items, put items in knapsack of capacity C.
  
  goal: maximize profit in the bag
  
  The reason the iterative solution doesn't work, is because we don't know how many items we can choose. Its up to the weights and capacity. If we can only choose two items, then a nested for loop would work. But since we can choose ANY COMBINATION of items, we need recursion and decision based processing. 
  
  Combination or permutation will require recursion and can be enhanced with DP if there are overlapping subproblems. 
  
  Items: { Apple, Orange, Banana, Melon }
  Weights: { 2, 3, 1, 4 }
  Profits: { 4, 5, 3, 7 }
  Knapsack capacity: 7
  
  since the capacity is 7, we can take up to three items (note the weights) we need recursion and decsion trees here. 
  
  */ 
  
  function maximizeKnapsack(w, p, c) {
    let max = 0;
    let maximize = (w, p, c, temp) => {
      let sumOfTemp = temp.reduce((a, b) => a += b);
      if (sumOfTemp === c) {
        // check if sum is greater than max and set max to the profits... (i think we'll need an index)
        if (sumOfTemp > max) max = sumOfTemp;
      } else {
        for (weight in w) {
          if (weight + sumOfTemp <= c) {
  
          }
        }
      }
    }
  
  
  
  }
  
    // const items = ['Apple', 'Orange', 'Banana', 'Melon'];
    // const weights = [2, 3, 1, 4];
    // const profits = [4, 5, 3, 7];
    // const capacity = 7;
    // const result = maximizeKnapsack(weights, profits, capacity);
    // console.log(`${items[result[0]]} and ${items[result[1]]} maximize profits.`);
  

/* Knapsack problem

weights and profits of N items, put items in knapsack of capacity C.

goal: maximize profit in the bag

The reason the iterative solution doesn't work, is because we don't know how many items we can choose. Its up to the weights and capacity. If we can only choose two items, then a nested for loop would work. But since we can choose ANY COMBINATION of items, we need recursion and decision based processing. 

Combination or permutation will require recursion and can be enhanced with DP if there are overlapping subproblems. 

Items: { Apple, Orange, Banana, Melon }
Weights: { 2, 3, 1, 4 }
Profits: { 4, 5, 3, 7 }
Knapsack capacity: 7

since the capacity is 7, we can take up to three items (note the weights) we need recursion and decsion trees here. 

*/ 
function lengthsAreNotTheSame(w, p, i) {
  return w.length !== p.length || w.length !== i.length;
}

function maximizeKnapsack(weights, profits, items, capacity) {
  if (lengthsAreNotTheSame(weights, profits, items)) {
    throw new Error('Array size must be the same for weights, profits, and items');
  } 
  
  let results = [];
  if (capacity <= 0) {
    return results;
  }
  let max = 0;
  let candidates = [];
  items.forEach((item, index) => {
    candidates.push([weights[index], profits[index], item]);
  });

  let maximize = (candidates, capacity, knapsack) => {
    let knapsackWeight = knapsack.reduce((a, b) => a += b[0], 0);
    let knapsackProfit = knapsack.reduce((a, b) => a += b[1], 0);
    
    if (knapsackWeight === capacity) {
      if (knapsackProfit > max) {
        max = knapsackProfit;
        results = [];
        knapsack.forEach(item => results.push(item[2])); // pushes the items to the result array
      }
    } else {
      
      for (let i = 0; i < candidates.length; i++) {
        let weight = candidates[i][0];
        if (weight + knapsackWeight <= capacity) {
          let candidate = candidates.splice(i, 1)[0];
          knapsack.push(candidate);
          maximize(candidates, capacity, knapsack);
          knapsack.pop();
          candidates.splice(i, 0, candidate);
        }
      }
    }
  }
  maximize(candidates, capacity, []);
  return results;
}

// test case: 

let items = ['Apple', 'Orange', 'Banana', 'Melon', 'Grapes'];
let weights = [2, 3, 1, 4, 2];
let profits = [4, 5, 3, 7, 5];
const capacity = 7;

// espected: ['Banana', 'Melon', 'Grapes']

const result = maximizeKnapsack(weights, profits, items, capacity);
console.log(`The following items: ${result} should maximize profits.`);

// O(n) * O(!n) time complexity
// O(n) * O(!n) space complexity, because the call stack has to maintain the recursive calls

// How to reduce? memorization -> dynamic programming. There are combinations that I've already calculated that I'm revisiting. 

/* Knapsack problem

only returning max profit 

*/

function maxProfitOfKnapsack(weights, profits, capacity) {
  if (weights.length !== profits.length) throw new Error('array lenghts are not the same');
  
  let maximize = (weights, profits, capacity, index) => {
    if (capacity <= 0 || profits.length <= index) return 0;

    // represents the profits for picking the item at each index, and checking the max of the rest of the candidates with the remaining capacity
    let profit1 = 0;
    if (weights[index] <= capacity) {
      profit1 = profits[index] + maximize(weights, profits, capacity - weights[index], ++index);
    }

    // represents the profits of skipping the item at the selected index and checking the max of the rest of the candidates with the current available capacity. 
    // note that if the item doesnt fit the capacity for profit1, or if we've checked all possible outcomes after picking the index'th item, we always come here. 
    let profit2 = maximize(weights, profits, capacity, ++index);
    return Math.max(profit1, profit2);
  }

  return maximize(weights, profits, capacity, 0);
}

console.log(maxProfitOfKnapsack(weights, profits, capacity));

function maxOfKnapsackOnlyReturningMaxProfit(weights, profits, items, capacity) {
  if (lengthsAreNotTheSame(weights, profits, items)) {
    throw new Error('Array size must be the same for weights, profits, and items');
  } 

  let candidates = [];
  items.forEach((item, index) => {
    candidates.push([weights[index], profits[index], item]);
  });

  let maximize = (candidates, capacity, index) => {
    if (capacity <= 0 || candidates.length <= index) return 0;
    else {
      let profitWithCandidate = 0;
      let [ weight, profit, item ] = candidates[index];
      if (weight <= capacity) {
        profitWithCandidate = profit + maximize(candidates, capacity - weight, ++index);
      }
      let profitWithoutCandidate = maximize(candidates, capacity, ++index);
      return Math.max(profitWithCandidate, profitWithoutCandidate);
    }
  }
  return maximize(candidates, capacity, 0);
}

// So this problem is not a pure combination problem, because we are only seeking on goal,
// so we don't need to go thorugh every combination -> fruits in different order represent the 
// same combination, so we should only traverse thorugh the list once. 
//This should hint at passing an index into the recursive calls instead of maintaining a list to pass.
// Permutation or other combination questions may require this, but it is not required here. 

console.log(maxOfKnapsackOnlyReturningMaxProfit(weights, profits, items, capacity));