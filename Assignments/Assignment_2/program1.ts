/*Question 1: Find the Maximum Number in an Array

Write a TypeScript program which contains one function named Maximum. That function accepts an array of numbers and returns the largest number from the array.

Input:

23 89 6 29 56 45 77 32

Expected Output:

Maximum number is 89*/

function Maximum(Arr:number[]):number
{
    var i : number = 0;
    var iMax :number = Arr[0];
    
    for(i = 0;i<Arr.length;i++)
    {
        if(iMax < Arr[i])
        {
            iMax = Arr[i];
        }
    }

    return iMax;
}

var Arr = new Array(10,50,42,23,47,80)

var iRet : number = Maximum(Arr);

console.log("Maximum of Array is :",iRet)