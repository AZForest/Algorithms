const binarySearch = (value, array, lowerIndex = 0, upperIndex = array.length - 1) => {
    if (lowerIndex === upperIndex) {
        if (array[lowerIndex] === value) {
            return lowerIndex;
        } else {
            return -1;
        }
    }

    let middle = Math.floor((lowerIndex + upperIndex) / 2);
    if (array[middle] === value) {
        return middle;
    } else if (array[middle] < value) {
        return binarySearch(value, array, middle + 1, upperIndex);
    } else if (array[middle] > value) {
        return binarySearch(value, array, lowerIndex, middle - 1);
    }
}

let array = [1,3,4,5,7,8,99,100,101,102];
console.log(binarySearch(101, array));