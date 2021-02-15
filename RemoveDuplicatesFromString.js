// Remove duplicate characters from a string which is passed by reference.

// no return, update original 

function removeDuplicatesFromString(s) { // 'abc' -> 'abc'
  
  if (s !== undefined && s.length > 1) {
    
    let hashTable = {};                     // { a: 'a', b: 'b' }
    const firstChar = s.charAt(0);          
    hashTable[firstChar] = firstChar;       
    let j = s.length;
    for (let i = 1; i < j; i++) {    // i = 2; 2 < 2
      
      let nextChar = s.charAt(i);           // a
      
      if (hashTable[nextChar] !== undefined) {  // true
        s = s.slice(0, i) + s.slice(i + 1);     // 'ab' + 'c'
        i--;
        j--;
      } else {
        hashTable[nextChar] = nextChar;
      }
    }
  }
  return s;
}

let str = '';
console.log(removeDuplicatesFromString(str));