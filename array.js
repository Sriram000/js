
var array = [3,2,2,4,3];
var reverseArray = function(){
    var result =[]; 
    for(var i=array.length-1;i>=0;i--){
       result.push(array[i]);
    }
    console.log(result);
    

   
}
reverseArray();

 

var isPalindrome = function(string){
    var result= stringReverse(string);
    return result==string;
}

var checkPalindrome = function(str){
    var strings = [" "];
    for(var i=str.length-1;i>=0;i--)
    {
        var char = strings[i];
        strings= char+strings[i];

    }
    return strings;

}
var display = function(input){
    var output = isPalindrome(input)
}
display("madam");