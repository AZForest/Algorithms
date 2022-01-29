/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    function explore(y, x) {
        if (x < 0 ||
            x >= grid[0].length ||
            y < 0 ||
            y >= grid.length ||
            grid[y][x] === "0") return;
        
        grid[y][x] = "0";
        
        explore(y, x + 1);
        explore(y + 1, x);
        explore(y, x - 1);
        explore(y - 1, x);
    }
    let result = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === "1") {
                result++;
                explore(y, x);
                console.log(grid);
            }   
        }
    }
    return result;   
}