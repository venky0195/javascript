/**************************************************************************
 * Execution        : Default node             cmd> node regularExpression.js 
 * @file            : regularExpression.js
 * @overview        : Read in the following message: Hello <<name>>, We have your full
                      name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
                      Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
                      Use Regex to replace name, full name, Mobile#, and Date with proper value.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 08/02/2019
 ***************************************************************************/
var utilityOops = require("../Utility/utilityOOPs");
var readLine = require("readline-sync");
function regex() {
  try {
    var nameFormat = /[a-zA-Z]/;
    var name = readLine.question("Enter your name : ");
    var fullName = readLine.question("Enter your full name : ");
    /**
     * condition to check whether the input is string.
     */
    while (!nameFormat.test(name) || !nameFormat.test(fullName)) {
      name = readLine.question("Enter your name(alphabets only) : ");
      fullName = readLine.question("Enter your full name(alphabets only) : ");
    }
    var mobileNumber = readLine.question("Enter your phone number : ");
    /**
     * condition to check whether the input is 10 digit number.
     */
    while (isNaN(mobileNumber) || mobileNumber.length != 10) {
      mobileNumber = readLine.question(
        "\nEnter valid phone number(10 digits only) : "
      );
    }
    var date = new Date();
    date = date.toLocaleDateString();
    console.log(date);
    /**
     * Invoke regex function where it accepts proper values and replaces text with proper values.
     */
    var result = utilityOops.regex(name, fullName, mobileNumber, date);
    /**
     * Printing the Modified Message
     */
    console.log("\n" + result);
  } catch (error) {
    console.log(error.message);
  }
}
regex();
