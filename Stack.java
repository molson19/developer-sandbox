import java.util.LinkedList;

public class Stack <T> {

    private static final int MAX_SIZE = 10000;

    private int maxSize;
    private T top;
    private int size;
    private LinkedList<T> list;

    public Stack(int maxSize) {
        this.maxSize = maxSize;
        this.size = 0;
        this.top = null;
        this.list = new LinkedList<T>();
    }

    public void push(T data) {
        if (!isFull()) {
            this.list.addFirst(data);
            this.top = data;
            size++;
        }
    }

    public T pop() {
        if (isEmpty()) {
            return null;
        } else {
            T data = this.list.removeFirst();
            this.top = this.list.getFirst();
            size--;
            return data;
        } 
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == maxSize;
    }

    public T peek() {
        return this.list.getFirst();
    }

    public T top() {
        return this.top;
    }

    public int getCapacity() {
        return this.maxSize;
    }
}
