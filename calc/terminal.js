var Operations = require("./lib/op.js");

var main = function(){
    var command = process.argv[2];
    var number1 = Number(process.argv[3]);
    var number2 = Number(process.argv[4]);

    var operation = Operations[command];
    
    if(operation === undefined) {
        console.log("Unknown command:",command);
    }
    else {
        var result = operation(number1,number2);
        console.log(command, number1, number2);
        console.log(result);
    }
}

main();