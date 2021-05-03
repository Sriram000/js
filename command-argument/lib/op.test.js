var Add = require("./op");
var Subtract = require("./op");
var Multiply = require("./op");
var Divide = require("./op");
var Mod = require("./op");
var add = Add.add;
var subtract = Subtract.subtract;
var multiply = Multiply.multiply;
var divide = Divide.divide;
var mod = Mod.mod;

var testAdd = function(number1, number2) {

    var expectation = number1 + number2;
    var actual = add(number1, number2);
    if(expectation !== actual) {
        console.log("add test failed");
        return;
    }
    console.log("add test passed");
}

testAdd(2, 3);

var testSubtract = function(number1, number2) {

    var expectation = number1 - number2;
    var actual = subtract(number1, number2);
    if(expectation !== actual) {
        console.log("subtract test failed");
        return;
    }
    console.log("subtract test passed");
}

testSubtract(2, 3);

var testMultiply = function(number1, number2) {

    var expectation = number1 * number2;
    var actual = multiply(number1, number2);
    if(expectation !== actual) {
        console.log("multiply test failed");
        return;
    }
    console.log("multiply test passed");
}

testMultiply(2, 3);

var testDivide = function(number1, number2) {

    var expectation = number1 / number2;
    var actual = divide(number1, number2);
    if(expectation !== actual) {
        console.log("divide test failed");
        return;
    }
    console.log("divide test passed");
}

testDivide(2, 3);

var testMod = function(number1, number2) {

    var expectation = number1 % number2;
    var actual = mod(number1, number2);
    if(expectation !== actual) {
        console.log("mod test failed");
        return;
    }
    console.log("mod test passed");
}

testMod(2, 3);

var testPower = function(number1, number2) {

    var expectation = number1 % number2;
    var actual = mod(number1, number2);
    if(expectation !== actual) {
        console.log("mod test failed");
        return;
    }
    console.log("mod test passed");
}

testMod(2, 3);