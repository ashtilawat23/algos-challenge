var lengthOfLongestSubstring = function (s) {
    //Moving window question
    //define variable for length to return at end of function
    let maxLen = 0
    //traverse through string, 
    //have set to track unique chars
    let newSet = new Set()
    //define variable to track left side of window
    let left = 0
    //right side of window is constantly incrementing by 1 so no need for additional variable
    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        //check if in set, if not add to set and compare length
        //if in set, keep moving left pointer and removing char from set until it reaches the same char as current and move it once more
        if (newSet.has(current)) {
            while (s[left] !== current) {
                newSet.delete(s[left])
                left++
            }
            left++
        }
        newSet.add(current)
        //check if current string.length > max if so reassign
        if ((i - left) + 1 > maxLen) maxLen = i - left + 1
    }
    return maxLen
}
