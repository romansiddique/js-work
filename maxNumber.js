var a = 290;
var b = 320;
var c = 234;




/**
INCORRECT METHOD

var a = 290;
var b = 320;
var c = 234;
if(a>b && a>c){
    console.log ("The big number is :", a);
}
else if (b>a && b>c){
    console.log("The big number is : ", c);
}
else{
    console.log("c is big");
};
*/



/**
SECOND METHOD
var max = Math.max(a, b, c);
console.log("the big number is : ", max);
*/



/** 
FIRST METHOD
if(a>b){
    if(a>c){
        console.log("a is big");
    }
    else{
        console.log("c is big");
    }
}
else{
    if(b>c){
        console.log("b is big");
    }
    else{
        console.log("c is big");
    }
}
*/