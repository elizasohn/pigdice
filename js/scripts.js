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

function playGame(player1, player2) {
  var player1Turn = true;
  var hold = false;
  var turnScore = 0;

  while ((player1.totalScore < 100) && (player2.totalScore < 100)) {
    while (player1Turn === true){
      while (hold === false) {
      //listen for rolls, add turnscore so long as its not a 1 or if hold has been pressed
      if (//roll === 1) {
        turnScore = 0;
        player1Turn = false;
      }
      else if (//roll > 1) {
        player1.addTotalScore(turnScore);
        turnScore = 0;
      }
      //hold has been pressed
      player1.addTotalScore(turnScore);
      turnScore = 0;
      player1Turn = false;
    }
    
  }



  } //End Game Loop ----------------
  console.log("game overrrrrrrr!!!");
  return;

}

//Initialize Variables --------------
var newPlayer = new Player("Jimmitohy", 0, 0);
var newPlayer2 = new Player("Eliza", 0, 0);
var roll = diceRoll();
console.log(diceRoll());
