class Solution {
    public int maxAbsoluteSum(int[] nums) {
        int currentMaxSum = 0;
        int currentMinSum = 0;
        int maxSum = Integer.MIN_VALUE;
        int minSum = Integer.MAX_VALUE;
        for (int num : nums) {
            currentMaxSum += num;
            maxSum = Math.max(maxSum, currentMaxSum);
            if (currentMaxSum < 0) currentMaxSum = 0;
            
            currentMinSum += num;
            minSum = Math.min(minSum, currentMinSum);
            if (currentMinSum > 0) currentMinSum = 0;
        }
        return Math.max(maxSum, -minSum);
    }
}