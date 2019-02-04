/**************************************************************************
 * Execution        : Default node             cmd> node primeNumbers.js
 * Purpose          : To store the prime numbers of range 0 - 1000 Numbers in a 2D Array     
 * @file            : primeNumbers.js
 * @overview        : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
                      the prime numbers in a 2D Array, the first dimension represents the range 0-100,
                      100-200, and so on. While the second dimension represents the prime numbers in that range.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 04/02/2019
 ***************************************************************************/
var take = require("util");
var utility = require("../Utility/utility");
var utilityDs = require("../Utility/utilityDataStructure")
var primes = [[],[],[],[],[],[],[],[],[],[]];
var initial = 0;
var final = 100;
console.log('Prime Numbers in the given range are :\n');
/*
* Loop from 0 to 10 and stores the prime numbers and stores the values in each index.
*/
for(let index=0 ; index < 10 ; index++){
    primes[index] = utilityDs.isPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;
/*
* To print the prime numbers in the range 0-­100,100­-200, and so on.
*/
for(let index1=0 ; index1<10 ; index1++){
    take.print("[" + "[" +start+ "-" +end+ "]" + " " + "[" + primes[index1] + "]" + "]");
    start = start + 100;
    end = end + 100;
    console.log();
}
console.log("\n");