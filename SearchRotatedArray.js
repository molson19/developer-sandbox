// find n in arr, where n is sorted but has been rotated by r.
// binary search, the list is sorted, jut rotated.

function binarySearch(n, arr, start, end) { 

    if (start >= end) return -1;
  
    let midIndex = Math.floor((end - start) / 2) + start;
    let midItem = arr[midIndex];
  
    if (midItem === n) return midIndex;
  
    if (n < midItem && arr[start] < midItem && n > arr[start]) {
      return binarySearch(n, arr, start, midIndex);
    } else if (n > midItem && arr[end] > midItem && n < arr[end]) {
      return binarySearch(n, arr, midIndex, end);
    } else if (arr[end] < midItem) {
      return binarySearch(n, arr, midIndex, end);
    } else if (arr[start] > midItem) {
      return binarySearch(n, arr, start, midIndex);
    }
  }
  
  function findInRotatedArray(n, arr, r) {
    if (arr.length === 0) {
      return -1;
    }
    if (arr.length === 1) {
      return arr[0] === n 
        ? 0
        : -1
    }
  
    let start = 0;
    let end = arr.length - 1;
  
    return binarySearch(n, arr, start, end);
  }
  
  console.log(findInRotatedArray(2, [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8]))