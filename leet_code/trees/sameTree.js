/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    let val1 = BFS(p);
    let val2 = BFS(q);
    //console.log(val1, val2)
    if (val1.length !== val2.length) return false;
    for (let i = 0; i < val1.length; i++) {
        if (val1[i] !== val2[i]) return false;
    }
    return true;
}

var BFS = function(tree, values = []) {
    let queue = [];
    queue.push(tree);
    let node = queue.shift();
    while (node) {
        if (node.val === 'X') values.push('X');
        else {
            values.push(node.val);
            node.left ? queue.push(node.left) : queue.push(new TreeNode('X'));
            node.right ? queue.push(node.right) : queue.push(new TreeNode('X'));
        }
        node = queue.shift();
    }
    return values;
}