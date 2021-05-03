  var isPalindrome = function (string) {
    var i ;
    var j;
    var s = string.length - 1;
    
    for (i = s; i >0 ; i--) {
      
      for( j = 0;j < s; j=j+1){
        
        if (string[i] == string[j]) {
          
          console.log('Palindrome');
          break;
        } else {
          console.log('Not a Palindrome');
          break;
        }
      }
    }
  };
  isPalindrome("level");