var merge = function(intervals) {
    //console.log(intervals)
    if (intervals.length <= 1) return intervals;
    
    let result = [];
    let i = 1;
    let accumulator = intervals[0];
    while (i < intervals.length) {
        if (accumulator[1] >= intervals[i][0]) {
            accumulator[1] = intervals[i][1];
            if (i === intervals.length - 1) {
                result.push(accumulator);
            }
        } else {
            result.push(accumulator);
            if (i === intervals.length - 1) {
                result.push(intervals[i]);
            } else {
                accumulator = intervals[i];
            }
        }
        i++;
    }
    return result;
};