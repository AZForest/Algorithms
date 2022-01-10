/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let hash = {};
    strs.forEach(word => {
        let wordSorted = word.split("").sort().join("");
        if (hash[wordSorted]) {
            let array = hash[wordSorted];
            array.push(word);
            hash[wordSorted] = array;
        } else {
            hash[wordSorted] = [word];
        }
    })
    return Object.values(hash);
};