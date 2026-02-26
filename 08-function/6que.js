// function prints multiplication table

function table(number){
 for(let i =1;i<=10;i++){
    let t = `${number}*${i}=${number*i}`
    console.log(t)
}
}

// table(4)
// table(55)


function printTable(n){
    for(let i =n;i<=n*10;i+=n){
        console.log(i);
    }
}

printTable(5)