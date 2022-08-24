package LinkedList;

public class RemoveDuplicatesFromLL {
    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }
    class Solution {
        public ListNode deleteDuplicates(ListNode head) {
            if (head == null) return head;
            ListNode pointer = head;
            while (pointer.next != null) {
                ListNode placeholder = pointer;
                int count = 0;
                while (pointer.val == placeholder.val && pointer.next != null) {
                    pointer = pointer.next;
                    count++;
                }
                if (pointer.next == null && count != 0 && pointer.val == placeholder.val) {
                    placeholder.next = null;
                } else {
                    placeholder.next = pointer;
                }
            }
            return head;
        }
    }
}
