/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    if (k === 1 || head.next === null) return head;
    let node = head;
    let length = 0;
    //Gets LL length and iterations (length / k)
    while (node) {
        length++;
        node = node.next;
    }
    node = head;
    console.log("length: " + length);
    let iterations = Math.floor(length / k);
    console.log("iterations: " + iterations);
    
    let prevNode = null;
    let j = 0;
    while (j < iterations) {
        let stack = [];
        let i = 0;
        while (i < k) {
            stack.push(node);
            i++;
            node = node.next;
        }
        //console.log(stack);
        
        let top = stack.pop();
        let beginning = top;
        while (stack.length > 1) {
            let next = stack.pop();
            top.next = next;
            top = next; 
        }
        let next = stack.pop();
        next.next = node;
        top.next = next;
        if (j === 0) {
            head = beginning;
            prevNode = next;
        } else {
            prevNode.next = beginning;
            prevNode = next;
        }
        console.log(head);
        j++;
    }
    return head;
    
};