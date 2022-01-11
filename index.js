var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);


var diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

document.querySelector(".img1").setAttribute("src", "images/" + diceImages[randomNumber1]);
document.querySelector(".img2").setAttribute("src", "images/" + diceImages[randomNumber2]);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 wins";
}

else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}

