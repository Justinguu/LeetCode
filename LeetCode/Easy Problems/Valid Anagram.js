
/*
242. Valid Anagram
Easy
9.1K
Companies

//Question
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/

//ANSWER
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};

// Explanation 
// We can simplify this by checking s and t against each other by splitting their characters.
//Sorting the characters in order and joining them back to see if the elements are the same

/*
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true


Example 2:

Input: s = "rat", t = "car"
Output: false
*/

// 2nd solution 

var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false
    }

    let map = {}
    for (let i = 0; i < s.length; i++){
        if(s[i] in map){ 
            map[s[i]]++ 
            
        } else {
            map[s[i]] = 1
        }
    }
        let map2 = {}
        for (let i = 0; i < t.length; i++){
            if(t[i] in map2){
                map2[t[i]]++
            } else {
                map2[t[i]] = 1
            }
        }
        for (let key in map){
            if (map[key] !== map2[key]){
                return false
            }
        } 
        return true
};
//