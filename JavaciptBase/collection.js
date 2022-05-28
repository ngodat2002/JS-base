var map = new Map(); 
map.set(1,true); 
console.log(map.has("1")); 
console.log(map.has("1")); 

//set

var roles = new Map(); 
roles.set('r1', 'User') 
.set('r2', 'Guest') 
.set('r3', 'Admin'); 
console.log(roles.has('r1'))

//for of loop

var roles = new Map([ 
    ['r1', 'User'], 
    ['r2', 'Guest'], 
    ['r3', 'Admin'], 
 ]);
 for(let r of roles.entries()) 
 console.log(`${r[0]}: ${r[1]}`);

 //set and iterator
 var  set = new Set(['a','b','c','d','e']);  
var iterator = set.entries(); 
console.log(iterator.next())
//Map and Iterator
var map = new Map([[1,'one'],[2,'two'],[3,'three']]); 
var iterator = map.entries(); 
console.log(iterator.next()); 