/**************************************************************************
 * Execution        : Default node             cmd> node stockAccountStack.js
 * @file            : stockAccountStack.js
 * @overview        : To add and remove the company info from the list of company shares.
 *                    List of CompanyShares in a stack and new CompanyShares can
 *                    be added or removed easily.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
var file = require("fs");
var readline = require("readline-sync");
var utility = require("../stockManagement/companySharesStack");
function main() {
  try {
    /**
     * Create companyShareStack object to use the add, remove, print functionalities.
     */
    var companyShares = new utility.companySharesStack();
    /**
     * Display the choices
     */
    outer: while (true) {
      console.log("1. Add");
      console.log("2. Remove");
      console.log("3. Print");
      console.log("4. Save and exit");
      /**
       * Ask for choice and execute accordingly using switch case
       */
      var choice = readline.questionInt("Enter valid choice :");
      switch (choice) {
        case 1:
          companyShares.addTolist();
          break;
        case 2:
          companyShares.removeFromList();
          break;
        case 3:
          companyShares.print();
          break;
        case 4:
          companyShares.writeList();
          break outer;
        default:
          console.log("Please enter valid number ");
          break;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}
main();
