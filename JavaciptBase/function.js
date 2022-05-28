
function retStr() { 
    return "hello world!!!" 
 }  
 var val = retStr() 
 console.log(val) 

 //Default function parameters

 function addTwoNumbers(first,second = 10){
    console.log('first parameter is :',first)
    console.log('second parameter is :',second)
    return first+second;
 }

 console.log("case 1 sum:",addTwoNumbers(20)) // no value
 console.log("case 2 sum:",addTwoNumbers(2,3))
 console.log("case 3 sum:",addTwoNumbers())
 console.log("case 4 sum",addTwoNumbers(1,null))//null passed
 console.log("case 5 sum",addTwoNumbers(3,undefined))

 //function contrucstor

 var func = new Function("x", "y", "return x*y;"); 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result)
} 
product()

//Generator Functions

function* rainbow() { 
    // the asterisk marks this as a generator 
    yield 'red'; 
    yield 'orange'; 
    yield 'yellow'; 
    yield 'green'; 
    yield 'blue'; 
    yield 'indigo'; 
    yield 'violet'; 
 } 
 for(let color of rainbow()) { 
    console.log(color); 
 } 

 
 function* ask() { 
    const name = yield "What is your name?"; 
    const sport = yield "What is your favorite sport?"; 
    return `${name}'s favorite sport is ${sport}`; 
 }  
 const it = ask(); 
 console.log(it.next()); 
 console.log(it.next('Ethan'));  
 console.log(it.next('Cricket')); 