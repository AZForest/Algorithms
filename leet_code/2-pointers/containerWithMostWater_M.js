
//O(n^2)
var maxArea = function(height) {
    let lowerHeight = 0;
    let max = 0;
    
    let i = 0;
    while (i < height.length - 1) {
        for (let j = i + 1; j < height.length; j++) {
            
            if (height[i] >= height[j]) lowerHeight = height[j];
            else lowerHeight = height[i];
            
            let val = lowerHeight * (j - i);
            if (val > max) max = val;
        }
        i++;
    }
    return max;
};

//window sliding O(n)
var maxArea2 = function(height) {
    
    let beg = 0;
    let end = height.length -1;
    let maxVolume = 0;
    while(beg < end){
        let curVolume = Math.min(height[beg], height[end])  * (end - beg);
                         
        maxVolume = Math.max(maxVolume, curVolume);
        
        height[beg] > height[end] ? end-- : beg++
    }
    
    return maxVolume;
    
};