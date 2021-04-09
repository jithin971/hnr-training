
// Method Overriding is a concept of Inheritance in Classes where a child class can override a function of a parent class. In this, child class may or may not use the logic of a function defined in parent class.
// We use super keyword to refer to the functions or fields of the immediate parent class.
class ParentClass { 
    display():void {
       console.log("Display method from Parent Class!") 
    } 
 } 
  
 class ChildClass extends ParentClass { 
    display():void { 
       super.display() 
       console.log("dislay method from Child Class!")
    } 
    hello():void{
        console.log("Hello from Child Class!");
    }
 } 
  
 var parentObj = new ParentClass();
 parentObj.display();
 var childObj = new ChildClass();
 childObj.display();
 childObj.hello();
