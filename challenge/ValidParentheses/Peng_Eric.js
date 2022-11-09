/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    //have check for string length if it is odd, return false immediately as each opening parentheses needs a closing parantheses and if length is odd, there's no way to close all 
    if(s.length%2) return false
    //define stack to store in opening parentheses and popped to compare
    let stack = []
    //define dict to facilitate additonals inputs other than parentheses
    let dict = {
        '(':')',
        '[':']',
        '{':'}'
    }
    //Check through the length of the string
    for(let char of s){
        if(dict[char]){
            stack.push(char)
        }else{
            let check = dict[stack.pop()]
            if(check!==char)return false
        }
    }
    return stack.length===0
    //Time:O(n) due to length of string, space: O(n) due to length of string
};
