// find the position (index) of a character or word inside a string.
        // indexOf() → finds the first match
        // lastIndexOf() → finds the last match

// Index starts from 0        
// If Not Found → -1
// Empty string always matches at index 0

let sentence = "I love JavaScript";

console.log(sentence.indexOf("JavaScript"));
console.log(sentence.lastIndexOf("JavaScript"));


console.log("hello".indexOf(""));
console.log("hello".lastIndexOf(""));
// “indexOf("") returns 0 and lastIndexOf("") returns the string’s length because an empty string is considered to match at every position.”
