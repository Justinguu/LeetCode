//9. Palindrome Number




//QUESTION: Given an integer x, return true if x is a palindrome, and false otherwise.
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let y = x.toString().split("").reverse().join("");
//     return x === parseInt(y)
//     };
    
    
    let palin = x.toString().split("").reverse().join("");
    return x === parseInt(palin)
    
    //  let y = x.toString().split("").reverse().join("");
    //         return x === parseInt(y) 



   
       palindrome("A man, a plan, a canal. Panama");function isPalindrome(str) {
           const cleanStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
           for (let i = 0; i < cleanStr.length / 2; i++) {
             if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
                 return false;
             }
           }
           return true;
       }
/*
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

Accepted
3.1M
Submissions
5.8M
Acceptance Rate
53.6%
*/
//