/*

Question 3: Find the Second Largest Number in an Array

Write a TypeScript program which contains one function named Maximum. That function accepts an array of numbers and returns the second largest number from the array.

Input:

23 89 6 29 56 45 77 32

Expected Output:

Second Maximum number is 77

*/
// 10,4,5,7

function SortArray(Arr : number[]):number
{
    for(var i = 0; i < Arr.length;i++)
    {
        for(var j = 1 ;j < Arr.length;j++)
        {
            if (Arr[j] < Arr[i])
            {
                Arr[i] = Arr[j];
            }

        }
    }


}

function SeondLarge(Arr:number[]):number
{
    var i : number = 0;
    var j : number = 1;
    var k : number = 0;
    var sMax : number = 0;

    var iMax :number = Arr[0];
    
    for(i = 0;i<Arr.length - 1;i++)
    {
        for(j = 0;j<Arr.length - 1;j++)
        {
            if(Arr[i] > Arr[j])
            {
                
            }
        }
       
    }

    var j : number = 0;

    for(j = 0;j<Arr.length;j++)
    {

    }



    return  sLarge;
}
SortedArray(Arr)
var Arr = new Array(23,89,6,29,56,45,77,32)

var iRet : number = SeondLarge(Arr);

console.log("second largest of Array is :",iRet)