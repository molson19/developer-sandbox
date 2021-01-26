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

const apple = new Apple('green', 'GrannySmith');

console.log(apple.message);

//Other keywords and operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
const a = 3;
console.log(~a);