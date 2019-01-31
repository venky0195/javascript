/**************************************************************************
 * Execution        : Default node             cmd> node windChill.js
 * Purpose          : To print the wind chill by taking two double command-line arguments temperture (t)
 *                    and speed (v).
 * @description
 * 
 * @file            : windChill.js
 * @overview        : Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
                      windchill is calculated by the formula: windspeed = 35.74 + 0.6215t + (0.4275t - 35.75) v ^ 0.16
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 25/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var access = require('../Utility/utility');
/*
Accessing windchill method from utility.js
*/
access.windChill();
