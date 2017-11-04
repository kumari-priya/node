// INSTRUCTIONS: Build a command-line based zombie fighting game.
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5.
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again.

// The game ends when you or the zombie gets to 0 health.

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt.

// ===========================================================================================================
var inquirer = require("inquirer");


var playerHealth = 70;
var zombieHealth = 15;
var randomNum;
var userGuess;

promptUser();
function promptUser(){
  inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
      type: 'input',
      name: 'num',
      message: 'Enter your number?'
    }
  ]).then(function(inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
  randomNum = Math.floor((Math.random() * 5) + 1);
  console.log("Zombie -"+randomNum);
  userGuess = inquirerResponse.num;
  if(randomNum == userGuess){
    zombieHealth -= randomNum;
      console.log("You Won!");
  }
  else{
    playerHealth-=randomNum;
      console.log("You Lost!");
  }
  checkHealth(playerHealth,zombieHealth);
  });
}

function checkHealth(playerHealth,zombieHealth){
  console.log("Your Health- "+playerHealth);
    console.log("Zombie Health- "+zombieHealth);
  if(playerHealth==0){
    console.log("Game Over! You Lost!");
    process.exit();
  }
  else if (zombieHealth==0){
      console.log("Game Over! Zombie Lost!");

  }
  else{
    promptUser();
  }
}
