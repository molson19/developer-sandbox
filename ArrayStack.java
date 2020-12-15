
public class ArrayStack <T> {
    private int maxSize;
    private int topIndex;
    private T[] array;

    public ArrayStack(int maxSize) {
        this.maxSize = maxSize;
        this.topIndex = -1;
        this.array = (T[]) new Object[maxSize];
    }

    public boolean isFull() {
        return topIndex == maxSize - 1;
    }

    public boolean isEmpty() {
        return topIndex == -1;
    }

    public T top() {
        return (isEmpty()) 
            ? null 
            : array[topIndex];
    }

    public int size() {
        return topIndex + 1;
    }

    public T pop() {
        return (isEmpty()) 
            ? null
            : array[topIndex--];
    }

    public void push(T data) {
        if (isFull()) {
            System.err.println("Stack is Full");
        } else {
            array[++topIndex] = data;
        }
    }
}
