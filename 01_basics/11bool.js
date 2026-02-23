let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);
console.log(hasPermission);

console.log(typeof(true));
console.log(typeof(false));

// 

let a = 20;
console.log(a,typeof(a));
a = true;
console.log(a,typeof(a));


// 

let b = 15;
console.log(b,typeof(b));

console.log(Boolean(b),typeof(Boolean(b)),typeof(b));


// 

console.log(true==1);
// Allows type coercion
// true is 1 and 1 is 1
// Tries to convert both sides to the same type


console.log(true===1);
// No type coercion
// Compares value + type