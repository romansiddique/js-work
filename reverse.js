function reverseSpeech(speech){
    var reverse = "";
    for(i = 0; i < speech.length; i++){
        var element = speech[i];
        reverse = element + reverse;
    }
    return reverse;
}
console.log(reverseSpeech("Iamok"));
