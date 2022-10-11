public class Solution {
    public boolean isCycle(LinkedList head) {
        LinkedList slow = head;
        LinkList fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next;

            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
}