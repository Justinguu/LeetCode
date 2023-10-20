/**
 * @param {number[]} nums
 * @return {number[]}
 */


/*
238. Product of Array Except Self
Medium
18.8K
1K
Companies
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/
//  var productExceptSelf = function(nums) {
//         let res =[];
//         nums.reduce((leftP, curr, i) => {
//             res[i] = leftP;
//             return leftP*curr;
//         }, 1)
//         nums.reduceRight((rightP, curr, i) => {
//             res[i] *= rightP;
//             return rightP*curr;
//         }, 1)
//         return res;
    
// };

var productExceptSelf = function(nums) {
    let res = []; // Initialize an empty array to store the result.
    let leftMult = 1; // Initialize a variable to keep track of the product of elements to the left.
    let rightMult = 1; // Initialize a variable to keep track of the product of elements to the right.

    for (let i = nums.length - 1; i >= 0; i--) { // Loop through the array in reverse order.
        res[i] = rightMult; // Store the product of elements to the right in the result array.
        rightMult *= nums[i]; // Update the right product variable by multiplying it with the current element in nums.
    }

    for (let j = 0; j < nums.length; j++) {
        res[j] *= leftMult; // Calculate the product of elements to the left and right for each element and update the result array.
        leftMult *= nums[j]; // Update the left product variable by multiplying it with the current element in nums.
    }

    return res; // Return the resulting array containing the product of elements except the one at the same index.
}
/*
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


*/
