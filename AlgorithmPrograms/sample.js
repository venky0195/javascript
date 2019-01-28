var readline = require("readline-sync");
var Access = require('../Utility/utility');

var arr=[];
var size = readline.question("Enter the size of array: ");
    for (let i = 0; i < size; i++) {
      arr[i] = readline.question("Enter the array elements: ");
    }
var find = readline.question("Enter element to search")
/*
*Invoking binarySearchInt function from utility.js.
*/
console.log(Access.binarySearchInt(arr, find));