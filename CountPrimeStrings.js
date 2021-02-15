
const isPrime = function(n) {
    let result = true;
    for (let i = 2; i <= n/2 ; i++) {
      if (n % i === 0) {
        result = false;
        break;
      }
    }
    console.log(`Checking prime of ${n}...is${result ? '' : ' not'} prime.`);
    return result;
  }
  
  // count the occurances of primes in the string
  function countPrimeString(s) {                    // 12
    let result = 0;
    let primes = [];                                 
    const countPrime = (s, index) => {              // '13', 1            
      if (index >= s.length) result += 1; // out of candidates -> add to result
      else { 
        for (let i = index + 1; i <= s.length; i++) {   // '3 1311'
          let num = s.slice(index, i);          
          if (primes[num] || isPrime(num)) {
            primes[num] = true;
            index += i;                             
            countPrime(s, index);   
            index -= i;                 
          }
        }                 
      }
    };
    countPrime(s, 0);
    return result;
  }
  
  // can only be evenly divisible by half if itself. -> n/2
  console.log(isPrime(313));
  console.log(countPrimeString('31311'));
  