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
    if (!head) return null;
    if (!head.next) return head;
    let nodePrev = head;
    let node = head.next;
    let nodePrevPrev = null;
    let valid = true;
    while (valid) {
        if (nodePrev === head) {
            nodePrev.next = node.next;
            node.next = nodePrev;
            head = node;
        } else {
            nodePrev.next = node.next;
            node.next = nodePrev;
            nodePrevPrev.next = node;
        }
        if (!nodePrev.next || !nodePrev.next.next) {
            valid = false;
        } else {
            node = nodePrev.next.next;
            nodePrevPrev = nodePrev;
            nodePrev = nodePrev.next; 
        }  
    }
    return head;
};