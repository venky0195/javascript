module.exports = {
  /**
   * To take user inputs of the stocks and calculate the value of each stock
   * and also the total value of all the stocks
   */
  calculateReport() {
    try {
      var fetch = require("./stock");
      var readline = require("readline-sync");
      var noOfStocks = readline.questionInt("Enter number of stocks : ");
      var stockValue = 0;
      var totalValue = 0;
      /**
       * Loop to ask user the details of the stock upto number of stocks.
       */
      for (let count = 1; count <= noOfStocks; count++) {
        /**
         * Ask user to input the details of the shares and store it in respective variables.
         */
        var shareName = readline.question("Enter the name of the share :");
        var numberOfShares = readline.questionInt(
          "Enter the number of the shares :"
        );
        var shareValue = readline.questionInt("Enter the value of 1 share :");
        /**
         * Create a stock object and pass all the values given by the user.
         */
        var stock = new fetch.Stock(shareName, numberOfShares, shareValue);
        /**
         * Invoke valueOfStock function to calculate the value of each stock.
         */
        stockValue = stock.valueOfStock();
        console.log(
          "Value of share " + shareName + " is: " + stockValue + "₹\n"
        );
        /**
         *To calcualte the value of all the stocks.
         */
        totalValue = totalValue + stockValue;
      }
      console.log("Total value of the stock: " + totalValue + "₹");
    } catch (error) {
      console.log(error.message);
    }
  }
};
