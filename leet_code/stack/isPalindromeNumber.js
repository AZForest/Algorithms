/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    x = String(x);
    let stack = [];
    if (x.length % 2 === 0) {
        let mid = x.length / 2;
        for (let i = 0; i < mid; i++) {
            stack.push(x[i]);
        }
        for (let j = mid; j < x.length; j++) {
            let top = stack.pop();
            if (top !== x[j]) return false;
        }
        return true;
    } else {
        let mid = Math.floor(x.length / 2);
        for (let i = 0; i < mid; i++) {
            stack.push(x[i]);
        }
        for (let j = mid + 1; j < x.length; j++) {
            let top = stack.pop();
            if (top !== x[j]) return false;
        }
        return true;
    }
};