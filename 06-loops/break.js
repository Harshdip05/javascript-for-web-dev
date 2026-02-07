// break is used to immediately stop a loop or switch statement and move control outside of it.
// When break runs, the loop ends instantly, even if the condition is still true.

let i = 1;
while(i<=5){
    if(i===3){
        break;
    }
    console.log(i);
    i++;
}

console.log("we used break at 3")


// 


let favourite = "Avatar";
let guess = prompt("guess movie");

while(guess!==favourite){
    if (guess==="quit"){
        console.log("you quit")
        break;
    }
    console.log("wrong");
    guess = prompt("guess again");
}

if (guess === favourite) {
  console.log("Correct! You guessed the movie ");
} else {
  console.log("You quit the game");
}
