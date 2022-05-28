class Polygon { 
    constructor(height, width) { 
       this.h = height; 
       this.w = width;
    } 
    test() { 
       console.log("The height of the polygon: ", this.h) 
       console.log("The width of the polygon: ",this. w) 
    } 
 } 
 

 var polyObj = new Polygon(10,20); 
 polyObj.test();     

 //setters 

 class Student {
    constructor(rno,fname,lname){
       this.rno = rno
       this.fname = fname
       this.lname = lname
       console.log('inside constructor')
    }
    set rollno(newRollno){
       console.log("inside setter")
       this.rno = newRollno
    }
 }
 let s1 = new Student(101,'Sachin','Tendulkar')
 console.log(s1)
 //setter is called
 s1.rollno = 201
 console.log(s1)

 //getters

 class Student {
    constructor(rno,fname,lname){
       this.rno = rno
       this.fname = fname
       this.lname = lname
       console.log('inside constructor')
    }
    get fullName(){
       console.log('inside getter')
       return this.fname + " - "+this.lname
    }
 }
 let s1 = new Student(101,'Sachin','Tendulkar')
 console.log(s1)
 //getter is called
 console.log(s1.fullName)

 //static

 class StaticMem { 
    static disp() { 
       console.log("Static Function called") 
    } 
 } 
 StaticMem.disp()

 //class Inheritance
 class Shape { 
    constructor(a) { 
       this.Area = a
    } 
 } 
 class Circle extends Shape { 
    disp() { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 } 
 var obj = new Circle(223); 
 obj.disp()
 //super keyword

 class PrinterClass { 
    doPrint() {
       console.log("doPrint() from Parent called…") 
    } 
 }  
 class StringPrinter extends PrinterClass { 
    doPrint() { 
       super.doPrint() 
       console.log("doPrint() is printing a string…") 
    } 
 } 
 var obj = new StringPrinter() 
 obj.doPrint()