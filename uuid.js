// const { v4: uuidv4 } = require('uuid');
// for(var i=0;i<10;i++) {
// console.log(uuidv4()); 
// }

const getData = function() {
    const array = [];
    for(let i=0;i<10;i++) {
        const arr = array.push(i);
        console.log(arr);
    }

}
getData();