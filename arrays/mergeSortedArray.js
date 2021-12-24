/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    /*let leftIndex = 0;
    let rightIndex = 0;
    let result = [];
    while (leftIndex < m && rightIndex < n) {
        console.log(nums1[leftIndex], nums2[rightIndex])
        if (nums1[leftIndex] <= nums2[rightIndex]) {
            result.push(nums1[leftIndex]);
            leftIndex++;
        } else {
            result.push(nums2[rightIndex]);
            rightIndex++;
        }
    }
    console.log(result);
    console.log(nums2.slice(rightIndex));
    result = result.concat(leftIndex < m ? nums1.slice(leftIndex) : nums2.slice(rightIndex));
    console.log(result);
    return result;*/
    let j = 0;
    let i = 0;
    while (i < n) {
        if (nums1[j] < nums2[i]) {
            continue;
        } else {
            nums1[j] = nums2[i];
            i++;
        }
        j++;
    }
};