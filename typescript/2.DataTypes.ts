// typeScript =Static=>generic=>Decorators
// static=Builtin and userDefined
//Built in =number,void,string,null,boolean
//userDefined=array,class,touple,enum,interface,function

//number
let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377 ;           // octal  
let fourth: number = 0b111001;        // binary  
console.log(first);           // 123  
console.log(second);          // 14287  
console.log(third);           // 255  
console.log(fourth); 

//string
let empName: string = "Rohan";   
let empDept: string = "IT";

// Before-ES6
let output1: string = empName + " works in the " + empDept + " department.";  
// After-ES6   
let output2: string = `${empName} works in the ${empDept} department.`;  
console.log(output1);//Rohan works in the IT department.   
console.log(output2);//Rohan works in the IT department.

// Boolean

let isDone: boolean = false;  

// Void
let unusable: void = undefined;  

let tempNum: void = undefined;  
tempNum = null;      
// tempNum = 123; 

// Any Type

let val: any = 'Hi';  
val = 555;   // OK  
val = true;   // OK     

function ProcessData(x: any, y: any):any {  
    return x + y;  
}  
let result: any;  
result = ProcessData("Hello ", "Any!"); //Hello Any!  
console.log(result)
result = ProcessData(2, 3); //
console.log(result)

//array

var list : number[] = [1, 3, 5]; 
var list : number[] = [1, 3, 5]; 
//typeAsssert
var lista : Array<number> = [1, 3, 5];  
var lists : Array<string> = ['a', 'b','c']; 

// Tuple
let tuple: [string, number,string,number,boolean,number[]];  
tuple = ["hi", 8, "how", 5,true,[1,2,3]];

console.log("touple",tuple)



//Enum
enum Color {  
    Red, Green, Blue  
};  
let c: Color;  
c = Color.Green;  


function identity<T>(arg: T): T {  
    return arg;  
}  
let output1a = identity<string>("myString");  
let output2b = identity<number>( 100 );  
console.log("output1a",output1a)