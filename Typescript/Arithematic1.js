"use strict";
class Arithmatic {
    No1;
    No2;
    constructor(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Addition() {
        return this.No1 + this.No2;
    }
}
var Value1 = 11;
var Value2 = 21;
var obj = new Arithmatic(Value1, Value2);
var Ret = obj.Addition();
console.log("Addition is :", Ret);
