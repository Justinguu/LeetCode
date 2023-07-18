/*
49. Group Anagrams
Medium
16.1K
457
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/


// Problem
var groupAnagrams = function(strs) {
 
 };

 //Solution
 var groupAnagrams = function(strs) {
 let map = {} // initialize obj
 
 for(let str of strs){
     let s = str.split('').sort().join('')
     if(!map[s]) map[s] = [] // checks to see if s value exists in the map assigned
    // if not included the map[s] = [] will hold all the anagrams that have the same identifier
     map[s].push(str) //// if multiple same strings they will be added to the same array
 }
 return Object.values(map) // extract values
};
 /*

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 */