class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs - List of strings to be encoded
     * @return {string} - Encoded string
     */
    encode(strs) {
        // Join the strings using the specified delimiter
        return strs.join(':;');
    }

    /**
     * Decodes a single string to a list of strings.
     * @param {string} str - Encoded string
     * @return {string[]} - Decoded list of strings
     */
    decode(str) {
        // Split the encoded string using the same delimiter to get the original strings
        return str.split(':;');
    }
}

// Example usage:
const solution = new Solution();
const inputStrings = ["lint", "code", "love", "you"];
const encodedString = solution.encode(inputStrings);
console.log(encodedString); // Outputs: "lint:;code:;love:;you"
const decodedStrings = solution.decode(encodedString);
console.log(decodedStrings); // Outputs: ["lint", "code", "love", "you"]