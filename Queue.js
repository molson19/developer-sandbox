
// Queues are used in sorting and searching. Breadth First Search
// Priority Queues
// Use queues when we want to prioritize something over another, or a resource is shared between multiple devices. 

class Queue {
    constructor(maxSize) {
      this._list = [];
      this._maxSize = maxSize !== undefined ? maxSize : 100;
    }
  
    enqueue(item) {
      if (this.isFull()) {
        throw new Error('The queue is full.');
      } else {
        this._list.push(item);
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error('The queue is empty.');
      } else {
        return this._list.shift();
      }
    }
  
    size() {
      return this._list.length;
    }
  
    isEmpty() {
      return this._list.length === 0;
    }
  
    isFull() {
      return this._list.length === this._maxSize;
    }
  
    peek() {
     if (this.isEmpty()) {
        throw new Error('The queue is empty.');
      } else {
        return this._list[0];
      }
    }
  
    printQueue() {
      console.log(this._list);
    }
  }
  
  let myQueue = new Queue(10);
  myQueue.printQueue();
  myQueue.enqueue(9);
  myQueue.enqueue(8);
  myQueue.enqueue(7);
  myQueue.printQueue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.printQueue();
  myQueue.enqueue(6);
  myQueue.enqueue(5);
  myQueue.enqueue(4);
  myQueue.printQueue();