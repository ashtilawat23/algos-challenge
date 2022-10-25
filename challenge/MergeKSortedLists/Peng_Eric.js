var mergeKLists = function(lists) {
    //given an array of linked lists
    //return 1 linked list sorted ascending
    //assign new variable for linked list to return
    //have variable be first element within lists either 0th index or null, eliminates problem with negative numbers
    //have helper function that combines 2 linked lists and returns 1
    //have for loop to place answer linked list and each element within lists array
    //return answer
    
    let answer = lists[0] 
    
    function attachTwoLists(l1,l2){
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
    }
    
    for(let i=1;i<lists.length;i++){
        answer = attachTwoLists(answer, lists[i])
    }
    
    return answer || null
};
//Time(n length of lists * m length of l1+l2), O(1) space