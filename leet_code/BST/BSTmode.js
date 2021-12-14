/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findMode = function(root) {
    if (!root.left && !root.right) return [root.val];
    let vals = IOT(root);
    console.log(vals);
    let current = vals[0];
    let maxLength = 1;
    let currentLength = 1;
    let mode = [vals[0]];
    //1 1 2
    for (let i = 1; i < vals.length; i++) {
        if (vals[i] === current) {
            currentLength++;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                mode = [vals[i]];
            } else if (currentLength === maxLength) {
                if (!mode.includes(vals[i])) {
                    mode.push(vals[i]);
                }
            }
        } else {
            currentLength = 1;
            if (maxLength === currentLength) {
                if (!mode.includes(vals[i])) {
                    mode.push(vals[i]);
                }
            }
            current = vals[i];
        }
    }
    return mode;
};

function IOT(tree, values = []) {
    if (tree.left) values = IOT(tree.left, values);
    values.push(tree.val);
    if (tree.right) values = IOT(tree.right, values);
    return values;
}