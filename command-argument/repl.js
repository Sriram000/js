const prompt = require('prompt-sync')();
var Operations = require("./lib/operations");

var main = function(){
    
    while(true) {
        var command = prompt(">");
        if(command ==="exit") {
            console.log("Thankyou");
            break;
        }
        else {
            var operation = Operations[command];
            
            if(operation === undefined) {
                console.log("Invalid Input");
            }
            else {
                var number1 = Number(prompt("number1: "));
                var number2 = Number(prompt("number2: "));
                var result = operation(number1, number2);
                console.log(result);
            }
        }

    }
}

main();