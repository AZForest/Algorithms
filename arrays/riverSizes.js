function riverSizes(matrix) {
    // Write your code here.
      console.log(matrix);
      let height = matrix.length;
      let row = matrix[0].length;
      let result = [];
      for (let j = 0; j < height; j++) {
          //console.log(`Row ${j}`);
          for (let i = 0; i < row; i++) {
              //console.log(`Element ${i}`)
              if (matrix[j][i] === 1) {
                  let count = calculateRiver(matrix, j, i);
                  result.push(count);
              }
          }
      }
      console.log(matrix);
      console.log(result);
      return result;
  }
  
  function calculateRiver(matrix, y, x) {
      let count = 0;
      let queue = [];
      queue.push([y, x]);
      
      let coords = queue.shift();
      while (coords) {
          let yC = coords[0];
          let xC = coords[1];
          matrix[yC][xC] = 2;
          count++;
          if ((yC + 1 !== matrix.length) && matrix[yC + 1][xC] === 1) {
              queue.push([yC + 1, xC]);
              matrix[yC + 1][xC] = 2;
          }
          if ((xC + 1 !== matrix[0].length) && matrix[yC][xC + 1] === 1) {
              queue.push([yC, xC + 1]);
              matrix[yC][xC + 1] = 2;
          }
          if ((yC - 1 >= 0) && matrix[yC - 1][xC] === 1) {
              queue.push([yC - 1, xC]);
              matrix[yC - 1][xC] = 2;
          }
          if ((xC - 1 >= 0) && matrix[yC][xC - 1] === 1) {
              queue.push([yC, xC - 1]);
              matrix[yC][xC - 1] = 2;
          }
          coords = queue.shift();
      }
      return count;
  }
  
  // Do not edit the line below.
  exports.riverSizes = riverSizes;
  