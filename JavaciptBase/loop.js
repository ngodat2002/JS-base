//for 
for(let temp, i = 0, j = 1; j<30; temp = i, i = j, j = i + temp)
console.log(j);

//for .. in
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
   console.log(obj[prop]);
}

//for of

for (let val of[12 , 13 , 123]){
    console.log(val)
 }

//while loop
var num = 5;
var factorial = 1;
while(num >=1) {
factorial = factorial * num;
num--;
}
console.log("The factorial is "+factorial);

//do ... while loop
var m = 10;
do {
   console.log(n);
   n--;
}
while(m >= 0);

