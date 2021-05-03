var ispalindrome= function(string){
    var result = reverseString(string);
    return string == result;
}

var reverseString = function(source) {
   var resultString = "";

    var i;
    for(i=0;i<source.length;i++){
        var char = source[i];
        resultString = char+resultString;
        
    }
    return resultString;
   
}
    
var display = function(input) {
    
    var output = ispalindrome(input); 

    console.log(output);
}
display("level");

