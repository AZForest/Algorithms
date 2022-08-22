package HashTable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class RotateImage {
    class Solution {
        //Hashtable implementation
        public void rotate(int[][] matrix) {
            int length = matrix.length;
            HashMap<Integer, ArrayList<Integer>> hash = new HashMap<>();
            for (int col = length - 1; col >= 0; col--) {
                for (int row = length - 1; row >= 0; row--) {
                    ArrayList<Integer> values;
                    if (hash.containsKey(col)) {
                        values = hash.get(col);
                    } else {
                        values = new ArrayList<>();
                    }
                    values.add(matrix[row][col]);
                    hash.put(col, values);
                }
            }
            for (Map.Entry<Integer, ArrayList<Integer>> entry : hash.entrySet()) {
                System.out.println(entry);
            }
            printArr(matrix);
            
            for (int i = 0; i < length; i++) {
                for (int j = 0; j < length; j++) {
                    ArrayList<Integer> values = hash.get(i);
                    matrix[i][j] = values.get(j);
                }
            }
        }
        
        public void printArr(int[][] matrix) {
            for (int[] row : matrix) {
                for (int num : row) {
                    System.out.print(num + " ");
                }
                System.out.println("");
            }
        }

        //Transpose then Reflect Implementation
        /*public void rotate(int[][] matrix) {
            int length = matrix.length;
            for (int i = 0; i < matrix.length; i++) {
                for (int j = i; j < matrix.length; j++) {
                    int temp = matrix[i][j];
                    matrix[i][j] = matrix[j][i];
                    matrix[j][i] = temp;
                }
            }
            for (int i = 0; i < length; i++) {
                for (int j = 0; j < (Math.floor(length / 2)); j++) {
                    int temp = matrix[i][j];
                    matrix[i][j] = matrix[i][length - j - 1];
                    matrix[i][length - j - 1] = temp;
                }
            }
            //printArr(matrix);
        }*/
    }
}
