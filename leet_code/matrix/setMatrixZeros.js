/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    for (let y = 0; y < matrix.length; y++) { 
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 0) {
                modify(y, x);
                matrix[y] = [9, 9, 9];
            }
        }
    }

    function modify(y, x) {
        matrix[y][x] = 9;
        if (y + 1 < matrix.length) modify(y + 1, x);
        if (y - 1 >= 0) modify(y - 1, x);
    }
};

