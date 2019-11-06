//Initialize Variables --------------
var newPlayer = new Player("Jimmitohy", 0, 0);
var newPlayer2 = new Player("Eliza", 0, 0);

var hold === false;
var roll === false;
var diceValue = 0;

//Player Logic ----------------------
function Player(name, totalScore, turnScore) {
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

//Play game -------------------------
function addScore(player) {

}


//listen for rolls, add turnscore so long as its not a 1 or if hold has been pressed
function playerTurn(activePlayer) {
  var currentTurnScore = 0;

  if ( (roll === true) && (hold === false) ) {
    var diceValue = diceRoll();

    if (diceValue === 1) {
      currentTurnScore = 0;
      roll = false;
      hold = true;
    }
      else if (diceValue > 1) {
        currentTurnScore += diceValue;
        roll = false;
      }

    else if ( hold === true ) {
      roll = false;
      return currentTurnScore;
    }
  }
}


function playGame(player1, player2) {
  var player1Turn = true;
  var turnScore = 0;

  //Checks to see if a player has 100
  while ((player1.totalScore < 100) && (player2.totalScore < 100)) {
    //Checks to see if it's player 1's turn
    while (player1Turn === true){
        player1.addTotalScore(playerTurn(player1));
        turnScore = 0;
        player1Turn = false;
      }
        //Else if it's player 2's turn
        player2.addTotalScore(playerTurn(player2));
        turnScore = 0;
        player1Turn = true;
        //Goes back and checks total scores --^
    }
    //End Game
    console.log("game over!")
    return;
  } //closes play game function



  } //End Game Loop ----------------
  console.log("game overrrrrrrr!!!");
  return;

}



$(document).ready(function(){
  // Collect User Names
  // var player1name = //jquery
  // var player2name = //jquery




  // Play game
  playGame(player1, player2);

  // Determine Winner / Display that

});
