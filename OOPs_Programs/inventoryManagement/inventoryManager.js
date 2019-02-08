/**************************************************************************
 * Execution        : Default node             cmd> node inventoryManager.js 
 * @file            : inventoryManager.js
 * @overview        : to Create InventoryManager to manage the
                      Inventory. The Inventory Manager will use InventoryFactory to create Inventory
                      Object from JSON. The InventoryManager will call each Inventory Object in its list
                      to calculate the Inventory Price and then call the Inventory Object to return the JSON String.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 08/02/2019
 ***************************************************************************/
var file = require("fs");
var read = require("readline-sync");
var access = require("../inventoryManagement/inventoryFactory");
var data = file.readFileSync("../JSON_Files/inventoryManagerStocks.json");
function main() {
  try {
    /**
     * Convert the JSON to javascript object and store it in a variable
     */
    var parsedData = JSON.parse(data);
    /**
     * Create inventoryFactory object to use the functionalities.
     */
    var object = new access.inventoryFactory();
    /**
     * Ask user to input the choice
     */
    while (ch != 5) {
      console.log("\nPress 1 to add :");
      console.log("Press 2 to remove :");
      console.log("Press 3 to print :");
      console.log("Press 4 to display the values of each stocks :");
      console.log("Press 5 to exit :");
      var ch = read.questionInt("Enter the number :\n");
      switch (ch) {
        case 1:
          object.add(parsedData);
          break;
        case 2:
          object.remove(parsedData);
          break;
        case 3:
          object.print(parsedData);
          break;
        case 4:
          object.calcValue(parsedData);
          break;
        case 5:
          break;
        default:
          console.log("\nPlease enter the correct number ");
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}
main();
