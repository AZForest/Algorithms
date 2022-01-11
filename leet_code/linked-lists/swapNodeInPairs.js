/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let pointer = head;
    let nodePrev = head;
    let node = head.next;
    let nodePrevPrev = null;
    let valid = true;
    while (valid) {
        console.log(node, nodePrev)
        if (nodePrev === head) {
            nodePrev.next = node.next;
            node.next = nodePrev;
            head = node;
        } else {
            nodePrev.next = node.next;
            node.next = nodePrev;
            nodePrevPrev.next = node;
        }
        if (!nodePrev.next) {
            valid = false;
        } else {
            console.log("l")
            node = nodePrev.next.next;
            nodePrev = nodePrev.next;
            nodePrevPrev = nodePrev;
        }  
    }
    console.log(head);
};