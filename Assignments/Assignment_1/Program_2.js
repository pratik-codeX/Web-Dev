"use strict";
///////////////////////////////////////////////////////////////////////
//  	Function Name  	:  CalculateArea
//  	Description    	:  used to Calculate Area of Circle
//  	Input          	:  number,number
//	Output         	:  number
//	Date           	:  6/30/2026
//  	Author		:   Pratik Raut
///////////////////////////////////////////////////////////////////////
function CalculateArea(No, Pi = 3.14) {
    var Area = 0;
    Area = Pi * No * No;
    return Area;
}
var Value1 = 5;
var Value2 = 3.14;
var Result = 0;
Result = CalculateArea(Value1, Value2);
console.log("The Area of is :", Result);
