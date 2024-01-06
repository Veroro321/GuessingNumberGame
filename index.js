




'use strict';

let score = 20;
let highScore = 0; 
let secretNumber = Math.trunc(Math.random() * 20) + 1; 

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
       // document.querySelector('.message').textContent = "No Number!";
       displayMessage("No Number!")
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber; 
       // document.querySelector('.message').textContent = "Correct Number!";
        displayMessage("Correct Number!")
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) { //will change the score as player wins 
            highScore = score; 
            document.querySelector('.highscore').textContent = highScore;
        }

    // after refractoring the code --when the guess is wrong from the secretNumber 
    } else if(guess !== secretNumber){
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? "Too High!" : "Too Low!";
            displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.message').textContent = "You Lost the game";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }

    /* before refractoring the code 
    // when the guess is too high....
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too High!";
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.message').textContent = "You Lost the game";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
    //when the guess is too low....
    else if(guess < secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = "Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost the game";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    } */
}); 

document.querySelector('.again').addEventListener('click', function() {
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1; 
    document.querySelector('.message').textContent = "start guessing...";
    document.querySelector('.score').textContent = score; 
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = ""; 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});