// Method chaining means calling multiple methods one after another in a single line.
// Each method returns something → the next method works on that result.

let msg = "    hello   "
console.log(msg)
let msgTrim = msg.trim()
console.log(msgTrim)
let msgTrimUpper = msgTrim.toUpperCase()
console.log(msgTrimUpper)

console.log(msg.trim().toUpperCase())

