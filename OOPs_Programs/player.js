class Player {
  constructor(cards) {
    this.cards = cards;
  }
  /**
   * Function to sort the cards.
   */
  sortedCards() {
    var sortedCards = [];
    var access = require("../Utility/utility");
    sortedCards = access.bubbleSortString(this.cards);
    return sortedCards;
  }
}
module.exports = { Player };
