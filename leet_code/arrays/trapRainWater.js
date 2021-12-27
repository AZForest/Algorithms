/**
 * @param {number[]} height
 * @return {number}
 */
//Brute Force
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

//Dynamic Programming
var trap = function(height) {
    let result = 0;
    let leftMax = [];
    let rightMax = [];
    for (let i = 0; i < height.length; i++) {
        if (i === 0) {
            leftMax.push([i, height[i]]);
            continue;
        }
        let val = Math.max(height[i], leftMax[i-1][1]);
        leftMax.push([i, val]); 
    }
    
    let j = 0
    for (let k = height.length - 1; k >= 0; k--) {
        if (k !== height.length - 1) {
            let val = Math.max(height[k], rightMax[j - 1][1]);
            rightMax.push([k, val]);
            j++;
        } else {
            rightMax.push([k, height[k]]);
            j++
        }
    }
    console.log(leftMax, rightMax);
    for (let z = 0; z < height.length; z++) {
        if (z !== 0 && z < height.length - 1) {
            let lMax = leftMax[z - 1][1];
            let rMax = rightMax[(height.length - z) - 2][1];
            if (lMax > height[z] && rMax > height[z]) {
                let val = (Math.min(lMax, rMax)) - height[z];
                result += val;
            }
        }
    }
    return result;
}