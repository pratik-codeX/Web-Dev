///////////////////////////////////////////////////////////////////////
//  	Function Name  	:  DisplayFactors
//  	Description    	:  used to Display Factors
//  	Input          	:  number
//	Output         	:  number
//	Date           	:  6/30/2026
//  	Author		:  Pratik Raut
///////////////////////////////////////////////////////////////////////

function DisplayFactors(No :number): void 
{
	var Fact : number = 0;
	
    	for(var i : number = 1;i < No; i++)
	{
		if(No % i == 0)
		{
			console.log(i);
		}	
	} 
}

var Value1 : number = 20;

DisplayFactors(Value1);




