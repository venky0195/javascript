
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
