function isValidSubsequence(array, sequence) {
    // Write your code here.
      let result = [];
      let i = 0;
      while (array.length > 0) {
          if (array[0] === sequence[i]) {
              result.push(array[0]);
              i++;
          }
          array = array.slice(1);
      }
      if (result.length !== sequence.length) return false;
      /*for (let i = 0; i < result.length; i++) {
          if (result[i] !== sequence[i]) return false;
      }*/
      return true;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;