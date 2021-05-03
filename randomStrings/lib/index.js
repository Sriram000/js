var randomBetween= function(min,max){
    var random= Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

var getRandomCharacter = function(){
    var randomAlphabetCode = randomBetween(65,90);
    var character = String.fromCharCode(randomAlphabetCode);
    return character;
}

var getRandomString = function(length){
    var i=0;
    var str="";
    for(i=0;i<length;i++){
        var char = getRandomCharacter();
        str= str+char;
    }
    return str;
}


var getRandomStringArray = function(length){
    var i=0;
    var str=[];
    for(i=0;i<length;i++){
        var string = getRandomString(10);
        str.push(string);
    }
   return str;
}

module.exports={ 
    "randomBetween" : randomBetween,
    "getRandomCharacter" : getRandomCharacter,
    "getRandomString" : getRandomString,
    "getRandomStringArray" : getRandomStringArray,
}