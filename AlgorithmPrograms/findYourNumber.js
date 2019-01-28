/**************************************************************************
 * Execution        : Default node             cmd> node findYourNumber.js
 * Purpose          : To calculate the monthly payments you would have to make over Y years to pay off a P principal loan amount 
                      at R percent interest compounded monthly.
 * @description     : takes a command-line argument N, asks you to think of a number between 0 and N-1, where N = 2^n, and always
 *                    guesses the answer with n questions.
 * 
 * @file            : findYourNumber.js
 * @overview        : reads command line argument, calculates high, low, mid and with the help
 *                    of binary search finds the number by asking series of questions.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 28/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var Access = require("../Utility/utility");
/**
 * reading range from command line argument and storing it in a variable.
 */
var high = process.argv[2];
var low = 0;
high = high-1;
/*
 *Invoking findYourNumber function from utility.js.
 */
console.log("The Number is : "+Access.findYourNumber(low, high));
