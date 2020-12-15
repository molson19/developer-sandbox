import java.util.*;

public class Search {

    private static Sorting sorting;
    
    public static void main(String[] args) {
        // int[] list = { 3, 4, 2, 7, 1, 9, 5, 6, 12, 34 };
        // int[] listToFindSum = { 1, 21, 3, 14, 5, 60, 7, 6 };
        // int[] result = findSumUsingHashing(listToFindSum, 81);
        // System.out.println("The answer is: " + result[0] + " and " + result[1]);
        String arr[] = {
            "cat",
            "dog",
            "tac",
            "god",
            "act",
            "tom marvolo riddle ",
            "abc",
            "def",
            "cab",
            "fed",
            "clint eastwood ",
            "i am lord voldemort",
            "elvis",
            "old west action",
            "lives"
           };
           groupAnagrams(arr);
    }

    private static void groupAnagrams(String[] words) {
        Map<String, List<String>> map = new HashMap<>();
        for (String word : words) {
            String key = sortWord(word);
            if (map.get(key) != null) {
                map.get(key).add(word);
            } else {
                List<String> anagrams = new ArrayList<String>();
                anagrams.add(word);
                map.put(key, anagrams);
            }
        }
        for (String key : map.keySet()) {
            printArrayOfWords(map.get(key));
        }
    }

    private static String sortWord(String word) {
        char[] letters = word.toCharArray();
        Arrays.sort(letters);
        return new String(letters);
    }

    private static void printArrayOfWords(List<String> words) {
        System.out.print("[ " + words.get(0));
        for (int i = 1; i < words.size(); i++) {
            System.out.print(", " + words.get(i));
        }
        System.out.println(" ]");
    }

    // an efficient O(n) solution using hashing
    // https://www.educative.io/module/lesson/algorithms-in-java/JPXgJJjLxky
    private static int[] findSumUsingHashing(int[] arr, int value) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            int ramainder = value - arr[i];
            map.put(ramainder, i);
            if (map.get(arr[i]) != null) {
                result[0] = arr[i];
                result[1] = arr[map.get(arr[i])];
            }
        }
        return result;
    }

    // a much more efficient solution that uses quickSort and binarySearch
    // https://www.educative.io/module/lesson/algorithms-in-java/JPXgJJjLxky
    private static int[] findSum(int[] arr, int value) {
        int size = arr.length;
        sorting.quickSort(arr);
        int [] result = new int [2];
        int start = findStartIndex(arr, value, 0, size);
        for (int i = start; i > 0; i++) {
            int remainderIndex = binarySearch(value - arr[i], arr, 0, start);
            if (remainderIndex != -1) {
                result[0] = arr[i];
                result[1] = arr[remainderIndex];
                return result; 
            }
        }

        return result; 
    }

    private static int findStartIndex(int[] arr, int value, int start, int end) {
        if (start >= end) { 
            return end;
        } 
        int middle = ((end - start) / 2) + start;
        int middleItem = arr[middle];
        if (value < middleItem) {
            return findStartIndex(arr, value, start, middle - 1);
        } else if (value > middleItem) {
            return findStartIndex(arr, value, middle + 1, end);
        } else {
            return middle;
        }
    }

    // intuitive and intensive brute force approach
    // https://www.educative.io/module/lesson/algorithms-in-java/JPXgJJjLxky
    private static int[] findTwoNumbersInThatSumTo(int[] arr, int value) {
        int[] result = new int[2];
        int size = arr.length;
        for (int i = 0; i < size; i++) { 
            for (int j = i + 1; j < size; j++) { 
                if (arr[i] + arr[j] == value) {
                    result[0] = arr[i];
                    result[1] = arr[j];
                    return result; 
                }
            }
        }
        return result; 
    }

    private static int binarySearch(int itemToFind, int[] arr) {
        // what will the algorithm need at each recusive step? 
        // need to know locations. Start of the array and end of the array
        if (arr.length == 0) return -1;
        if (arr.length == 1) {
            return arr[0] == itemToFind
                ? 0
                : -1;
        }
        
        int start = 0;
        int end = arr.length - 1;
        return binarySearch(itemToFind, arr, start, end);
    }

    private static int binarySearch(int itemToFind, int[] arr, int start, int end) {
        System.out.println("start: " + start + ", End: " + end);
        if (start >= end) { 
            return -1;
        } 

        int middle = ((end - start) / 2) + start;
        int middleItem = arr[middle];

        if (itemToFind < middleItem) {
            return binarySearch(itemToFind, arr, start, middle - 1);
        } else if (itemToFind > middleItem) {
            return binarySearch(itemToFind, arr, middle + 1, end);
        } else {
            return middle;
        }
    }

    private static int linearSearch(int itemToFind, int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == itemToFind) {
                return i;
            }
        }
        return -1;
    }

}
