/**************************************************************************
 * Execution        : Default node             cmd> node stringPermutations.js
 * Purpose          : To return all permutation of a String using iterative method and Recursion method.
 * @description      
 * @file            : stringPermutations.js
 * @overview        : static functions to return all permutation of a String using iterative method and
                      Recursion method. Check if the arrays returned by two string functions are equal.
 * @module          : read-line modules are installed.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 30/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var access = require("../Utility/utility");
var readline = require("readline-sync");

var valid = false;
/**
 * Ask user to input the string for which permutation has to be found, Validation to accept only strings.
 */
do {
    var string = readline.question("Enter the string")
  if (!isNaN(string)) {
    console.log("Not a valid entry.");
  } else {
    valid = true;
  }
} while (!valid);

/*
 *Invoking stringPermutations function by passing string, from utility.js.
 */
console.log(access.stringPermutations(string));