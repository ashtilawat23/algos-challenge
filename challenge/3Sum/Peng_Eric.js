var threeSum = function(nums) {
    //use 2sum as a helper function that takes in an index and a target
    //index is needed so for loop knows where to start which is the element next to given index
    //create a hashmap within 2sum to check if the compliment number is available, if so return the array of the triplet as a string, set current num to index within hash
    //triplet as a string will prevent duplicate entries within set however will require another loop to split up and return result array
    //sort nums array ascending
    //use for loop to go through provided nums array and input the index (i) and the number nums[i]
    //could have check to have loop break if current # is greater than 0 as array is sorted ascending, that means any number following will also be positive and cannot be summed to 0, saves some time complexity
    
    //2sum would be given an array and a target
    function twoSum(idx, target){
        let twoSumHash = new Map()
        for(let i =idx+1;i<nums.length;i++){
            let diff = -target - nums[i] //equal to 0 - target
            if(twoSumHash.has(diff)){
                ans.add([target,diff,nums[i]].join(','))
            }
            twoSumHash.set(nums[i],i)
        } 
    }
    
    nums.sort((a,b)=>a-b)//sort ascending

    let ans = new Set()
    for(let i =0;i<nums.length-2;i++){
        if(nums[i]>0)break;
        twoSum(i,nums[i])
    }
    
    let result = []
    
    for(let x of ans){
        let clone = x.split(',').map(a=>parseInt(a))
        result.push(clone)
    }
    
   return(result)
};