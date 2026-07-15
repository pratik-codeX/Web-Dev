class Demo2
{
    // console.log("Inside Class...");
    No1 : number;
    No2 : number;

    constructor()
    {
        this.No1 = 0;
        this.No2 = 0;
        console.log("Inside Default Constructor...");
    }

    Display()
    {
        console.log("Inside Display...");
    }
}

var dobj = new Demo();

console.log(dobj.No1);
console.log(dobj.No2);
