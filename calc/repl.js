const prompt = require('prompt-sync')();
var Operations = require("./lib/op.js");

var main = function(){

    while(true) {
        var command = prompt(">");
        if(command === "exit") {
            console.log("Thank you");
            break;
        }
        else {
            var operation = Operations[command]
            if(operation === undefined) {
                console.log("Unknown command");
            }
            else {
                var number1 = Number(prompt("Number1: "));
                var number2 = Number(prompt("Number2: "));
                var result = operation(number1,number2);
                console.log(result);
                
            }
        }

    }
}

main();