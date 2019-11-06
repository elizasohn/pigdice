//Initialize Variables --------------
var newPlayer = new Player("Jimmitohy", 0, 0);
var newPlayer2 = new Player("Eliza", 0, 0);

var hold = false;
var roll = false;
var diceValue = 0;
var turnScore = 0;

//Player Logic ----------------------
function Player(name, totalScore) {
  this.name = name;
  this.totalScore = totalScore;
}

Player.prototype.addTotalScore = function(value) {
  this.totalScore += value;
}

//Dice Logic ------------------------
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

//Player Turn Logic -----------------
function playerTurn(activePlayer) {
  turnScore = 0;

  while ( (roll === true) && (hold === false) ) {

    var diceValue = diceRoll();
    console.log(activePlayer, " rolled a: ", diceValue);

    //Check the value of the Dice
    if (diceValue === 1) {
      turnScore = 0;
      roll = false;
      console.log("Rolled a 1. Score: ", turnScore);

    } else if (diceValue > 1) {
        turnScore += diceValue;
        console.log("Current Value in Turn", diceValue);
        roll = false;
    }

  }
  console.log("Returning: ", turnScore);
  roll = false;
  hold = false;
  return turnScore;
}



// Game Loop Logic ------------------
function playGame(player1, player2) {
  var player1Turn = true;

  //Checks to see if a player has 100
  while ((player1.totalScore < 100) && (player2.totalScore < 100)) {
    //Checks to see if it's player 1's turn
    while (player1Turn === true){
        player1.addTotalScore(playerTurn(player1));
        player1Turn = false;
        console.log(player1);
      }
        //Else if it's player 2's turn
        player2.addTotalScore(playerTurn(player2));
        player1Turn = true;
        console.log(player2);
        //Goes back and checks total scores --^
    }
    //End Game
    console.log("game over!")
    return;
  } //closes play game function



// $(document).ready(function(){
//   // Collect User Names
//   // var player1name = //jquery
//   // var player2name = //jquery
//
//
//
//
//   // Play game
//   playGame(player1, player2);
//
//   // Determine Winner / Display that
//
// });
