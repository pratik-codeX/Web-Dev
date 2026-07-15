var Marks : number[] = [11,21,51,101,111]

var i : number = 0
console.log("Array using For loop")

for(i = 0;i < Marks.length;i++)
{
    console.log(Marks[i])
}

console.log("Array using While loop")

var iCount : number = 0
while(iCount < Marks.length)
{
    console.log(Marks[iCount])
    iCount++
}

console.log("---------------------Do While loop-----------------------")
iCount = 0
do
{
    console.log(Marks[iCount])
    iCount++
}while(iCount < Marks.length)
