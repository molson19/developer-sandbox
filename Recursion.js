// find factorial for n

function factorial(n) {
    // product of n and all positive integers less than
    // factorial(2) = 2 * f(1)
    // f(3) = 3 * f(2)
    // f(4) = 4 * f(3)
  
    if (n <= 1) return 1;
    else return n * factorial(n - 1);
  }
  
  console.log(factorial(5));
  
  /* 
  
  When to use recursion: 
  - problem breaks down into similar sub problems. Ask yourself "can this problem be broken down into similar subproblems?"
  - Problem requires an arbitrary number of nested loops. If you don't know the number of nested loops needed, use recursion, otherwise if you know you only need 2 nested loops you could use iteration.
  - iterating through a tree or graph is recursive
  - finding the permutations of a string is recursive
  - Use when it feels natural -> where an iterative solution is not working out. 
  */
  
  function addSubtractFive(n) { // 10 
    
    if (n <= 0) {
      console.log(n);
      return;
    }
  
    console.log(n);
    addSubtractFive(n - 5);
    console.log(n);
  }
  addSubtractFive(15);
  
  /*
  10 
  5
  0
  5
  10
  */
  
  /*
  Recursion and iteration
  
  Both recursion and iteration depend on a condition which determines whether to stop execution or continue it.
  
  while (condition) {
    doSomething();
  }
  
  function doSomething() {
    if (baseCase()) {
      return;
    } else {
      doSomething();
    }
  }
  */ 
  
  function factorialIteratively(n) {
    let i = n - 1;
    while(i >= 1) {
      n *= i;
      i--;
    }
    return n;
  }
  console.log(factorialIteratively(5));
  
  // note the condition ofthe while loop becomes the base case of the recursion. 
  // also note that in recursion the variables are kept track by the recursive function return, instead 
  // of in a variable in the iterative function
  
  // recursive code has to run the program and manage the stack memory, thus its more memory intensive and slightly slower. 
  
  /* 
  Convert iterative to recursive: 
  1. Identify the main loop - should be modifying one or more variables
  2. Use the loop condition as the base case and the body of the loop as the recursive code. 
  3. the local variables in the loop turn into parameters in the recursive function
    a. this is why recursive fuinctions typically pass an index, like when recursively traversing a list or string
  4. compile and rerun tests
  5. refactor the function
  */
  
  function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // editing the same string. 
  function reverseString(s) { // 'abc' -> 'cba' and 'abcd' -> 'dcba'
    let i = 0;
    let j = s.length - 1;
    let arr = s.split('');
    while (i < j) {
      swap(i, j, arr);
      i++;
      j--;
    }
    return arr.reduce((acc, curr) => acc += curr)
  }
  
  function reverseRecurse(s) { // 'abc'
    let reverse = function(i, j, arr) {
      if (i >= j) return arr;
      else {
        swap(i, j, arr);
        return reverse(++i, --j, arr);
      }
    }
    return reverse(0, s.length - 1, s.split('')).reduce((acc, curr) => acc += curr);
  }
  
  // returning a copy
  function reverseString1(s) { // 'abc' -> 'cba' and 'abcd' -> 'dcba'
    let result = '';
    let i = s.length - 1;
    while (i >= 0) {
      result += s[i];
      i--;
    }
    return result;
  }
  
  function reverseRecurse1(s) { // 'abc'
    let reverse = function(s, i) {
      if (i === -1) return '';
      else return s[i] + reverse(s, --i);
    }
    return '' + reverse(s, s.length - 1);
  }
  
  let s = 'michael';
  console.log(s);
  console.log(reverseRecurse1(s));
  
  
  /* 
  
  Count vowels of a string 
  
  vowels = ['a', 'e', 'i', 'o', 'u']; // and sometimes y
  
  count the number of vowels in a string
  
  solve iteratively, then recrusively. 
  
  */
  
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let myString = 'abcde';
  
  function countVowelsIterativelyBasic(s) {
    let numVowels = 0;
    let i = 0;
    while (i < s.length) {
      if (vowels.has(s.charAt(i))) {
        numVowels++;
      }
      i++;
    }
    return numVowels;
  }
  
  // reduced code
  function countVowelsIteratively(s) {
    return s.split('').reduce((acc, char) => (vowels.has(char)) ? ++acc : acc, 0);
  }
  
  function countVowelsRecurively(s) {
    const countVowels = (s) => {
      if (s === '') return 0;
      else return Number(vowels.has(s.charAt(0))) + countVowels(s.substr(1));
    }
    return countVowels(s);
  }
  
  console.log(countVowelsIterativelyBasic(myString)); // 2
  console.log(countVowelsRecurively('abcdewwwwwddffgghhyyu')); // 3
  
  // square -> (n-1)^2 = n^2 - 2n + 1 ===> n^2 = (n-1)^2 + 2n - 1
  function computeSquareOf(n) { // n = 2 -> 4
    // or return n*n;
    let square = (n) => {
      if (n === 1) return n;
      else return square(n - 1) + 2 * n - 1;
    }
    return square(n);
  }
  
  console.log(computeSquareOf(5));
  
  function searchFirstOccurenceOf(n, arr, start) { // 4, [5, 2, 4, 1, 3], 1
    let search = (n, arr, start, end) => {
      if (start === end) return -1;
      else {
        if (n === arr[start]) return start;
        else return search(n, arr, ++start, end);
      }
    }
  
    return search(n, arr, start, arr.length);
  }
  
  let arr = [3, 2, 1];
  console.log(arr.sort((a, b) => a < b ? -1 : 1));
  console.log(searchFirstOccurenceOf(4, [5, 2, 4, 1, 3], 1));
  
  
  
  // recursion
  function fibonacci(n) {
    if (n < 2) return n;
  
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // each number is the sum of the previous two numbers
  function fibonacciDp(n) { // n = 2
    let fib = [];
    let fibonacci = (n) => {
      if (fib[n]) return fib[n];
  
      if (n < 2) {
        fib[n] = n;
        return n;
      }
  
      fib[n] = fibonacci(n - 1) + fibonacci(n - 2)
      return fib[n];
    }
    return fibonacci(n);
    
  }
  
  // print the nth fibonacci number. 
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  console.log(fibonacci(6)); // 8
  // console.log(fib); // [0, 1, 1, 2, 3, 5, 8]
  
  // return the nth row of pascals triangle. 
  // memory -> recursive means maintaining the call stack, O(n)
  // runtime -> O(n) * O(n - 1) times through the call stack and loop => O(n^2) 
  function pascalsTriangle(n) { // 3
    if (n === 0) {
      return [1];
    } else {
      let line = [1];
      let prev = pascalsTriangle(n - 1);
      // O(n - 1)
      for (let i = 0; i < prev.length - 1; i++) {
        line.push(prev[i] + prev[i + 1]);
      }
      line.push(1);
      return line;
    }
  }
  
  console.log(pascalsTriangle(4));
  
  // Recursion wiht numbers
  
  const isPrime = function(n) {
    let result = true;
    for (let i = 2; i <= n/2 ; i++) {
      if (n % i === 0) return false;
    }
    return result;
  }
  
  // count the occurances of primes in the string
  function countPrimeString(s) { // 31311
    
  
  }
  
  // can only be evenly divisible by half if itself. -> n/2
  // console.log(isPrime(311));
  
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