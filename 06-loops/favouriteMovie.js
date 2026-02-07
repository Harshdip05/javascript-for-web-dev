let favourite = "Avatar";
let guess = prompt("guess movie");

while(guess!==favourite  && guess!=="quit"){
    console.log("wrong");
    guess = prompt("guess again");
}