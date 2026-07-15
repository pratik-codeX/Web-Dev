function Display2(No : number, Value ? : number) : void
{
    console.log(No);
    if(Value != undefined)
    {
        console.log(Value);
    }
}

Display2(11,21);
Display2(11);