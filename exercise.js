
var isEligibleToVote = function(){
    
}
var age = isEligibleToVote(1);
if(age>=18)
    {
        console.log("Eligible To Vote");
    }
else{
        console.log("Not Eligible To Vote");
    }


var command = "multiply";

var add = function(num1,num2){
    return num1+num2;

}
var multiply = function(num1,num2){
    return num1*num2;

}
if(command=="add")
{
    console.log(add(10,10));
}
else if(command=="multiply")
{
    console.log(multiply(10,10));

}
var command = "multiply";
var result1 = add(10,10);
var result2 = multiply(10,10);

var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var newArray = [0,1,2,3,4,5,6,7,8,9,10];
var i;
var j;
var k = numbers;
var l = newArray;
for(i=0;i<numbers.length;i++)
{ 
for(j=0;j<newArray.length;j++)
{
    if(k[i]==l[i])
    {
        if(l[i]%2==0)
        {
            console.log("Even");
        }
        else
        {
            console.log("Odd");
        }



    }

}
}

var arr = [1];
var obj = {
    value:1
};
console.log(arr[0]);
console.log(obj['value']);

var isOdd = function(num){
    return num%2==0;
}
console.log(isOdd(0));
