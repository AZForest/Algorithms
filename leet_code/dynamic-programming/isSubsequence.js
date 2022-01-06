/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let ansPointer = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[ansPointer]) ansPointer++;
        if (ansPointer === s.length) return true;
    }
    return ansPointer === s.length;
};