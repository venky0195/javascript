/**************************************************************************
 * Execution        : Default node             cmd> node hashFunction.js
 * Purpose          : To create a Slot of 10 to store Chain of Numbers that belong to each Slot to
                      efficiently search a number from a given set of number.     
 * @file            : hashFunction.js
 * @overview        : Firstly store the numbers in the Slot. Since there are 10 Numbers divide
                      each number by 11 and the reminder put in the appropriate slot. Create a Chain
                      for each Slot to avoid Collision. If a number searched is found then pop it or else
                      push it. Use Map of Slot Numbers and Ordered LinkedList to solve the problem.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 04/02/2019
 ***************************************************************************/
/**
 * To require the required files.
 */
var access = require("../Utility/utilityDataStructure");
var readline = require("readline-sync");
var take = require("util");
var filestream = require("fs");
var utility = require("../Utility/utility");
/**
 * Function for hashing
 */
function hashing() {
  try {
    /**
     * Get the file, split by space and add it to num variable
     */
    var fileRead = filestream.readFileSync("hashNumbers.txt", "utf8");
    var numArray = fileRead.split(" ");
    var arr = [];
    /**
     * Loop from beginning to the end of array
     * Access each index and find the remainder
     */
    for (let i = 0; i < numArray.length; i++) {
      var n = Number(numArray[i]);
      var remainder = n % 10;
      /**
       * Create a LinkedList object and add the elements
       */
      if (arr[remainder] === undefined) {
        arr[remainder] = new access.LinkedList();
        arr[remainder].add(n);
      } else {
        arr[remainder].add(n);
      }
    }
    /**
     * To print the contents in each slot
     */
    var str = "";
    for (let index = 0; index < 10; index++) {
      take.print(index + " slot: ");
      try {
        console.log(arr[index].printList());
      } catch (err) {
        console.log("empty index");
      }
    }
    console.log();
    var valid = false;
    /**
     * Ask user to input the number, Validation to accept only positive number.
     */
    do {
      var number = readline.question("Enter the number you want to search \n");
      if (isNaN(number) || number < 0) {
        console.log("Enter positive number only greater than zero");
      } else {
        valid = true;
      }
    } while (!valid);
    remainder = Number(number % 10);
    console.log("Remainder is " + remainder);
    /**
     * To check if the given number is present in the file or no.
     * If the number is present, remove the number from file. Else, add it to the appropriate slot in the file.
     */
    if (arr[remainder] === undefined) {
      arr[remainder] = new access.LinkedList();
    }
    if (arr[remainder].search(Number(number))) {
      console.log("The number is present in the file");
      arr[remainder].removeItem(number);
    } else {
      console.log("Number is not in the file");
      arr[remainder].add(number);
    }
    var flag;
    /**
     * To print the result.
     */
    for (let index = 0; index < 10; index++) {
      flag = true;
      take.print(index + " result slot: ");
      try {
        console.log(arr[index].printList());
        str = str + arr[index].printList();
      } catch (err) {
        console.log("Empty index");
      }
    }
    console.log(str);
    utility.fileWrite("hashNumbers.txt", str);

    console.log("\n\n");
  } catch (error) {
    console.log(error.message);
  }
}
hashing();
