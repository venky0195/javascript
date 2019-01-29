/**************************************************************************
 * Execution        : Default node             cmd> node searchWord.js
 * Purpose          : To search the Word from Word List
 * @description      
 * @file            : searchWord.js
 * @overview        : Read in a list of words from File. Then prompt the user to enter a word to
                      search the list. The program reports if the search word is found in the list.
 * @module          : read-line modules are installed.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 29/01/2019
 ***************************************************************************/
/*
For accessing data from utility file
*/
var Access = require("../Utility/utility");
/*
 *Invoking searchWord function from utility.js.
 */
Access.searchWord();
