
public class DivideAndConquer {
    public static void main(String[] args) {
        var result = pascalsTriangle(5);
        System.out.println("The solution is: " + result);
    }

    public static int[] pascalsTriangle(int n) {
        // returns the values in the nth line of pascal's triangle as a list of ints. 
        int[] result = new int[n + 1];
        if (n == 0) {
            result[0] = 1;
            System.out.println(1);
        } else {
            int[] subarray = pascalsTriangle(n - 1);
            for (int i = 0; i < result.length; i ++) {
                int left = ((i - 1) >= 0) ? subarray[i - 1] : 0;
                int right = (i < subarray.length) ? subarray[i] : 0; 
                result[i] = left + right;
                System.out.print(left + right + " ");
            }
            System.out.println();
        }
        return result;
    }
}
