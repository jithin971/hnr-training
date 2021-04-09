class Student  
{  
    RollNo: number;  
    Name: string;   
    constructor(_rollNo: number, _name: string)   
    {  
        this.RollNo = _rollNo;  
        this.Name = _name;  
    }  
    showDetails()  
    {  
        console.log(this.RollNo + " : " + this.Name);  
    }  
}

let std1=new Student(101,'john')
std1.showDetails();

// export class Coordinate {
//     static x: number=100;
//     static y: number=2;
//     static gradient() {
//         return this.x/this.y;
//     }
// }
// console.log(Coordinate.gradient())
