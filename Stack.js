// Implement a stack in JS

class Stack {
    constructor(maxSize) {
      this._list = [];
      this._maxSize = maxSize !== undefined ? maxSize : 100;
      console.log(this._maxSize);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error('The stack is empty.');
      } else {
        const item = this._list.pop();
        return item;
      }
    }
  
    push(item) {
      if (this.isFull()) {
        throw new Error('The stack is full.');
      } else {
        this._list.push(item);
      }
    }
  
    isTop(item) {
      return this.peek() === item;
    }
  
    size() {
      return this._list.length;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error('The stack is empty.');
      } else {
        return this._list[this._list.length];
      }
    }
  
    isEmpty() {
      return this._list.length <= 0;
    }
  
    isFull() {
      return this._list.length === this._maxSize;
    }
    printStack() {
      console.log(this._list);
    }
  }
  
  let myStack = new Stack(10);
  myStack.printStack();
  myStack.push(3);
  myStack.push(6);
  myStack.push(9);
  myStack.push(12);
  myStack.printStack();
  myStack.pop();
  myStack.pop();
  myStack.printStack();
  myStack.pop();
  myStack.pop();
  console.log(myStack.isEmpty());
  
  
  // Stacks are used to packtrack to previous task or state like in recusive code. Depth First Search
  // also used to store partially completed tasks, when you are exploring two different paths
  // on a graph from a point while doing the shortest path algorithm. 
  
  