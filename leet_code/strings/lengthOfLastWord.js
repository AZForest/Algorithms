/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let words = s.split(" ");
    let wordsFiltered = words.filter(word => word !== "");
    return wordsFiltered[wordsFiltered.length - 1].length;
};