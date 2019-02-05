/**************************************************************************
 * Execution        : Default node             cmd> node binaryTree.js
 * Purpose          : You are given N nodes, each having unique value ranging from [1, N],
 *                    how many different binary search tree can be created using all of them.
 * @description
 * @file            : binaryTree.js
 * @overview        : To search different binary search tree.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.
 * @since           : 01/02/2019
 ***************************************************************************/
try {
  var readline = require("readline-sync");
  /*
For accessing data from utility file and utilityDataStructure
*/
  var access = require("../Utility/utility");
  var accessDs = require("../Utility/utilityDataStructure");
  var number = readline.questionFloat("Enter the number :");
  var factorial = accessDs.factorization(number);
  var factorial1 = accessDs.factorization(number * 2);
  var factorial2 = accessDs.factorization(number + 1);
  var output = factorial1 / (factorial2 * factorial);
  console.log(output);
} catch (error) {
  console.log(error.message);
}
