function isPrime(n){
    for(i = 2 ; i < n ; i++){
        if(n % i==0){
            return "This is not prime number";
        }
    }
    return "this is a prime number"
}
var result = isPrime(4);
console.log(result);