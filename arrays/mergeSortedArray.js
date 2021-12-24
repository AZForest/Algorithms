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
    while (rightIndex < n) {
        while (nums1[leftIndex] < nums2[rightIndex] && leftIndex < m) {
            leftIndex++;
        }
        nums1.splice(leftIndex + 1, 0, nums2[rightIndex]);
        leftIndex++;
        rightIndex++;
    }
    console.log(nums1.slice(0, nums1.length - n))
    return nums1;*/
    
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i]
        }
    } else {
        let leftIndex = m - 1;
        let rightIndex = n - 1;
        let currentIndex = m + n - 1;
        while (rightIndex >= 0 && leftIndex >= 0) {
            if (nums1[leftIndex] < nums2[rightIndex]) {
                nums1[currentIndex] = nums2[rightIndex];
                rightIndex--;
                currentIndex--;
            } else {
                let temp = nums1[currentIndex];
                nums1[currentIndex] = nums1[leftIndex];
                nums1[leftIndex] = temp;
                leftIndex--;
                currentIndex--;
            }
        }
        if (rightIndex > leftIndex) {
            while (rightIndex >= 0) {
                nums1[currentIndex] = nums2[rightIndex];
                currentIndex--;
                rightIndex--;
            }
        }
    }
    
    //console.log(nums1);
};