var randomBetween= function(min,max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getRandomArray = function(count){
   var Numbers=[];
   for(var i=0;i<count;i++){
      var result = randomBetween(65,90);
      Numbers.push(result);
      
   }
   return Numbers;
}

var getSameNumbers = function(randomArray){
   var sameNumbers = [];
   for(var i=0;i<randomArray.length;i++){
      for(var j=i+1;j<randomArray.length;j++){
         if(randomArray[i]==randomArray[j]){
            sameNumbers.push(randomArray[j]);
         }
      }
   }
   
   return sameNumbers;
}
var main = function(){
   // console.log(randomBetween(65,90));
   // getSameNumbers();
   var randomArray=getRandomArray(10);
   console.log(randomArray);
   
   var sameNumbers = getSameNumbers(randomArray);
   console.log(sameNumbers);
}

main();
