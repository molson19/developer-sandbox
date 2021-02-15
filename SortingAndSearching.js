
/* Take an arr of values and sort them efficiently

InsertionSort
SelectionSort 

MergeSort
QuickSort of pivot sort

Stick to merge sort...

What is mergeSort? Its fundamentally 
1. dividing an array unto sub arrays until you reach the base case of: array of size 1
2. merging the sub arrays back together in a sorted way. 

so start with the base case, then build 

if (arr.length <= 1) {
  return arr;
}

with array of size two, you'll need to 

split()
then, 
merge()

focus on merge first: with a left and right sub array and the original array
merge(left, right, array);

then build the splitting (arr.splice())
Write both with the idea of an array of size 2. 

Then once working correctly and tested, build to a more complex array
this is where you'll need to recurse. 

*/

function mergeSort(arr) {

    // need something to split our arr
    // need something to merge two arrays back together, sorted. 
    if (arr.length <= 1) {
      return arr;
    }
    // split arr into left and right sub arrays. 
    // merge and sort the sub arrays
    let mid = arr.length / 2;                         // dividing by 2 every time, then merge() -> O(n); total = n * Log(n)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
  
    return merge(left, right, arr);
  }
  
  function merge(left, right, arr) { // O(n) 
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) { 
      if (left[i] < right[j]) {                     
        arr[i + j] = left[i];
        i++;
      } else if (left[i] > right[j]) {              
        arr[i + j] = right[j];                    
        j++;
      } else {                                      
        arr[i + j] = left[i];
        i++;
        arr[i + j] = right[j];
        j++;
      }
    }
    while (i < left.length) {
      arr[i + j] = left[i];
      i++;    
    }
    while (j < right.length) {
      arr[i + j] = right[j];
      j++;
    }
    return arr;
  }
  
  function binarySearch(item, arr) { // 6, [1, 2, 4, 5, 6, 9]
    if (arr.length === 0) return -1;
    if (arr.length === 1) {
      return arr[0] === item
        ? 0
        : -1;
    }
  
    let start = 0;
    let end = arr.length - 1;
    return findValueInSortedArray(item, arr, start, end);
  }
  
  function findValueInSortedArray(item, arr, start, end) { // [1, 2, 3]
    if (end <= start) {
      return -1;
    }
  
    let mid = Math.floor((end - start) / 2) + start;
    let middleValue = arr[mid];
    if (item < middleValue) {
      console.log(item + " " + middleValue);
      return findValueInSortedArray(item, arr, start, mid);
    } else if (item > middleValue) {
      return findValueInSortedArray(item, arr, mid, end);
    } else {
      return mid;
    }
  }
  
  exports.mergeSort = mergeSort;
  exports.binarySearch = binarySearch;
  
  
  