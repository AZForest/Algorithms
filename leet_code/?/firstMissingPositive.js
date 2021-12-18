var firstMissingPositive = function(nums) {
    /*if (nums.length === 1) {
        if (nums[0] === 1) return 2;
        else return 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(i + 1)) return i + 1;
    }
    return nums.length + 1;*/
    const mySet = new Set([...nums]);

    let min = 1;

    while (mySet.has(min)) {
        min++;
    }

    return min;
};