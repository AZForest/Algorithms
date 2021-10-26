var flatten = function(root) {
    if (!root) return [];
    return rPreOrder(root);
};

function rPreOrder(node, head = null) {
    if (node.right) head = rPreOrder(node.right, head);
    if (node.left) head = rPreOrder(node.left, head);
    node.left = null;
    node.right = head;
    head = node;
    return head;
}