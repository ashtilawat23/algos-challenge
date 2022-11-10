var coinChange = function(coins, amount) {
    //Dynamic programming, define a new array, fill it up with a large number to be overwritten at end
    const newArr = Array(amount+1).fill(Number.MAX_SAFE_INTEGER)//array is length of amount+1 due to array starts from 0 index and will stop right before amount
    //define base case which is [0] index, it takes 0 coins to make 0 amount
    newArr[0]=0
    //iterate for the entire amount starting with index 1 as index 0 is defined as 0
    for(let i = 1;i<=amount;i++){
        //for each # up until amount, run through available coin
        for(let coin of coins){
            if(i-coin>=0){//only check if difference is above or equal to 0 to avoid unnecessary calculations
                newArr[i]=Math.min(newArr[i],newArr[i-coin]+1)
                //assign value to current index by taking the Math.min of either the current value which starts at Number.MAX_SAFE_INTEGER and is rewritten at each iteration 
                //once a smaller number is found or the current index minus current coin,
                //the + 1 is considering that the current coin is taken from current index, value will always be at least one and will be initialized at the same index of the value of the coin
                //ie: [1,2,5] 1's will be initialized at indexes 1,2,5 values after will be cross referenced starting from the smallest number in this case 1

                //ie: index 1 first iteration newArr[1] = Math.min(NUMBER.MAX, newArr[1-1]+1) => Math.min(NUMBER.MAX, 1) as index 0 is 0 thus index 1 is given 1
                //ie: index 1 second and third iteration will not run as it will not pass if condition of index-coin >=0
                //index 1 ends with value 1

                //ie: index 2 first iteration newArr[2] = Math.min(Number.MAX, newArr[2-1]+1) which becomes Math.min(Number.MAX, 2) as newArr[1] is 1 and add another 1 becomes value 2
                //ie: index 2 second iteration newArr[2] = Math.min(2, newArr[2-2]+1) => Math.min(2, 1) as index 0 is 0 add 1 is value 1
                //ie: index 2 third iteration does not run as newArr[2-5] does not exist and will not pass the check i-coin >= 0
                //index 2 ends with value 1
                
                //at higher indices:
                //ie: at index 6, 1st iteration of for loop will check Math.min(Number.Max_safe_integer, newArr[6-1]+1) => which becomes Math.min(Number..., 2) as index 5 is 1 and add another 1 becomes value 2  
                //2nd iteration will check again for newArr[6] = Math.min(2, newArr[6-2]+1) => Math.min(2, 3) which newArr[6] stays at 2
                //3rd iteration newArr[6] = Math.min(2, newArr[6-5]+1) => Math.min(2, 2) which is also 2
            }
        }
    }
    return newArr[amount] === Number.MAX_SAFE_INTEGER ? -1 : newArr[amount] //check if the last index has a value other than initial value, if so return else return -1 as amount cannot be created with given coins
};
//Time:O(coin.length*amount) Space:O(amount)