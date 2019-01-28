/**************************************************************************
 * Execution        : Default node             cmd> node temperatureConversion.js
 * Purpose          : To convert the given temperature to faranheit or celcius based on user choice.
 * @description
 * 
 * @file            : temperatureConversion.js
 * @overview        : Given the temperature in fahrenheit as input, outputs the temperature in Celsius or viceversa
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 28/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var Access = require('../Utility/utility');
/*
*Invoking temperatureConversion method from utility.js.
*/
Access.temperatureConversion();