//write function took 3 parameter from that and 
// return maximum value from that

function FindMaximum(No1 :number,No2 : number, No3 : number ): number 
{
    if(No1 > No2 && No1 > No3)
    {
        return No1;
    }
    else if(No2 > No1 && No2 > No3)
    {
        return No2;
    }
    else
    {
        return No3;
    }

}

var Value1 : number = 800;
var Value2 : number  = 98;
var Value3 : number  = 900;

var iRet : number = 0;

iRet = FindMaximum(Value1,Value2,Value3);

console.log("The Maximum Number is :",iRet);
