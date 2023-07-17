
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