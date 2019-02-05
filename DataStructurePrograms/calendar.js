/**************************************************************************
 * Execution        : Default node             cmd> node calendar.js month year
 * Purpose          : This program takes the month and year as command-line arguments
 *                    and prints a calendar for that month.
 * @description
 * @file            : calendar.js
 * @overview        : take the month and year as command-line arguments and prints the Calendar of the month.
 *                    Store the Calendar in an 2D Array, the first dimension the week of the month and
 *                    the second dimension stores the day of the week.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.
 * @since           : 01/02/2019
 ***************************************************************************/
var readline = require("readline-sync");
var take = require("util");
/*
For accessing data from utility file and utilityDataStructure
*/
var access = require("../Utility/utility");
var accessDs = require("../Utility/utilityDataStructure");
function calendar() {
  try {
    calendar = new accessDs.Calendar();
    /**
     * Access command line inputs
     */
    var month = +process.argv[2];
    var year = +process.argv[3];
    calendar.showCalendar(month, year);
  } catch (error) {
    console.log(error.message);
  }
}
calendar();
