/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let newArr = [];
    matrix.forEach(mat => newArr.push(...mat));
    //console.log(newArr);
    let leftIndex = 0;
    let rightIndex = newArr.length - 1;
    while (leftIndex <= rightIndex) {
        let mid = Math.floor((leftIndex + rightIndex) / 2);
        if (newArr[mid] === target) return true;
        else {
            if (newArr[mid] > target) rightIndex = mid - 1;
            else leftIndex = mid + 1;
        }
    }
    return false;
};