/**************************************************************************
 * Execution        : Default node             cmd> node toBinary.js
 * Purpose          : To output the binary (base 2) representation of the decimal number typed as the input.
 * @description      
 * @file            : toBinary.js
 * @overview        : To compute the binary representation of n, we consider the powers of 2 less than or
                      equal to n in decreasing order to determine which belong in the binary decomposition
                      (and therefore correspond to a 1 bit in the binary representation).
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
 *Invoking toBinary function from utility.js.
 */
access.toBinary();