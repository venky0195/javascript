var readline = require("readline-sync");
var file = require("fs");
/**
 *Regular expression formats for text and numbers
 */
nameValidation = /[a-z]/gi;
numberValidation = /[0-9]/g;
/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 */
class AddressBook {
  /**
   * create a constructor to initialize and store values
   */
  constructor(addressBookData) {
    this.addressBookData = addressBookData;
  }
  createAddress() {
    try {
      var name = readline.question("Please enter your first name: ");
      /**
       * Validate first name
       */
      while (!nameValidation.test(name)) {
        if (nameValidation.test(name)) break;
        name = readline.question("Please enter valid first name: ");
      }
      var lastName = readline.question("Please enter your last name: ");
      /**
       * validate last name
       */
      while (!nameValidation.test(lastName)) {
        if (nameValidation.test(lastName)) break;
        lastName = readline.question("Please enter valid last name: ");
      }
      /**
       * add the address information
       */
      console.log("\nEnter the details of the address: \n");
      var street = readline.question("Street: ");
      var city = readline.question("City: ");
      while (!nameValidation.test(city)) {
        if (nameValidation.test(city)) break;
        city = readline.question("Enter valid city: ");
      }
      var state = readline.question("State: ");
      while (!nameValidation.test(state)) {
        if (nameValidation.test(state)) break;
        state = readline.question("Enter valid state: ");
      }
      var nation = readline.question("Nationality: ");
      while (!nameValidation.test(nation)) {
        if (nameValidation.test(nation)) break;
        nation = readline.question("Enter valid nationality: ");
      }
      var zip = readline.question("Zip code: ");
      /**
       * zip code validation to accept only 6 digit numbers
       */
      while (isNaN(zip) || zip.length != 6) {
        zip = readline.question("\nEnter valid zipcode(6 digits only) : ");
      }
      var phoneNum = readline.question("Phone number: ");
      /**
       * phoneNumber validation to accept only 10 digit numbers
       */
      while (isNaN(phoneNum) || phoneNum.length != 10) {
        phoneNum = readline.question(
          "\nEnter valid phone number(10 digits only) : "
        );
      }

      /**
       * push each value into json
       */
      this.addressBookData.Person.push({
        Name: name,
        LastName: lastName,
        Address: {
          Street: street,
          City: city,
          State: state,
          Nationality: nation,
          Zip: zip,
          PhoneNum: phoneNum
        }
      });
      /**
       * write file into json
       */
      file.writeFile(
        "../JSON_Files/addressBook.json",
        JSON.stringify(this.addressBookData),
        "utf-8",
        function(err) {
          if (err) throw err;
          console.log("\nThankYou!");
        }
      );
      console.log("Details updated succesfully!");
      console.log(
        "\nYour information as per our record is: \nFirst Name: " +
          name +
          "\nLast Name: " +
          lastName +
          "\nStreet: " +
          street +
          "\nCity: " +
          city +
          "\nState: " +
          state +
          "\nNationality: " +
          nation +
          "\nZipCode: " +
          zip +
          "\nPhoneNumber: " +
          phoneNum +
          "\n"
      );
    } catch (err) {
      console.log(err.message);
    }
  }
  /**
   * comaparing name of each object and sort alphabetically
   */
  compare1(a, b) {
    if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
      return -1;
    }
    if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
      return 1;
    }
    return 0;
  }
  /**
   * To sort the data by passing comapare method to the sort method.
   */
  sorting(addressData) {
    console.log(addressData.Person.sort(this.compare1));
  }
  /**
   * To open the details for given name
   */
  openProfile() {
    try {
      var temp = -1;
      if (this.addressBookData.Person.length > 0) {
        /**
         * To display the addressBook details
         */
        for (
          var index = 0;
          index < this.addressBookData.Person.length;
          index++
        ) {
          console.log(this.addressBookData.Person[index]);
        }
        console.log("\nWelcome!!\n");
        var update = readline.question(
          "Please enter the name of the profile to perform operations: "
        );
        for (var key = 0; key < this.addressBookData.Person.length; key++) {
          if (update == this.addressBookData.Person[key].Name) {
            temp = key;
            console.log("Enter the choice: ");
            console.log("1: Update");
            console.log("2: Delete");
            console.log("3: Sort");
            console.log("4: Save");
            console.log("5: Exit");
            var choice2 = readline.question("Please enter your choice: ");
            switch (parseInt(choice2)) {
              case 1:
                /**
                 * update profile
                 */
                console.log("What do you want to update? ");
                console.log("1: Street");
                console.log("2: City");
                console.log("3: State");
                console.log("4: Nationality");
                console.log("5: Zip code");
                console.log("6: Phone");
                console.log("7: Exit");
                var choice3 = readline.question("Please enter your choice: ");
                switch (parseInt(choice3)) {
                  case 1:
                    var streetUpdate = readline.question(
                      "Enter the new street: "
                    );
                    while (!nameValidation.test(streetUpdate)) {
                      if (nameValidation.test(streetUpdate)) break;
                      streetUpdate = readline.question("Enter valid street: ");
                    }
                    /**
                     * update whole data after changes
                     */
                    var obj = {
                      Name: this.addressBookData.Person[key].Name,
                      LastName: this.addressBookData.Person[key].LastName,
                      Address: {
                        Street: streetUpdate,
                        City: this.addressBookData.Person[key]["Address"].City,
                        State: this.addressBookData.Person[key]["Address"]
                          .State,
                        Nationality: this.addressBookData.Person[key]["Address"]
                          .Nation,
                        Zip: this.addressBookData.Person[key]["Address"].Zip,
                        PhoneNum: this.addressBookData.Person[key]["Address"]
                          .PhoneNum
                      }
                    };
                    this.addressBookData.Person[key] = obj;
                    /**
                     * save into json every time after update
                     */
                    save();
                    break;
                  case 2:
                    var cityUpdate = readline.question(
                      "Enter the new city name: "
                    );
                    while (!nameValidation.test(cityUpdate)) {
                      if (nameValidation.test(cityUpdate)) break;
                      cityUpdate = readline.question(
                        "Enter the valid city name: "
                      );
                      return false;
                    }
                    var obj = {
                      Name: this.addressBookData.Person[key].Name,
                      LastName: this.addressBookData.Person[key].LastName,
                      Address: {
                        Street: this.addressBookData.Person[key]["Address"]
                          .Street,
                        City: cityUpdate,
                        State: this.addressBookData.Person[key]["Address"]
                          .State,
                        Nationality: this.addressBookData.Person[key]["Address"]
                          .Nation,
                        Zip: this.addressBookData.Person[key]["Address"].Zip,
                        PhoneNum: this.addressBookData.Person[key]["Address"]
                          .PhoneNum
                      }
                    };
                    this.addressBookData.Person[key] = obj;
                    save();
                    break;
                  case 3:
                    var stateUpdate = readline.question(
                      "Enter the new state name: "
                    );
                    while (!nameValidation.test(stateUpdate)) {
                      if (nameValidation.test(stateUpdate)) break;
                      stateUpdate = readline.question(
                        "Enter valid state name: "
                      );
                    }
                    var obj = {
                      Name: this.addressBookData.Person[key].Name,
                      LastName: this.addressBookData.Person[key].LastName,
                      Address: {
                        Street: this.addressBookData.Person[key]["Address"]
                          .Street,
                        City: this.addressBookData.Person[key]["Address"].City,
                        State: stateUpdate,
                        Nationality: this.addressBookData.Person[key]["Address"]
                          .Nation,
                        Zip: this.addressBookData.Person[key]["Address"].Zip,
                        PhoneNum: this.addressBookData.Person[key]["Address"]
                          .PhoneNum
                      }
                    };
                    this.addressBookData.Person[key] = obj;
                    save();
                    break;
                  case 4:
                    var nationUpdate = readline.question(
                      "Enter the new nation name: "
                    );
                    while (!nameValidation.test(nationUpdate)) {
                      if (nameValidation.test(nationUpdate)) break;
                      nationUpdate = readline.question(
                        "Enter valid nation name: "
                      );
                    }
                    var obj = {
                      Name: this.addressBookData.Person[key].Name,
                      LastName: this.addressBookData.Person[key].LastName,
                      Address: {
                        Street: this.addressBookData.Person[key]["Address"]
                          .Street,
                        City: this.addressBookData.Person[key]["Address"].City,
                        State: this.addressBookData.Person[key]["Address"]
                          .State,
                        Nationality: nationUpdate,
                        Zip: this.addressBookData.Person[key]["Address"].Zip,
                        PhoneNum: this.addressBookData.Person[key]["Address"]
                          .PhoneNum
                      }
                    };
                    this.addressBookData.Person[key] = obj;
                    save();
                    break;
                  case 5:
                    var zipUpdate = readline.question(
                      "Enter the new zip code: "
                    );
                    while (isNaN(zip) || zip.length != 6) {
                      zip = readline.question(
                        "\nEnter valid zipcode(6 digits only) : "
                      );
                    }
                    var obj = {
                      Name: this.addressBookData.Person[key].Name,
                      LastName: this.addressBookData.Person[key].LastName,
                      Address: {
                        Street: this.addressBookData.Person[key]["Address"]
                          .Street,
                        City: this.addressBookData.Person[key]["Address"].City,
                        State: this.addressBookData.Person[key]["Address"]
                          .State,
                        Nationality: this.addressBookData.Person[key]["Address"]
                          .Nation,
                        Zip: zipUpdate,
                        PhoneNum: this.addressBookData.Person[key]["Address"]
                          .PhoneNum
                      }
                    };
                    this.addressBookData.Person[key] = obj;
                    save();
                    break;
                  case 6:
                    var phoneNumUpdate = readline.question(
                      "Enter the new phone number: "
                    );
                    while (isNaN(phoneNum) || phoneNum.length != 10) {
                      phoneNum = readline.question(
                        "\nEnter valid phone number(10 digits only) : "
                      );
                    }
                    var obj = {
                      Name: this.addressBookData.Person[key].Name,
                      LastName: this.addressBookData.Person[key].LastName,
                      Address: {
                        Street: this.addressBookData.Person[key]["Address"]
                          .Street,
                        City: this.addressBookData.Person[key]["Address"].City,
                        State: this.addressBookData.Person[key]["Address"]
                          .State,
                        Nationality: this.addressBookData.Person[key]["Address"]
                          .Nation,
                        Zip: this.addressBookData.Person[key]["Address"].Zip,
                        PhoneNum: phoneNumUpdate
                      }
                    };
                    this.addressBookData.Person[key] = obj;
                    save();
                    break;
                  case 7:
                    console.log("ThankYou!");
                    break;
                }
                break;
              case 2:
                /**
                 * to delete the profile
                 */
                for (
                  let key = 0;
                  key < this.addressBookData.Person.length;
                  key++
                ) {
                  if (this.addressBookData.Person[key].Name == update) {
                    var index = this.addressBookData.Person.indexOf(
                      this.addressBookData.Person[key]
                    );
                    this.addressBookData.Person.splice(index, 1);
                  }
                }
                /**
                 * write file
                 */
                file.writeFile(
                  "../JSON_Files/addressBook.json",
                  JSON.stringify(this.addressBookData),
                  "utf-8",
                  function(err) {
                    if (err) throw err;
                    console.log("Profile deleted successfully!");
                  }
                );
                break;
              case 3:
                /**
                 * sort the profile by name
                 */
                this.sorting(this.addressBookData);
                save();
                break;
              case 4:
                /**
                 * save file into json
                 */
                function save() {
                  file.writeFile(
                    "../JSON_Files/addressBook.json",
                    JSON.stringify(this.addressBookData),
                    "utf-8",
                    function(err) {
                      if (err) throw err;
                      console.log("File Saved!!");
                    }
                  );
                }
                save();
                break;
              case 5:
                console.log("ThankYou!!");
                //address();
                break;
              default:
                console.log("Please enter valid option");
                break;
            }
          }
        }
        if (temp == -1) {
          /**
           * check if name is available in json or not
           */
          console.log("Profile unavailable!!Please create new one.");
          //address();
        }
      } else {
        console.log("No profiles to display!!Please create a new profile!");
        this.createAddress();
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}
module.exports = { AddressBook };
