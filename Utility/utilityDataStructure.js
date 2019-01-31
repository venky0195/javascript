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
   */
  add(data) {
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
  }
  /**
   * Searches for item in the list. It need the item and returns a boolean value.
   */
  search(data) {
    var temp = this.head;
    /**
     * Iterate to the end of the list
     */
    while (temp) {
        /**
         * Return true if the passed data is equal to the data, else return false
         */
      if (temp.data === data) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
  /**
   * Removes data from the list. It need the data and modifies the list. 
   */
  removeItem(data){
    var current = this.head;
    var prev = null;

    while(current!=null)
    {
        /**
         * comparing data with current data. If found, then remove and return true .
         */
        if (current.data === data) { 
            if (prev == null) { 
                this.head = current.next; 
            } else { 
                prev.next = current.next; 
            } 
            this.size--; 
            return true
        } 
        prev = current; 
        current = current.next; 
    } 
    return false; 
    }
    /**
     * prints the list items 
     */
    printList(){
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.data + " "; 
            curr = curr.next; 
        } 
        return str;
    }
  }
  
  module.exports={LinkedList, Node}
