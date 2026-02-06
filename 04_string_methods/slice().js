// slice() is used to cut out a part of a string or array.
// It does NOT change the original value
// It returns a new string or array


// slice(startIndex, endIndex)
   //    inclusive  exclusive


let word = "JavaScript";
console.log(word.slice(4))
console.log(word.slice(4,word.length))

console.log(word.slice(-4))             //Start from 4th character from the end
console.log(word.slice(-4,word.length))
console.log(word.slice(6))
console.log(word.slice(6,word.length))


// 

// substring() is a string method used to extract part of a string.
// It returns a new string
// It does not change the original string
// substring() extracts part of a string using inclusive start and exclusive end, but it does not support negative indexes and swaps arguments if start is greater than end

// string.substring(startIndex, endIndex)
//                   inclusive   exclusive

console.log("hello".substring(4, 1));
// JS swaps → substring(1, 4)

console.log("hello".substring(-2))    //treated as 0
