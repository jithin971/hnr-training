//In TypeScript, it is not necessary to annotate type always.
// The TypeScript compiler infers the type information when there is no explicit information available in the form of type annotations.

var x = "JavaTpoint";  
var y = 501;  
// x = y; 

let arr2 = [ 10, 20, "JavaTpoint" ];  

//The return type of a function is also inferred by the returning value.
function sum(x: number, y: number )  
{  
    return x + y;      
}  
let Addition: number = sum(10,20); // Correct  
// let str: string = sum(10,20); // Compiler Error  