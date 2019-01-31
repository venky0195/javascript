/**************************************************************************
 * Execution       : Default node             cmd> node ticTacToe.js
 * Purpose         : To play Tic Tac Toe game.
 * 
 * @description
 * 
 * @file            : ticTacToe.js
 * @overview        : To play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the Player 2 is the user. 
                      Player 1 take Random Cell that is the Column and Row.
 * @module          : read-line modules are installed
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 31/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var access = require("../Utility/utility");

function ticTacToe() {
  try {
    var flag = false;
    var arr = access.intializeGame();
    console.log("Player 1 : Computer Symbol : O");
    console.log("Player 2 : Your Symbol : x");

    var count = 1;
    while (count <= 9) {
      arr = access.computerPlayer(arr);
      count++;
      while (count > 4) {
        flag = access.check(arr);
        break;
      }
      if (flag) {
        console.log("Computer is the winner.");
        break;
      } else if (count == 8) {
        console.log("Match drawn");
        break;
      }
      arr = access.userPlayer(arr);
      while (count > 4) {
        flag = access.check(arr);
        break;
      }
      if (flag) {
        console.log("You are the winner!!");
        break;
      }
      count++;
    }
    console.log("Game over");
  } catch (error) {
    console.log(error.message);
  }
}
ticTacToe();
