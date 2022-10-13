// THIS IS A TEST FILE TO SHOW HOW TO MAKE A FILE FOR YOUR SOLUTION

var hasCycle = function(head) {
    if(!head)return false // to filter out cases where list is null
    //have 2 pointers to detect cycle, 1 for turtle, 1 for rabbit, rabbit moves twice as fast as turtle and starts 1 space over
    let turtle =head
    let rabbit =head.next
    while(rabbit&&rabbit.next){
        turtle = turtle.next
        rabbit = rabbit.next.next
        if(turtle === rabbit)return true
    }
    return false
};