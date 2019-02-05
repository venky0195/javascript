/**************************************************************************
 * Execution        : Default node             cmd> node anagramInTheRange.js 
 * @file            : anagramInTheRange.js
 * @overview        : To store only the numbers in that range that are
                      Anagrams. For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
                      Further store in a 2D Array the numbers that are Anagram and numbers that are not Anagram
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 05/02/2019
 ***************************************************************************/
var utilityDs = require("../Utility/utilityDataStructure");
var utility = require("../Utility/utility");
var take = require("util");
var readline = require("readline-sync");
/**
 * Initialize ranges in an array.
 */
var array = [
  ["0-100 "],
  ["100-200  "],
  ["200-300 "],
  ["300-400 "],
  ["400-500 "],
  ["500-600 "],
  ["600-700 "],
  ["700-800 "],
  ["800-900 "],
  ["900-1000 "]
];
var i = 0;
var j = 1;
var range = 100;
var arr = [];
var arr1 = [];
var arr2 = [];
/**
 * Check for prime numbers in the range 0 to 1000 and split each character, store in an array and sort it
 *
 */
for (let prime = 2; prime <= 1000; prime++) {
  if (utility.isPrime(prime)) {
    /**
     * For prime numbers in the range 0 to 100 only.
     */
    if (prime <= range) {
      var a = "" + prime;
      var b = a.split("");
      b.sort();

      var v = "";
      for (let i = 0; i < b.length; i++) {
        v = v + b[i];
      }
      if (!arr.includes(v)) {
        arr.push(v);
        array[i][j] = prime;
        j++;
      }
    } else {
    /**
     * For prime numbers in the range 100+.
     */
      var a1 = "" + prime;
      var b1 = a1.split("");
      b1.sort();
      var v1 = "";
      for (let i = 0; i < b1.length; i++) {
        v1 = v1 + b[i];
      }
      if (!arr1.includes(v1)) {
        arr1.push(v1);
        j = 1;
        range = range + 100;
        i++;
        array[i][j] = prime;
      }
    }
  }
}
/**
 * To print the numbers which are anagrams and prime in the ranges
 */
var arr = utilityDs.dArray();
/**
 * To print the numbers that are prime and not Anagram present in the given range
 */
console.log(
  "The prime numbers that are not Anagram present in the given range "
);
/**
 * Loop from first index of the array to last,
 * access each index and print it console
 */
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
    take.print(array[i][j] + " ");
  }
  console.log();
}
