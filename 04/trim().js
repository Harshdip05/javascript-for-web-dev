// trim() is a string method that removes extra spaces from the start and end of a string.
// trim() removes whitespace from both ends of a string and returns a new string because strings are immutable in JavaScript
// It does NOT remove spaces in the middle

let msg = "    hello      world      "
console.log(msg.trim())

// trimStart() / trimEnd()


// What counts as whitespaces
    //  trim() removes: 
            // Spaces
            // Tabs (\t)
            // New lines (\n)


console.log("   ".trim());       // empty  string


let password = prompt("set your password")
console.log(password)
let passTrim  = password.trim()
console.log(passTrim)


