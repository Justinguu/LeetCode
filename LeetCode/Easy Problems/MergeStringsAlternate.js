/*1768. Merge Strings Alternately
Easy
Topics
Companies
Hint
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 */

// Define a function called mergeAlternately that takes two input strings, word1 and word2
var mergeAlternately = function(word1, word2) {
    // Find the maximum length between word1 and word2
    let maxLength = Math.max(word1.length, word2.length);

    // Initialize an empty array to store the merged characters
    let newWord = [];

    // Iterate through the characters at each position up to the maxLength
    for (let i = 0; i < maxLength; i++) {
        // If there are still characters in word1 at this position, push it to newWord
        if (i < word1.length) {
            newWord.push(word1[i]);
        }
        // If there are still characters in word2 at this position, push it to newWord
        if (i < word2.length) {
            newWord.push(word2[i]);
        }
    }

    // Join the characters in newWord into a single string and return the result
    return newWord.join('');
};

/*
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

*/