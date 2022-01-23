/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let min = strs.sort((a, b) => a.length - b.length);
    let result = "";
    for (let i = 0; i < min[0].length; i++) {
        let current = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== current) return result;
        }
        result += current;
    }
    return result;
};