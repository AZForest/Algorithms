/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let sArr = s.split(" ").filter(word => word !== "");
    let arr = [];
    sArr.forEach(word => {
        arr.unshift(word);
    })
    return arr.join(" ").trim();;
};