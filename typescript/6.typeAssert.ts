let empCode: any = 111;   
let employeeCode = <number> empCode;   
console.log(typeof(employeeCode)); //Output: number  


// TypeScript provides two ways to do Type Assertion. They are

// Using Angular Bracket <>
// Using as keyword

let empCode1: any = 111;   
let employeeCode1 = empCode1 as number;   
console.log(typeof(employeeCode1)); //Output: number  

// let student = { };  
// student.name = "Rohit"; //Compiler Error: Property 'name' doesn?t exist on type '{}'  
// student.code = 123;

interface Employee {   
    name: string;   
    code: number;   
}  
let employee = <Employee> { };   
employee.name = "Rohit"; // Correct  
employee.code = 123; // Correct  

console.log(employee)

//type assertion is a mechanism which tells the compiler about the type of a variable
//Type assertion works like typecasting, but it does not perform type checking or restructuring 