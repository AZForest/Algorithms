function mazeSolver(maze, index = [0, 0]) {
    let y = index[0];
    let x = index[1];
    if (y + 1 < maze.length) {
      if (maze[y + 1][x] === "e") return "D";
    }
    if (x + 1 < maze[0].length) {
      if (maze[y][x + 1] === "e") return "R";
    }
    if (maze[y][x + 1] === " ") return "R" + mazeSolver(maze, [y, x+1]);
    if (maze[y + 1][x] === " ") return "D" + mazeSolver(maze, [y+1, x]);
}

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

console.log(mazeSolver(maze));
