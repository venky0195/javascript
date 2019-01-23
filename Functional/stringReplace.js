/*
 *  @Purpose        : User Input and Replace String Template “Hello <<UserName>>, How are you?”
 *  @file           : stringReplace.js
 *  @overview       : stringReplace takes the userinput and print it with some sentence.
 *  @author         : VENKATESH G.
 *  @version        : 1.0.
 *  */

var Access = require('../Utility/utility');   
/*
For accessing data from utility file
*/
var read = require('readline-sync');
/*
for user input
*/      
var username=read.question("Enter your name : ");
Access.stringReplace(username);
/*
Accessing stringReplace method from utility.js
*/         
