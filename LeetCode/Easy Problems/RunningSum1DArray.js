/*


## 1480. Running Sum of 1d Array

<br>  

## Problem
Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

<br>
*/

// Default
var runningSum = function(nums) {
  
};

// Solved
var runningSum = function(nums) {
    let runNums = 0
    let ans = []

    for (let n of nums){
        runNums += n
        ans.push(runNums)
    }

    return ans
};


// Practice:
//
// Explanation:


/*


Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/
