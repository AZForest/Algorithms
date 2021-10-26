var searchRange = function(nums, target) {
    //return divide(nums, target);
    return binarySearch(nums, target);
};

//recursive
function divide(nums, value, lowerIndex = 0, upperIndex = nums.length - 1) {
    if (lowerIndex >= upperIndex) {
        if (nums[lowerIndex] === value) {
            let foundUpper = lowerIndex;
            while (nums[foundUpper] === value) {
                foundUpper++;
            }
            foundUpper--;
            let foundLower = lowerIndex;
            while (nums[foundLower] === value) {
                foundLower--;
            }
            foundLower++;
            return [foundLower, foundUpper];
        } else {
            return [-1, -1]
        }
    }
    
    let mid = Math.floor((lowerIndex + upperIndex) / 2);
    if (nums[mid] === value) {
        let foundUpper = mid;
        while (nums[foundUpper] === value) {
            foundUpper++;
        }
        foundUpper--;
        let foundLower = mid;
        while (nums[foundLower] === value) {
            foundLower--;
        }
        foundLower++;
        return [foundLower, foundUpper];
    } else if (nums[mid] > value) {
        return divide(nums, value, lowerIndex, mid - 1);
    } else {
        return divide(nums, value, mid + 1, upperIndex);
    }
}

//iterative
function binarySearch(nums, target) {
    let lowerIndex = 0;
    let upperIndex = nums.length - 1;
    
    while (lowerIndex <= upperIndex) {
        let mid = Math.floor((lowerIndex + upperIndex) / 2);
        if (nums[mid] === target) {
            let foundUpper = mid;
            while (nums[foundUpper] === target) {
                foundUpper++;
            }
            foundUpper--;
            let foundLower = mid;
            while (nums[foundLower] === target) {
                foundLower--;
            }
            foundLower++;
            return [foundLower, foundUpper];
        } else if (nums[mid] > target) {
            upperIndex = mid - 1;
        } else {
            lowerIndex = mid + 1;
        }
    }
    if (upperIndex < lowerIndex) return [-1, -1];
}