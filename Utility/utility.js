/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js
 *  Purpose         : TO deploy all the business logic.
 *
 *  @description
 *
 *  @file           : utility.js
 *  @overview       : All the business logic are coded here.
 *  @module         : read-line modules are installed
 *  @author         : VENKATESH G   <ven.venky08@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/

/**
 * @purpose     : To accept user input value
 * @description : invoke this whenever we want take input from user
 */
var readline = require("readline-sync");

module.exports = {
  /**
   * @purpose   : To accept array elements from user
   */
  inputArray() {
    var arr = [];
    /**
     * Ask user the size of the array and store elements in the array.
     */
    var size = readline.question("Enter the size of array: ");
    for (let i = 0; i < size; i++) {
      arr[i] = readline.question("Enter the array elements: ");
    }
    return arr;
  },
  //Functional Programs
  /*/************************************** StringReplace *******************************************
    * @Purpose     : Replacing <<UserName>> with userinput and print the string. 
                     Ensuring username with minimum 3 characters and only alphabets,
                     
    * @description : Declaring the function and passing the userinput as argument.
    * @function    : stringReplace function takes the userinput and replaces <<UserName>>.
    */
  stringReplace() {
    try {
      // We specify the format in which user has to provide the input
      var format = /[a-zA-Z]/;
      /*
            for user input
            */
      var username = read.question("Enter your name : ");

      //condition to check whether the input is in the given format and minimum characters of 3.

      if (username.length >= 3 && format.test(username)) {
        var input = "Hello <<UserName>>, How are you?";
        //searches for <<UserName>> in the program and replaces it with the input
        var output = input.replace(/<<UserName>>/g, username);
        console.log(output);
      } else {
        console.log("Please enter characters more than 3, only alphabets");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** FlipCoin ********************************************
     * @purpose     : By using random function, flip the coin the number of times from user input
                      and print the percentage of head vs tails.
     * @description : Declaring a function and passing the userinput for flipping the coin
                      number of times.
     * @function    : Flipcoin takes the number of times to flip coin and print the percentage of
                      head and tail
    */
  flipCoin() {
    try {
      /**
       * Initialise Head and Tail to zero
       */

      var head = 0;
      var tail = 0;

      /**
       * Accept the user input and store it in flip variable
       */

      var flip = readline.question(
        "Enter the number of times to flip the coin "
      );

      /**
       * Condition to check whether the given number is positive number.
       * For loop for generating the random number up-to number of flip.*/

      if (flip > 0 && !isNaN(flip)) {
        for (let i = 0; i < flip; i++) {
          //Math.random function returns random number. Store it in rn variable

          var rn = Math.random();

          // if random number is lesser than 0.5, increament the tail count.

          if (rn < 0.5) {
            tail++;
          }

          // if the random number is greater than 0.5, increment the head count.
          else {
            head++;
          }
        }
        //To find the percentage of head and tail and print it.
        var res = (head / flip) * 100;
        console.log("Percentage of Head is " + res + "%");
        var res1 = (tail / flip) * 100;
        console.log("Percentage of tail is " + res1 + "%");
      } else {
        /**
         * If the input value is not a number or not positive, Show user a message.`
         */
        console.log("Enter positive number only");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** LeapYear ********************************************
   * @purpose     : To determine whether the given number is leap year or not.
   * @description : Declaring a function and accepting the userinput and determining whether the given number is leap year or not
   * @function    : leapYear takes the year as input, checks if it's 4 digit and prints whether it is leap year or not.
   */
  leapYear() {
    try {
      var year = 0000;
      /**
       * Accept user input.
       */
      var year = readline.question("Enter the year in YYYY format: ");
      /**
       * Check if the user input is of YYYY and only positive number
       */
      if ((year.length = 4 && !isNaN(year) && year > 0)) {
        /**
         *condition to check whether the number is leap year or not
         */
        if (year % 4 == 0 || year % 400 == 0 || year % 100 == 0) {
          console.log(year + " is leap year");
        } else {
          console.log(year + " is not a leap year");
        }
      } else {
        /**
         * If the given value is not a 4 digit number or not positive, Show user a message.`
         */
        console.log("Enter year in the format YYYY");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** PowerOfTwo ********************************************
    * @purpose     : To generate the values of power of 2 upto user input.
    * @description : This program takes a command-line argument N and prints a table of the
                     powers of 2 that are less than or equal to 2^N.
    * @function    : Function checks the given number is less then 31, if it's less than 31, then it prints
                     the values of two's power.               
    */
  power() {
    try {
      /**
       * process.argv is an array containing the command line arguments.
       * The first element will be 'node'.
       * The second element will be the name of the JavaScript file.
       * The next elements will be any additional command line arguments.
       */
      var pow = process.argv[2];
      /**
       * Condition to chek if the command line argument is less than 31 and a number
       */
      if (pow >= 0 && pow <= 31 && !isNaN(pow)) {
        /**
         * Any number, if its power is 0, print 1.
         */
        if (pow == 0) {
          console.log(1);
        }
        //loop to generate two's power value upto given user input
        for (let i = 1; i <= pow; i++) {
          console.log(Math.pow(2, i));
        }
      } else {
        console.log("Enter number less than 32, greater than 0");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** HarmonicNumber ********************************************
   * @purpose     : To generate the harmonic numbers upto the user input.
   * @description : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N.
   * @function    : Function harmonicNumber takes user input and adds it to 1/number of times of user input.
   */

  harmonicNumber() {
    try {
      var num = readline.question("Enter Nth number: ");
      var sum = 0;
      // condition to check whether the number is not zero.
      if (num != 0 && !isNaN(num)) {
        // loop to generate the Nth Harmonic value upto user input
        for (let i = 1; i <= num; i++) {
          sum += 1.0 / i;
        }
        console.log("N th Harmonic number is " + sum);
      } else {
        console.log("Please enter non zero number");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** Factors ********************************************
   * @purpose     : To find out the prime factorization of the given number.
   * @description : Computes the prime factorization of N using brute force.
   * @function    : Function factorization accepts user input, loops over it till the input,
   *                if the number is divisible by each number, print the number.
   */
  factorization() {
    try {
      /**
       * Accept the user input and store it in number variable
       */
      var number = readline.question("Enter the number: ");
      /**
       * Initialize i variable to 2 and loop over it till the number and increment each time
       */
      for (let i = 2; i * i < number; i++) {
        /**
         * If the number is divisible by i, print i.
         */
        while (number % i == 0) {
          console.log(i);
          number = number / i;
        }
        /**
         * If the given number is greater than 2, after the for loop is executed, it prints the number
         */
      }
      if (number > 2) {
        console.log(number);
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** Gambler ********************************************
    * @purpose     : To print the number of wins and percentage of win and loss.
    * @description : Simulates a gambler who start with $stake and place fair $1 bets until
                     he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
                     times he/she wins and the number of bets he/she makes. Run the experiment N
                     times, averages the results, and prints them out.
    * @function    : Function gambler takes stake, goal amount as input. If the random number is greater than 0.5,
                     increment win and stake. else, increment loss and decrement the stake. Prints the 
                     percentage win and loss.
    */
  gambler() {
    try {
      /**
       * Initailize win, loss and times to zero.
       */
      var win = 0;
      var loss = 0;
      var times = 0;
      /**
       * Accept user input for stake amount and goal amount
       */
      var stake = readline.question("Enter the initial stake amount: ");
      var goal = readline.question("Enter the goal amount to be achieved: ");
      /**
       * Condition to check whether the input given is a number,
       * stake amount is greater than goal amount.
       */
      if (stake > 0 && stake < goal && !isNaN(stake, goal)) {
        /**
         * loop over till the stake is less than goal and more than 0
         */
        while (stake > 0 && stake < goal) {
          /**
           * If random value generated by Math.random function is greater than 0.5,
           * increment win and stake.
           */
          if (Math.random() > 0.5) {
            win++;
            stake++;
          } else {
            loss++;
            stake--;
          }
          /**
           * Keep a count of number of times the loop is executed to keep a track of number of bets
           */
          times++;
        }
        console.log("Number of bets he/she makes: " + times);
        console.log("Number of wins: " + win);

        /**
         * To find out the win and loss percentage, divide win by number of times of bet.
         */
        wp = (win / times) * 100;
        lp = (loss / times) * 100;

        console.log("Win percentage: " + wp);
        console.log("loss percentage: " + lp);
      } else {
        console.log(
          "**Stake amount should be less than goal amount**  **Input only numbers**"
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** Coupon Numbers ********************************************
    * @purpose     : To generate random number and to process distinct coupons.
    * @description : Given N distinct Coupon Numbers, how many random numbers do you
                     need to generate distinct coupon number? This program simulates this random
                     process.
    * @function    : function couponNumbers takes the number of coupon the user wants and generates the
                     random number and checks if the number isn't present in the array and pushes it to the array.
    */
  couponNumbers() {
    try {
      var arr = [];
      var n = 0;
      /**
       * Ask user to enter no of distinct coupon he/she wants.
       */
      var number = readline.question("Enter the distinct coupon you want: ");
      /**
       * Generate random number upto the user wants.
       */
      while (n < number) {
        /**
         * Generate random number and round off and store it in randomNum variable
         */
        var randomNum = Math.round(Math.random() * 555555);
        /**
         * Condition to check whether the randomNum is present in the array.
         * If not, push the random number to array
         */
        if (!arr.includes(randomNum)) {
          arr.push(randomNum);
        }
        n++;
      }
      console.log("Distinct coupons are: " + arr);
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** Distance ********************************************
   * @purpose     : To print the Euclidean distance from the point (x, y) to the origin (0, 0).
   * @description : Using Math.power function calculate the Euclidean distance by taking two integer
   *                command-line arguments x and y from the point (x, y) to the origin (0, 0).
   * @function    : Accesses command line arguments and calculates the Euclidian distance
   *                by using Math.power function.
   */

  distance() {
    try {
      var x = process.argv[2];
      var y = process.argv[3];

      var distance = Math.sqrt(x * x + y * y);

      console.log(
        "Euclidean distance from the point (x, y) to the origin (0, 0) is : " +
          distance
      );
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** Quadratic ********************************************
    * @purpose     : To find the roots of the equation a*x*x + b*x + c.
    * @description : Program to find the roots of the equation a*x*x + b*x + c by using formula b*b - 4*a*c.
    * @function    : Accesses the user input a,b,c and finds the two roots of x by finding nature of roots using formula
                     delta = b*b - 4*a*c.
    */
  quadratic() {
    try {
      /**
       * Accepting user input a,b,c from user and storing it in variables a,b,c respectively.
       */
      var a = readline.question("Enter the value of a: ");
      var b = readline.question("Enter the value of b: ");
      var c = readline.question("Enter the value of c: ");
      /**
       * Condition to check if the input is digit or not
       */
      if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        /**
         * Formula to find out nature of the roots.
         */
        var delta = b * b - 4 * a * c;
        /**
         *Condition for real and different roots
         */
        if (delta > 0) {
          console.log("Roots are real and distinct");
          /**
           * Formula to find out roots of the equation
           */
          var root1 = (-b + Math.sqrt(delta)) / (2 * a);
          var root2 = (-b - Math.sqrt(delta)) / (2 * a);

          console.log("First root " + root1);
          console.log("Second root " + root2);
        } else if (delta == 0) {
          /**
           *Condition for real and equal roots
           */
          console.log("Roots are real and equal");
          /**
           * Formula to find out roots of the equation
           */
          var root1 = (root2 = -b / (2 * a));

          console.log(root1);
        } else {
          /**
           * If roots are not real
           */
          console.log("Roots are complex");
          root1 = root2 = -b / (2 * a);
          /**
           * Formula to find imaginary part
           */
          var imaginary = Math.sqrt(-delta) / (2 * a);
          console.log(
            "Root1 = " +
              root1 +
              " + i" +
              imaginary +
              " Root2 = " +
              root2 +
              " - i" +
              imaginary
          );
        }
      } else {
        console.log("Please enter only digits");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** WindChill ********************************************************
    * @purpose     : To print the wind chill by taking two double command-line arguments temperature(t) and speed(v)
    * @description : Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
                     the National Weather Service defines the effective temperature (the wind chill) to be:
                     w = 35.74 + 0.6215t + (0.4275t - 35.75) v ^ 0.16.
    * @function    : Takes two double command-line arguments temperature(t) and wind speed(v).
                     Using formula, finds out the wind chill and prints it.
    */
  windChill() {
    try {
      /**
             * Accessing command line arguments and storing the first argument as temperature 
               and second argument as speed.
             */
      var temp = process.argv[2];
      var speed = process.argv[3];
      /**
       * To get convert the temperature to absolute value, we use Math.abs function.
       */
      temp = Math.abs(temp);
      /**
       * Validate if the temperature(t) is more than 50 in absolute value.
       * Or, speed(v) is larger than 120 or lesser than 3 and input is only in numbers.
       */
      if (
        !isNaN(temp) &&
        !isNaN(speed) &&
        temp < 50 &&
        (speed < 120 && speed > 3)
      ) {
        /**
         * Formula to find out windchill provided by National Weather Service
         */
        var windchill =
          35.74 +
          0.6215 * temp +
          (0.4275 * temp - 35.75) * Math.pow(speed, 0.16);
        console.log("Wind chill  = " + windchill);
      } else {
        console.log(
          "Enter temperature value less than 50, speed in the range 3 to 120 in numbers"
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** Sum of three integers adds to zero **********************************
    * @purpose     : To find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
    * @description : A program with cubic running time. Read in N integers and counts the
                     number of triples that sum to exactly 0
    * @function    : Takes N number of integers, and N integer input array, using loop and condition, 
                     counts the number of distinct triplets prints it.
    */
  triplets() {
    try {
      /**
       * Initialize count variable to zero in the beginning
       */
      var count = 0;
      /**
       * Set the flag variable to true initially
       */
      var flag = true;
      /**
       * Ask user the size of array and store it in size variable.
       */
      var size = readline.question(
        "Enter the number of integers you wish to add in the array: "
      );
      /**
       * Initialize empty array
       */
      var inputarray = [];
      /**
       * Loop from 0 to user defined size and add the input elements to the empty array.
       */

      for (let a = 0; a < size; a++) {
        inputarray[a] = readline.question("Enter element " + (a + 1) + "--->");
      }
      /**
       * Printing array elements.
       */
      console.log("Given array is: [" + inputarray + "]");
      /**
       * Loop to check the sum of three distinct numbers in array results to zero
       */
      for (let i = 0; i < size - 2; i++) {
        for (let j = i + 1; j < size - 1; j++) {
          for (let k = j + 1; k < size; k++) {
            /**
             * Condition to check sum of 3 integers is 0.
             * Print the triplets
             * If condition passes, increment count and set flag to false.
             */
            if (
              Number(inputarray[i]) +
                Number(inputarray[j]) +
                Number(inputarray[k]) ==
              0
            ) {
              console.log(
                "Distinct triplets are: " +
                  inputarray[i] +
                  " " +
                  inputarray[j] +
                  " " +
                  inputarray[k]
              );
              count++;
              flag = false;
            }
          }
        }
      }
      /**
       * Print the number of distinct triplets
       */
      console.log("Number of distinct triplets: " + count);
      /**
       * If there are no distinct triplets, flag will be true. Show message
       */
      if (flag == true) {
        console.log("Triplets does not exist");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** StopWatch *********************************************************
   * @purpose     : To measure the time that elapses between the start and end clicks.
   * @description : A program for measuring the time that elapses between the start and end clicks by
   *                taking input to start the stopwatch and stop the stopwatch.
   * @function    : Function stopWatch takes input to start and stop the stopWatch, calculates the elapsed
   *                time and prints it.
   */
  stopWatch() {
    try {
      /**
       * Ask user to start the timer
       */
      var temp = readline.question("Press enter to start ");
      // record start time
      var startTime = new Date();
      /**
       * Ask user to stop the timer
       */
      var temp1 = readline.question("Press enter to stop ");
      /**
       * later record end time
       */
      var endTime = new Date();
      /**
       * timeDifference will be in milliseconds
       */
      var timeDiff = endTime - startTime;
      /*
       *strip the milliseconds
       */
      timeDiff /= 1000;
      /*
       *get seconds
       */
      var seconds = Math.round(timeDiff);
      console.log(seconds + " seconds");
    } catch (error) {
      console.log(error.message);
    }
  },
  /************************************** 2D Array *********************************************************
    * @purpose     : To create and print 2 dimensional array in memory to read in M rows and N columns
    * @description : A library for reading in 2D arrays of integers, doubles, or booleans from
                     standard input and printing them out to standard output.
    * @function    : Function accesses the user input to get the rows and columns, adds the elements to the 
                     array and prints it in 2 dimension.
    */
  twoArray() {
    try {
      /**
       * Initialize an empty array
       */
      var arr = [];
      /**
       * Ask user to input the rows and columns
       */
      var rows = readline.question("Enter the number of rows: ");
      var columns = readline.question("Enter the number of columns: ");
      /**
       * Loop till rows is equal to user input and push it.
       */
      for (let i = 0; i < rows; i++) {
        arr.push([]);
        /**
         * Loop till columns is equal to user input.
         */
        for (let j = 0; j < columns; j++) {
          /**
           * Ask user to input the values and store it in element variable.
           */
          var element = readline.question("Enter input: ");
          arr[i][j] = element;
        }
      }
      console.log(arr);
    } catch (error) {
      console.log(error.message);
    }
  },
  //Algorithm Programs
  /*************************************** Anagram *******************************************
    * @Purpose     :  To take 2 string inputs and check for anagrams.                     
    * @description :  One string is an anagram of another if the second is simply a rearrangement of the first.
                      For example, 'heart' and 'earth' are anagrams...
    * @function    :  isAnagram function accepts 2 userinput, converts input to string, splits the string and stores it in array, sorts the array, 
                      joins back to return the string. and checks for anagram.
    * @parameter   :  isAnagram accepts two inputs. Only alphabets and letters.                 
    */
  isAnagram(word1, word2) {
    try {
      var format = /[a-zA-Z0-9]/;
      var result;
      /**
       * Condition to check if the input is only characters or numbers
       */
      if (format.test(word1) && format.test(word2)) {
        /**
         * Condition to check if the length of the first word is equal to the second word.
         * If the condition passes, it means they can not be permutations of each other. Store false in the result.
         */
        if (word1.length !== word2.length) {
          result = false;
        }
        /**
         * Split the string into an array,
         * Sort the array alphabetically,
         * Join the elements of an array into a string, and store the sorted string in a variable
         */
        var sortWord1 = word1
          .toString()
          .split("")
          .sort()
          .join("");
        var sortWord2 = word2
          .toString()
          .split("")
          .sort()
          .join("");
        /**
         * If sortWord1 string is equal to sortWord2, stores true in result, else stores false in result.
         */
        result = sortWord1 === sortWord2;
        /**
         * condition to check the result is true and to print if the given words are aragrams or not.
         */
        if (result == true) {
          return true;
        } else {
          return false;
        }
      } else {
        console.log("Enter only letters or alphabets");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /*************************************** PrimeNumbers *******************************************
   * @Purpose     :  To find the Prime numbers in the range 0-1000.
   * @description :  Take a range of 0 1000 Numbers and find the Prime numbers in that range.
   * @function    :  isPrime function to check if the number is prime or not.
   *                 primeNum function to print the prime numbers in the range 0-1000.
   * @parameter   :  isPrime function accepts number to check if it is prime number or not.
   */
  isPrime(num) {
    try {
      /**
       * Condition to check if the number is 0 or 1, so that it is not palindrome
       */
      if (num == 0 || num == 1) return false;
      /**
       * Loop from 2 till the number and check if the number is divisible and return false if it's divisible
       */
      for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
      }
      return true;
    } catch (error) {
      console.log(error.message);
    }
  },

  primeNum() {
    try {
      console.log("Prime numbers in the range 0 to 1000: ");
      /**
       * Loop from 0 to 1000 and check if the number is prime number by calling isPrime function
       * and printing it.
       */
      for (let i = 0; i <= 1000; i++) {
        if (this.isPrime(i)) console.log(i);
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /*************************************** Anagram, palindrome primeNumbers *******************************************
   * @Purpose     :  To find the prime numbers that are Anagram and palindrome.
   * @description :  Extending the above program to find the prime numbers that are Anagram and palindrome and print it.
   * @function    :  isNumberPalindrome function checks if the given 2 numbers are palindrome or not.
   *                 isAnagramPalindrome function checks if the prime number is anagram and palindrome.
   * @parameter   :   isNumberPalindrome accepts 2 number inputs.
   */
  isNumberPalindrome(num1) {
    var str = "";
    num1 = num1 + "";
    for (let i = 0; i < num1.length; i++) {
      str = num1.charAt(i) + str;
    }
    if (str == num1) {
      return true;
    }
    return false;
  },

  isAnagramPalindrome() {
    try {
      console.log(
        "Prime numbers in the range 0 to 1000 which are anagram and palindrome: "
      );
      {
        var arr = [];
        /**
         * Loop from 0 till 1000 and chwck if the number is prime.
         * If the number is prime, push it to the array.
         */
        for (let i = 0; i < 1000; i++) {
          if (this.isPrime(i)) {
            arr.push(i);
          }
        }
        /**
         * Loop continuously from 1st element and second element, second element to third element and so on..
         * Invoke isAnagram and isPalindrome function and pass the 2 elements.
         * Print all the elements which are prime and anagram and palindrome.
         */
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (this.isAnagram(arr[i], arr[j])) {
              console.log(arr[i] + " and " + arr[j] + " are anagram");
              if (this.isNumberPalindrome(arr[i])) {
                console.log(arr[i] + " is palindrome");
              }
              if (this.isNumberPalindrome(arr[j])) {
                console.log(arr[j] + " is palindrome");
              }
            }
          }
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  /****************************************** Searching and Sorting *******************************************
        * @Purpose     :  To write static methods for: binarySearch for integer and String.
                          insertionSort method for integer and string.
                          bubbleSort method for integer and string.
        * @description :  To output the Search and Sorted List and print elapsed time performance in descending order.
        *******************************************************************************************************/
  /**
   ***************************************** binarySearch for integer*******************************************
   */
  binarySearchInt(arr, find) {
    try {
      arr.sort();
      var start = 0;
      var end = arr.length - 1;
      /**
       * Iterate while start not meets end
       */
      while (start <= end) {
        /**
         * Find the middle index
         */
        var mid = Math.floor((start + end) / 2);
        /**
         * If element is present at mid, return True
         */
        if (Number(arr[mid] === find)) return true;
        /**
         * Else look in left or right half accordingly
         */ else if (Number(arr[mid]) < find) start = mid + 1;
        else end = mid - 1;
      }
      return false;
    } catch (error) {
      console.log(error.message);
    }
  },
  /**
   ***************************************** binarySearch for String*******************************************
   */
  binarySearchString(arr, find) {
    try {
      arr.sort();
      var start = 0;
      var end = arr.length - 1;
      /**
       * Iterate while start not meets end
       */
      while (start <= end) {
        /**
         * Find the middle index
         */
        var mid = Math.floor((start + end) / 2);
        /**
         * If element is present at mid, return True
         */
        if (arr[mid] === find) return true;
        /**
         * Else look in left or right half accordingly
         */ else if (arr[mid] < find) start = mid + 1;
        else end = mid - 1;
      }
      return false;
    } catch (error) {
      console.log(error.message);
    }
  },
  /**
   ***************************************** insertionSort for Integers*******************************************
   */
  insertionSortInt(arr) {
    try {
      var length = arr.length;
      for (let i = 1; i < length; i++) {
        /**
         * Copy of the current element.
         */
        var temp = arr[i];
        /**
         * Check through the sorted part and compare with the element in temp.
         * If large, shift the element
         * */
        for (var j = i - 1; j >= 0 && Number(arr[j]) > temp; j--) {
          /**
           *Shift the element
           */
          arr[j + 1] = arr[j];
        }
        /**
         * Insert the copied element at the correct position
         */
        arr[j + 1] = temp;
      }
      console.log(arr);
    } catch (error) {
      console.log(error.message);
    }
  },
  /**
   ***************************************** insertionSort for Strings*******************************************
   */
  insertionSortString(arr) {
    try {
      var length = arr.length;
      for (let i = 1; i < length; i++) {
        /**
         * Copy of the current element.
         */
        var temp = arr[i];
        /**
         * Check through the sorted part and compare with the element in temp.
         * If large, shift the element
         * */
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
          /**
           *Shift the element
           */
          arr[j + 1] = arr[j];
        }
        /**
         * Insert the copied element at the correct position
         */
        arr[j + 1] = temp;
      }
      console.log(arr);
    } catch (error) {
      console.log(error.message);
    }
  },
  /**
   ***************************************** bubbleSort for integers*******************************************
   */
  bubbleSortInt(arr) {
    try {
      var length = arr.length;
      /**
       * Loop from first element till length of array
       */
      for (let i = 0; i < length; i++) {
        /**
         * Loop for adjacent element to be compared
         */
        for (let j = 0; j < length - i - 1; j++) {
          /**
           * Compare the adjacent positions
           */
          if (Number(arr[j]) > Number(arr[j + 1])) {
            /**
             * Temporary variable to hold the current number
             */
            var tmp = arr[j];
            /**
             * Replace current number with adjacent number
             */
            arr[j] = arr[j + 1];
            /**
             * Replace adjacent number with current number
             */
            arr[j + 1] = tmp;
          }
        }
      }
      console.log(arr);
    } catch (error) {
      console.log(error.message);
    }
  },
  /**
   ***************************************** bubbleSort for Strings*******************************************
   */
  bubbleSortString(arr) {
    try {
      var length = arr.length;
      /**
       * Loop from first element till length of array
       */
      for (let i = 0; i < length; i++) {
        /**
         * Loop for adjacent element to be compared
         */
        for (let j = 0; j < length - i - 1; j++) {
          /**
           * Compare the adjacent positions
           */
          if (arr[j] > arr[j + 1]) {
            /**
             * Temporary variable to hold the current element
             */
            var tmp = arr[j];
            /**
             * Replace current element with adjacent element
             */
            arr[j] = arr[j + 1];
            /**
             * Replace adjacent element with current element
             */
            arr[j + 1] = tmp;
          }
        }
      }
      console.log(arr);
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** temperatureConversion *******************************************
   * @Purpose     :  To convert the given temperature to faranheit or celcius based on user choice.
   * @description :  Given the temperature in fahrenheit as input, outputs the temperature in Celsius or viceversa
   * @function    :  temperatureConversion function converts the given temperature to celcius or faranheit using the formula.
   */
  temperatureConversion() {
    try {
      var celcius = 0;
      var fahrenheit = 0;
      /**
       * Ask user to choose to convert from Celcius to Faranheit or vice versa.
       */
      var choice = readline.question(
        "Enter 1 to convert Celcius to Faranheit\nEnter 2 to convert Faranheit to Celcius\n"
      );
      /**
       * Condition to check the user input and calculate using formula
       */
      if (choice == 1) {
        celcius = readline.question("Enter the temperature in Celcius: ");
        fahrenheit = (celcius * 9) / 5 + 32;
        console.log("Temperature in Faranheit = " + fahrenheit);
      } else if (choice == 2) {
        fahrenheit = readline.question("Enter the temperature in Faranheit: ");
        celcius = ((fahrenheit - 32) * 5) / 9;
        console.log("Temperature in Celcius = " + celcius);
      } else {
        console.log("Enter a valid choice");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** monthlyPayment *******************************************
        * @Purpose     :  To calculate the monthly payments you would have to make over Y years to pay off a P principal loan amount 
        *                 at R percent interest compounded monthly.
        * @description :  Static Function to calculate ​ monthly Payment that reads in three command-line arguments P, Y, and R
                          and calculates the monthly payments you would have to make over Y years to pay off a P principal loan 
                          amount at R percent interest compounded monthly.
        * @function    :  monthlyPayment function reads 3 command line argument and calculates monthly payment by using formula.
        */
  monthlyPayment() {
    try {
      /**
       * Read command line arguments and store it in a variable
       */
      var principalLoan = process.argv[2];
      var years = process.argv[3];
      var percent = process.argv[4];

      var n = 12 * years;
      var r = percent / (12 * 100);
      /**
       * Use formula to find out monthly payment
       */
      var payment = (principalLoan * r) / (1 - Math.pow(1 + r, -n));
      console.log("Monthly Payment = " + payment);
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** findYourNumber *******************************************
   * @Purpose     :  To guess the answer with n questions.
   *                 at R percent interest compounded monthly.
   * @description :  Takes a command-line argument N, asks you to think of a number between 0 and N-1, where N = 2^n,
   *                 and always guesses the answer with n questions.
   * @function    :  findYourNumber reads command line argument, calculates high, low, mid and with the help
   *                 of binary search finds the number by asking series of questions.
   * @param       :  findYourNumber accepts two numbers, high and low.
   */
  findYourNumber(low, high) {
    try {
      /**
       * Finds the mid value and math.floor round of the value if the answer is in decimal.
       */
      var mid = low + Math.floor((high - low) / 2);
      var temp;
      if (low < high) {
        if (low == high - 1) {
          temp = readline.question(
            "Is the number " + low + " ?\nIf Yes, Press Yes\nIf No, Press No\n"
          );
          if (temp == "Yes") return low;
          if (temp == "No") return high;
        }

        temp = readline.question(
          "Is the number in the range: " +
            mid +
            ":" +
            high +
            "?\nIf Yes, Press Yes\nIf No, Press No\n"
        );
        if (temp == "Yes") mid = this.findYourNumber(mid, high);
        if (temp == "No") mid = this.findYourNumber(low, mid - 1);
      }
      return mid;
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** dayOfWeek ***************************************************
   * @Purpose     :  To find the Day of week by using formula and taking command line arguments inputs.
   * @description :  Take three command-line arguments: m (month), d (day), and y (year). 
                     For m use 1 for January, 2 for February, and so forth. For output print 0 for Sunday, 
                     1 for Monday, 2 for Tuesday, and so forth.
   * @function    :  That takes a date as input and prints the day of the week that date falls on.
   */
  dayOfWeek() {
    try {
      /**
       * Read command line arguments and store the values in variables
       */
      date = Number(process.argv[2]);
      month = Number(process.argv[3]);
      year = Number(process.argv[4]);
      /**
       * Perform validation checks.
       */
      if (
        !isNaN(date, month, year) &&
        (0 < date && date < 32) &&
        (0 < month && month < 13) &&
        (999 < year && year < 10000)
      ) {
        /**
         * Use formulas to find out the day month and year.
         */
        var y0 = year - Math.floor((14 - month) / 12);
        var x =
          y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
        var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (date + x + Math.floor((31 * m0) / 12)) % 7;
        /**
         * Switch case takes the calculated day value and by using formula, returns the day of week.
         *
         */
        switch (d0) {
          case 0:
            return "Sunday";
          case 1:
            return "Monday";
          case 2:
            return "Tuesday";
          case 3:
            return "Wednesday";
          case 4:
            return "Thursday";
          case 5:
            return "Friday";
          case 6:
            return "Saturday";
        }
      } else {
        return "Please enter the valid date month year";
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** bubbleSort *******************************************
   * @Purpose     :  To sort the given input using bubble sort method.
   * @description :  This sorting is comparison-based in which each pair of adjacent elements
   *                 is compared and the elements are swapped if they are not in order.
   * @function    :  bubbleSort function compares each pair of adjacent elements and swaps it if they are not in order.
   * @parameter   :  bubbleSort accepts integer array.
   */
  bubbleSort(arr) {
    try {
      this.bubbleSortInt(arr);
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** insertionSort *******************************************
       * @Purpose     :  To sort the given input using insertionSort method.                
       * @description :  This sorting is comparison-based in which each pair of adjacent elements 
       *                 is compared and the elements are swapped if they are not in order.
       * @function    :  insertionSort function helps in building the final sorted list,
                         one item at a time, with the movement of higher-ranked elements.
       */
  insertionSortStr() {
    try {
      var arr = this.inputArray();
      console.log("Result: ");
      this.insertionSortString(arr);
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** nonNegativeSquareRoot ***************************************************
   * @Purpose     :  To compute the square root of a nonnegative number c given in the input using Newton's method.
   * @description :  Calculates square root of the non negative number by using newtons method.
   * @function    :  Takes non negative number as input and finds the square root of the given number using conditions
   *                 until desired accuracy reached
   */
  nonNegativeSquareRoot() {
    try {
      /**
       * Ask user to input a non negative number.
       */
      var number = readline.question(
        "Enter a non negative number greater than zero: "
      );
      /**
       * Copy the value of the user input in a temporary variable
       */
      var temp = number;
      var epsilon = 1e-15;
      /**
       * Condition to check if the user input is positive and number only.
       */
      if (number > 0 && !isNaN(number)) {
        /**
         * Loop till desired accuracy reached using the newtons formula.
         */
        while (Math.abs(temp - number / temp) > epsilon * temp) {
          temp = (number / temp + temp) / 2;
        }
        console.log("Square root of " + number + " is " + temp);
      } else {
        console.log("Please enter non negative number greater than 0 only");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** searchWord ***************************************************
   * @Purpose     :  To search the Word from Word List
   * @description :  Read in a list of words from File. Then prompt the user to enter a word to
                     search the list. The program reports if the search word is found in the list.
   * @function    :  searchWord function searches the word using binary search in the file provided.
   */
  searchWord() {
    try {
      /**
       * Initialize an empty array.
       */
      var arr = [];
      /**
       * Ask the user to search a word and store it a variable
       */
      var search = readline.question("Enter the word to search: ");
      /**
       * Requiring fs module in which readFile function is defined.
       */
      const fs = require("fs");
      /**
       * readFile function takes in relative path from the program to the text File.
       * If both file and program is in the same folder, the simply give the file name of the text file.
       * The function also takes two arguments (err, data). If the operation fails to extract the data, err shows what is the fault,
       * else data argument will contain the data from the file.
       */
      fs.readFile("sample.txt", (err, data) => {
        if (err) throw err;
        /**
         * Read the data and convert it to string and split it by commas, and push it to the empty array.
         */
        arr = data.toLocaleString().split(",");
        /**
         * Invoke binarySearchString and pass the array and element to be searched.
         */
        console.log(this.binarySearchString(arr, search));
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** toBinary ***************************************************
   * @Purpose     :  To output the binary (base 2) representation of the decimal number typed as the input.
   * @description :  To compute the binary representation of n, we consider the powers of 2 less than or
                     equal to n in decreasing order to determine which belong in the binary decomposition
                     (and therefore correspond to a 1 bit in the binary representation).
   * @function    :  toBinary function computes the binary representation of n, we consider the powers of 2 less than or 
                     equal to n in decreasing order to determine which belong in the binary decomposition.
   */
  toBinary() {
    try {
      var number = readline.question("Enter the value in digit: ");
      var str = "";
      /**
       * Loop till the number is greater than or equal to 1
       */
      while (number > 0.9) {
        /**
         * Perform number mod 2 and store the result in result variable
         */
        var result = Math.floor(number % 2);
        /**.
         * Concat the result to str variable
         */
        str = result + str;
        /**
         * Divide the number by 2 and store the result in number.
         */
        number = number / 2;
      }
      console.log("Binary representation is " + str);
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** vendingMachine ***************************************************
   * @Purpose     :  To calculate the minimum number of Notes as well as the Notes 
                     to be returned by the Vending Machine as a Change
   * @description :  There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
                     returned by Vending Machine. Write a Program to calculate the minimum number
                     of Notes as well as the Notes to be returned by the Vending Machine as a Change
   * @module      :  read-line modules are installed.
   * @function    :  toBinary function computes the binary representation of n, we consider the powers of 2 less than or 
                     equal to n in decreasing order to determine which belong in the binary decomposition.
   */
  vendingMachine() {
    try {
      var amount = readline.question("Enter the amount: ");
      var arr = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
      var notes = 0;
      /**
       * Loop from 1000 rupees to 1 rupee note
       */
      for (let i = 0; i < arr.length; i++) {
        if (amount / arr[i] >= 1) {
          var c = Math.floor(amount / arr[i]);
          notes = notes + c;
          console.log(arr[i] + " notes are :" + c);
          amount = amount % arr[i];
        }
      }
      console.log("Total number of notes :" + notes);
    } catch (error) {
      console.log(error.message);
    }
  },
  /****************************************** mergeSort ***************************************************
   * @Purpose     :  To to do Merge Sort of list of Strings.
   * @description :  To Merge Sort an array, we divide it into two halves, sort the two halves
                     independently, and then merge the results to sort the full array. To sort a[lo, hi),
                     by using the recursive strategy.
   * @module      :  read-line modules are installed.
   * @function    :  function merge(left, right, arr) merges the left, right sub arrays to the parent array.
   *                 function mergeSort(arr) divides the array into two halves using recursion till the sub array is 1.
   * @param       :  merge accepts 3 inputs left array, right array and the original array.
   *                 mergeSort accepts array to sort.                
   */
  merge(left, right, arr) {
    try {
      var i = 0;
      var j = 0;
      var k = 0;
      /**
       *merge elements into arr[]  
       */
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          arr[k] = left[i];
          i++;
        } else {
          arr[k] = right[j];
          j++;
        }
        k++;
      }
      /**
       * if left[] is greater than right[], push all left[] into arr[]
       */
      while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
      }
      /**
       * if left[] is lesser than right[], push all right[] into arr[]
       */
      while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
      }
      return arr;
    } catch (error) {
      console.log(error.message);
    }
  },
  mergeSort(arr) {
    try {
      var n = arr.length;
      /**
       * if size is less than 2 return that.
       */
      if (n < 2) {
        return;
      }
      /**
       * calculate mid value
       */
      var mid = Math.floor(n / 2);
      var left = [mid];
      var right = [n - mid];
      /**
       * store  elements in left array which are present before the mid
       */
      for (let i = 0; i < mid; i++) {
        left[i] = arr[i];
      }
      /**
       * store  elements in left array which are present before the mid
       */
      for (let j = mid; j < n; j++) {
        right[j - mid] = arr[j];
      }
      /**
       * call mergesort for left half
       */
      this.mergeSort(left);
      /**
       * call mergesort for left half
       */
      this.mergeSort(right);
      this.merge(left, right, arr);
      console.log("Sorted array: " + arr);
    } catch (error) {
      console.log(error.message);
    }
  }
};
