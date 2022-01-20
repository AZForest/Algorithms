/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let trim = s.trim();
    let negative = false;
    if (trim[0] === "-" || trim[0] === "+") {
        if (trim[0] === "-") negative = true;
        trim = trim.slice(1);
    }
    let i = 0;
    while ((Number(trim[i]) || Number(trim[i]) === 0) && trim[i] !== " ") {
        i++;
    }
    if (i === 0) return 0;
    let upperBound = 2 ** 31 - 1;
    let lowerBound = -(Math.pow(2, 31));
    let result = Number(trim.slice(0, i));
    if (negative) result = -result;
    if (result > upperBound) result = upperBound;
    if (result < lowerBound) result = lowerBound;
    return result;
    
};