// With dictionary of words and large input string
// find whether the input string can be completely segmented into words from the dictionary

// Test case. Dictionary: ['apple', 'pear', 'pier', 'pie'], string: 'applepie'

function wordBreakProblem(dict, word) {
    // str.match(), str.replace(), str.search() all might come in handy. 
  
    dict.forEach(phrase => {
      word = word.replace(phrase, '');
      if (word === '') return true;
    });
    return word === '';
  }
  
  console.log(wordBreakProblem(['apple', 'pear', 'pier', 'pie'], 'applepie'));
  
  // O(n) wehre n is the dictionary size
  
  // memorization