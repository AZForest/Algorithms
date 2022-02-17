var maxDepth = function(root) {
    function dive(root, depth = 0) {
        if (!root) return depth;
        depth++;
        let left = dive(root.left, depth);
        let right = dive(root.right, depth);
        
        return Math.max(left, right);
    }
    return dive(root);
};