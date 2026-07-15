function Substraction(Value1 : number, Value2 : number) : number
{
    var Result : number = 0;

    Result = Value1 - Value2;
    return Result;
}

var No1 : number = 11;
var No2 : number = 10;
var Ans : number = 0;

Ans = Substraction(No1,No2);

console.log("Substraction is :" + Ans);