/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * 
 * 
 */
var containsDuplicate = function(nums) {
    const s = new Set(nums);
    return s.size !== nums.length
};

// make a new set
// if that new set is not equal to to the length then their is not a duplicate.
//
