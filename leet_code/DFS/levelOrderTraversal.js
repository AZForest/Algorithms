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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    //console.log(getHeight(root, 15));
    if (!root) return [];
    let result = [];
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let front = queue.shift();
        let height = getHeight(root, front.val);
        if (result[height]) {
            let sub = result[height];
            sub.push(front.val);
            result[height] = sub;
        } else {
            result[height] = [front.val]
        }
        if (front.left) queue.push(front.left);
        if (front.right) queue.push(front.right);
    }
    //console.log(result)
    return result;
};

function getHeight(node, val, height = 0) {
    if (!node) return -1;
    if (node.val === val) return height;
    height++;
    
    let leftHeight = getHeight(node.left, val, height);
    let rightHeight = getHeight(node.right, val, height);
    
    return Math.max(leftHeight, rightHeight);
}