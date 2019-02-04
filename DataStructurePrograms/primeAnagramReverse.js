/**************************************************************************
 * Execution        : Default node             cmd> node primeAnagramReverse.js 
 * @file            : primeAnagramReverse.js
 * @overview        : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using
                      the Linked List and Print the Anagrams in the Reverse Order.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 04/02/2019
 ***************************************************************************/
var take = require("util");
var utility = require("../Utility/utility");
var utilityDs = require("../Utility/utilityDataStructure")
var arr = [];
/**
 * Create a stack object
 */
var stack = new utilityDs.Stack;
/**
 * Add 0 to 1000 prime numbers in a array
 */
for (let i = 0; i <=1000; i++) {
    if (utility.isPrime(i))
        arr.push(i)
}
/**
 * If the prime numbers in the array are anagrams, push it to the stack.
 */
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (utility.isAnagram(arr[i], arr[j])) {
            stack.push(Number(arr[i]))
            stack.push(Number(arr[j]))
        }
    }
}
/**
 * Print the anagrams in the range in reverse order. i.e, contents in the stack.
 */
var result = stack.print()
console.log(("Anagrams in reverse order :"));
console.log(result + "\n");
