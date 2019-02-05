/**************************************************************************
 * Execution        : Default node             cmd> node weekDay.js 
 * @file            : weekDay.js
 * @overview        : To Create the Week Object having a list of WeekDay objects each storing the day 
                      (i.e S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects are stored in a Queue
                      implemented using Linked List. Further maintain also a Week Object in a Queue to
                      finally display the Calendar
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 05/02/2019
 ***************************************************************************/
var utilityDs = require("../Utility/utilityDataStructure");
var utility = require("../Utility/utility");
var take = require("util");
var readLine = require("readline-sync");
function call() {
  try {
    /**
     * Create 2 queue objects
     */
    var weekdays = new utilityDs.LLQueue();
    var dateQ = new utilityDs.LLQueue();
    var valid = false;
    /**
     * Ask user to input the month and year, Validation to accept only valid numbers.
     */
    do {
      var month = readLine.questionInt("Enter the month : ");
    var year = readLine.questionInt("Enter the year : ");
    if (isNaN(month, year) || (0 > month || month > 13) || (999 > year || year > 10000)){
        console.log("Not a valid entry.");
      } else {
        valid = true;
      }
    } while (!valid);
    /**
     * Create a calendar object to access methods in it
     */
    var calendar = new utilityDs.Calendar();
    var calcDay = calendar.day(month, 1, year);
    /**
     * Store the weeks in a week variable
     */
    var week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    if (calcDay <= week.length) {
      console.log("First day of the month falls on :" + week[calcDay]);
    }
    /**
     * To get the number of days in the passed month
     */
    var days = calendar.monthOf(month);
    /**
     * To check if the given year is a leap year
     */
    var t1 = calendar.leapYear(year);
    if (t1) {
      if (month == 2) {
        days = 29;
      }
    }
    /**
     * Loop to enqueue the weekdays into Queue.
     */
    for (let i = 0; i < week.length; i++) {
      weekdays.enQueue(week[i]);
    }
    /**
     * Loop to enqueue the dates into Queue.
     */
    for (let i = 1; i <= days; i++) {
      dateQ.enQueue(i);
    }
    /**
     * Loop the weekdays to deQueue from the queue and print it.
     */
    for (let i = 0; i < week.length; i++) {
      take.print(weekdays.deQueue() + "  ");
    }
    console.log();
    for (let i = 0; i < calcDay * 5; i++) {
      take.print(" ");
    }
    /**
     * Loop number of days to deQueue from the queue and print it.
     */
    for (let i = 1; i <= days; i++) {
      if (i < 10) {
        take.print(" " + dateQ.deQueue() + "   ");
      }
      if (i > 9) {
        take.print("" + dateQ.deQueue() + "   ");
      }
      if ((calcDay + i) % 7 == 0) {
        console.log();
      }
    }
    console.log("\n");
  } catch (error) {
    console.log(error.message);
  }
}
call();
