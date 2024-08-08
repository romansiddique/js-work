console.log("First Method");
var a = 21;
var b = 34;
console.log("Before Swap--","a =", a , "and" , "b =", b);
var temp = a;
a = b;
b = temp;
console.log("After Swap--","a =", a , "and" , "b =", b);

console.log("");
console.log('');

console.log("Second Method");
var x = 3;
var y = 4;
console.log("Before Swap--","x =", x , "and" , "y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After Swap--","x =", x , "and" , "y =", y);

console.log("");
console.log('');

console.log("Third Method");
var p = 23;
var q = 22;
console.log("Before Swap--","p =", p , "and" , "q =", q);
[p, q] = [q, p];
console.log("After Swap--","p =", p , "and" , "q =", q);