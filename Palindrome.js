// isPalindrome
function isPalindrome(word) {
    console.log('here')
    let n = word.length;
    if (n <= 1) return true; // one letter word is a palindrome by default
    if (n === 2) return (word[0] === word[1]);
    if (n % 2 === 0) {
      let half = n / 2;
      return (word[half - 1] === word[half])
        ? isPalindrome(word.slice(0, half - 1) + word.slice(half + 1))
        : false;
    } else {
      let middle = Math.floor(n / 2);
      return isPalindrome(word.slice(0, middle) + word.slice(middle + 1));
    }
  }
    
  console.log(isPalindrome('aabbccddccbbaa'));
  // O(n) / 2 -> O(n)
  // O(n) / 2 -> O(n)