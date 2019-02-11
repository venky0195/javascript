module.exports = {
  /**
   * Function to calculate the value of each item in inventory
   * @param {inventoryObject} data
   */
  inventory(data) {
    try {
      var rice = data.rice;
      var wheat = data.wheat;
      var pulses = data.pulses;
      var Rname = 0;
      var Wname = 0;
      var Pname = 0;

      var valueOfRice = 0;
      var valueOfWheat = 0;
      var valueOfPulses = 0;
      /**
       * Loop all the items in the inventory using forin loop and calculate the values.
       */
      for (let key in rice) {
        var num = rice[key].weight * rice[key].price;
        console.log("cost of " + rice[Rname].riceName + " is: " + num + "₹");
        Rname++;
        valueOfRice = valueOfRice + num;
      }
      console.log("\nTotal value of rice : " + valueOfRice + "₹\n");

      for (let key in wheat) {
        var num = wheat[key].weight * wheat[key].price;
        console.log("cost of " + wheat[Wname].wheatName + " is: " + num + "₹");
        Wname++;
        valueOfWheat = valueOfWheat + num;
      }
      console.log("\nTotal value of wheat : " + valueOfWheat + "₹\n");

      for (let key in pulses) {
        var num = pulses[key].weight * pulses[key].price;
        console.log("cost of " + pulses[Pname].pulseName + " is: " + num + "₹");
        Pname++;
        valueOfPulses = valueOfPulses + num;
      }
      console.log("\nTotal value of pulses : " + valueOfPulses + "₹\n");
    } catch (error) {
      console.log(error.message);
    }
  },
  /**
   * Function to replace name, fullName, phoneNumber, date with the proper value.
   * @param {string} name
   * @param {string} fullName
   * @param {10 digit number} mobileNumber
   */
  regex(name, fullName, mobileNumber) {
    var readLine = require("readline-sync");
    var nameFormat = /[a-zA-Z]/;
    /**
     * condition to check whether the input is string.
     */
    while (!nameFormat.test(name) || !nameFormat.test(fullName)) {
      name = readLine.question("Enter your name(alphabets only) : ");
      fullName = readLine.question("Enter your full name(alphabets only) : ");
    }
    /**
     * condition to check whether the input is 10 digit number.
     */
    while (isNaN(mobileNumber) || mobileNumber.length != 10) {
      mobileNumber = readLine.question(
        "\nEnter valid phone number(10 digits only) : "
      );
    }

    var fileRead = require("fs");
    var line = fileRead.readFileSync("regex.txt", "utf8");
    var date = new Date();
    date = date.toLocaleDateString();
    /**
     * Replacing name, full name, mobileNumebr, date with proper values passed using regular expressions.
     */
    line = line.replace(/<<name>>/g, name);
    line = line.replace(/<<full name>>/g, fullName);
    line = line.replace(/xxxxxxxxxx/g, mobileNumber);
    line = line.replace(/01-01-2016/g, date);

    return line;
  },
  /**
   * Program to create a deck of cards having suit ("Clubs","Diamonds", "Hearts", "Spades") &
   * Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace").
   * Returns the deck of card in a array
   */
  deckOfCards() {
    try {
      var suits = ["♣", "♦", "♥", "♠"];
      var ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ];
      /**
       * To calculate total number of cards
       */
      var totalCards = suits.length * ranks.length;
      /**
       * To create a deck of array
       */
      var cardArray = [];
      for (let currentSuit = 0; currentSuit < suits.length; currentSuit++) {
        for (let currentRank = 0; currentRank < ranks.length; currentRank++) {
          var temp = "";
          cardArray.push(temp + ranks[currentRank] + suits[currentSuit]);
        }
      }
      /**
       * To shuffle the deck
       */
      for (let shuffle = 0; shuffle < totalCards; shuffle++) {
        var num = Math.floor(Math.random() * totalCards);
        /**
         * Performing swapping
         */
        var temp = cardArray[shuffle];
        cardArray[shuffle] = cardArray[num];
        cardArray[num] = temp;
      }
      return cardArray;
    } catch (error) {
      console.log(error.message);
    }
  }
};
