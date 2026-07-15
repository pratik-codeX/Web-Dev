function Demo():string[]
{
    var Str : string[] = ["C","C++","Java","Python","Javascript"]
    return Str;
}

var Arr : string[]
var iCount : number = 0

Arr = Demo();

for(iCount = 0;iCount < Arr.length;iCount++)
{
    console.log(Arr[iCount])
}