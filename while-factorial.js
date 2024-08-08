
function fact(n){
    var factorial = 1;
    var i =1;
    while(i<=n){
        factorial = factorial*i;
        i++;
    };
    return factorial;
};
var result = fact(4);
console.log(result);