/**************************************************************************
 * Execution        : Default node             cmd> node quadratic.js
 * Purpose          : To find the roots of the equation a*x*x + b*x + c.
 * @description
 * 
 * @file            : quadratic.js
 * @overview        : Accesses the user input a,b,c and finds the two roots of x by finding nature of roots using formula
                      delta = b*b - 4*a*c.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 25/01/2019
 ***************************************************************************/
var Access = require('../Utility/utility');
/*
For accessing data from utility file
*/
Access.quadratic();
/*
Accessing quadratic method from utility.js
*/