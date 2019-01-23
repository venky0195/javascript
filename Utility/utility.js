module.exports = {
    //Functional Programs
     /*
     * @Purpose     : Ensuring username with minimum 3 characters and only alphabets,
                      replacing <<UserName>> with userinput and print the string.
     * @description : Declaring the function and passing the userinput as argument.
     * @function    : stringReplace function takes the userinput and replaces <<UserName>>.
     */
     stringReplace(username) {
    
        if (username.length>=3 && isNaN(username))
        {
            var input = 'Hello <<UserName>>, How are you?';
            var output = input.replace(/<<UserName>>/g, username);
            //searches for <<UserName>> in the program and replaces it with the input
            console.log(output);
        }
        else 
        {
            console.log('Please enter characters more than 3, only alphabets');
        }

    },

}