let num = 123;
let bigInt = 1234567890123456789012345678901234567890n;
let string = "hello";
let bool = true;
let zero = null;
let undef;
let obj = {
    name: "box"
};
let sym = Symbol("lol");
let func = new Function();

alert("num is " + typeof(num) + "\n"
    + "bigInt is " + typeof(bigInt) + "\n"
    + "string is " + typeof(string) + "\n"
    + "bool is " + typeof(bool) + "\n"
    + "zero is " + typeof(zero) + "\n"
    + "undef is " + typeof(undef) + "\n"
    + "obj is " + typeof(obj) + "\n"
    + "sym is " + typeof(sym) + "\n"
    + "func is " + typeof(func) + "\n"
    );

