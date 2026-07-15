"use strict";
///////////////////////////////////////////////////////////////////////
//  	Function Name  	:  Fibonacci
//  	Description    	:  Display Fibonacci series
//  	Input          	:  number
//		Output         	:  numbers
//		Date           	:  2/7/2026
//  	Author		:  Pratik Raut
///////////////////////////////////////////////////////////////////////
//Input = 21
//Output = 1	1	2	3	5	8	13	21
/*
    Algorithm ->
                0	1	1	2	3	5
                Start = 0
                Middle = 1
                End = Start + Middle
                Start = Middle
                Middle = End
*/
function Fibonacci(No) {
    var iCount = 0;
    var Start = 0;
    var Middle = 1;
    var End = 0;
    while (End != No) {
        End = Start + Middle;
        console.log(End);
        Start = Middle;
        Middle = End;
    }
}
var Value = 21;
Fibonacci(Value);
