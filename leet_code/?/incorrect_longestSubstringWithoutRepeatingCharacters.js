/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;
    let arr = s.split("");
    let longest = 0;
    let current = [];
    arr.forEach(letter => {
        let i = arr.indexOf(letter);
        while (i < arr.length) {
            if (current.includes(arr[i])) {
                if (current.length > longest) {
                    console.log(i, current);
                    longest = current.length;
                }
                current = [];
                current.push(arr[i]);
            } else {
                current.push(arr[i]);
                if (current.length > longest) {
                    longest = current.length;
                }
            }
            i++;
        }
    })
    return longest;
};