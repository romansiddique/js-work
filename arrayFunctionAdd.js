function addArray(number){
    var sum = 0;
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}
var number = [2,45,6]
var total = addArray(number);
console.log('the result is',total);

var result = addArray([4,5,5])
console.log('the result is', result);