/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (needle.length === 1) return i;
            else {
                let sub = haystack.substring(i, i + needle.length);
                if (sub.length < needle.length) continue;
                if (needleCheck(sub, needle)) return i;
            }
        }
    }
    return -1;
};

var needleCheck = function(string, needle) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== needle[i]) return false;
    }
    return true;
}