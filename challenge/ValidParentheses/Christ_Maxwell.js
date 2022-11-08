/*
    This was my original answer. As we saw after being questioned, 
    I had a time complexity of O(N). At the end of the meeting, 
    Ash said this can be solved more efficiently, so I am going 
    to attempt to solve it with a better time complexity
*/

var isValid = function(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            arr.push(s[i])
        } else if (s[i] === ")" && arr[arr.length-1] === "(") {
            arr.splice(arr.length-1)
        } else if (s[i] === "]" && arr[arr.length-1] === "[") {
            arr.splice(arr.length-1)
        } else if (s[i] === "}" && arr[arr.length-1] === "{") {
            arr.splice(arr.length-1)
        } else {
            arr.push("wrong!")
            break
        }
    }
    return arr.length === 0
};