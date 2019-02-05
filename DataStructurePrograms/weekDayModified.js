/**************************************************************************
 * Execution        : Default node             cmd> node weekDayModified.js 
 * @file            : weekDayModified.js
 * @overview        : To Create the Week Object having a list of WeekDay objects each storing the day 
                      (i.e S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects are stored in a Queue
                      implemented using Linked List. Further maintain also a Week Object in a Queue to
                      finally display the Calendar.To store the Queue in two Stacks. Stack here is also
                      implemented using Linked List.
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
     * Create 4 stacks.
     */
    var weekDays = new utilityDs.Stack();
    var stack1 = new utilityDs.Stack();
    var dateQ = new utilityDs.Stack();
    var stack2 = new utilityDs.Stack();
    /**
     * Create a calendar object to access methods in it
     */
    var calendar = new utilityDs.Calendar();
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
    var calcDay = calendar.day(month, 1, year);
    /**
     * Store the weeks in a week variable
     */
    var week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];
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
     * Loop to push the weekdays into stack.
     */
    for (let i = 0; i < week.length; i++) {
      weekDays.push(week[i]);
    }
    /**
     * Loop to push the dates into stack.
     */
    for (let i = 1; i <= days; i++) {
      dateQ.push(i);
    }
    /**
     * Loop the week days and push it to another stack.
     */
    for (let i = 0; i < week.length; i++) {
      stack1.push(weekDays.pop());
    }
    /**
     * Loop the number of days and push it to another stack.
     */
    for (let i = 1; i <= days; i++) {
      stack2.push(dateQ.pop());
    }
    /**
     * To print weekdays.
     */
    for (let i = 0; i < week.length; i++) {
      take.print(stack1.pop() + "  ");
    }
    console.log();
    for (let i = 0; i < calcDay * 5; i++) {
      take.print(" ");
    }
    /**
     * To print days using spacing.
     */
    for (let i = 1; i <= days; i++) {
      if (i < 10) {
        take.print(" " + stack2.pop() + "   ");
      }
      if (i > 9) {
        take.print("" + stack2.pop() + "   ");
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
