/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let uniqueValues = {};
    let queue = [];
    for (let i = 0; i < s.length; i++) {
        queue.push(s[i]);
        if (!uniqueValues[s[i]]) {
            uniqueValues[s[i]] = 1;
        } else {
            uniqueValues[s[i]] += 1;
        }
    }
    
    while (queue.length > 0) {
        let dequeued = queue.shift();
        if (uniqueValues[dequeued] === 1) {
            return s.indexOf(dequeued);
        }
    }
    return -1;
};