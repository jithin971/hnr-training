// The TypeScript compiler uses interface for type-checking that is also known as "duck typing" or "structural subtyping."

interface Employee{
    name:string;
    age:number
}

let emp1:Employee={name:"raju",age:20}

// ------------------------------

interface IItem 
{
    id: number,
    title: string
};

function display(item: IItem) 
{
    console.log(`${item.id}-${item.title}`);
}

var soap : IItem = {
    id: 10,
    title : "Soap"
};

display(soap);

interface IProduct
{
    id: number,
    title: string,
    author: string
};
var book: IProduct = {
    id: 1,
    title: "Welcome to js",
    author: "Jonn"
};
display(book);