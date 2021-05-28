console.log('Welcome to password validator')

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question('Please enter your password for validation', function (answer) {
    console.log('the password you entered is', answer)
    if (answer.length >= 10) {
        console.log('success: your password is at least 10 characters')
    } else {
        console.log('failure: your password must be at least 10 characters')
    }
})