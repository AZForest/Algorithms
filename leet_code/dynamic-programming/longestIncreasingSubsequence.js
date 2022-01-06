/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[i] = [nums[i]];
        for (let j = i; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                let arr = map[i];
                arr.push(nums[j]);
                map[i] = arr;
            }
        }
    }
    console.log(map);
};

function diviner(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            let beginning = arr.splice(0, i);
            let end = arr.splice(i + 1, arr.length)
        }
    }
}

function recurse(val, index, array, result = []) {
    for (let i = index; i < array.length; i++) {
        if (array[i] > val) {
            result.push(array[i]);
            val = array[i];
            index = i;
            return recurse(val, index, array, result);
        }
    }
    return result;
}

/*let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[i] = recurse(nums[i], i, nums, [nums[i]]);
    }
    //console.log(map);
    let values = Object.values(map);
    //console.log(values);
    let greatest = values[0].length;
    for (let i = 0; i < values.length; i++) {
        if (values[i].length > greatest) greatest = values[i].length;
    }
    return greatest;*/

