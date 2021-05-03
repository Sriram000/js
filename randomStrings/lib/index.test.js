var randomStrings = require("./index.js");
var randomBetween = randomStrings.randomBetween;
var getRandomCharacter = randomStrings.getRandomCharacter;
var getRandomString = randomStrings.getRandomString;
var getRandomStringArray = randomStrings.getRandomStringArray;

var getArrayDetails = function(array) {
    var details = {};
    for(var i=0;i<array.length;i++) {
        var item = array[i];
        if(details[item]===undefined) {
            details[item] = 1;
        }
        else {
            details[item] += 1;
        }

    }
    return details;
}

var testRandomBetween = function() {
    var start = 0;
    var end = 99;
    var numberOfItems = end - start + 1;
    var probabilityOfOneItem = 1/numberOfItems;
    var expectedMinimumPercentForAnItem = 0.8;
    var minimumThreshold = expectedMinimumPercentForAnItem * probabilityOfOneItem;
    var tries = 10000;
    var results = [];

    for(var i=0;i<tries;i++) {
        var result = randomBetween(start,end);
        if(result < start || result > end) {
            console.log("randomBetween test failed");
            console.log(result);
            return;
        }
        results.push(result);
    }

    var details = getArrayDetails(results);
    var itemCounts = Object.values(details);
    var expectedMinimumCount = tries * minimumThreshold;
    var actualMinimumCount = Math.min(...itemCounts);

    if(actualMinimumCount < expectedMinimumCount) {
        console.log("randomBetween test failed");
    }
    else {
        console.log("randomBetween test passed");
    }
}

var isAlphabet = function(character){
    var asciiCode = character.charCodeAt(0);
    var result = asciiCode >= 65 && asciiCode <= 90;
    return result;
}

var testGetRandomCharacter = function(){
    for(var i=0;i<1000;i++){
        var result = getRandomCharacter();
        if(!isAlphabet(result)){
            console.log("getRandomCharacter test failed");
            return;
        }
    }
    console.log("getRandomCharacter test passed");
    console.log(result);
}

var isAlphabetString = function(randomArray){
    for(var i=0;i<randomArray.length;i++){
        if(!isAlphabet(randomArray[i])){
            return false;
        }
    }
    return true;
}

var testGetRandomString = function(){
    var length = 10;
    for(var j=0;j<1000;j++){
        var result = getRandomString(length);
    
        if(length!=result.length || !isAlphabetString(result)){
            console.log("getRandomString test failed");
            return;
        }
    }
    console.log("getRandomString test passed");
    console.log(result);
}

var testgetRandomStringArray = function(){
    var i;
    var length = 20;
    for(i=0;i<1000;i++){
        var randomArray = getRandomStringArray(length);
        if(length!=randomArray.length || !isAlphabetString(randomArray)){
            console.log("getRandomStringArray test failed");
            return;
        }
    }
    console.log("getRandomStringArray test passed");
    console.log(randomArray);

}

testRandomBetween();
//testGetRandomCharacter();
//testGetRandomString();
//testgetRandomStringArray();





