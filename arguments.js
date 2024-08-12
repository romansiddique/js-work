function add (_num1, _num2){
    var sum = 0;
    for(let i = 0; i < arguments.length; i++){
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}



var result = add(2, 3, 7);
console.log(result);
