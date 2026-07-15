"use strict";
///////////////////////////////////////////////////////////////////////
//  	Function Name  	:  DisplayFactors
//  	Description    	:  used to Display Factors
//  	Input          	:  number
//	Output         	:  number
//	Date           	:  6/30/2026
//  	Author		:  Pratik Raut
///////////////////////////////////////////////////////////////////////
function DisplayFactors(No) {
    var Fact = 0;
    for (var i = 1; i < No; i++) {
        if (No % i == 0) {
            console.log(i);
        }
    }
}
var Value1 = 20;
DisplayFactors(Value1);
