def hasCycle(head):
    if (head == None):
        return False
    mr_fast = head.next
    mr_slow = head
    while (mr_fast and mr_fast.next):
        mr_slow = mr_slow.next
        mr_fast = mr_fast.next.next
        if (mr_slow == mr_fast):
            return True
    return False