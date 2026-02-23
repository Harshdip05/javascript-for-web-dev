// Number is only one numeric type
// JavaScript numbers are stored as:
// 64-bit floating-point (IEEE 754)
// This explains many strange behaviors.
// Everything is stored as floating-point numbers internally

console.log(0.1+0.2)    // precesion problem
console.log(0.1+0.2==0.3)
console.log(0.1+0.2===0.3)

console.log(0.9999999)
console.log(0.999999999999999999999)
console.log(0.999999999999999999999==1)
console.log(0.999999999999999999999===1)


let num1 = 10;
console.log(num1,typeof num1)
