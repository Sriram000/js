var inputs = [
    'add',
    '2',
    '2',
    'subtract',
    '2',
    '2',
    'multiply',
    '2',
    '2',
    'divide',
    '2',
    '2',
    'hello',
    'exit',
    
];
var input = function () {
  var result = inputs.shift();
  return result;
}
while(true){
    var userInput = input();
    if(userInput=="exit")
    {
        console.log("Thankyou");
        break;
    }
    else if(userInput=="add"|| userInput=="subtract"||userInput=="multiply"||userInput=="divide")
    {

        var number1 =  parseInt(input());
        var number2 = parseInt(input());
        if(userInput=="add"){
            display=number1+number2;
        }
        else if(userInput=="subtract"){
            display=number1-number2;
        }
        else if(userInput=="multiply"){
            display=number1*number2;
        }
        else if(userInput=="divide"){
            display=number1/number2;
        }
        console.log(display);
    }
    else{
        console.log("Invalid Input");
    }

}
input();
console.log("done");