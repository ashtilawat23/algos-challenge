// initial commit
function mergeLinkedLists(headOne, headTwo) {
  let p1 = headOne;
  let prev = null;
  let p2 = headTwo;

  while (p1 && p2) {
    if (p1.value < p2.value) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev) {
        prev.next = p2;
      }
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }
  if (p1 === null) {
    prev.next = p2;
  }
  return headOne.value < headTwo.value ? headOne : headTwo;
}
