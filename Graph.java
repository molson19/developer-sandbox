import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;

public class Graph {

    private LinkedList<Integer>[] adjacencyList;
    private int vertices;
    
    public Graph(int vertices) {
        this.vertices = vertices;
        this.adjacencyList = new LinkedList[vertices];

        for (int i = 0; i < vertices; i++) {
            this.adjacencyList[i] = new LinkedList<>();
        }
    }

    public int getVertices() {
        return vertices;
    }

    public void printGraph() {
        for (int i = 0; i < vertices; i++) {
            System.out.print("Node " + i);
            this.adjacencyList[i].forEach(node -> {
                System.out.print( " -> " + node);
            });
            System.out.println("");
        }
    }

    public void addEdge(int sourceNode, int targetNode) {
        if (sourceNode < vertices && targetNode <  vertices)
            this.adjacencyList[sourceNode].addLast(targetNode);;
    }

    public List<Integer> getAdjacentNodes(int node) {
        return this.adjacencyList[node].stream().collect(Collectors.toList());
    }

    public void  deleteEdge(int sourceNode, int targetNode) {
        if (sourceNode > vertices || sourceNode < 0) {
            System.err.println("Source node " + sourceNode + " does not exist");
        } else if (targetNode > vertices || targetNode < 0) {
            System.err.println("Target node " + targetNode + " does not exist");
        } else {
            this.adjacencyList[sourceNode].removeFirstOccurrence(targetNode);
        }        
    }

    public String breadthFirstTraversalFirstTry(int startingNode) {
        // use a queue
        String result = "" + startingNode;
        int i = 0;
        int currentNode = startingNode;
        // really on the right track here, but what you need is a data strucutre to maintain the list of adjacentNodes, so you know 
        // where to go back to once you've traversed each level. 
        // Don't instantly think recursion when you need to store where you have last been on a graph traversal
        // the properties of stacks and queues allow you to do this nicely
        while (this.adjacencyList[currentNode].size() > 0 || i < this.adjacencyList[startingNode].size()) {
            if (!result.contains("" + currentNode)) result += currentNode;
            for (int j = 0; j < this.adjacencyList[currentNode].size(); j++) {
                int adj = this.adjacencyList[currentNode].get(j);
                if (!result.contains("" + adj)) result += " " + adj;
            }
            currentNode = this.adjacencyList[startingNode].get(i);
            i++;
        }
        return result;
    }

    public String breadthFirstTraversalQueue(int startingNode) {
        String result = "";
        Queue<Integer> q = new LinkedList<Integer>();
        int currentNode = startingNode;
        while (this.adjacencyList[currentNode].size() > 0 || !q.isEmpty()) {
            if (!result.contains("" + currentNode)) result += currentNode;
            for (int j = 0; j < this.adjacencyList[currentNode].size(); j++) {
                int adj = this.adjacencyList[currentNode].get(j);
                q.add(adj);
                if (!result.contains("" + adj)) result += " " + adj;
            }
            currentNode = q.remove();
        }
        return result;
    }

    public String depthFirstTraversal(int startingNode) {
        return "";
    }
}

class GraphDemo {
    public static void main(String[] args) {
        Graph g = new Graph(8);
        g.addEdge(0, 3);
        g.addEdge(0, 2);
        g.addEdge(0, 1);
        g.addEdge(3, 1);
        g.addEdge(1, 4);
        g.addEdge(4, 5);
        g.addEdge(2, 7);
        g.printGraph();
        System.out.println(g.breadthFirstTraversalQueue(0));
        System.out.println(g.getAdjacentNodes(0));

    }
}