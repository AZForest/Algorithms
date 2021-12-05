/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1_head = l1;
    let l1_result = [];
    while (l1_head) {
        l1_result.unshift(l1_head.val);
        l1_head = l1_head.next;
    }
    l1_result = Number(l1_result.join(""));
    let l2_head = l2;
    let l2_result = [];
    while (l2_head) {
        l2_result.unshift(l2_head.val);
        l2_head = l2_head.next;
    }
    l2_result = Number(l2_result.join(""));
    let result = l1_result + l2_result;
    result = result.toString().split("");
    let numResult = result.map(num => Number(num));
    
    let i = numResult.length - 2;
    let masterNode = new ListNode(numResult[i + 1]);
    let node = masterNode;
    while (i >= 0) {
        let newNode = new ListNode(numResult[i]);
        node.next = newNode;
        node = node.next;
        i--;
    }
    return masterNode;
};