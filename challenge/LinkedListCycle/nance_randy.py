from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
        self.visited = False


class Solution:
    @staticmethod
    def has_cycle(head: Optional[ListNode]) -> bool:
        cur = head
        while cur:
            if cur.visited:
                return True
            cur.visited = True
            cur = cur.next
        return False
