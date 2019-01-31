/**************************************************************************
 * Execution        : Default node             cmd> node dayOfWeek.js
 * Purpose          : To find the Day of week by using formula and taking command line arguments inputs.
 * @description     : Takes a command-line argument N, asks you to think of a number between 0 and N-1, where N = 2^n, and always
 *                    guesses the answer with n questions.
 * 
 * @file            : dayOfWeek.js
 * @overview        : reads command line argument, calculates the day by using formulas.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 29/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var access = require("../Utility/utility");
/*
 *Invoking dayOfWeek function from utility.js.
 */
console.log("The Day is : "+access.dayOfWeek());
