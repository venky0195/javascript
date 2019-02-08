module.exports = {
  /**
   * Function to calculate the value of each item in inventory
   * @param {inventoryObject} data
   */
  inventory(data) {
    try {
      var rice = data.rice;
      var wheat = data.wheat;
      var pulses = data.pulses;
      var Rname = 0;
      var Wname = 0;
      var Pname = 0;

      var valueOfRice = 0;
      var valueOfWheat = 0;
      var valueOfPulses = 0;
      /**
       * Loop all the items in the inventory using forin loop and calculate the values.
       */
      for (let key in rice) {
        var num = rice[key].weight * rice[key].price;
        console.log("cost of " + rice[Rname].riceName + " is: " + num + "₹");
        Rname++;
        valueOfRice = valueOfRice + num;
      }
      console.log("\nTotal value of rice : " + valueOfRice + "₹\n");

      for (let key in wheat) {
        var num = wheat[key].weight * wheat[key].price;
        console.log("cost of " + wheat[Wname].wheatName + " is: " + num + "₹");
        Wname++;
        valueOfWheat = valueOfWheat + num;
      }
      console.log("\nTotal value of wheat : " + valueOfWheat + "₹\n");

      for (let key in pulses) {
        var num = pulses[key].weight * pulses[key].price;
        console.log("cost of " + pulses[Pname].pulseName + " is: " + num + "₹");
        Pname++;
        valueOfPulses = valueOfPulses + num;
      }
      console.log("\nTotal value of pulses : " + valueOfPulses + "₹\n");
    } catch (error) {
      console.log(error.message);
    }
  },
  /**
   * Function to replace name, fullName, phoneNumber, date with the proper value.
   * @param {string} name
   * @param {string} fullName
   * @param {10 digit number} mobileNumber
   * @param {string} date
   */
  regex(name, fullName, mobileNumber, date) {
    var fileRead = require("fs");
    var line = fileRead.readFileSync("regex.txt", "utf8");
    /**
     * Replacing name, full name, mobileNumebr, date with proper values passed using regular expressions.
     */
    line = line.replace(/<<name>>/g, name);
    line = line.replace(/<<full name>>/g, fullName);
    line = line.replace(/xxxxxxxxxx/g, mobileNumber);
    line = line.replace(/01-01-2016/g, date);

    return line;
  }
};
