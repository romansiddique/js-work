//show factorial of 10
// var factorial = 1*2*3*4*5*6*7*8*9*10;
// console.log(factorial);

function factorial(n){
    var factorial = 1;
    for (i = 1 ; i<=n ; i++){
        factorial = factorial * i;
    };
    return factorial;
};
var final = factorial(3);
console.log(final);