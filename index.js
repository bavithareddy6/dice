var randomNumber1=Math.floor(Math.random() * 6) + 1 ; // setting number 1-6//

var leftimage = "dice" + randomNumber1 +".png";//selecting left image ..
var leftimagesource="images/"+ leftimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",leftimagesource);

var randomNumber2=Math.floor(Math.random()* 6)+1;
var rightimagesource = "images/dice"+randomNumber2+".png";

document.getElementById('throwDice').addEventListener("click", throwDice);



function throwDice() {


// Dice 1 Settings

// location.reload();

var dice1No = (Math.floor(Math.random()*6)) + 1;

console.log("Dice One No = " + dice1No);

var dice1img = document.querySelector('.img1')

dice1img.setAttribute("src","images/dice" + dice1No + ".png");

// Dice 2 Settings

var dice2No = (Math.floor(Math.random()*6)) + 1;

console.log("Dice Two No = " + dice2No);

var dice2img = document.querySelector('.img2')

dice2img.setAttribute("src","images/dice" + dice2No + ".png");

// Change H1 Text According to Dice Numbers

/*

Three Results

1. Player 1 Win
2. Player 2 Win
3. Draw

*/

var h1Text = document.querySelector('h1');

if(dice1No > dice2No){
    h1Text.innerText = " 🚩Player 1 Win";
}
else if(dice1No < dice2No){
    h1Text.innerText = "🚩 Player 2 Win ";
}
else if(dice1No == dice2No){
    h1Text.innerText = "Draw! Try Again"
}

};
