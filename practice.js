function largestCountValue(a) {
    // Write your code here
    //console.log(a);
    let count = 0;
    let merger = mergeSort(a);
    //console.log(merger)
    return count;
    function mergeSort(a) {
        if (Array.isArray(a)) {
            if (a.length <= 1) return a;
        
            let index = Math.floor(a.length / 2);
            let left = a.slice(0, index);
            let right = a.slice(index);
            let leftSorted = mergeSort(left);
            let rightSorted = mergeSort(right);
        
            return merge(leftSorted, rightSorted);
        }
        return a;
    }
    
    
    function merge(leftArr, rightArr) {
        let leftIndex = 0;
        let rightIndex = 0;
        let result = [];
        while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            if (leftArr[leftIndex] <= rightArr[rightIndex]) {
                result.push(leftArr[leftIndex]);
                leftIndex++;
            } else {
                result.push(rightArr[rightIndex]);
                rightIndex++;
                count++;
            }
        }
        return result.concat(leftIndex < leftArr.length ? leftArr.slice(leftIndex) : rightArr.slice(rightIndex));
    }
}
