//Initialize Variables --------------
var player1;
var player2;
var turn = true;


//Player Logic ----------------------
function Player(id, name, turn) {
  this.id = id;
  this.name = name;
  this.turn = turn;
  this.totalScore = 0;
  this.tempScore = 0;
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


//rolling dice, checking turn and adding the value to the tempScore
function playerRoll(player) {
    var diceValue = diceRoll();
    console.log(player.name, " rolled: ", diceValue);
    if (diceValue === 1) {
      player.tempScore = 0;
      turn = !turn;
      console.log(turn);
    } else if (diceValue > 1) {
      player.tempScore += diceValue;
    }
    else {
      return player.tempScore;
    }
}

// hold to totalScore function
function hold(player){
  player.addTotalScore(player.tempScore);
  player.tempScore = 0;
  turn = !turn;
  if (player.totalScore > 100){
    console.log("Yay! "+ player.name + " wins!!!");
  }
  console.log(player.name, " score:", player.totalScore);
}

function turnCheck() {
  if (turn === true){
    player1.turn = true;
    player2.turn = false;
    return true;
  }else if (turn === false){
    player1.turn = false;
    player2.turn = true;
    return false;
  }
}


// Front End Logic ------------------------------------
$(document).ready(function(){

  $("#enterUser").click(function(){
    var player1nameInput = $("#player1").val();
    var player2nameInput = $("#player2").val();
    player1 = new Player(1, player1nameInput, true);
    player2 = new Player(2, player2nameInput, false);
    $(".userRegBox").slideUp();
    updateScreens();
    $(".gameField").show();

  });


  $(".rollBtn").click(function(){
    if (turnCheck() === true){
      playerRoll(player1);
      updateScreens();
    } else if (turnCheck() === false){
      playerRoll(player2);
      updateScreens();
    }
  });

  $("#holdBtn").click(function(){
    if (turnCheck() === true){
      hold(player1);
      if (player1.totalScore >= 100){
        winGame(player1);
      }
    } else if (turnCheck() === false){
      hold(player2);
      if (player2.totalScore >= 100){
        winGame(player2);
      }
    }
    updateScreens();
  });

  function updateScreens(){
    $(".player1Name").text(player1.name);
    $(".player2Name").text(player2.name);
    $(".player1Score").text(player1.totalScore);
    $(".player2Score").text(player2.totalScore);
    if (turnCheck() === true){
      $(".currentPlayer").text(player1.name);
      $("#currentTempScore").text(player1.tempScore);
    } else if (turnCheck() === false){
      $(".currentPlayer").text(player2.name);
      $("#currentTempScore").text(player2.tempScore);
    }
  }

  function winGame(player){
    $(".winningPlayer").text(player.name);
    $(".gameField").hide();
    $(".winningResult").show();
  }

  $("#newGameBtn").click(function(){
    window.location.reload();
  })
});
