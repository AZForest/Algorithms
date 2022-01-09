/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if (lists.length < 2) {
        if (lists.length === 0) return null;
        return lists[0];
    } else {
        let list1 = lists[0];
        let list2 = lists[1]; 
        let result = merge(list1, list2);
        lists = lists.slice(2);
        while (lists.length > 0) {
            result = merge(result, lists[0]);
            lists = lists.slice(1);
        }
        return result;
    }
};

function merge(listOne, listTwo) {
    if (!listOne && !listTwo) return null;
    if (!listOne) return listTwo;
    if (!listTwo) return listOne;
    let left = listOne;
    let right = listTwo;
    let result;
    let head;
    while (left && right) {
        if (left.val >= right.val) {
            if (result) {
                head.next = new ListNode(right.val)
                head = head.next;
            } else {
                result = new ListNode(right.val);
                head = result;
            }
            right = right.next;
        } else {
            if (result) {
                head.next = new ListNode(left.val)
                head = head.next;
            } else {
                result = new ListNode(left.val);
                head = result;
            }
            left = left.next;
        }
    }
    if (left) {
        while (left) {
            head.next = new ListNode(left.val);
            head = head.next;
            left = left.next;
        }
    } else {
        while (right) {
            head.next = new ListNode(right.val);
            head = head.next;
            right = right.next;
        }
    }
    return result;
}