///////////////////////////////////////////////////////////////////////
//  	Function Name  	:  ChkPrime
//  	Description    	:  used to Check Number is prime or not
//  	Input          	:  number
//		Output         	:  number
//		Date           	:  6/30/2026
//  	Author		:  Pratik Raut
///////////////////////////////////////////////////////////////////////

function ChkPrime(No :number): boolean
{
	var Fact : number = 0;
	var Flag : boolean = false;
	
    for(var i : number = 1;i < No/2; i++)
	{
		if(No % i == 0)
		{
			Flag = true;
		}	
	} 
	
	return Flag;
}

var Value1 : number = 7;
var bRet : boolean = false;

bRet = ChkPrime(Value1);

if(bRet == true)
{
	console.log("This is Not Prime number");
}
else
{
	console.log("This is Prime Number");
}