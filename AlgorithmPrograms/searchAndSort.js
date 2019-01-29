/**************************************************************************
 * Execution        : Default node             cmd> node searchAndSort.js
 * Purpose          : To search and sort by calling static utility searching and sorting methods.
 * @description
 * 
 * @file            : searchAndSort.js
 * @overview        : To output the Search and Sorted List and print elapsed time performance in descending order.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 29/01/2019
 ***************************************************************************/
try {
  var readline = require("readline-sync");
  var Access = require("../Utility/utility");
/**
 * Accepting user input for integer values
 */
  var intArray = [];
  var iSize = readline.question("Enter the size of array: ");
  for (let i = 0; i < iSize; i++) {
    intArray[i] = readline.question("Enter the array elements(Only integers): ");
  }
  var find = readline.question("Enter element to search");
/**
 * Accepting user input for string values
 */
  var stringArray = [];
  var sSize = readline.question("Enter the size of array: ");
  for (let i = 0; i < sSize; i++) {
    stringArray[i] = readline.question("Enter the array elements(Only String): ");
  }
  var search = readline.question("Enter element to search: ");
  /*
   *Invoking search and sort functions from utility.js.
   */
  console.log("result for binary search for integers: " +Access.binarySearchInt(intArray, find) +"\n");

  console.log("result for binary search for Strings: " +Access.binarySearchString(stringArray, search) +"\n");
  
  console.log("result for insertion sort for integers: ");
  Access.insertionSortInt(intArray);
  
  console.log("result for insertion sort for strings: ");
  Access.insertionSortString(stringArray);
  
  console.log("result for bubble sort for integers: ");
  Access.bubbleSortInt(intArray);
  
  console.log("result for bubble sort for strings: ");
  Access.bubbleSortInt(stringArray);
} catch (error) {
  console.log(error.message);
}
