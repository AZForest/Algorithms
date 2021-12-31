/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let lowerIndex = 0;
    let upperIndex = nums.length - 1;
    while (lowerIndex < upperIndex) {
        let mid = Math.floor((lowerIndex + upperIndex) / 2);
        if (nums[mid] === target) return mid;
        else {
            if (nums[mid] > target) {
                upperIndex = mid - 1;
                if (upperIndex < 0) upperIndex = 0;
            } else {
                lowerIndex = mid + 1;
            }
        }
    }
    if (nums[upperIndex] < target) {
        return upperIndex + 1;
    }
    return upperIndex;
};