/*

Question 2: Calculate the Sum of Array Elements

Write a TypeScript program which contains one function named Summation. That function accepts an array of numbers and returns the summation of all numbers from the array.

Input:

23 6 7 4 5 7

Expected Output:

Addition is 52

*/

function Summation(Arr:number[]):number
{
    var i : number = 0;
    var iSum :number = Arr[0];
    
    for(i = 0;i<Arr.length;i++)
    {    
        iSum = iSum + Arr[i];
    }

    return iSum;
}

var Arr = new Array(10,50,42,23,47,80)

var iRet : number = Summation(Arr);

console.log("Summation of Array is :",iRet)