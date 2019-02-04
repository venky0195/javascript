/**************************************************************************
 * Execution        : Default node             cmd> node primeAnagramQueue.js 
 * @file            : primeAnagramQueue.js
 * @overview        : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using
                      the Linked List and Print the Anagrams from the Queue.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 04/02/2019
 ***************************************************************************/
var utilityDs = require('../Utility/utilityDataStructure');
var utility = require('../Utility/utility')
var readline = require('readline-sync');
var arr=[];
/**
 * Create a queue object
 */
var queue = new utilityDs.LLQueue;
/**
 * Add 0 to 1000 prime numbers in a array
 */
for (let i =0; i<1000; i++) {
    if (utility.isPrime(i))
        arr.push(i)
}
/**
 * If the prime numbers in the array are anagrams, enqueue it.
 */
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (utility.isAnagram(arr[i], arr[j])) {
            queue.enQueue(Number(arr[i]))
            queue.enQueue(Number(arr[j]))
        }
    }
}
/**
 * Print the anagrams in the range. i.e, contents in the queue.
 */
  console.log(" Anagrams are :"+queue.print());