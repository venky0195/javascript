module.exports = {
    stringReplace(username) {

        if (username.length > 3) 
        {
            var input = 'Hello <<UserName>>, How are you?';
            var output = input.replace(/<<UserName>>/g, username);
            //searches for <<UserName>> in the program and replaces it with the input
            console.log(output);

        }
        else 
        {
            console.log('Please enter characters more than 3');
        }

    },

}