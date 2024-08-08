var duplicateArray = [3, 4, 5, 3, 7, 5];
var value =[];
for(i = 0; i < duplicateArray.length; i++){
    var element = duplicateArray[i];
    var index = value.indexOf(element);
    if(index == -1){
        value.push(element);
    }
}
console.log(value);