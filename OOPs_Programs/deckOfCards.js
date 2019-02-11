/**************************************************************************
 * Execution        : Default node             cmd> node deckOfCards.js
 * @file            : deckOfCards.js
 * @overview        : To initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades")
 *                    & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
 *                    Shuffle the cards using Random method and then distribute 9 Cards to 4 Players
 *                    and Print the Cards the received by the 4 Players using 2D Array...
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.
 * @since           : 09/02/2019
 ***************************************************************************/
var utilityOops = require("../Utility/utilityOOPs");
function main() {
  try {
    /**
     * To get the deck of cards
     */
    var cardArray = utilityOops.deckOfCards();
    /**
     *To distribute 9 Cards to 4 Players
     */
    var arr = [[], [], [], []];
    var noOfCards = 0;
    for (let players = 0; players < 4; players++) {
      for (let cards = 0; cards < 9; cards++) {
        arr[players][cards] = cardArray[cards + noOfCards];
      }
      noOfCards = noOfCards + 9;
    }
    console.log();
    /**
     * To print shuffled deck of cards of each player
     */
    for (let player = 0; player < arr.length; player++) {
      console.log(
        "Deck of cards of player " +
          (player + 1) +
          " is: " +
          " [" +
          arr[player] +
          "]"
      );
    }
    console.log();
  } catch (error) {
    console.log(error.message);
  }
}
main();
