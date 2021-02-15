/*
Object //Everything in JavaScript is an object and can be stored in a variable
Function
Boolean
Symbol

Error

Number
BigInt
Math
Date

String
RegExp

Array

Map
Set
WeakMap
WeakSet

JSON
ArrayBuffer

Promise
Generator // is iterable and has iterative properties. i.e. generator().next()
AsyncFunction
*/
let variable = 1;
const immutableVariable = 2;

// +, -, *, /, =, ===, !, !==

/*
 this - a special property of an execution context
 function - define a function expression (or declare a function)
 class - define a class expression
 function* - define a generator function
 yield - pause and resume a generator function
 await - pause and resume an async function and wait for the promise's resolution/rejection
 in - determine whether an object has a given property
 instance of - determines wether an object is an instance of another object
*/
const regex = new RegExp('/ab+c/i');
const regex1 = /ab+c/i;
const myObj = { a: 1 };
const myArr = [1, 2, 3];
const isFalse = (true && false);

/*
super - call the parent constructor
...obj - spread syntax. Expand the expression in places where multiple arguments or elements are expected. 
new - create an instance of a contructor
*/

class Apple {
    _color = '';
    _type = '';

    constructor(color, type) {
        this._color = color;
        this._type = type;
    }

    static of(field1, field2) {
        return new Apple(field1, field2);
    }

    get color() {
        return this._color;
    }

    get type() {
        return this._type;
    }

    get message() {
        return `The apple's color is ${this._color}. The apple's type is ${this._type}`
    }
}

const apple = Apple.of('green', 'GrannySmith');

console.log(apple.message);

//Other keywords and operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
const a = 3;
console.log(~a);
const array = new Array();


const { mergeSort, binarySearch } = require('./SortingAndSearching.js');


// Arrays

/* 
- list-like objects (still objects in JS), the object prototype has methods to perform traversals and mutations on the elements. 
- length and types of elements are not fixed
- look up by index
- can't use string as an element index
- JS arrays are not guaranteed to be dense
- the arrays object properties and list of elelments are separate
- array traversal and mutation operations cannot be applied to the array objects properties
*/ 

const clients = ['Bob', 'Joe', 'Jane', 'Barb', 'Jim'];
const bob = clients.shift();
const jim = clients.pop();
console.log(`First: ${bob}, last: ${jim}`);

clients.push(jim);
clients.unshift(bob);

console.log(clients);

const janeIndex = clients.indexOf('Jane');
console.log(janeIndex);

const jane = clients.splice(janeIndex, 1);
console.log(jane);
console.log(clients);

const copy = clients.slice();
console.log(`Copy: ${copy}`);

// length property is updated based on method calls. push(), pop(), etc update the length property

// length is dynamic

const myArray = new Array();
const myOtherArray = [];

// a static method of the Array object
const numbers = Array.of(1, 2, 3); // [1, 2, 3]
// an instance method of the arry instance
const indexOfThree = numbers.indexOf(3);
console.log('--------------\n');
// static is a member of an object from the objects constructor, rather than from an object instance created via the constructor
// you can access the static method without instantiating an object of that type first. 
// methods called in object instacnes are called instacne methods.

// An array can be implemented as an object with a length and data property

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  pop() {
    const poppedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    console.log('Popped: ' + poppedItem);
    return poppedItem;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    console.log('Pushed: ' + item);
    return this.data;
  }

  insertAt(index, item) {  // [1, 2, 4, 5], length = 4 
    for (let i = this.length; i > index; i--) {     // i = 2; 2 > 2; i--
      this.data[i] = this.data[i - 1];              // [1, 2, 3, 4, 5]
    }
    this.length++;                                  // length = 5;
    this.data[index] = item;
    console.log(`Inserted ${item} at ${index}`);
  }

  deleteAt(index, item) {

  }

  indexOf(item) {
    // find item in a quick way
    // brute force (liner) => loop through all elements
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) return i;
    }

    //Better approach (logarithmic) (O(log(n))) is binary search
    // array must be sorted though. 
  }

  print() {
    console.log(Object.values(this.data));
  }
}

const coolArray = new MyArray();

coolArray.push(1);
coolArray.push(2);
coolArray.push(4);
coolArray.push(5);
coolArray.push(6);
const six = coolArray.pop();
coolArray.print();

coolArray.insertAt(2, 3);
coolArray.print();
console.log('Index of 3 is : ' + coolArray.indexOf(3));


console.log('--------------\n');


let unsorted = [8, 12, 23, 11, 9, 7, 92, 4, 4, 4, 44, 4, 2, 1, 3];

console.log(mergeSort(unsorted));

console.log('--------------\n');

let listToFindStuffIn = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(1, listToFindStuffIn));


// Array practice problems

// Find smallest Common Number
// Given 3 integer arrays sorted in ascending order, return the smallest number that is common in all three arrays. 

function findSmallestCommonNumber(arr1, arr2, arr3) {
  //edge case
  if (arr1 === undefined || arr1.length === 0 
    || arr2 === undefined || arr2.length === 0 
    || arr3 === undefined || arr3.length === 0) {
      return -1;
  }

  let map = {};
  let i = 0;
  while (i < arr1.length || i < arr2.length || i < arr3.length) {
    let item1 = i < arr1.length ? arr1[i] : -1;
    let item2 = i < arr2.length ? arr2[i] : -1;
    let item3 = i < arr3.length ? arr3[i] : -1;
    if (item1 !== -1 && map[item1] === 2) {
      return item1;
    } else if (item2 !== -1 && map[item2] == 2) {
      return item2;
    } else if (item3 !== -1 && map[item3] === 2) {
      return item3;
    } else {
      map[item1] = map[item1] !== undefined ? map[item1] + 1 : 1;
      map[item2] = map[item2] !== undefined ? map[item2] + 1 : 1;
      map[item3] = map[item3] !== undefined ? map[item3] + 1 : 1;
    }
    i++;
  }
  return -1;
}

console.log(findSmallestCommonNumber([1], [3], [])); // -1
console.log(findSmallestCommonNumber(
  [6, 7, 10, 25, 30, 50], 
  [0, 4, 5, 7, 8, 50], 
  [1, 3, 5, 6, 10, 14, 15, 16, 17, 18, 20, 23, 45, 50])); // expect: 6
  // Runtime complexity is O(n) where n is the largest array. 
  // memory or space = O(m) where m is the number of unique positive integers in the arrays. 

  