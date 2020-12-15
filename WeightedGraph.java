import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

public class WeightedGraph {
    public class Edge {
        int source;
        int target;
        int weight;

        public Edge(int source, int target, int weight) {
            this.source = source;
            this.target = target;
            this.weight = weight;
        }

        public int getSource() {
            return this.source;
        };

        public int getTarget() {
            return this.target;
        };

        public int getWeight() {
            return this.source;
        };
    }

    private LinkedList<Edge>[] adjacencyList;
    private int vertices;

    public WeightedGraph(int vertices) {
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
            this.adjacencyList[i].forEach(edge -> {
                System.out.print( " -> " + edge.getTarget());
            });
            System.out.println("");
        }
    }

    public void addEdge(int sourceNode, int targetNode, int weight) {
        if (sourceNode < vertices && targetNode <  vertices) {
            Edge edge = new Edge(sourceNode, targetNode, weight);
            this.adjacencyList[sourceNode].addLast(edge);
        }
    }

    public List<Integer> getAdjacentNodes(int source) {
        return this.adjacencyList[source]
            .stream()
            .map(edge -> edge.getTarget())
            .collect(Collectors.toList());
    }

    public List<Integer> getWeightsFromSource(int source) {
        return this.adjacencyList[source]
            .stream()
            .map(edge -> edge.getWeight())
            .collect(Collectors.toList());
    }

    public List<Edge> getEdgesFromSource(int source) {
        return this.adjacencyList[source]
            .stream()
            .collect(Collectors.toList());
    }

    public void  deleteEdge(Edge edge) {
        int source = edge.getSource();
        int target = edge.getTarget();
        if (source > vertices || source < 0) {
            System.err.println("Source node " + source + " does not exist");
        } else if (target > vertices || target < 0) {
            System.err.println("Target node " + target + " does not exist");
        } else {
            this.adjacencyList[source].removeFirstOccurrence(edge);
        }        
    }
}
