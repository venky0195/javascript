/**************************************************************************
 * Execution        : Default node             cmd> node unorderedLinkedList.js
 * Purpose          : Take a user input to search a Word in the List. If the Word is not found then add it
                      to the list, and if it found then remove the word from the List.
 * @description      
 * @file            : unorderedLinkedList.js
 * @overview        : Read the Text from a file, split it into words and arrange it as Linked List.
                      Take a user input to search a Word in the List. If the Word is not found then add it
                      to the list, and if it found then remove the word from the List. In the end save the
                      list into a file
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 31/01/2019
 ***************************************************************************/
var readline = require("readline-sync");
 /*
For accessing data from utility file and utilityDataStructure
*/
var access = require("../Utility/utility");
var accessDs = require("../Utility/utilityDataStructure")
/**
 * Read the file and store it an array
 */
var arr = access.fileRead();
/**
 * Create a linked list object
 */
var linkedList = new accessDs.LinkedList;
/**
 * loop till the end of the lenght of array and add all the elements to the list.
 */
for(let i = 0; i<arr.length; i++)
{
    linkedList.add(arr[i]);
}
/**
 * To print the contents of the list
 */
var contents = linkedList.printList();
console.log("Data in the list: "+contents);
/**
 * Ask user to enter a word to search in the list.
 */
var word = readline.question("Enter the word to remove: ")
/**
 * Check whether the word is present in the list or not by using search function.
 */
var result = linkedList.search(word)
console.log("Word in the list: "+result);
/**
 * Condition to check if the word is present in the list or not.
 * If it is present, remove the word from the list, else add the word to the list
 */
if(result === true){
    linkedList.removeItem(word);
    var output = linkedList.printList();
    access.fileWrite('sample.txt', output)
    console.log("Removed the word from the list since the word is already present ");
    console.log("New data: "+output)
    
} else{
    linkedList.add(word);
    var output1 = linkedList.printList();
    access.fileWrite('sample.txt', output1)
    console.log("Word added successfully ");
    console.log("New data: "+output1)
    
    
}