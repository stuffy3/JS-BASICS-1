const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please insert password to validate.", function(answer) {
    if(answer.length >= 10) {
        console.log("Thank you for validating.")
    } else if (answer.length < 10) {
        console.log("Unable to validate, make sure your password is 10 charaters long or more.")
    }
    reader.close()
});