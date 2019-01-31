/**************************************************************************
 * Execution       : Default node             cmd> node stringReplace.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : stringReplace.js
 * @overview        : stringReplace takes the userinput and print it with some sentence.
 * @module          : read-line modules are installed
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/

var access = require('../Utility/utility');
/*
For accessing data from utility file
*/
access.stringReplace(username);
/*
Accessing stringReplace method from utility.js
*/
