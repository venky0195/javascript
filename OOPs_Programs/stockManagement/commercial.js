var D = require('../stockManagement/stockAccount')
var read = require('readline-sync')
var file = require('fs')
var customerData = file.readFileSync("../JSON_Files/customer.json", "utf8");
var companyData = file.readFileSync('../JSON_Files/company.json', 'utf8')
var customerDataJson = JSON.parse(customerData)
var companyDataJson = JSON.parse(companyData)
var stockAccount = new D.StockAccount(customerDataJson, companyDataJson)
console.log("Enter 1 to create account:")
//console.log("Enter 2 to total value of amount in account")
console.log("Enter 2 to buy shares")
console.log("Enter 3 to sell shares")
console.log("Enter 4 to information shares of company and customer")
var choice = read.questionInt("choose the number:")
if (choice == 1) {
    stockAccount.stockCreate()
}

if (choice == 2) {
    stockAccount.buy(customerDataJson, companyDataJson)
}
if (choice == 3)
    stockAccount.sell(customerDataJson,companyDataJson)
if(choice==4)
stockAccount.print(customerDataJson,companyDataJson)