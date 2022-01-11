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
    let pointer = l1;
    let pointer2 = l2;
    let node;
    let final;
    let carry = false;
    while (pointer || pointer2) {
        let val1 = pointer ? pointer.val : null;
        let val2 = pointer2 ? pointer2.val : null;
        let sum;
        if (val1 && val2 || (val1 === 0 && val2) || (val1 && val2 === 0) || (val1 === 0 && val2 === 0)) {
            sum = carry ? val1 + val2 + 1 : val1 + val2;
        } else if (val1) {
            sum = carry ? val1 + 1 : val1;
        } else {
            sum = carry ? val2 + 1 : val2;
        }
        if (sum >= 10) {
            sum = sum % 10;
            carry = true;
        } else {
            carry = false;
        }
        if (final !== undefined) {
            node.next = new ListNode(sum);
            node = node.next;
        } else {
            node = new ListNode(sum);
            final = node;
        }
        if (pointer) pointer = pointer.next;
        if (pointer2) pointer2 = pointer2.next;
    }
    if (carry) node.next = new ListNode(1);
    return final;
};

/*let l1_head = l1;
    let l1_result = [];
    while (l1_head) {
        l1_result.unshift(l1_head.val);
        l1_head = l1_head.next;
    }
    l1_result = Number(l1_result.join(""));
    //console.log(l1_result);
    let l2_head = l2;
    let l2_result = [];
    while (l2_head) {
        l2_result.unshift(l2_head.val);
        l2_head = l2_head.next;
    }
    l2_result = Number(l2_result.join(""));
    let result = l1_result + l2_result;
    console.log(result);
    result = result.toString().split("");
    let numResult = result.map(num => Number(num));
    console.log(numResult);
    let i = numResult.length - 2;
    let masterNode = new ListNode(numResult[i + 1]);
    let node = masterNode;
    while (i >= 0) {
        let newNode = new ListNode(numResult[i]);
        node.next = newNode;
        node = node.next;
        i--;
    }
    return masterNode;*/