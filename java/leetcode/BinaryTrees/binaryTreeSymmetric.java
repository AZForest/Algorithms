package BinaryTrees;
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        HashMap<Integer, ArrayList<Integer>> map = new HashMap<>();
        traverse(root, map, 0);
        for (ArrayList<Integer> row : map.values()) {
            if (!symmetricArray(row)) return false;
        }
        return true;
    }
    
    public static void traverse(TreeNode node, HashMap<Integer, ArrayList<Integer>> map, int height) {
        ArrayList<Integer> row;
        if (map.containsKey(height)) {
            row = map.get(height);
        } else {
            row = new ArrayList<Integer>();
        }
        if (node == null) row.add(null);
        else row.add(node.val);
        map.put(height, row);
        if (node == null) return;
        height++;
        traverse(node.left, map, height);
        traverse(node.right, map, height);
    }
    
    public static boolean symmetricArray(ArrayList<Integer> row) {
        if (row.size() == 1) return true;
        if (row.size() % 2 != 0) return false;
        int midLeft = row.size() / 2 - 1;
        int midRight = row.size() / 2;
        while (midLeft >= 0) {
            if (row.get(midLeft) != row.get(midRight)) return false;
            midLeft--; 
            midRight++;
        }
        return true;
    }
}