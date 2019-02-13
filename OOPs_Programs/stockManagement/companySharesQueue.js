var read = require("readline-sync");
var file = require("fs");
var accessDs = require("../../Utility/utilityDataStructure");
class companySharesQueue {
  constructor() {
    this.queue = new accessDs.LLQueue();
    try {
      /**
       * Pass the path of json file and read it and enqueue the objects using add method of queue
       */
      var data = JSON.parse(
        file.readFileSync("../JSON_Files/linkedListStock.json")
      );
      for (let j = 0; j < data.company.length; j++) {
        this.queue.enQueue(data.company[j]);
      }
    } catch (err) {
      console.log("File not found");
    }
  }
  /**
   * Function to add the stock to the current file
   */
  addTolist() {
    console.log(this.queue.enQueue());
    var flag = false;
    do {
      /**
       * Validation to accept only characters
       */
      var name = read.question("Enter the name want to add : ");
      var symbol = read.question("Enter the symbol");
      if (!isNaN(name) || !isNaN(symbol)) {
        console.log("Please enter alphabetics only ......!");
      } else {
        flag = true;
      }
    } while (!flag);
    var share = read.questionInt("Enter the share :");
    var price = read.questionInt("Enter the price :");

    /**
     * Access all the data provided by user and add enqueue it to the queue
     */
    this.queue.enQueue({
      name: name,
      symbol: symbol,
      share: share,
      price: price
    });
    /**
     * Display the elements in the queue after adding
     */
    console.log("Elements after adding to the list :");
    console.log(this.queue.printShares());
  }
  removeFromList() {
    /**
     * Show the elements in the queue and ask to enter the name of the company to remove
     */
    console.log(this.queue.printShares());
    var company = read.question("Enter company name or symbol: ");
    this.queue.removeStock(company);
    /**
     * Display the elements after removing
     */
    console.log(this.queue.printShares());
  }
  /**
   * to display detailed details in the queue
   */
  print() {
    console.log(this.queue.printShares());
  }
  /**
   * To write the details in JSON file
   */
  writeList() {
    /**
     * Stringify the elements and pass the array to the object to write into a json file
     */
    file.writeFileSync(
      "../JSON_Files/linkedListStock.json",
      JSON.stringify(this.queue.printShares()),
      function(err) {
        if (err) {
          throw err;
        }
      }
    );
  }
}
module.exports = { companySharesQueue };
