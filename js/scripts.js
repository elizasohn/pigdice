//Initialize Variables --------------
// var newPlayer = new Player("Jimmitohy", 0, 0);
// var newPlayer2 = new Player("Eliza", 0, 0);
var player1;
var player2;

//Player Logic ----------------------
function Player(id, name, totalScore, tempScore) {
  this.id = id;
  this.name = name;
  this.totalScore = totalScore;
  this.tempScore = tempScore;
}

Player.prototype.addTotalScore = function(value) {
  this.totalScore += value;
}

Player.prototype.addTurnScore = function(rollValue) {
  this.tempScore += rollValue
}


//Dice Logic ------------------------
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

//Player Turn Logic -----------------
function playerTurn(diceValue) {
  console.log("You rolled: ", diceValue);
  if (diceValue === 1) {
    tempScore = 0;
    isOne = true;

  } else if (diceValue > 1) {
    tempScore += diceValue;
  }
  return tempScore;
}


// Game Loop Logic ------------------
function playGame(player1, player2) {
  var player1Turn = true;

  //Checks to see if a player has 100
    if ((player1Turn === true) && (hold === true)){
        player1.addTotalScore(playerTurn());
        player1Turn = false;
        hold = false;
        console.log("player1: ", player1.totalScore);
    } else if (isOne === true) {
      tempScore = 0;
      player1Turn != player1Turn;
      console.log("player1 no points for you: ", player1.totalScore);
    }
    //Player 2's Turn:
     else if ((player1Turn === false) && (hold === true)) {
       player2.addTotalScore(playerTurn());
       player1Turn = true;
       hold = false;
       console.log("player2: ", player2.totalScore);
    }
  // }

    console.log("game over!")
    return;
  } //closes play game function



$(document).ready(function(){

    $("#enterUser").click(function(){
      var player1nameInput = $("#player1").val();
      var player2nameInput = $("#player2").val();
      player1 = new Player(1, player1nameInput, 0, false, false, 0);
      player2 = new Player(2, player2nameInput, 0, false, false, 0);
      $(".userRegBox").slideUp();
    });

//THIS IS THE PLAN!!! Show and Hide different UserInputBox divs to get unique inputs for the player objects!!
//Get it to count into the object with roll button and add that to player objects
//Worry about hitting 1's later

    $(".rollBtn").click(function(){
      console.log("click");
      // var rollResult = diceRoll();
      // console.log(rollResult);
      // var id = this.id;
      // console.log(id);
      // if (id === 1){
      //   player1.addTurnScore(playerTurn(rollResult));
      // } else {
      //   player2.addTurnScore(playerTurn(rollResult));
    });



    });

    //
    // $(".player1Name").text(player1nameInput);
    // $(".player2Name").text(player2nameInput);
    //
    // $(".currentPlayer").text(player1nameInput);



//
//   $("#rollBtn").on("click", "button", function(){
//     roll = true;
//     playerTurn();
//     roll = false;
//   });
// });
