var alphas; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

//array method
var numbers = [1, 2, 3]; 
var oddNumber = numbers.find((x) => x % 2 == 1); 
console.log(oddNumber); 

//Array.prototype.findIndex
var numbers = [1, 2, 3]; 
var oddNumber = numbers.findIndex((x) => x % 2 == 1); 
console.log(oddNumber); 

//Array.prototype.entries

var numbers = [1, 2, 3]; 
var val = numbers.entries(); 
console.log(val.next().value);  
console.log(val.next().value);  
console.log(val.next().value);