/**************************************************************************
 * Execution        : Default node             cmd> node inventoryManagerGrocery.js 
 * @file            : inventoryManagerGrocery.js
 * @overview        : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                      with properties name, weight, price per kg.Create the JSON from Inventory 
                      Object and output the JSON String
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 07/02/2019
 ***************************************************************************/
var file = require("fs");

var access = require("../../Utility/utilityOOPs");
function inventory() {
  try {
    /**
     * Reading JSON file
     */
    var data = file.readFileSync('../JSON_Files/inventoryManagerGrocery.json');
    /**
     * Creating inventoryObject from JSON.
     */
    var inventoryObject = JSON.parse(data);
    /**
     * Passing the inventory object to the inventory function where the value of each is calculated.
     */
    access.inventory(inventoryObject);

    var JSONstring = JSON.stringify(inventoryObject);
    console.log("Output of the JSON string: \n" + JSONstring + "\n");
    /**
  var obj1 = JSON.parse(string);
  console.log(obj1);
  */
  } catch (error) {
    console.log(error.message);
  }
}
inventory();
