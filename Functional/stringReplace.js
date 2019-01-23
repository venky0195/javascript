
var Access = require('../Utility/utility');   
/**
 * 
 */
var read = require('readline-sync');           // for user input
var username=read.question("Enter your name : ");
Access.stringReplace(username);         //Accessing stringReplace method from utility.js
