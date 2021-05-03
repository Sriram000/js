const prompt = require('prompt-sync')();
var lib = require("./lib/index.js");

var Actions = {
    "getRandomString": lib.getRandomString,
    "getRandomStringArray": lib.getRandomStringArray,
};

var showAvailableCommands = function() {
    var availableCommands = Object.keys(Actions);
    console.log("Available Commands");
    for(var i=0;i<availableCommands.length;i++) {
        console.log(availableCommands[i]);
    }
}

var main = function(){
    
    while(true) {
        var command = prompt(">");
        if(command ==="exit") {
            console.log("Thankyou");
            break;
        }
        else {
            var action = Actions[command];
            
            if(action === undefined) {
                console.log("Unknown command");
                showAvailableCommands();
            }
            else {
                var length = Number(prompt("length:"));
                var result = action(length);
                console.log(result);
            }
        }

    }
}

main();