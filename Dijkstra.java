import java.util.*;

public class Dijkstra {
    
    public static void main(String[] args) {
        WeightedGraph g = new WeightedGraph(9);
        g.addEdge(0, 3, 12);
        g.addEdge(0, 2, 32);
        g.addEdge(0, 1, 18);
        g.addEdge(3, 1, 10);
        g.addEdge(1, 4, 21);
        g.addEdge(4, 5, 28);
        g.addEdge(2, 7, 11);
        g.addEdge(7, 4, 16);
        g.addEdge(3, 8, 14);
        g.addEdge(3, 7, 25);
        g.addEdge(8, 5, 9);
        g.addEdge(7, 5, 39);
        g.printGraph();

        int shortestPath = findShortestPathFromTo(0, 5, g);
        System.out.println("The shortest path from: " + 0 + " to: " + 5 + " is: " + shortestPath);
    }

    private static int findShortestPathFromTo(int source, int destination, WeightedGraph graph) {
        // return the shortest path from the source to the destination . 
        int[] dist = new int[graph.getVertices()];
        Queue<Integer> allNodes = new Queue<>(graph.getVertices());
        for (int i = 0; i < dist.length; i++) {
            if (i != source) dist[i] = Integer.MAX_VALUE;
            allNodes.enqueue(i);
        }
        Set<Integer> visitedNodes = new HashSet<>();
        while (allNodes.isNotEmpty()) {
            int nodeWithSmallestDistNotVisited = findIndexOfMinNotVisited(dist, visitedNodes);
            visitedNodes.add(nodeWithSmallestDistNotVisited);
            allNodes.dequeue();
            graph.getEdgesFromSource(nodeWithSmallestDistNotVisited).forEach(edge -> {
                int adjacentNode = edge.getTarget();
                int weight = edge.getWeight();
                if (dist[nodeWithSmallestDistNotVisited] + weight < dist[adjacentNode])
                    dist[adjacentNode] = weight;
            });
        }

        return dist[destination];
    }

    private static int findIndexOfMinNotVisited(int[] arr, Set<Integer> visitedNodes) {
        int min = 0; 
        int indexOfMin = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < min && !visitedNodes.contains(i)) {
                min = arr[i];
                indexOfMin = i;
            }
        }
        return indexOfMin;
    }

    private static int[] findShortestPaths(int source, WeightedGraph graph) {
        // return a shortest paths tree.
        int[] dist = new int[graph.getVertices()];
        Queue<Integer> allNodes = new Queue<>(graph.getVertices());
        for (int i = 0; i < dist.length; i++) {
            if (i != source) dist[i] = Integer.MAX_VALUE;
            allNodes.enqueue(i);
        }
        Set<Integer> visitedNodes = new HashSet<>();
        while (allNodes.isNotEmpty()) {
            int nodeWithSmallestDistNotVisited = findIndexOfMinNotVisited(dist, visitedNodes);
            visitedNodes.add(nodeWithSmallestDistNotVisited);
            graph.getEdgesFromSource(nodeWithSmallestDistNotVisited).forEach(edge -> {
                int adjacentNode = edge.getTarget();
                int weight = edge.getWeight();
                if (dist[nodeWithSmallestDistNotVisited] + weight < dist[adjacentNode])
                    dist[adjacentNode] = weight;
            });
        }
        return dist;
    }
}
