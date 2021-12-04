/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
 function permutationPalindrome(word) {
    if (word.length === 0) return true;
    word = word.toLowerCase();
    let wordFormat = word.split("").sort();
    let map = new Map();
    
    wordFormat.forEach(letter => {
      if (map.has(letter)) {
        let count = map.get(letter);
        count++;
        map.set(letter, count);
      } else {
        map.set(letter, 1);
      }
    })
    if (word.length % 2 === 0) {
      for (let value of map.values()) {
        if (value % 2 !== 0) return false;
        return true;
      }
    } else {
      let oddCount = 0;
      for (let value of map.values()) {
        if (value % 2 !== 0) oddCount++;
      }
      return oddCount === 1;
    }
  }
  
  
  module.exports = permutationPalindrome;