/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let end = [grid.length - 1, grid[0].length - 1];
    let finalSum = Number.POSITIVE_INFINITY;
    
    function traverse(y, x, sum = 0) {
        if (x >= grid[0].length || y >= grid.length) return;
        
        sum += grid[y][x];
        if (y === end[0] && x === end[1]) {
            if (finalSum > sum) finalSum = sum;
        }
        
        traverse(y, x + 1, sum);
        traverse(y + 1, x, sum);

        return finalSum;
    }
    return traverse(0, 0);
};