const quickSort = (array = [], lowerIndex = 0, upperIndex = array.length - 1) => {
    if (lowerIndex < upperIndex) {
        let index = partition(array, lowerIndex, upperIndex);
        quickSort(array, lowerIndex, index - 1);
        quickSort(array, index + 1, upperIndex);
    }
    return array;
}

const partition = (array, lowerIndex, upperIndex) => {
    let pivot = array[upperIndex];
    let partitionIndex = lowerIndex;
    for (let i = lowerIndex; i < upperIndex; i++) {
        if (array[i] < pivot) {        
            if (partitionIndex !== i) {
                [array[i], array[partitionIndex]] = [
                    array[partitionIndex],
                    array[i]
                ];  
            }
            partitionIndex++;
        };
    }
    [array[partitionIndex], array[upperIndex]] = [
        array[upperIndex],
        array[partitionIndex]
    ];
    return partitionIndex;
}

let array = [1,5,76,65, 9, 8, 7, 2];
console.log(quickSort(array));