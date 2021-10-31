var maxArea = function(height) {
    let lowerHeight = 0;
    let max = 0;
    
    let i = 0;
    while (i < height.length - 1) {
        for (let j = i + 1; j < height.length; j++) {
            if (height[i] >= height[j]) lowerHeight = height[i];
            else lowerHeight = height[j];
            
            let val = lowerHeight * (j - i) - lowerHeight;
            if (val > max) max = val;
        }
        i++;
    }
    return max;
};