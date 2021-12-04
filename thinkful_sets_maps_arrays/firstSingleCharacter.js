/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
 function firstSingleCharacter(word) {
    let map = new Map();
    word.split("").forEach(letter => {
      map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 1);
    })
    for (let [key, value] of map.entries()) {
      if (value === 1) return key;
    }
    return null;
  }
  
  module.exports = firstSingleCharacter;