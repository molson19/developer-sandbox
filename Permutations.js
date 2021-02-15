/* permutations

 for permuation problems, you will not be able to solve them itertively, because you need to go to every node in the
descision tree and the number of nodes increases exponentially with respect to the size of the input
 
so you don't know how many loops you'll need. Thus you'll need recursion. 

In these permutation problems you have a 3 objects to track: 
1. A results list. This is where all permutations will be stored and this is what is returned at the end of the function
2. A list of candidates. At each step in the permutation decsion tree we pick one candidate and carry on in the tree, thus, 
the candidate list shrinks by one with every step in the decision tree. 
3. A temporary list to hold our results as we move down the decision tree to the leaf node. 

At the leaf node, or the base case, 
- the list of candidates === 0
- we add a copy of our temp data store to the results list. 

To recurse through the tree, we'll need a for loop running the size of the input so
that we can pick each one of the elements and move down the decision tree with it. 

So we'll end up with something close to O(n!) runtime, as well as space complexity because of the recursiove nature. 
This may also increase if we are slicing an array => which could be O(n) and could cause the total algorithm to 
be O(n!) * O(n)

Start by drawing the decsion tree

given a collection of distinct integers, return all possible permutations
 O(n!) * O(n) because of the list concatenating and going through n! calls of the method
 space is also O(n!) * O(n) because we are storing n! calls in the stack and storing a 2 list that sum to size n at each call stack. 
*/ 
function permutationsOf(arr) {                
    let results = [];
    const permutations = (temp, cand) => {     
      if (cand.length === 0) {
        results.push(temp.slice());
      } else {
        for (let i = 0; i < cand.length; i++) { 
          temp.push(cand[i]);                    
          permutations(temp, cand.slice(0, i).concat(cand.slice(i + 1)));
          temp.pop();                           
        }
      }
    }
    permutations([], arr);
    return results;
  }
  
  console.log(permutationsOf([1, 2, 3]));
  
  const keys = {
      0: [''],
      1: [''],
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
    }
  
  // given a phone number, return list of all words that can be created from the phone number 
  // on a phone. 
  function wordsFromPhoneNumber(n) { // "23"
    let results = [];
    const permutations = (temp, cand) => {
      if (cand.length === 0) {
        results.push(temp.slice());
      } else {
        for (let i = 0; i < cand.length; i++) {
          let num = cand.charAt(i);
          for (let j = 0; j < keys[num].length; j++) {
            temp += keys[num][j];
            permutations(temp, cand.slice(0, i) + cand.slice(i + 1));
            temp = temp.slice(0, temp.length - 1);
          }
        }
      }
    }
    permutations('', n);
    return results;
  }
  
  console.log(wordsFromPhoneNumber('23'));
  // let s = '23455';
  // console.log(s.slice(0, s.length - 1));