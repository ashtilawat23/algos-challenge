var mergeTwoLists = function(l1, l2) {
    //create a new linked list to return
    //use 2 pointers for both l1,l2
    //pointer for ans list 
    let ans = new ListNode()
    let current = ans

    while(l1&&l2){ //while loop to continue until 1 list becomes null
        if(l1.val<l2.val){
            current.next = l1
            l1=l1.next
        }else{
            current.next = l2
            l2=l2.next
        }
        current = current.next
    }
    current.next = l1 !== null ? l1 : l2 //one final check to see which list is null and attach to ans list
    return ans.next
};

//in this question, there are 2 linked lists that are given as parameters
//the return should be a linkedlist composing of all the vals of inputted lists
//first declare a variable for the new linked list to return, will be returning the answer list.next later
//have pointer for answer list to move along and assign to different nodes
//use a while loop to occur while both lists are not null
//within each iteration will check which val of the list is smaller and assign that to the answer pointer .next
//move the pointer for that corresponding list
//at the end move the pointer for current to point to the .next property
//after the while loop, have a check to see which list is null and attach the other to it