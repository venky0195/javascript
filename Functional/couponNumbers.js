/**************************************************************************
 * Execution        : Default node             cmd> node couponNumbers.js
 * Purpose          : To generate random number and to process distinct coupons.
 * @description
 * 
 * @file            : couponNumbers.js
 * @overview        : couponNumbers takes the number of coupon the user wants and generates the
                      random number and checks if the number isn't present in the array and pushes it to the array.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 25/01/2019
 ***************************************************************************/
var Access = require('../Utility/utility');
/*
For accessing data from utility file
*/
Access.couponNumbers();
/*
Accessing couponNumbers method from utility.js
*/