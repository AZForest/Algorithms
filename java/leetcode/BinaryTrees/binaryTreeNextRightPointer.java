package BinaryTrees;
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        HashMap<Integer, ArrayList<Node>> map = new HashMap<>();
        traverse(root, map, 0);
        
        //System.out.println(map);
        return root;
    }
    
    public static void traverse(Node node, HashMap<Integer, ArrayList<Node>> map, int height) {
        if (node == null) return;
        ArrayList<Node> row;
        if (map.containsKey(height)) {
            row = map.get(height);
            Node end = row.get(row.size() - 1);
            end.next = node;
        } else {
            row = new ArrayList<Node>();
        }
        row.add(node);
        map.put(height, row);
        height++;
        traverse(node.left, map, height);
        traverse(node.right, map, height);
    }
}