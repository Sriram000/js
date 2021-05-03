var randomBetween= function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

const getRandomItems = function(array) {

    const result = [];

    while(result.length<array.length/2) {
       let j = randomBetween(0, array.length-1);
       if( !result.includes(array[j]) ) {
        result.push(array[j]);
       }
    }
    return result;
    // [1, 2, 3].includes(2)  

}

console.log(getRandomItems([2,3,4,7,6,8,10,11,12,13,14,16]));