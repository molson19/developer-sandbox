// Given and array of integers, find the max value in a windoow

// return an array of the maximums in the window 

function findMax(array) {
    return array.reduce((max, curr) => (curr > max) ? curr : max);
  }
  
  function findMaxInWindow(w, array) { // 2, [ 2, 6, 1, -2 ] expected: [6, 6, 1]
    // test case
    // handle edge case
    if (array.length == 0 || w === 0 || w > array.length) return [];
  
    let result = []; // where my results are stored
    let window = []; // array of indexes of numbers in array and within window w.
  
    let max = array[0];
    window.push(0);
    for (let i = 1; i < w; i++) {
      if (array[i] > max) {
        window.pop();
        window.push(i);
        max = array[i];
      }
    }
    
    result.push(array[window[0]]);
  
    for (let i = 2; i <= array.length; i++) {
      let nextWindow = array.slice(i, i + w);
      const max = findMax(window);
      result.push(max);
    }
    return result;
  }
  
  console.log(findMaxInWindow(2, [2, 6, 1, -2]));
  
  // O(n*w) where n is length and w is window size

  // link: https://www.educative.io/module/lesson/data-structures-in-javascript/gxnlB9N5MR9