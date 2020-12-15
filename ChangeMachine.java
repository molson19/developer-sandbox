import java.util.*;

public class ChangeMachine {
    public static int [] coins = {25, 10, 5, 1}; 

    public static void main(String[] args) {
        int amount = 37;
        System.out.println(amount + " cents can be broken into the minimum number of coins as: " + getMinCoins(amount));
    }

    public static ArrayList<Integer> getMinCoinsWithDynamicProgramming(int[] coinDenoms, int amount) {
        ArrayList<Integer> change = new ArrayList<Integer>();
        return change; 
    }

    // function to recieve change in the form of coins
    // O(n^2) runtime as there is essentially a nested loop. where n is number of coin denominations. 
    public static  ArrayList<Integer> getMinCoins(int amount)  {       // 37
      ArrayList<Integer> change = new ArrayList<Integer>();
      int i = 0;
      while (i < coins.length) {    // i = 4
        int coin = coins[i];        // 1
        if (coin <= amount) {       // 1 <= 0 true
          amount = amount - coin;   // 0
          change.add(coin);         // [25, 10, 1, 1]
        } else {
          i++;                      // 
        }
      }
      return change;      
    }
}
