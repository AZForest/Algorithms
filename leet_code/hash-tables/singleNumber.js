/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            let num = hash[nums[i]];
            num++;
            hash[nums[i]] = num;
        } else {
            hash[nums[i]] = 1;
        }
    }
    let entries = Object.entries(hash);
    let val = entries.filter(entry => {
        return entry[1] === 1;
    });
    return val[0][0];
};