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
