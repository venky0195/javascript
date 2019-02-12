var read = require("readline-sync");
var file = require("fs");
class StockAccount {
  /**
   *
   * @param {CustomerData object} customerDataJson
   * @param {ComanyData object} companyDataJson
   */
  constructor(customerDataJson, companyDataJson) {
    this.customerDataJson = customerDataJson;
    this.companyDataJson = companyDataJson;
  }
  /**
   * Creates a stock in the customer json and saves it.
   */
  stockCreate() {
    try {
      var name1 = read.question("enter the name : ");
      /**
       * Generating random value for id and share.
       */
      var id1 = Math.floor(Math.random() * 100);
      console.log(id1);
      var share1 = Math.floor(Math.random() * 100);
      /**
       * Push the information to the customer ooject
       */
      this.customerDataJson.customer.push({
        name: name1,
        id: id1,
        share: share1
      });
      /**
       * To display the details.
       */
      console.log(this.customerDataJson.customer);
      /**
       * Stringify the object and write it to json file.
       */
      var d = file.writeFileSync(
        "../JSON_Files/customer.json",
        JSON.stringify(this.customerDataJson)
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * To buy a stock from the company, and write the date and time of the transaction
   * and write the updated value in the json file.
   */
  buy() {
    try {
      /**
       * To display the details of the customer.
       */
      console.log(this.customerDataJson);
      var customerObject = this.customerDataJson.customer;
      /**
       * Ask user the id to which he wants to buy the share
       */
      var idNumber = read.question("enter the id :");
      /**
       * Loop in the customer object
       */
      for (let key in customerObject) {
        /**
         * Comapare the given id with the existing id in the file.
         */
        if (customerObject[key].id == idNumber) {
          var index = this.customerDataJson.customer.indexOf(
            this.customerDataJson.customer[key]
          );
          var customername = customerObject[key].name;
          /**
           * Display the company details
           */
          console.log("company information");
          console.log(this.companyDataJson);
          /**
           * Ask user from which company he wants to buy the share
           */
          var name1 = read.question(
            "enter name of company share you want to buy "
          );
          var companyDetails = this.companyDataJson.company;
          /**
           * Use for in loop and compare the given comany name with passed company name
           */
          for (let i in companyDetails) {
            if (companyDetails[i].name == name1) {
              console.log("company number of shares price of each share");
              console.log(companyDetails[i]);
              var companyName = companyDetails[i].name;
              var share = companyDetails[i].share;
              /**
               * Validation to check if the required share is less than the company shares
               */
              var flag = false;
              do {
                var numberOfShares = read.questionInt(
                  "enter the number of shares you want to buy"
                );
                if (numberOfShares > share) {
                  console.log("Enter no of shares less than company shares ");
                } else {
                  flag = true;
                }
              } while (!flag);
              /**
               * Show output for confirmation.
               */
              var output =
                "customer name : " +
                customername +
                " and name of company " +
                companyName +
                " buy number of shares " +
                numberOfShares;
              console.log(output);
              /**
               * Create date object
               */
              var date = Date(Date.now());

              /**
               * Converting the number of millisecond in date string
               */
              var time = date.toString();
              /**
               * Decrement the number of shares in the company shares
               * Increment the number of shares in customer shares
               */
              var customerShare = parseInt(
                this.customerDataJson.customer[index].share
              );
              var companyShare = parseInt(
                this.companyDataJson.company[i].share
              );
              var num = parseInt(numberOfShares);
              var updatedCustomerShare = customerShare + num;
              var updatedCompanyShare = companyShare - num;
              if (companyShare > num) {
                /**
                 * Assign the values in the json file
                 */
                this.customerDataJson.customer[
                  index
                ].share = updatedCustomerShare;
                this.companyDataJson.company[i].share = updatedCompanyShare;
                this.customerDataJson.customer[index].LastTransaction = time;
                /**
                 * Stringify the object and write it to JSON file
                 */
                var writeCustomer = file.writeFileSync(
                  "../JSON_Files/customer.json",
                  JSON.stringify(this.customerDataJson)
                );
                var writeCompany = file.writeFileSync(
                  "../JSON_Files/company.json",
                  JSON.stringify(this.companyDataJson)
                );
              }
            }
          }
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   *To sell a stock from the customer, and write the date and time of the transaction
   * and write the updated value in the json file.
   */
  sell() {
    try {
      /**
       * To display the customer data
       */
      console.log(this.customerDataJson);
      var customerObject = this.customerDataJson.customer;
      /**
       * Ask user to enter the id of the customer which he wants to sell
       */
      var id1 = read.question("enter the id :");
      /**
       * Use for in loop and access the id of the customer and compare it with the given id
       */
      for (let key in customerObject) {
        if (customerObject[key].id == id1) {
          var index = this.customerDataJson.customer.indexOf(
            this.customerDataJson.customer[key]
          );
          var customername1 = customerObject[key].name;
          /**
           * To display the company information
           */
          console.log("Company Information");
          console.log(this.companyDataJson);
          /**
           * ask user to enter to which comany he wants to sell
           */
          var name1 = read.question("enter name of company you want to sell ");
          var companyObject = this.companyDataJson.company;
          /**
           * Using fo in loop annd access the company name and compare it with given name.
           */
          for (let key in companyObject) {
            if (companyObject[key].name == name1) {
              /**
               * Display the details of that particular company
               */
              console.log("company number of shares and price of each share ");
              console.log(companyObject[key]);
              var companyName = companyObject[key].name;
              var share = customerObject[key].share;
              /**
               * Validation to accept valid number and only shares lesser than current shares
               */
              var flag = false;
              do {
                var number = read.questionInt(
                  "enter how many shares you want to sell "
                );
                if (number > share) {
                  console.log(
                    "Enter no of shares lesser than the current shares "
                  );
                } else {
                  flag = true;
                }
              } while (!flag);
              /**
               * Display the output for confirmation
               */
              var output =
                "customer name :" +
                customername1 +
                "and name of company " +
                companyName +
                "sell number of shares " +
                number;
              console.log(output);
              /**
               * Create a date object by calling date.now()
               */
              var date = Date(Date.now());
              /**
               * Converting the number of millisecond in date string
               */
              var time = date.toString();
              /**
               * Decrement the number of shares in the customer shares
               * Increment the number of shares in company shares
               */
              var customerShare = parseInt(
                this.customerDataJson.customer[index].share
              );
              var companyShare = parseInt(
                this.companyDataJson.company[key].share
              );
              var num = parseInt(number);
              var updatedCustomerShare = customerShare - num;
              var updatedCompanyShare = companyShare + num;
              /**
               * Assign the values to the json object
               */
              this.customerDataJson.customer[
                index
              ].share = updatedCustomerShare;
              this.companyDataJson.company[key].share = updatedCompanyShare;
              this.customerDataJson.customer[index].LastTransaction = time;
              /**
               * Stringify the objects and write the updated values both in company and customer JSON files
               */
              var writeCustomer = file.writeFileSync(
                "../JSON_Files/customer.json",
                JSON.stringify(this.customerDataJson)
              );
              var writeCompany = file.writeFileSync(
                "../JSON_Files/company.json",
                JSON.stringify(this.companyDataJson)
              );
            }
          }
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * To print the details of the customer and company details
   */
  print() {
    console.log("customer shares information :");
    console.log(this.customerDataJson);
    console.log("company shares information :");
    console.log(this.companyDataJson);
  }
}
module.exports = { StockAccount };
