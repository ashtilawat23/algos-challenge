class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasACycle(node) {
  //create a fast and slow pointer
  if (node === null) return false;
  //Start both runners at the beginning
  let slow = node;
  let fast = node;
  // Until we hit the end of the list
  while (fast & fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    //Case: fastRunner is about to "lap" slowRunner
    if (fast === slow) {
      return true;
    }
  }
  // Case: fastRunner hit the end of the list
  return false;
}

const list = new SinglyLinkedList();
