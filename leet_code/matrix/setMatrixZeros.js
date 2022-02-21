/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    for (let y = 0; y < matrix.length; y++) { 
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 0) {
                modifyUp(y, x);
                modifyDown(y, x);
                for (let z = 0; z < matrix[y].length; z++) {
                    if (matrix[y][z] !== 0) matrix[y][z] = '0';
                }
            }
        }
    }

    
    function modifyUp(y, x) {
        if (matrix[y][x] !== 0) matrix[y][x] = '0';
        if (y + 1 < matrix.length) modifyUp(y + 1, x);
    }
    function modifyDown(y, x) {
        if (matrix[y][x] !== 0) matrix[y][x] = '0';
        if (y - 1 >= 0) modifyDown(y - 1, x);
    }
};



