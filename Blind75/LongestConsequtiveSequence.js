var longestConsecutive = function(nums) {
    let set = new Set(); // Create a Set to store unique elements.
    for (const num of nums) { // Iterate through input array.
        set.add(num); // Add each element to the Set to ensure uniqueness.
    }
    let max = 0; // Initialize a variable to track the longest consecutive sequence.
    for (let num of set) { // Iterate through unique elements in the Set.
        if (!set.has(num - 1)) { // Check if the current element is the start of a sequence.
            let count = 0; // Initialize a count for the current sequence.
            while (set.has(num++)) { // Count consecutive elements in the sequence.
                count++;
            }
            max = Math.max(count, max); // Update max with the longer sequence.
        }
    }
    return max; // Return the length of the longest consecutive sequence.
};
// var longestConsecutive = function(nums) {
//     if (nums.length === 0) {
//         return 0; // Handle the edge case of an empty array.
//     }

//     nums.sort((a, b) => a - b); // Sort the array in ascending order.
    
//     let maxCount = 1; // Initialize the maximum consecutive count.
//     let currentCount = 1; // Initialize the current consecutive count.

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1] + 1) {
//             currentCount++; // Increment the current consecutive count.
//         } else if (nums[i] !== nums[i - 1]) {
//             currentCount = 1; // Reset the current count if not consecutive.
//         }
//         maxCount = Math.max(maxCount, currentCount); // Update maxCount.
//     }
    
//     return maxCount;
// };