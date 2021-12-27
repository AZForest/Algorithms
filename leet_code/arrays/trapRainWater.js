/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let result = 0;
    for (let i = 0; i < height.length - 1; i++) {
        if (i === 0) continue;
        let leftArray = height.slice(0, i);
        let rightArray = height.slice(i + 1);
        let leftMax = Math.max(...leftArray);
        let rightMax = Math.max(...rightArray);
        if (leftMax > height[i] && rightMax > height[i]) {
            let value = (Math.min(leftMax, rightMax)) - height[i];
            result += value;
        }
    }
    return result;
};

/*function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }
    return max;
}

var countTrap = function(i, array, maxHeight, currentTrap = 0) {
    if (array[i] >= maxHeight) {
        return [currentTrap, i];
    }
    if (maxHeight > array[i]) {
        currentTrap += (maxHeight - array[i])
        return countTrap(i+1, array, maxHeight, currentTrap);
    }
    return [0, null];  
}

//[4, 2, 2, 2, 2, 2, 3];
//[8, 2, 2, 2, 2, 2, 6];
var countTrap2 = function(i, array, maxHeight, maxHeightIndex, currentHeight, currentHeightIndex, currentTrap = 0) {
    console.log(currentTrap);
    //[1, 0, 0, 0, 0, 2]
    if (array[i + 1] >= maxHeight) {
        currentTrap += (maxHeight - array[i]) * (((i + 1) - maxHeightIndex) - 1);
        console.log(currentTrap);
        return [currentTrap, i + 1]
    }
    if (array[i + 1] < array[i]) {
        currentHeight = array[i];
        currentHeightIndex = i;
        return countTrap2(i + 1, array, maxHeight, maxHeightIndex, currentHeight, currentHeightIndex, currentTrap);
    }
    if (array[i + 1] > array[i] && array[i] < maxHeight) {
        currentTrap += (currentHeight - array[i]) * (((i + 1) - currentHeightIndex) - 1);
        return countTrap2(i + 1, array, maxHeight, maxHeightIndex, currentHeight, currentHeightIndex, currentTrap);
    }
    return [0, null];
}

/*let result = 0;
    let i = 1;
    while (i < height.length) {
        if (height[i] < height[i-1]) {
            //let recurse = countTrap(i, height, height[i-1]);
            let recurse = countTrap2(i, height, height[i-1], i-1, height[i - 1], i-1);
            console.log(recurse);
            if (recurse[0] === 0) {
                i++;
            } else {
                result += recurse[0];
                i = recurse[1]
            }
        } else {
            i++;
        }
    }
    return result;*/

/*let total = 0;
    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] < height[i]) {
            let currentHeight = height[i];
            for (let j = i - 1; j > 0; j--) {
                if (height[j] === currentHeight) {
                    total += (i - j) - 1;
                    break;
                }
            }
        }
    }
    return total;*/

    /*let currentMax = null;
    let currentTrap = 0;
    let final = 0;
    for (let i = 0; i < height.length; i++) {
        let val = height[i];
        if (!currentMax && val === 0) continue;
        if (!currentMax && val > 0) {
            currentMax = val;
            continue;
        }
        if (val >= currentMax) {
            final += currentTrap;
            currentTrap = 0;
            currentMax = val;
            continue;
        }
        if (val < currentMax) {
            currentTrap += (currentMax - val);
        }
    }
    return final;*/
