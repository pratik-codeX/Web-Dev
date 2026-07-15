class Demo3
{
    // console.log("Inside Class...");
    No1 : number;
    No2 : number;

    constructor(Value1:number,Value2:number)
    {
        this.No1 = Value1;
        this.No2 = Value2;
        console.log("Inside Default Constructor...");
    }

    Display()
    {
        console.log("Inside Display...");
    }
}

var obj1 = new Demo3(10,11);
var obj2 = new Demo3(12,11);

console.log(obj1.No1);
console.log(obj1.No2);
console.log(obj2.No1);
console.log(obj2.No2);
