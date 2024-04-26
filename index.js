//LEFT DICE

var randomNumber1 = ["1", "2", "3", "4", "5", "6"];
var numberSelector = [Math.random() * randomNumber1.length];
var numberRounded;
numberRounded = Math.floor(numberSelector);

var leftDice = randomNumber1[numberRounded];

var firstDiceImg="images/dice"+leftDice+".png";

document.querySelector(".img1").setAttribute("src",firstDiceImg);

//RIGHT DICE
var randomNumber1 = ["1", "2", "3", "4", "5", "6"];
var numberSelector = [Math.random() * randomNumber1.length];
var numberRounded;
numberRounded = Math.floor(numberSelector);

var rightDice = randomNumber1[numberRounded];

var firstDiceImg="images/dice"+rightDice+".png";

document.querySelector(".img2").setAttribute("src",firstDiceImg);

if (leftDice > rightDice){
 
    document.querySelector("h1").innerHTML = "🚩Player 1 WINS";
}

else if (leftDice < rightDice){

    document.querySelector("h1").innerHTML = "Player 2 WINS🚩";
}

if (leftDice === rightDice){

    document.querySelector("h1").innerHTML = "DRAWN GAME";
}


//angelas solution
/*

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //numeros 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 WINS";
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 WINS🚩";
}

else{
    document.querySelector("h1").innerHTML = "DRAWN GAME";
}
*/

