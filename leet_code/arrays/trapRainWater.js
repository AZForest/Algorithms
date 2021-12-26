/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let currentMax = null;
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
    return final;
};