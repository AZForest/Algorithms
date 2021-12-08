/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //O(n)
    let string = s;
    let set = new Set();
    let longest = 0;
    let aPointer = 0;
    let bPointer = 0;
    //pwwkew
    while (bPointer < string.length) {
        if (!set.has(string[bPointer])) {
            set.add(string[bPointer]);
            longest = Math.max(longest, set.size);
            bPointer++;
        } else {
            set.delete(string[aPointer]);
            aPointer++;
        }
    }
    return longest;

    //O(n^2)
    /*if (s.length === 1) return 1;
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
    return longest;*/
};