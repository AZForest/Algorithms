/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    //format board[y][x]
    //format board[j][i]
    //console.log(board);
    let rows = new Map();
    let columns = new Map();
    let boxes = new Map();
    
    //column check
    for (let i = 0; i < 9; i++) {
        let set = new Set();
        columns.set(`Column ${i + 1}`, set);
        for (let j = 0; j < 9; j++) {
            let columnSet = columns.get(`Column ${i + 1}`);
            if (board[j][i] === ".") continue;
            else if (columnSet.has(board[j][i])) {
                return false;
            } else {
                columnSet.add(board[j][i]);
                columns.set(`Column ${i + 1}`, columnSet)
            }
        }
    }
    //console.log(columns);
    
    //row check
    for (let j = 0; j < 9; j++) {
        let set = new Set();
        rows.set(`Row ${j + 1}`, set);
        for (let i = 0; i < 9; i++) {
            if (board[j][i] === ".") continue;
            else {
                let rowSet = rows.get(`Row ${j + 1}`);
                if (rowSet.has(board[j][i])) {
                    return false;
                } else {
                    rowSet.add(board[j][i]);
                    rows.set(`Row ${j + 1}`, rowSet);
                }
            }
            
        }
    }
    //console.log(rows);
    
    //Box check
    let box = 1;
    for (let h = 0; h < 9; h+=3) {
        for (let k = 0; k < 9; k+=3) {
            let set = new Set();
            boxes.set(`Box ${box}`, set);
            for (let j = h; j < h + 3; j++) {
                for (let i = k; i < k + 3; i++) {
                    if (board[j][i] === ".") continue;
                    else {
                        let boxSet = boxes.get(`Box ${box}`);
                        if (boxSet.has(board[j][i])) {
                            return false;
                        } else {
                            boxSet.add(board[j][i]);
                            boxes.set(`Box ${box}`, boxSet);
                        }
                    }
                }
            }
            box++;
        }
    }
    console.log(boxes);
    return true;
};