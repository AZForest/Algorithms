package BinaryTrees;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

//import javax.swing.tree.TreeNode;

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
    public List<List<Integer>> levelOrder(TreeNode root) {
        HashMap<Integer, ArrayList<Integer>> map = new HashMap<>();
        traverse(root, map, 0);
        
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        for (ArrayList<Integer> row : map.values()) {
            result.add(row);
        }
        return result;
    }
    
    
    public static void traverse(TreeNode node, HashMap<Integer, ArrayList<Integer>> map, int height) {
        if (node == null) return;
        ArrayList<Integer> row;
        if (map.containsKey(height)) {
            row = map.get(height);
        } else {
            row = new ArrayList<Integer>();
        }
        row.add(node.val);
        map.put(height, row);
        height++;
        traverse(node.left, map, height);
        traverse(node.right, map, height);
    }
}