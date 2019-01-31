/**************************************************************************
 * Execution        : Default node             cmd> node mergeSort.js
 * Purpose          : To to do Merge Sort of list of Strings.
 * @description      
 * @file            : mergeSort.js
 * @overview        : To Merge Sort an array, we divide it into two halves, sort the two halves
                      independently, and then merge the results to sort the full array. To sort a[lo, hi),
                      by using the recursive strategy.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 30/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var access = require("../Utility/utility");
var arr = access.inputArray();
/*
 *Invoking mergeSort function from utility.js.
 */
access.mergeSort(arr);
console.log("Result: ", arr);
