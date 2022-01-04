/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var permute = function(nums) {
    if (nums.length < 2) return [nums];
    let permutations = [];
    for (let i = 0; i < nums.length; i++) {
        let char = nums[i];
        let remaining = nums.slice(0, i);
        remaining = remaining.concat(nums.slice(i + 1, nums.length));
        //console.log(remaining);
        
        for (let subPermutation of permute(remaining)) {
            let newArr = [char];
            subPermutation.forEach(sub => newArr.push(sub));
            
            //console.log(newArr);
            permutations.push(newArr);
        }
    }
    //console.log(permutations)
    return permutations;
}

let arr = [1, 2, 3, 4];
console.log(permute(arr));