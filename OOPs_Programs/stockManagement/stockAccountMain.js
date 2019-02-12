/**************************************************************************
 * Execution        : Default node             cmd> node stockAccountMain.js 
 * @file            : stockAccountMain.js
 * @overview        : StockAccount.java implements a data type that
                      might be used by a financial institution to keep track of customer information.
                      The StockAccount class also maintains a list of CompanyShares object which has
                      Stock Symbol and Number of Shares as well as DateTime of the transaction. When
                      buy or sell is initiated StockAccount checks if CompanyShares are available and
                      accordingly update or create an Object
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 12/02/2019
 ***************************************************************************/
var D = require("./stockAccount");
var read = require("readline-sync");
var file = require("fs");
function main() {
  try {
    /**
     * Read in customer and company json files
     */
    var customerData = file.readFileSync("../JSON_Files/customer.json", "utf8");
    var companyData = file.readFileSync("../JSON_Files/company.json", "utf8");
    /**
     * Parse the json files to objects
     */
    var customerDataJson = JSON.parse(customerData);
    var companyDataJson = JSON.parse(companyData);
    /**
     * Create a stockAccount object by passing customer and company objects to it as parameter
     */
    var stockAccount = new D.StockAccount(customerDataJson, companyDataJson);
    console.log("Enter 1 to create account:");
    console.log("Enter 2 to buy shares");
    console.log("Enter 3 to sell shares");
    console.log("Enter 4 to information shares of company and customer");

    var choice = read.questionInt("choose the number:");
    while (choice > 4 || choice < 0) {
      choice = read.questionInt("Enter valid choice ");
    }
    switch (choice) {
      /**
       * To create a new stock.
       */
      case 1:
        stockAccount.stockCreate();
        break;
      /**
       * To buy stock from the comapany
       */
      case 2:
        stockAccount.buy();
        break;
      /**
       * To sell the stock to the company
       */
      case 3:
        stockAccount.sell();
        break;
      /**
       * To display all the information of the customer and company details
       */
      case 4:
        stockAccount.print();
        break;
    }
  } catch (error) {
    console.log(error.message);
  }
}
main();
