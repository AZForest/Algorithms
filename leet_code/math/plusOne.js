/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let digit = digits.length - 1;
    while (digits[digit] === 9 && digit > -1) {
        digits[digit] = 0;
        digit-=1;
    }
    digit > -1 ? digits[digit] += 1 : digits.unshift(1);
    return digits;
};