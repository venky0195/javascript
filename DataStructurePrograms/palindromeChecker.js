/**************************************************************************
 * Execution        : Default node             cmd> node palindromeChecker.js
 * Purpose          : To enqueue and dequeue people to either deposit
                      or withdraw money and maintain the cash balance
 * @description      
 * @file            : palindromeChecker.js
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
function palindromeCheck() {
  try {
    var deque = new accessDs.Deque();
    /**
     * validation to check if the given string is not a number.
     */
    var flag = false;
    do {
      var word = readline.question("Enter the string :");
      if (!isNaN(word)) {
        console.log("Not a valid entry");
      } else {
        flag = true;
      }
    } while (!flag);
    /**
     * Split the word and add it to array.
     */
    var arr = word.split("");
    /**
     * loop till the end of the array and add it to the front of the deque.
     */
    for (let i = 0; i < arr.length; i++) {
      deque.addFront(arr[i]);
    }
    var string1 = "";
    /**
     * Loop till the end and remove from front of the deque and concat it and store it in a variable.
     */
    for (let i = 0; i < arr.length; i++) {
      string1 = string1 + "" + deque.removeFront();
    }
    console.log(string1);

    var string2 = "";
    for (let i = 0; i < arr.length; i++) {
      deque.addFront(arr[i]);
    }
    /**
     * Loop till the end and remove from rear of the deque and concat it and store it in another variable.
     */
    for (let i = 0; i < arr.length; i++) {
      string2 = string2 + "" + deque.removeRear();
    }
    console.log(string2);
    /**
     * Compare string1 with string2 to show user whether the string is a palindrome or not.
     */
    if (string1 == string2) {
      console.log("Entered string is a palindrome ");
    } else {
      console.log("Entered string is not a palindrome ");
    }
  } catch (error) {
    console.log(error.message);
  }
}
palindromeCheck();
