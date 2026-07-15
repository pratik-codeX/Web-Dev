var arr : number[] = [10,20,30,40,50]

function AdditionDisplay(arr : number[]): number
{
    var i : number = 0
    var Sum : number = 0

    for(i = 0;i < arr.length;i++)
    {
        console.log(arr[i])
        Sum = Sum + arr[i]
    }

    return Sum
}

var Ret : number = 0

Ret = AdditionDisplay(arr)

console.log("Addition is :"+Ret)