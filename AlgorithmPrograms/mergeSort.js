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
 * @since           : 29/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var Access = require("../Utility/utility");
var arr=Access.inputArray();
/*
 *Invoking mergeSort function from utility.js.
 */
Access.mergeSort(arr);
 