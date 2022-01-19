/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    return powrifify(n);
};

function powrifify(n, result = 1) {
    if (result > n) return false;
    if (result === n) return true;
    return powrifify(n, result * 3);
}