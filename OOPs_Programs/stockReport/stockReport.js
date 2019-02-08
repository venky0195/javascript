/**************************************************************************
 * Execution        : Default node             cmd> node stockReport.js 
 * @file            : stockReport.js
 * @overview        : Program to read in Stock Names, Number of Share, Share Price.
                      Print a Stock Report with total value of each Stock and the total value of Stock.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 08/02/2019
 ***************************************************************************/
var stock = require('./stockUtil')
function main(){
   stock.calculateReport();
}
main();