// var num = 10 
// function test() { 
//    var num = 100 
//    console.log("value of num in test() "+num) 
// } 
// console.log("value of num outside test() "+num) 
// test()

//Pham vi let va khoi 
// "use strict" 
// function test() { 
//     var num = 100 
//     console.log("value of num in test() "+num) 
//     { 
//        console.log("Inner Block begins") 
//        let num = 200 
//        console.log("value of num : "+num)  
//     } 
//  } 
//  test()
 //Constants are Immutable

 let income = 100000
   const INTEREST_RATE = 0.08
   income += 50000 // mutable
   console.log("changed income value is ",income)
   INTEREST_RATE += 0.01
   console.log("changed rate is ",INTEREST_RATE) //Error: not mutable