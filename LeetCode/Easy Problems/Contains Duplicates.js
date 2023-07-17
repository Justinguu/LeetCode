//Neetcode String Problem #1
// Leetcode String Problem #217

/**
 * @param {number[]} nums
 * @return {boolean}
 */
//QUESTION
//Given an integer array nums, return true if any value appears at least twice in the array 
//and return false if every element is distinct.
/**
 * 
 * 
 */
//ANSWER #1
var containsDuplicate = function(nums) {
    const s = new Set(nums);// make a new set
    return s.size !== nums.length   // if that new set is not equal to to the length then their is not a duplicate.
};

//ANSWER #2
var containsDuplicate = function (nums){
    nums.sort((a , b) => a - b );
    for (let i = 0; i <= nums.length - 1; i++){
        if (nums[i] === nums[i + 1]){
            return true
        }
    }
    return false
}



/*
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
Accepted
3M
Submissions
4.8M
Acceptance Rate
61.2%

*/