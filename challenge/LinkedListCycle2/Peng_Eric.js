var detectCycle = function(head) {
    //use helper function to find the intersect within cycle
    //have check if it is null, return null otherwise place within another while loop with
    //another pointer for head and pointer for intersection
    //while loop while !== to each other
    //return either pointer for node that starts cycle
    const answer = getIntersect(head)
    if(answer === null) return null
    let l1 = head
    let l2 = answer
    while(l1!==l2){
        l2 = l2.next
        l1 = l1.next
    }
    return l1
};


function getIntersect(head){
        if(!head||!head.next)return null // to filter out cases where list is null or has no next
        //have 2 pointers to detect cycle, 1 for turtle, 1 for rabbit, rabbit moves twice as fast as turtle and starts 1 space over
        let turtle =head
        let rabbit =head
        while(rabbit&&rabbit.next){
            turtle = turtle.next
            rabbit = rabbit.next.next
            if(turtle === rabbit)return rabbit
    }
    return null
}