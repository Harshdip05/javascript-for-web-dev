
for(let i=5;i>=1;i--){
    console.log(i)
}

for(let i=10;i<=5;i--){
    console.log(i)
}
// The increment/decrement part of a for loop runs only after the loop body executes.
// But here, the loop body never executes even once.



for(let i = 10;i>=1;i=i-2){
    console.log(i)
}

console.log(i)
// let is block-scoped
// The i variable exists only inside the for loop block
// Outside the loop, i does not exist



for (var i = 10; i >= 1; i = i - 2) {
  console.log(i);
}
console.log(i);
// var is function-scoped, not block-scoped