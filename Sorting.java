import java.util.*;

public class Sorting {

    public static void main(String[] args) {
        int[] unsorted = { 6, 5, 1, 4, 3 };
        quickSort(unsorted); //13
        printArrayOf(unsorted);
    }

    public static int[] quickSort(int[] arr) {
        return quickSort(arr, 0, arr.length - 1);
    }

    //Quick sort impl
    private static int[] quickSort(int[] arr, int left, int right) {
        if (left < right) {
            int pivotIndex = partition(left, right, arr);

            quickSort(arr, left, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, right);

        }

        return arr;
    }

    private static int partition(int left, int right, int[] arr) {
        Random rand = new Random();
        int pivotIndex = left + (rand.nextInt(right - left + 1));
        int pivot = arr[pivotIndex];
        swap(pivotIndex, right, arr);
        int j = left; 
        for (int i = left; i < right; i++) {
            if (arr[i] <= pivot) { 
                swap(i, j, arr);
                j++;
            }
        }
        swap(j, right, arr);
        return j;
    }

    // merge sort impl
    // O(n*log(n))
    private static int[] mergeSort(int[] arr) {                     
        if (arr.length <= 1) {
            return arr;
        }
        int[] left = mergeSort(split(0, arr.length / 2, arr));
        int[] right = mergeSort(split(arr.length / 2, arr.length, arr));

        return merge(left, right, arr);
    }

    private static int[] split(int start, int end, int[] arr) {
        int[] result = new int[end - start];
        for (int i = start; i < end; i++) { 
            result[i - start] = arr[i];             
        }
        return result;
    }

    private static int[] merge(int[] left, int[] right, int[] arr) {
        int i = 0;
        int j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {          
                arr[i + j] = left[i]; 
                i++;
            } else {    
                arr[i + j] = right[j]; 
                j++;
            }
        }
        while(i < left.length) {
            arr[i + j] = left[i]; 
            i++;
        }
        while (j < right.length) {
            arr[i + j] = right[j]; 
            j++;
        }
        return arr;
    }

    // insertion sort
    // O(n^2)
    private static int[] insertionSort(int[] arr) { // { 5, 5, 6, 4, 3 }
        int j;
        int element;
        for (int i = 0; i < arr.length; i++) {      // i = 2
            element = arr[i];                       // ele = 1
            j = i - 1;
            while (j >= 0 && arr[j] > element) {   // j = 0 && 5 > 1
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = element;
        }
        return arr;
    }

    // impl of bubble sort with an array of ints
    // O(n^2)
    public static int[] bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - i; j++) {
                if (arr[j + 1] < arr[j]) swap(j, j+1, arr);
            }
        }
        return arr;
    }

    // implement selection sort for an array of ints. 
    // The time complexity of this algorithm is O (n^2)
    public static int[] selectionSort(int[] arr) {
        int stop = arr.length;
        for (int i = 0; i < stop; i++) {
            int min = i;
            for (int j = i + 1; j < stop; j++) {
                if (arr[j] < arr[min]) min = j;
            }
            if (min != i) swap(i, min, arr);
        }
        return arr;
    }

    private static void swap(int i, int j, int[] arr) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    private static void printArrayOf(int[] arr) {
        for (int value : arr) {
            System.out.print(" " + value + " ");
        }
    }
}