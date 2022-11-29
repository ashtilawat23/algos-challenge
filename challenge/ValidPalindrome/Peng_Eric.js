/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    //checking only alphabet/numbers, have regex to have quick checks
    //define a new variable to hold alphanum string, text
    //make s characters to all lowercase
    //go through s string, checking if current character is alphanumeric using regex.test which returns boolean, if true append to text string
    //have left and right pointers to check either end of text string, if not equal return false else increase left and decrease right
    //while loop while left is less than right, in case text length is even, left will be greater than right which will end and in case odd, left will be equal right
    //at end return true 
    
    //O(n) time due to checking s string once to create a new text string and another loop to go through new text string 
    //O(1) space due to use of pointers and string variable
    
    let alphanumeric = /[a-z0-9]/i //using regex / /, brackets [] means values between, i means case-insensitive
    let text = ''
    
    s=s.toLowerCase()
    
    for(let char of s){
        if(alphanumeric.test(char))text+=char
    }   
       
    let left = 0
    let right = text.length-1
    
    while(left<right){
        if(text[left]!==text[right]){
            return false
        }else{
            left++
            right--
        }
    }
    return true   
};
