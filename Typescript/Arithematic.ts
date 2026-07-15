class Arithmatic
{
    public No1:number;
    public No2:number;

    constructor(A:number,B:number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition():number
    {
        return this.No1 + this.No2;
    }
}

var Value1:number = 11;
var Value2:number = 21;

var obj = new Arithmatic(Value1,Value2);

var Ret : number = obj.Addition()
console.log("Addition is :",Ret)