const repeatString = function(wordToRepeat,timesToRepeat) {
    let repeatedWord=''
    if (timesToRepeat<0){
        return 'ERROR'
    }
    else{
        for(i=0;i<timesToRepeat;i++){
            repeatedWord=repeatedWord+wordToRepeat
        }
        return repeatedWord
    }
};

module.exports = repeatString;
