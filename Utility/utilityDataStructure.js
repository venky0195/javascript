/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js
 *  Purpose         : TO deploy all the business logic of the dataStructure programs.
 *
 *  @description
 *
 *  @file           : utility.js
 *  @overview       : All the business logic are coded here.
 *  @module         : read-line modules are installed
 *  @author         : VENKATESH G   <ven.venky08@gmail.com>
 *  @version        : 1.0.
 *  @since          : 31/01/2019
 ******************************************************************************/

var take = require("util");
var utility = require("../Utility/utility");

class Node {
  /**
   * class Node has two properties, data holds the data of a node while-
   * next holds the pointer to the next node, which is initialized to the null value.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/****************************************************LinkedList**************************************/
class LinkedList {
  /**
   * Linked List class has two properties, where head stores the first node of a List,
   * and size indicates the number of nodes in a list.
   */
  constructor() {
    this.head = null;
    this.size = null;
  }

  /**
   * to add data to the end of the list
   * @param:  String to add.
   */
  add(data) {
    try {
      var node = new Node(data);
      /**
       * To store current data
       */
      var current = this.head;
      /**
       * if list is empty, add the data and make it head
       */
      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;
        /**
         * Iterate to the end of the list
         */
        while (current.next) {
          current = current.next;
        }
        /**
         * Add the node
         */
        current.next = node;
      }
      this.size++;
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * Searches for item in the list. It need the item and returns a boolean value.
   * @param : String to search.
   */
  search(data) {
    try {
      var temp = this.head;
      /**
       * Iterate to the end of the list
       */
      while (temp) {
        /**
         * Return true if the passed data is equal to the data, else return false
         */
        if (temp.data == data) {
          return true;
        }
        temp = temp.next;
      }
      return false;
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * Removes data from the list. It need the data and modifies the list.
   * @param : data to accept string.
   */
  removeItem(data) {
    try {
      var current = this.head;
      var prev = null;

      while (current != null) {
        /**
         * comparing data with current data. If found, then remove and return true .
         */
        if (current.data == data) {
          if (prev == null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
          this.size--;
          return true;
        }
        prev = current;
        current = current.next;
      }
      return false;
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * prints the list items
   */
  printList() {
    try {
      var curr = this.head;
      var str = "";
      while (curr) {
        str += curr.data + " ";
        curr = curr.next;
      }
      return str;
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * To insert an element at the given index in list.
   * @param: {element}: accepts element to add.
   *         {index}: Number to specify the index to add the element.
   */
  insertAt(element, index) {
    try {
      if (index > 0 && index > this.size) return false;
      else {
        /**
         * Create a new node and pass the element
         */
        var node = new Node(element);
        var curr, prev;
        curr = this.head;
        /**
         * add the element to the first index
         */
        if (index == 0) {
          node.next = this.head;
          this.head = node;
        } else {
          curr = this.head;
          var it = 0;
          /**
           * iterate over the list to find the position to insert
           */
          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }
          /**
           * Adding the element.
           */
          node.next = curr;
          prev.next = node;
        }
        this.size++;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * To get the position of the index.
   * @param {array} arr
   * @param {Number} num
   */
  addpos(arr, num) {
    try {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[0] >= num) return 0;
        else if (arr[i] < num && arr[i + 1] > num) {
          return i + 1;
        }
      }
      return arr.length;
    } catch (error) {
      console.log(error.message);
    }
  }
}
/***********************************************Stack************************************************/

class Stack {
  constructor() {
    this.items = [];
  }
  /**
   * To add an element at the top of the stack.
   * @param {any} element
   */
  push(element) {
    /**
     * Push elements in the items
     */
    this.items.push(element);
  }
  /**
   * return top most element in the stack and removes it from the stack.Underflow if stack is empty
   */
  pop() {
    try {
      if (this.items.length == 0) {
        return "Underflow";
      }
      return this.items.pop();
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * Return the topmost element without removing it from the stack.
   */
  peak() {
    return this.items[this.items.length - 1];
  }
  /**
   * Returns true if the stack is empty.
   */
  isEmpty() {
    return this.items.length == 0;
  }
  /**
   * Returns the size of the stack
   */
  size() {
    return this.items.length;
  }
  /**
   * Returns the contents of the stack
   */
  printStack() {
    try {
      var str = "";
      for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
      return str;
    } catch (error) {
      console.log(error.message);
    }
  }
}
/*****************************************************Queue*******************************************/
class Queue {
  constructor() {
    this.items = [];
  }
  /**
   * To add an element into the rear of the queue. push() method of array to add an element at the end of the queue
   * @param {any} element
   */
  enQueue(data) {
    this.items.push(data);
  }
  /**
   * To remove an item from the queue.
   */
  deQueue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  /**
   *return true if the queue is empty.
   */
  isEmpty() {
    return this.items.length == 0;
  }
  /**
   * Returns the size of the queue
   */
  size() {
    return this.items.length;
  }
  /**
   * Returns the contents of the queue
   */
  printList() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
/**********************************************Deque*************************************************/
class Deque {
  constructor() {
    this.items = [];
  }
  /**
   * Adds a new item to the front of the deque.
   * @param {any} element
   */
  addFront(element) {
    this.items.unshift(element);
  }
  /**
   * Adds a new element to the end of the deque.
   * @param {any} element
   */
  addRear(element) {
    this.items.push(element);
  }
  /**
   * Removes the front item from the deque.
   */
  removeFront() {
    if (this.isEmpty()) return "underFlow";
    /**
     * Removes the first element.
     */
    return this.items.shift();
  }
  /**
   * Removes the rear item from the deque.
   */
  removeRear() {
    return this.items.pop();
  }
  /**
   * Tests to see whether the deque is empty.
   */
  isEmpty() {
    return this.items.length == 0;
  }
  /**
   * Returns the number of items in the deque.
   */
  size() {
    return this.items.length;
  }
}
/******************************************************Calendar***************************************/
class Calendar {
  /**
   * To calculate the day using gregorians formula and returns the day
   * @param {Number} month
   * @param {Number} day
   * @param {Number} year
   */
  day(month, day, year) {
    try {
      var v = Math.floor((14 - month) / 12);
      var y0 = year - v;
      var x =
        y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
      var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
      var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
      d0 = Math.floor(d0);
      return d0;
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * Returns true if the year is leap year
   * @param {Number} year
   */
  leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) return true;
    if (year % 400 == 0) return true;
    return false;
  }
  /**
   *Prints the calendar for the month and year given.
   * @param {Number} month
   * @param {Year} year
   */
  showCalendar(month, year) {
    try {
      if (
        !isNaN(month, year) &&
        (0 < month && month < 13) &&
        (999 < year && year < 10000)
      ) {
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
        /**
         * To calculate the day
         */
        var day = this.day(month, 1, year);
        /**
         * Check for leap year
         */
        var leap = this.leapYear(year);
        if ((leap = true)) {
          dates[2] = 29;
        }
        /**
         * To print the week
         */
        for (var i = 0; i < week.length; i++) {
          take.print(week[i] + "  ");
        }
        console.log();
        for (var i = 0; i < day * 5; i++) {
          take.print(" ");
        }
        /**
         * To print the dates.
         */
        for (var i = 1; i <= dates[month]; i++) {
          if (i < 10) {
            take.print(" " + i + "   ");
          }
          if (i > 9) {
            take.print("" + i + "   ");
          }
          if ((i + day) % 7 == 0) {
            console.log();
          }
        }
        console.log("\n\n");
      } else {
        console.log("Not a valid month/year. Enter in MM YYYY format");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}
module.exports = {
  LinkedList,
  Node,
  Stack,
  Queue,
  Deque,
  Calendar,

  factorization(number) {
    var fact = 1;
    for (let i = 1; i <= number; i++) {
      fact = fact * i;
    }
    return fact;
  }
};
