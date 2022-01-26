/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let y = 0;
    let x = 0;
    let valid = true
    while (valid) {
        //console.log(matrix[y][x])
        if (matrix[y][x] === target) return true; 
        else {
            if (matrix[y][x] > target) {
                x++;
                y = 0;
                if (x >= matrix.length) return false;
            } else {
                y++;
                if (y >= matrix.length) {
                    x++;
                    y = 0;
                }
            }
        } 
    }
};