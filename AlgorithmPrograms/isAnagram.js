/**************************************************************************
 * Execution        : Default node             cmd> node isAnagram.js
 * Purpose          : To measure the time that elapses between the start and end clicks.
 * @description
 * 
 * @file            : isAnagram.js
 * @overview        : A program for finding out if the user inputs are anagram or not.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 27/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var Access = require('../Utility/utility');
var readline = require('readline-sync');
/**
 * Ask user to input two strings and store it in word1 and word2 variables respectively
*/
var word1 = readline.question("Enter the fisrt word(Case insensitive): ");
var word2 = readline.question("Enter the second word(Case insesnsitive): ")
/*
Accessing isAnagram method from utility.js
*/ 
console.log(Access.isAnagram(word1, word2));
