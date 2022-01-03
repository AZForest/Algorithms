/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    
};

var permute = function(nums) {
    //console.log(string);
    if (nums.length < 2) return nums;
    let permutations = [];
    for (let i = 0; i < nums.length; i++) {
        let char = nums[i];
        let remaining = nums.slice(0, i)// + nums.slice(i + 1, nums.length);
        console.log(remaining, remaining.concat(nums.slice(i + 1, nums.length)));
        remaining.concat(nums.slice(i + 1, nums.length));
        
        
        for (let subPermutation of permute(remaining)) {
            permutations.push([char, subPermutation]);
        }
    }
    //console.log(permutations)
    return permutations;
}