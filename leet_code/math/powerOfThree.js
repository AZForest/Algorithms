/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if (n === 0) return false;
    let answer = n / 3;
    while (answer / 3 <= 3) {
        answer = answer / 3;
        if (answer === 0) return true;
    }
    return false;
};