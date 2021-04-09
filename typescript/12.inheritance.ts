// Single Inheritance
// Multilevel Inheritance
// Multiple Inheritance
// Hierarchical Inheritance
// Hybrid Inheritance


// Inheritance is a concept in which we reuse the properties and methods of another class or interface, 
// hence no need to rewrite the code again and again.
// We use extend keyword to inherit other interfaces and classes.
// We use an existing class to create a new class.
// The class that is used to create the new class is called as parent class/super class.
// The newly created class is called as child class/sub class.
// Child class inherits all the fields and methods from the parent class except the private fields and constructor.


class Shape {   
    Area:number   
    constructor(area:number) {   
       this.Area = area  
    }   
 }   
 class Circle extends Shape {   
    display():void {   
       console.log("Area of the circle: "+this.Area)   
    }   
 }  
 var obj = new Circle(320);   
 obj.display() 