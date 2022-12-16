const repeatString = function(stringToRepeat, iterations) {
    let stringToReturn = ""
    if (iterations<0){
        stringToReturn = "ERROR"
    }
    else{
        while(iterations>0) {
            stringToReturn += stringToRepeat
            iterations--
        }
    }
    return stringToReturn
};

// Do not edit below this line
module.exports = repeatString;
