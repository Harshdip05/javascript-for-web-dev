let favourite = "Avatar";
let guess = prompt("guess movie");

while(guess!==favourite  && guess!=="quit"){
    console.log("wrong");
    guess = prompt("guess again");
}

if (guess === favourite) {
  console.log("Correct! You guessed the movie ");
} else {
  console.log("You quit the game");
}
