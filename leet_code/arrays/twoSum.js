/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let pointer1 = 0;
    let pointer2 = numbers.length - 1;
    while (pointer1 < pointer2) {
        let num = numbers[pointer1] + numbers[pointer2];
        if (num === target) return [pointer1 + 1, pointer2 + 1];
        else {
            if (num > target) {
                pointer2--;
            } else {
                pointer1++;
            }
        }
    }
    return -1;
};