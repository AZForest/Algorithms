/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
 function anagramGroups(words) {
    const map = new Map();
    for (let word of words) {
      word = word.toLowerCase();
      let wordFormatted = word.split("").sort().join("");
      if (map.has(wordFormatted)) {
        let currentValues = map.get(wordFormatted);
        currentValues.push(word);
        map.set(wordFormatted, currentValues);
      } else {
        let array = [];
        array.push(word)
        map.set(wordFormatted, array);
      }
    }
    let result = [];
    for (let value of map.values()) {
      result.push(value);
    }
    return result;
  }
  
  module.exports = anagramGroups;