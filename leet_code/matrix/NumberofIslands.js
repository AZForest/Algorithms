/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    //console.log(grid[0].length)
    //console.log(islandFinder(grid, 3, 3))
    let result = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === "1") {
               if (islandFinder(grid, y, x)) result++; 
            }   
        }
    }
    return result;
};

function islandFinder(grid, y, x) {
    let count = 0;
    let i = 0;
    while (i < 4) {
        //console.log(count);
        if (i === 0) {
            if (x + 1 > grid[0].length) {
                i++;
                continue;
            } else if (grid[y][x + 1] === "1") {
                count++;
                if (count > 1) return false;
            }
            i++;
        } else if (i === 1) {
            if (y + 1 >= grid.length) {
                i++;
                continue;
            }
            else if (grid[y + 1][x] === "1") {
                count++;
                if (count > 1) return false;
            }
            i++;
        } else if (i === 2) {
            if (x - 1 < 0) {
                i++;
                continue;
            } else if (grid[y][x - 1] === "1" ) {
                count++;
                if (count > 1) return false;
            }
            i++;
        } else {
            if (y - 1 < 0) {
                i++;
                continue;
            } else if (grid[y-1][x] === "1") {
                count++;
                if (count > 1) return false;
            }
            i++;
        }
    }
    //console.log(y, x)
    return true;    
}