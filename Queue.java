
public class Queue <T> {
    // linear queue
    // circular queue
    // priority queue

    private int maxSize;
    private T[] array;
    private int front;
    private int back;
    private int currentSize;

    public Queue(int maxSize) {
        this.maxSize = maxSize;
        this.currentSize = 0;
        this.front = 0;
        this.back = -1;
        this.array = (T[]) new Object[maxSize];
    }

    public boolean isEmpty() {
        return currentSize == 0;
    }

    public boolean isNotEmpty() {
        return !isEmpty();
    }

    public boolean isFull() {
        return currentSize == maxSize;
    }

    public boolean hasOneItem() {
        return currentSize == 1;
    }

    public T top() {
        return (isEmpty())
            ? null
            : array[front];
    }

    public void enqueue (T data) {
        if (isFull()) {
            System.err.println("Queue is full!");
        } else {
            back++;
            currentSize++;
            array[back % maxSize] = data;
        }
    }

    public T dequeue () {
        if (isEmpty()) {
            return null;
        } else {
            T data = array[front % maxSize];
            front++;
            currentSize--;
            return data;
        }
    }

    public void printQueue() {
        if (isEmpty()) {
            System.out.println("Queue: []");
        } else {
            System.out.print("Queue: [" + this.array[this.front % maxSize]);
            for (int i = this.front + 1; i <= this.back; i++) {
                System.out.print(", " + this.array[i % maxSize]);
            }
            System.out.println("]");
        }
    }

    public void printArray() {
        
        System.out.print("Array: [" + this.array[0]);
        for (int i = 1; i < this.array.length; i++) {
            System.out.print(", " + this.array[i]);
        }
        System.out.println("]");
    }

    public void printPointers() {
        System.out.println("Front: " + this.front + ", Back: " + this.back);
    }
}

class QueueDemo {
    public static void main(String[] args) {
        Queue<Integer> queue = new Queue(5);
        queue.printPointers();
        queue.enqueue(1);
        queue.printQueue();
        queue.printPointers();
        queue.dequeue();
        queue.printQueue();      
        queue.printPointers();
        queue.enqueue(1);
        queue.printQueue();
        queue.printPointers();

        queue.printQueue();
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.printQueue();
        queue.dequeue();
        queue.dequeue();
        queue.printQueue();
        queue.enqueue(6);
        queue.enqueue(7);
        queue.printQueue();
        queue.printArray();
        queue.printPointers();
        queue.dequeue();
        queue.enqueue(8);
        queue.printQueue();
    
    }
}