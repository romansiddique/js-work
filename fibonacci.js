// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....
var fibonacci = [0 , 1];
for(n = 2 ; n<=20 ; n++){
    fibonacci[n] = fibonacci[n-1] + fibonacci[n-2];
    // console.log(fibonacci[n-2] , fibonacci[n-1] , fibonacci[n]);
};
console.log(fibonacci);