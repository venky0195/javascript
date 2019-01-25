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



/*
*@purpose     : To accept user input value 
*@description : invoke this whenever we want take input from user
*/
var readline = require('readline-sync');


module.exports = {
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
                var input = 'Hello <<UserName>>, How are you?';
                //searches for <<UserName>> in the program and replaces it with the input
                var output = input.replace(/<<UserName>>/g, username);
                console.log(output);
            }
            else {
                console.log('Please enter characters more than 3, only alphabets');
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

            var flip = readline.question('Enter the number of times to flip the coin ');

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
            }
            else {
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
            if (year.length = 4 && !isNaN(year) && year > 0) {
                /**
                *condition to check whether the number is leap year or not
                */
                if (year % 4 == 0 || year % 400 == 0 || year % 100 == 0) {
                    console.log(year + " is leap year");
                }
                else {
                    console.log(year + " is not a leap year");
                }
            }
            /**
            * If the given value is not a 4 digit number or not positive, Show user a message.`
            */
            else {
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
                    sum += (1.0 / i);
                }
                console.log("N th Harmonic number is " + sum);
            }
            else {
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
                    }
                    else {
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
            }
            else {
                console.log("**Stake amount should be less than goal amount**  **Input only numbers**");

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
                var randomNum = Math.round(Math.random() * 555555)
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
            console.log(error.message)
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

            var distance = Math.sqrt((x * x) + (y * y))

            console.log("Euclidean distance from the point (x, y) to the origin (0, 0) is : " + distance);
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
            var a = readline.question("Enter the value of a: ")
            var b = readline.question("Enter the value of b: ")
            var c = readline.question("Enter the value of c: ")
            /**
             * Condition to check if the input is digit or not
             */
            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
                /**
                 * Formula to find out nature of the roots.
                 */
                var delta = (b * b) - (4 * a * c);
                /**
                 *Condition for real and different roots
                 */
                if (delta > 0) {
                    console.log("Roots are real and distinct")
                    /**
                     * Formula to find out roots of the equation
                     */
                    var root1 = (-b + Math.sqrt(delta)) / (2 * a);
                    var root2 = (-b - Math.sqrt(delta)) / (2 * a);

                    console.log("First root " + root1);
                    console.log("Second root " + root2);
                }
                /**
                 *Condition for real and equal roots 
                 */
                else if (delta == 0) {
                    console.log("Roots are real and equal")
                    /**
                     * Formula to find out roots of the equation
                     */
                    var root1 = root2 = -b / (2 * a);

                    console.log(root1);
                }
                /**
                 * If roots are not real 
                 */
                else {
                    console.log("Roots are complex")
                    root1 = root2 = -b / (2 * a);
                    /**
                     * Formula to find imaginary part
                     */
                    var imaginary = Math.sqrt(-delta) / (2 * a);
                    console.log("Root1 = " + root1 + " + i" + imaginary + " Root2 = " + root2 + " - i" + imaginary);
                }
            }
            else {
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
            if (!isNaN(temp) && !isNaN(speed) && temp < 50 && (speed < 120 && speed > 3)) {
                /**
                 * Formula to find out windchill provided by National Weather Service
                 */
                var windchill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(speed, 0.16);
                console.log("Wind chill  = " + windchill);
            }
            else {
                console.log("Enter temperature value less than 50, speed in the range 3 to 120 in numbers");

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
            var size = readline.question("Enter the number of integers you wish to add in the array: ")
            /**
             * Initialize empty array
             */
            var inputarray = []
            /**
             * Loop from 0 to user defined size and add the input elements to the empty array.
             */

            for (let a = 0; a < size; a++) {
                inputarray[a] = readline.question("Enter element " + (a + 1) + "--->")
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
                        if (Number(inputarray[i]) + Number(inputarray[j]) + Number(inputarray[k]) == 0) {
                            console.log("Distinct triplets are: " + inputarray[i] + " " + inputarray[j] + " " + inputarray[k]);
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
            console.log(error.message)
        }
    },
    /************************************** StopWatch *********************************************************
    * @purpose     : To measure the time that elapses between the start and end clicks.
    * @description : A program for measuring the time that elapses between the start and end clicks by 
    *                taking input to start the stopwatch and stop the stopwatch.
    * @function    : function getCurrentSecond creates a date object and returns the current second.
    *                function stopWatch takes input to start and stop the stopWatch, calculates the elapsed
    *                time and prints it.
    */
    getCurrentSecond() {
        try {
            /**
             * Create a date object
             */
            var dt = new Date();
            /**
             * invoke getSeconds function on Date object to get current second.
             */
            sec = dt.getSeconds();
            /**
             * return current second whoever invokes this method
             */
            return sec;

        } catch (error) {
            console.log(error.message);

        }
    },

    stopWatch() {
        try {
            /**
             * Ask user to start the timer
             */
            var startTime = readline.question("Press enter to start ")
            /**
             * invoke getCurrentSecond and store the returned value in start variable
             */
            var start = this.getCurrentSecond();
            /**
             * Ask user to stop the timer
             */
            var stopTime = readline.question("Press enter to stop ")
            /**
             * invoke getCurrentSecond and store the returned value in stop variable
             */
            var stop = this.getCurrentSecond();
            /**
             * To find the elapsed time, subtract stop from start.
             */
            console.log("Total time elapsed = " + Number(stop - start));

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
            var rows = readline.question("Enter the number of rows: ")
            var columns = readline.question("Enter the number of columns: ")
            /**
             * Loop till rows is equal to user input and push it.
             */
            for (let i = 0; i < rows; i++) {
                arr.push([])
                /**
                * Loop till columns is equal to user input.
                */
                for (let j = 0; j < columns; j++) {
                    /**
                     * Ask user to input the values and store it in element variable.
                     */
                    var element = readline.question("Enter input: ")
                    arr[i][j] = element;

                }
            }
            console.log(arr);
        }
        catch (error) {
            console.log(error.message);
        }
    }
}




