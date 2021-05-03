var add = function(number1, number2){
    var result = number1 + number2;
    return result;
}

var subtract = function(number1, number2){
    var result = number1 - number2;
    return result;
}

var multiply = function(number1, number2){
    var result = number1 * number2;
    return result;
}

var divide = function(number1, number2){
    var result = number1 / number2;
    return result;
}

var mod = function(number1, number2){
    var result = number1 % number2;
    return result;
}

module.exports = {
    "add": add,
    "subtract": subtract,
    "multiply": multiply,
    "divide": divide,
    "mod": mod,
}