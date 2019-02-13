/**************************************************************************
 * Execution        : Default node             cmd> node addressBookMain.js
 * @file            : addressBookMain.js
 * @overview        : To create addressBook object and pass the json data, ask user to perform
 *                    operations like create, read, update, delete and sort and to save it in a JSON
 *                    file.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.
 * @since           : 11/02/2019
 ***************************************************************************/
var prompt = require("readline-sync");
var access = require("../addressBook/addressBook");
var fs = require("fs");
/**
 * Read json file data
 */
var data = fs.readFileSync("../JSON_Files/addressBook.json", "utf8");
/**
 * Parse the Json file to javascript object
 */
var addressData = JSON.parse(data);
function addressBook() {
  try {
    /**
     * Create a new addressbook object by passing the addressbook data object to use the functions
     */
    var addressBook = new access.AddressBook(addressData);
    console.log("\n-----------AddressBook-----------\n");
    console.log("1:Create Profile");
    console.log("2:Open Address Book");
    console.log("3:Exit\n");
    var choice1 = prompt.question("Please enter your choice: ");
    switch (parseInt(choice1)) {
      case 1:
        addressBook.createAddress();
        break;
      case 2:
        addressBook.openProfile();
        break;
      case 3:
        console.log("ThankYou!");
        break;
      default:
        console.log("Please enter a valid option!!");
    }
  } catch (error) {
    console.log(error.message);
  }
}
addressBook();
