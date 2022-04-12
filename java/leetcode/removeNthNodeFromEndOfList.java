/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head.next == null) return null;
        ListNode res = head;
        ListNode end = head;
        int i = 1;
        while (i < n) {
            end = end.next;
            i++;
        }
        ListNode remove = head;
        ListNode remove_prev = null;
        while (end.next != null) {
            if (remove_prev == null) {
                remove_prev = head;
            } else {
                remove_prev = remove_prev.next;
            }
            end = end.next;
            remove = remove.next;
        }
        if (remove_prev == null) res = res.next;
        else remove_prev.next = remove.next;
        return res;
    }
}