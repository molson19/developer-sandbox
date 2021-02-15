/*
Dynamic programming

Recursive problems are brute force in nature, explore whole problem space, O(2^n), re-evaluate the same sub-problem over and over. 
This is inefficient
Dynamic Programming - memorization or tabulation to avoid recomputation. 
Only works on problems with repeating sub problems

Types of problems: 
- Fibonacci
- Capacity planning -> weights and costs. Maximizing profit and minimizing weight

*/

let fib = [];

function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// each number is the sum of the previous two numbers
function fibonacciDp(n) { // n = 2
  if (fib[n]) return fib[n];

  if (n < 2) {
    fib[n] = n;
    return n;
  }

  let nextNumber = fibonacci(n - 1) + fibonacci(n - 2)
  fib[n] = nextNumber;
  return nextNumber;
}

// print the nth fibonacci number. 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
console.log(fibonacci(6)); // 8
console.log(fib); // [0, 1, 1, 2, 3, 5, 8]


// Equal subset sum partition
// Time complexity worst case is O(2^n) -> exponential because we have to make a decision at each recursion. 
// space complexity is O(n) because we have to maintain the call stack. 
function isEqualSubsetSumPartition(numbers) {            // [1, 2, 3, 4]
  let isSuccess = false;
  const sumNums = (a, b) => a += b;
  if (numbers.reduce(sumNums, 0) % 2 !== 0) return false;

  let recurse = (numbers, knapsack) => {                // [2, 3, 4], [[1]]
    console.log(numbers)
    console.log(knapsack)
    let kSum = knapsack.reduce(sumNums, 0);    // 1
    let nSum = numbers.reduce(sumNums, 0);     // 9
    console.log(`kSum: ${kSum}, nSum: ${nSum}`)
    if (kSum === nSum) {                                // false
      console.log('here')
      isSuccess = true;
    } else {
      let size = numbers.length;
      if (!isSuccess && size > 1) {   
        for (let i = 0; i < size - 1; i++) {              // num = 3
          let num = numbers.splice(i, 1)[0];                            // true
          knapsack.push(num);
          recurse(numbers, knapsack);                   
          knapsack.pop()
          numbers.splice(i, 0, num);              
        }
      }
    }
  }
  recurse(numbers, []);
  return isSuccess;
} 

console.log(isEqualSubsetSumPartition([1, 2, 3, 4]));


/* 

An equal subset sum means that some subset of the list = sum of the whole list / 2

We can use DP by caching combinations of sum and index and returning directly instead of further recrusing. 


*/

function canPartition(num) {
  let sum = num.reduce((a, b) => a += b, 0);
  console.log(sum); 
  if (sum % 2 !== 0) return false;

  let canPartitionRecurse = (num, sum, index) => {
    // base case
      console.log(sum); 

    // we've found a subset of numbers (a path in the decision tree) which evenly adds to half of the lists original sum. This is our goal. 
    if (sum === 0) return true;
    // we've gotten through the whole list of numbers without finding the goal
    if (num.length === 0 || index >= num.length) return false;

    if (num[index] <= sum) {
      // check recursion
      if (canPartitionRecurse(num, sum - num[index], ++index)) return true;
    } 
    // else, carry on without considering this number, 
    return canPartitionRecurse(num, sum, ++index);
  }

  return canPartitionRecurse(num, sum / 2, 0); // the goal is to find and even partition. 
}

console.log(canPartition([1,2,3,4]));

// fibonacci
// write. function that finds the nth number in the Fibonacci sequence

// sub problems. looks like there are two recursive calls per call.
// we can solve this iteratively or recursively
// some sub problems will overlap 

// O(n) memory -> to maintain fib[] of size n
// O(n) runtime -> loop through n - 2 times, but with large n, reduce to n times
function fibIterative(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
console.log(fibIterative(7));
// O(n) memory -> n call stacks 
// O(2^n) because at each call we have to take two more calls. 
function fibRecursive(n) {
  if (n <= 1) return n;
  else return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log(fibRecursive(5));

// O(n) runtime
// O(1) memory, because we maintain no list. This is traversing a linked list
// when you only need to keep track of two things, only keep track of two things 
function fibIterativeBest(n) {
  if (n <= 1) return n;

  let prev0 = 0;
  let prev1 = 1;
  let res;
  for (let i = 2; i <= n; i++) {
    res = prev0 + prev1;
    prev0 = prev1;
    prev1 = res;
  }
  return res;
}

console.log(fibIterativeBest(5));

let fibonacciNumbers = [0, 1];

function fibRecursiveBest(n) {
  if (n <= 1) return n;
  else {
    return (fibonacciNumbers[n] !== undefined) 
      ? fibonacciNumbers[n]
      : fibRecursiveBest(n - 1) + fibRecursiveBest(n - 2);
  }
}

console.log(fibRecursiveBest(12));


/*

Coin changing problem 
Given coin denominations and the total amount, find the number of ways to make change. 

Combnations 


*/
// O(coins * amount) runtime, because we have to visit all of the nodes
// Permutations are O(n!)
// space: O(amount) call stacks 
let dp = [];
function coinChange(coins, amount) {
  let results = [];
  let getChangeFor = (coins, amount, temp, index) => {
    if (amount === 0) {
      results.push(temp.slice());
    } else {
      for (let i = index; i < coins.length; i++) {
        let coin = coins[i];
        if (coin <= amount) {
          temp.push(coin);
          getChangeFor(coins, amount - coin, temp, i);
          temp.pop();
        }
      }
    }
  }
  getChangeFor(coins, amount, [], 0);
  return results; 
}
// i've printed all permutations, i only want all combinations. 
// console.log(coinChange([1, 2, 5], 7));

function coinChange2(coins, amount) {
  let results = [];
  let getChangeFor2 = (coins, amount, temp, index) => {
    if (index > coins.length) return;
    if (amount === 0) {
      results.push(temp.slice());
    } else {
      let coin = coins[index];
      if (coin <= amount) {
        temp.push(coin);
        getChangeFor2(coins, amount - coin, temp, index);
        temp.pop();
      }
      getChangeFor2(coins, amount, temp, ++index);
    }
  }
  getChangeFor2(coins, amount, [], 0);
  return results; 
}
// i've printed all permutations, i only want all combinations. 
console.log(coinChange2([1, 2, 5], 7));

