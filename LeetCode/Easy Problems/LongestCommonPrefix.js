/*
14. Longest Common Prefix
Easy
14.1K
4K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
Accepted
2.4M
Submissions
5.9M
Acceptance Rate
41.0%
*/
// Question
var longestCommonPrefix = function(strs) {
    
};


/// Solution

var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''

    for (let i = 0; i <= strs[0].length; i++){
        for (let j = 1; j < strs.length; j++){
            if (strs[0][i] !== strs[j][i]){
                return strs[0].slice(0,i)
            }

        }
    }
    return strs[0]
};