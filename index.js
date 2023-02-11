
let won = false;
let isAlive = true;
let message = '';
let hand = [];

const spanCards = document.getElementById('displayCards');
const spanNumCards = document.getElementById('displayNumCards');
const spanSum = document.getElementById('displaySum');
const spanResult = document.getElementById('result');
const gameButton = document.getElementById('gameButton');


function playGame(){
if(isAlive == true && won == false){

    newCard();
    checkResult()

}else if (won == true) {
    
    message = 'Already won man!'
    gameButton.setAttribute('onclick',  'restart()');
    gameButton.textContent = 'New Game?';
    
}else{
    message = 'Too late buddy!'
    gameButton.setAttribute('onclick',  'restart()');
    gameButton.textContent = 'New Game?';
}

display();

}

function checkResult(){
    if (sum() === 21){
    message = 'BlackJack !';
    won = true;
}else if( sum() < 21){
    message = 'Not yet homie !';
}else if(sum() > 21){
    message = 'Busted !';
    isAlive = false;
}
}
function newCard(){
    hand.push(Math.floor(Math.random() * 11) + 2);
}
function sum(){
    return hand.reduce((a, b) => a + b, 0);
}
function restart(){
setStart();

display();


gameButton.setAttribute('onclick',  'playGame()');
gameButton.textContent = 'Draw';

}
function display(){
spanNumCards.textContent = hand.length;
spanCards.textContent = hand;
spanSum.textContent = sum();
spanResult.textContent = message;
}
function setStart(){
won = false;
isAlive = true;
message = '';
hand = [];
}
