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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    let values = inOrder(root);
    let valuesCopy = [];
    values.forEach(val => valuesCopy.push(val));
    let valuesSorted = values.sort((a, b) => a - b);
    //console.log(valuesSorted, valuesCopy);
    let swap = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== valuesCopy[i]) {
            swap.push(values[i]);
        }
    }
    //console.log(swap);
    find(root, swap[0], `${swap[1]}*`);
    find(root, swap[1], `${swap[0]}*`)
    find(root, `${swap[1]}*`, swap[1]);
    find(root, `${swap[0]}*`, swap[0]);
};

function find(tree, val, swapVal) {
    if (tree.val === val) {
        tree.val = swapVal;
        return;
    }
    if (tree.left) {
        find(tree.left, val, swapVal);
    }
    if (tree.right) {
        find(tree.right, val, swapVal);
    }
}

function inOrder(root, values = []) {
    if (root.left) {
        values = inOrder(root.left, values)
    }
    values.push(root.val);
    if (root.right) {
        values = inOrder(root.right, values);
    }
    return values;
}