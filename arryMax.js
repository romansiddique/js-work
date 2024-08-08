var maxNumber = [24, 34, 87, 98];
var max = maxNumber[0];
for(i = 0; i < maxNumber.length; i++){
    var element = maxNumber[i];
    if(element > max){
        max = element;
    }
}
console.log(max);
