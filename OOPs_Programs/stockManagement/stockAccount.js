var read = require("readline-sync");
var file = require("fs");
//var  M = require('../Utility/utilityDataStructure');
//var linkedList = new M.LinkedList();
var s = 0;
class StockAccount {
  constructor(customerDataJson, companyDataJson) {
    this.customerDataJson = customerDataJson;
    this.companyDataJson = companyDataJson;
  }
  stockCreate() {
    var name1 = read.question("enter the name : ");
    var id1 = Math.floor(Math.random() * 100);
    console.log(id1);
    var share1 = Math.floor(Math.random() * 100);
    this.customerDataJson.customer.push({
      name: name1,
      id: id1,
      share: share1
    });
    console.log(this.customerDataJson.customer);

    var d = file.writeFileSync(
      "../JSON_Files/customer.json",
      JSON.stringify(this.customerDataJson)
    );
  }
  buy() {

    console.log(this.customerDataJson);
    var customerObject = this.customerDataJson.customer;
    var idNumber = read.question("enter the id :");
    for (let key in customerObject) {
      if (customerObject[key].id == idNumber) {
        var index = this.customerDataJson.customer.indexOf(
          this.customerDataJson.customer[key]
        );
        var customername = customerObject[key].name;
        console.log("company information");
        console.log(this.companyDataJson);
        var name1 = read.question(
          "enter name of company share you want to buy"
        );
        var companyDetails = this.companyDataJson.company;
        for (let i in companyDetails) {
          if (companyDetails[i].name == name1) {
            console.log("company number of shares price of each share");
            console.log(companyDetails[i]);
            var companyName = companyDetails[i].name;
            var numberOfShares = read.questionInt(
              "enter the number of shares you want to buy"
            );
            var output =
              "customer name :" +
              customername +
              "and name of company " +
              companyName +
              "buy number of shares " +
              numberOfShares;
            console.log(output);

            //this.stackps(s);
            var time = new Date();
            console.log("time of buying the share is " + Math.floor(time.getSeconds())+"seconds");
            //this.queuetime(time1);
            var n = parseInt(this.customerDataJson.customer[index].share);
            var n11 = parseInt(this.companyDataJson.company[i].share);
            var num = parseInt(numberOfShares);
            var n1 = n + num;
            var n2 = n11 - num;
            if (n11 > num) {
              this.customerDataJson.customer[index].share = n1;
              this.companyDataJson.company[i].share = n2;
              var d = file.writeFileSync(
                "../JSON_Files/customer.json",
                JSON.stringify(this.customerDataJson)
              );
              //console.log(d)

              var d1 = file.writeFileSync(
                "../JSON_Files/company.json",
                JSON.stringify(this.companyDataJson)
              );
            }
          }
        }
      }
    }
  }
  sell() {
    console.log(this.customerDataJson);
    var customerObject = this.customerDataJson.customer;
    var id1 = read.question("enter the id :");
    for (let key in customerObject) {
      if (customerObject[key].id == id1) {
        var index = this.customerDataJson.customer.indexOf(
          this.customerDataJson.customer[key]
        );
        var customername1 = customerObject[key].name;
        console.log("company information");
        console.log(this.companyDataJson);
        var name1 = read.question("enter name of company you want to sell");
        var companyObject = this.companyDataJson.company;
        for (let key in companyObject) {
          if (companyObject[key].name == name1) {
            console.log("company number of shares and price of each share");
            console.log(companyObject[key]);
            var companyName = companyObject[key].name;
            var number = read.questionInt(
              "enter how many shares you want to sell "
            );
            var output =
              "customer name :" +
              customername1 +
              "and name of company " +
              companyName +
              "sell number of shares " +
              number;
            console.log(output);

            //this.stackps(s);
            var time = new Date();
            var time1 = "time of selling the share is " + time;
            //this.queuetime(time1);
            var n = parseInt(this.customerDataJson.customer[index].share);
            var n11 = parseInt(this.companyDataJson.company[key].share);
            var num = parseInt(number);
            var n1 = n - num;
            var n2 = n11 + num;
            this.customerDataJson.customer[index].share = n1;
            this.companyDataJson.company[key].share = n2;
            var d = file.writeFileSync(
              "customer.json",
              JSON.stringify(this.customerDataJson)
            );
            var d1 = file.writeFileSync(
              "company.json",
              JSON.stringify(this.companyDataJson)
            );
          }
        }
      }
    }
  }
  /**  stackps(s)
    {
        var stack = M.StackLinkedList;
        stack.push(s);
        stack.print();
    }*/
  /**  queuetime(time)
    {
        var queue = M.LinkListQ
        queue.enQueue(time);
        queue.print();
    }*/
  print(customerDataJson, companyDataJson) {
    console.log("customer shares information :");
    console.log(this.customerDataJson);
    console.log("company shares information :");
    console.log(this.companyDataJson);
  }
}
module.exports = { StockAccount };
