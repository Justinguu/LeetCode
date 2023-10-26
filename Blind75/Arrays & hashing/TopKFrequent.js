/*347. Top K Frequent Elements
Medium
15.2K
538


//Question
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

*/
//Problem
var topKFrequent = function(nums, k) {
 
};


// Answer
var topKFrequent = function(nums, k) {
    let map = {}
    for (let num of nums){
        if (!map[num]){
            map[num] = 1
            map[num]++
        }
    }
    return [...Object.keys(map).sort((a,b) => map[b] - map[a])].slice(0, k)
};
var topKFrequent = function(nums, k) {
    // let map = new Map();  // initialize a map The keys will be the unique ele, and the values will be the count
    // for (let i = 0; i < nums.length; i++){
    //     if (map.has(nums[i])) { // checks if nums[i] is already a key in map
    //         map.set(nums[i], map.get(nums[i]) + 1) // if not then we increment the count by 1
    //     } else {
    //         map.set(nums[i], 1)  // if its not then its the first occurence so we add it to map and give it a freq of 1
    //     } 
    // }
    //  let sortedArr = [...map.keys()]   // creates an  array of the keys
    //  .sort((a, b) => map.get(b) - map.get(a))  // sorts all the elements based on the freq count. Descending order so highest frequency comes first 
    //  .slice(0, k) // take the first k element. Which is the the one with the most.

    //  return sortedArr


};


/*
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

Accepted
1.6M
Submissions
2.5M
*/