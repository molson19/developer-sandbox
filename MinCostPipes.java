import java.util.*;

public class MinCostPipes {
    public static void main(String[] args) {
        int[] pipes = {4, 2, 3, 7, 5};
        System.out.println("The min cost of connecting the pipes: " + pipes + " is: " + minCost(pipes));
    }

    private static int minCost(int[] pipes) {
        int numPipes = pipes.length;
        if (numPipes < 2) return 0;
        Arrays.sort(pipes);
        int cost = 0;
        for (int i = 1; i < numPipes; i++) {
            pipes[i] = pipes[i] + pipes[i - 1];
            cost += pipes[i];
        }
        return cost;
    }
}
