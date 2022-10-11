var hasCycle = function(head) {
    let pointerOne = head;
    let pointerTwo = head;
    while (pointerOne && pointerOne.next) {
        pointerOne = pointerOne.next.next;
        pointerTwo = pointerTwo.next;
        if (pointerOne == pointerTwo) {
            return true;
        }
    } 
    return false;
};