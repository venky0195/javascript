/**************************************************************************
 * Execution        : Default node             cmd> node bubbleSort.js
 * Purpose          : To sort the given numbers using bubble sort method.
 * @description
 * 
 * @file            : bubbleSort.js
 * @overview        : This sorting is comparison-based in which each pair of adjacent elements 
                      is compared and the elements are swapped if they are not in order.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 28/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var access = require('../Utility/utility');
var readline = require('readline-sync');
try {
    var arr = [];
    /**
     * Ask user the size of the array and store elements in the array.
     */
    var size = readline.question("Enter the size of array: ");
    for (let i = 0; i < size; i++) {
        arr[i] = readline.question("Enter the array elements: ");
    }
    /*
     *Invoking bubbleSort method from utility.js if the user input is number only.
     */
    if (!arr.some(isNaN)) {
        access.bubbleSort(arr);
    }
    else {
        console.log("Enter only numbers");
    }
} catch (error) {
    console.log(error.message);

}