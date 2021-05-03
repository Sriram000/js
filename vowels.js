var checkVowel = function(string){
   var count=0;
   for(var i=0;i<string.length;i++)
   {
      if(string[i]=="a"||string[i]=="e"||string[i]=="i"||string[i]=="o"||string[i]=="u")
      {
         
         count++;
      }
      else if(string[i]=="A"||string[i]=="E"||string[i]=="I"||string[i]=="O"||string[i]=="U")
      {
         count++;
      }
      
   }
   console.log(count);
}

checkVowel('The quick brown fox');


var array = function(number){
   var arrayName = [];
   for(var i=0;i<number;i++){
      arrayName.push(i);
      
   }
   console.log(arrayName);
   
}
array(10);