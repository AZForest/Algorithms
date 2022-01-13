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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    return getHeight2(root);
};

function getHeight(tree, height = 0) {
    if (!tree) return height - 1;
    //height++;
    let leftHeight = getHeight(tree.left, height + 1);
    console.log(leftHeight);
    let rightHeight = getHeight(tree.right, height + 1);
    console.log(rightHeight);
    return (leftHeight + rightHeight) - 1;
}

function getHeight2(tree, cA = 0, maxArray = []) {
    if (!tree.left && !tree.right) {
        return cA;
    }
    //console.log(cA)
    //cA.push(tree.val);
    cA++;
    if (!tree.left) return getHeight2(tree.right, cA);
    if (!tree.right) return getHeight2(tree.left, cA);
    
    let leftHeight = getHeight2(tree.left, cA);
    let rightHeight = getHeight2(tree.right, cA);
    
    //console.log([leftHeight, rightHeight])
    
    return (leftHeight + rightHeight) -1;
}