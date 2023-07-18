/*
169. Majority Element
Easy
15.8K
461
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

//Problem
var majorityElement = function(nums) {

};

//Answer
var majorityElement = function(nums) {
    const map = new Map();
    for (let num of nums) {
        if (map.has(num)){
            map.set(num, map.get(num) + 1);
            if (map.get(num) > nums.length / 2) return num;

        } else map.set(num , 1);
    }
    return nums[0]
};
 
/*
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/