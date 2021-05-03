var randomBetween= function(min,max){
    var random= Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

var getUuidPart = function(length) {
    var createUuid = "";
    for(var i=0;i<length;i++) {
    var randomNumber = randomBetween(0,15);
    var hexaDecimalNumber = randomNumber.toString(16);
    createUuid = createUuid + hexaDecimalNumber;
    }
    return createUuid;
}

var getUuid = function() {
    var lengths = [8,4,4,4,12];
    var parts = [];
    for(var i=0;i<lengths.length;i++) {
        parts.push(getUuidPart(lengths[i]));
    }
    return parts.join("-");
}

    for(var i=1;i<=10;i++) {
    console.log(getUuid());
    }


// var aplhabets = function(length1, length2) {
//     var i;
//     for(i=length1;i<=length2;i++) {
//         var alphaNum = i;
//         var getChar = String.fromCharCode(alphaNum);
//         console.log(getChar);
//     }   
// }

// aplhabets(91,122);
