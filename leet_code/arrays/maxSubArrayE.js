var maxSubArray = function(nums) {
    //O(n^2)
    /*if (nums.length === 1) return nums;
    let greatestSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > greatestSum) greatestSum = nums[i];
        if (i + 1 < nums.length) {
            for (let j = i + 1; j < nums.length; j++) {
                let subArr = nums.slice(i, j + 1);
                let sum = subArr.reduce((cur, next) => cur + next, 0);
                if (sum > greatestSum) greatestSum = sum;
            }
        }
        
    }
    return greatestSum;*/
    
    //[3, -6, 7, -4, 2]
    let final = nums[0];
    let current = final;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i] + current) {
            current = nums[i];
        } else {
            current += nums[i];
        }
        final = Math.max(final, current);
    }
    return final;
};