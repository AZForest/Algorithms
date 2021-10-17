var findMedianSortedArrays = function(nums1, nums2) {
    let firstIndex = 0;
    let secondIndex = 0;
    let result = [];
    while (firstIndex < nums1.length && secondIndex < nums2.length) {
        if (nums1[firstIndex] <= nums2[secondIndex]) {
            result.push(nums1[firstIndex]);
            firstIndex++;
        } else {
            result.push(nums2[secondIndex]);
            secondIndex++;
        }
    }
    console.log(result);
    if (firstIndex < nums1.length) {
        //console.log(nums1.slice(firstIndex));
        result = result.concat(nums1.slice(firstIndex));
    } else {
        result = result.concat(nums2.slice(secondIndex));
    }
    //result.concat(firstIndex < nums1.length ? nums1.slice(firstIndex) : nums2.slice(secondIndex));
    console.log(result);
    
    if (result.length % 2 === 0) {
        let middle_1 = result.length / 2 - 1;
        let middle_2 = result.length / 2;
        let midSum = result[middle_1] + result[middle_2];
        return midSum / 2;
    } else {
        let middle = Math.floor(result.length / 2);
        return result[middle];
    }
};