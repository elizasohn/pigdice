//Player Logic ----------------------
function Player(name, totalScore, turnScore) {
  this.name = name;
  this.totalScore = totalScore;
  this.turnScore = turnScore;
}

Player.prototype.addTotalScore = function(value) {
  this.totalScore += value;
}

Player.prototype.addTurnScore = function(value) {
  this.turnScore += value;
}

//Dice Logic ------------------------
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

//Play game -------------------------
function playGame(player1, player2) {

}

//Initialize Variables --------------
var newPlayer = new Player("Jimmitohy", 0, 0);
var roll = diceRoll();
console.log(diceRoll());
