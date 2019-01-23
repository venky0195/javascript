module.exports = {
    stringReplace(username) {
        
        if (username.length > 3 || !isNaN(username)) {
            try {
                var input = 'Hello <<UserName>>, How are you?';
                
            } catch (err) {
                console.log(err);
            }
            var output = input.replace(/<<UserName>>/g, username);   
            //searches for <<UserName>> in the program and replaces it with the input
            console.log(output);
        
        }
        else {
            console.log('Please enter characters more than 3');
        }
    
    },

}