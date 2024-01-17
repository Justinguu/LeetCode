/* 28. Find the Index of the First Occurrence in a String
Easy
Topics
Companies
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/
 
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Get the length of the needle
    let len = needle.length;

    // Check if needle is empty or undefined
    if (!needle || !len) {
        // If true, return -1 indicating not found
        return -1;
    }

    // Iterate through each character in the haystack
    for (let i = 0; i < haystack.length; i++) {
        // Check if a substring of haystack, starting at position i and of length len, is equal to the needle
        if (haystack.slice(i, i + len) === needle) {
            // If true, return the index i where the needle is found in the haystack
            return i;
        }
    }

    // If the loop completes without finding the needle, return -1
    return -1;
};

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
}
// Time Complexity: O(n) 



/*
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/