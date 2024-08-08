var fibo = [0 , 1];
function fibonacci(i){
    for(n=2 ; n<=i ; n++){
        fibo[n] = fibo[n-1] + fibo[n-2];
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);