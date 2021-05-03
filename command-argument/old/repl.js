const prompt = require('prompt-sync')();
 
while(true){
    var userInput = prompt(">");
    if(userInput=="exit")
    {
        console.log("Thankyou");
        break;
    }
    else if(userInput=="add"|| userInput=="subtract"||userInput=="multiply"||userInput=="divide")
    {

        var number1 =  parseInt(prompt("number1: "));
        var number2 = parseInt(prompt("number2: "));
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