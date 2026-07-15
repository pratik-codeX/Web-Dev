"use strict";
/*

Question 3: Find the Second Largest Number in an Array

Write a TypeScript program which contains one function named Maximum. That function accepts an array of numbers and returns the second largest number from the array.

Input:

23 89 6 29 56 45 77 32

Expected Output:

Second Maximum number is 77

*/
function SeondLarge(Arr) {
    var i = 0;
    var Large = Arr[0 + 1];
    var sLarge = Arr[0];
    for (i = 0; i < Arr.length; i++) {
        if (Large > sLarge) {
            Large = sLarge;
        }
    }
    return sLarge;
}
var Arr = new Array(23, 89, 6, 29, 56, 45, 77, 32);
var iRet = SeondLarge(Arr);
console.log("second largest of Array is :", iRet);
