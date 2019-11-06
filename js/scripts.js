//Initialize Variables --------------
// var newPlayer = new Player("Jimmitohy", 0, 0);
// var newPlayer2 = new Player("Eliza", 0, 0);
var playerA;
var playerB;

var diceValue = 0;
var turnScore = 0;
var isOne = false;
var hold = false;

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
function playerTurn() {
  var diceValue = diceRoll();
  console.log("You rolled: ", diceValue);
  if (diceValue === 1) {
    turnScore = 0;
    isOne = true;

  } else if (diceValue > 1) {
    turnScore += diceValue;
  }
  return turnScore;
}




// Game Loop Logic ------------------
function playGame(player1, player2) {
  var player1Turn = true;

  //Checks to see if a player has 100
  while ((player1.totalScore < 100) && (player2.totalScore < 100)) {
    //Checks to see if it's player 1's turn
    while (player1Turn === true){
      if (hold === true) {
        player1.addTotalScore(playerTurn(player1));
        player1Turn = false;
        console.log("player1: ", player1.totalScore);
      } else if (isOne === true) {
        turnScore = 0;
        player1Turn = false;
        console.log("player1 no points for you: ", player1.totalScore);
      }
    }
    if (hold === true) {
      player1.addTotalScore(playerTurn(player1));
      player1Turn = true;
      console.log("player1: ", player1.totalScore);
    } else if (isOne === true) {
      turnScore = 0;
      player1Turn = true;
      console.log("player1 no points for you: ", player1.totalScore);
    }

  } //Close While Loop

    console.log("game over!")
    return;
  } //closes play game function



$(document).ready(function(){
  // $("form#userRegForm").submit(function(event){
    // event.preventDefault();

    $("#enterUser").click(function(){
      var player1nameInput = $("#player1").val();
      var player2nameInput = $("#player2").val();
      playerA = new Player(player1nameInput, 0);
      playerB = new Player(player2nameInput, 0);
    });

    playGame(playerA, playerB);
    //
    // $(".player1Name").text(player1nameInput);
    // $(".player2Name").text(player2nameInput);
    //
    // $(".currentPlayer").text(player1nameInput);

  });


//
//   $("#rollBtn").on("click", "button", function(){
//     roll = true;
//     playerTurn();
//     roll = false;
//   });
// });
