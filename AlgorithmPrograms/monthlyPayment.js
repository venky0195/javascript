/**************************************************************************
 * Execution        : Default node             cmd> node monthlyPayment.js
 * Purpose          : To calculate the monthly payments you would have to make over Y years to pay off a P principal loan amount 
        *             at R percent interest compounded monthly.
 * @description
 * 
 * @file            : monthlyPayment.js
 * @overview        : Static Function to calculate ​ monthly Payment that reads in three command-line arguments P, Y, and R
                      and calculates the monthly payments you would have to make over Y years to pay off a P principal loan 
                      amount at R percent interest compounded monthly.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 28/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var access = require("../Utility/utility");
/*
 *Invoking monthlyPayment function from utility.js.
 */
access.monthlyPayment();
