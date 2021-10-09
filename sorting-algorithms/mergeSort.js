function mergeSort(array) {
    if (Array.isArray(array)) {
        if (array.length <= 1) {
            return array;
        }
        let index = Math.floor(array.length / 2);
        let left = array.slice(0, index);
        let right = array.slice(index);
        let leftSorted = mergeSort(left);
        let rightSorted = mergeSort(right);

        return merge(leftSorted, rightSorted);
    }
    return array;
}

function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex));
}

let array = [4,66,5,71,12];
console.log(mergeSort(array));