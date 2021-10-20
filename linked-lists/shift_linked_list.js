// This is the class of the input linked list.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function shiftLinkedList(head, k) {
    // Write your code here.
      let length = 0;
      let lastNode = head;
      let prevLastNode;
      let node = head;
      //makes circular ang gets length
      while (lastNode.next !== null) {
          length++;
          lastNode = lastNode.next;
      }
      length++;
      if (length === k) return head;
      lastNode.next = head;
      
      //gets one node before length - k, mods k in case k is bigger than length
      let i = 0;
      if (k > length) k = k % length;
      let cap = length - k;
      let current_node = head;
      while (i < cap - 1) {
          i++;
          current_node = current_node.next;
      }
      head = current_node.next;
      current_node.next = null;
      return head;
  }