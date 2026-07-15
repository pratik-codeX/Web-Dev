"use strict";
//write function took 3 parameter from that and 
// return maximum value from that
function FindMaximum(No1, No2, No3) {
    if (No1 > No2 && No1 > No3) {
        return No1;
    }
    else if (No2 > No1 && No2 > No3) {
        return No2;
    }
    else {
        return No3;
    }
}
var Value1 = 800;
var Value2 = 98;
var Value3 = 900;
var iRet = 0;
iRet = FindMaximum(Value1, Value2, Value3);
console.log("The Maximum Number is :", iRet);
