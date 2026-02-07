// nested loops with nested arrays

let heroes = [["iron","copper","aluminium"],["gold","silver","platinum"]]

for(let i = 0; i<heroes.length;i++){
    console.log(`List #${i}`);
    for (let j = 0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
        }
}



// 


let student = [["aman",95],["shradha",94],["karan",100]]

for(let i = 0;i<student.length;i++){
    console.log(i,student[i],student[i].length);
    for (let j = 0;j<student[i].length;j++){
        console.log(student[i][j])
    }
}