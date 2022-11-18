var isValid = function(s) {
    let stack = []
    
    for(let char of s){
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char)
        } else {
            let lastChar = stack.pop()
            if(!checkString(lastChar, char)){
                return false
            }
        }
    }

    if(stack.length)return false
    else return true
    
};
    
    function checkString(first, second){
        let m = {
            ']': '[',
            '}': '{',
            ')': '('
        }

        return m[second] === first
    }