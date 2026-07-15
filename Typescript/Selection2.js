"use strict";
function CheckEven(No) {
    var Flag = false;
    if (No % 2 == 0) {
        Flag = true;
    }
    else {
        Flag = false;
    }
    return Flag;
}
var Value1 = 10;
var Value2 = 11;
var Result = false;
Result = CheckEven(Value1);
if (Result == true) {
    console.log("It is Even Number ");
}
else {
    console.log("Its Odd Number");
}
CheckEven(Value2);
