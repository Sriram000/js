var add = function(number1,number2){
    var result= number1+number2;
    return result;
}

var main = function(){
    var command = process.argv[2];
    var number1 = Number(process.argv[3]);
    var number2 = Number(process.argv[4]);
    if(command=="add"){
        var result = number1 + number2;
    }
    console.log(command, number1, number2);
    console.log(result);
}

main();