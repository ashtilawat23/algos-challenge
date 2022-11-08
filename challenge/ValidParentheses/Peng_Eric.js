var isValid = function(s) {
    //use stack to track brackets coming in, if left bracket push otherwise check if it is the corresponding bracket and pop()
    //declare stack variable
    //for loop for s, check if left brackets, otherwise check if opposite bracket
    //return stack.length === 0 if valid string
    if(s.length % 2 !== 0)return false
    let stack = []
    for(let i=0;i<s.length;i++){
        if(s[i] === ')' || s[i] === ']' || s[i] === '}'){
            let check = stack.pop()
            if(s[i]===')' && check !== '(' || s[i]===']' && check !== '[' || s[i]==='}' && check !== '{') return false
        }else{
            stack.push(s[i])
        }
    }
    return stack.length === 0
};