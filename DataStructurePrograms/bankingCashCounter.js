/**************************************************************************
 * Execution        : Default node             cmd> node bankingCashCounter.js
 * Purpose          : To enqueue and dequeue people to either deposit
                      or withdraw money and maintain the cash balance
 * @description      
 * @file            : bankingCashCounter.js
 * @overview        : Create a Program which creates Banking Cash Counter where people
                      come in to deposit Cash and withdraw Cash. Have an input panel to add people
                      to Queue to either deposit or withdraw money and dequeue the people. Maintain the Cash Balance.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 01/02/2019
 ***************************************************************************/
var readline = require("readline-sync");
/*
For accessing data from utility file and utilityDataStructure
*/
var access = require("../Utility/utility");
var accessDs = require("../Utility/utilityDataStructure");

function Queue() {
  try {
    var queue = new accessDs.Queue();
    var minBal = 4000;
    var balan = 4000;
    var set = [];
    var flag = true;
    var count = 0;
    var valid = false;
    /**
     * Ask user to input  total number of people to be in queue, Validation to accept only valid numbers.
     */
    do {
      var size = readline.question(
        "Enter the total number of people to be in queue :"
      );
      if (isNaN(size) || size < 0) {
        console.log("Not a valid entry.");
      } else {
        valid = true;
      }
    } while (!valid);

    if (size > 0) {
      /**
       * Loop the number of size of people to deposit and withdraw amount.
       */
      even: for (let i = 1; i < size; i++) {
        var input = readline.question(
          "\nEnter 1 deposit amount :\nEnter 2 to withdraw amount :"
        );
        if (input == 1) {
          console.log("\nBalance left in the bank: " + balan);
          var amount = readline.questionFloat(
            "Enter the total amount to deposit :"
          );
          var set = queue.enQueue(Number(amount));
          balan = balan + amount;
          flag = true;
        } else if (input == 2) {
          console.log("\nBalance left in the bank: " + balan);
          var amount = readline.questionFloat(
            "Enter the total amount to be withdraw :"
          );
          balan = balan - amount;
          if (amount > balan) {
            console.log(
              "Minimum balance (₹" +
                minBal +
                ") is not maintained. Please comeback with lesser amount"
            );
            return;
          }
          var get = queue.enQueue(Number(-amount));
          flag = true;
        } else {
          console.log("Make sure that you have entered correct key ");
          flag = false;
          return;
        }
      }
    } else {
      console.log("Invalid input ");
      return;
    }
    if (flag) {
      var add = 0;
      for (let i = 1; i < size; i++) {
        add = add + queue.deQueue();
      }
      console.log(add);
      var totalamount = minBal + add;
      console.log("Total amount left in bank is :" + totalamount);
      if (totalamount < minBal) {
        console.log("Minimum cash is not maintained in bank:");
      } else {
        console.log("Minimum cash is maintained in bank");
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}
Queue();
