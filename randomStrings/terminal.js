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

var main = function() {
    var command = process.argv[2];
    var length = Number(process.argv[3]);

    var action = Actions[command];

    if(action === undefined) {
        console.log("Unknown command:", command);
        showAvailableCommands();
    }
    else {
        var result = action(length);
        console.log(result);
    }
}

main();