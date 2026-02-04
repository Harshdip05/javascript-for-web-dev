// A template literal is a string syntax in JavaScript that uses backticks and allows expression interpolation using ${}, as well as multi-line strings.

let a = 10
let b = 15

let output1  = ("the sum of a and b is ",a+b,"rupees")
let output2  = ("the sum  of a and b is "+a+b+"rupees")
let output3  = (`the  sum  of a and b is ${a+b} rupees`)


console.log(output1)
console.log("the sum of a and b is ",a+b,"rupees")
console.log(output2)
console.log("the sum  of a and b is "+a+b+"rupees")
console.log(output3)
console.log(`the  sum  of a and b is ${a+b} rupees`)


const message = `
Hello,
Welcome to JavaScript.     
`
// multi line strings (no \n needed)
