// A nested loop means:
// One loop inside another loop
// 👉 The inner loop runs completely for each single iteration of the outer loop.


for(let i = 1;i<=3;i++){
    console.log(`outer loop ${i}`)
    for(let j=1;j<=3;j++){
        console.log(j)
    }
}

// Inner loop completes all its iterations before the outer loop moves to the next value


for(let i = 1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(i,j)
    }
}


for (let i = 1; i <= 3; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
