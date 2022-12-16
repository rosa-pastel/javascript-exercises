const reverseString = function(stringToReverse) {
    let result = ""
    let length
    while(stringToReverse){
        length = stringToReverse.length
        result += stringToReverse.charAt(length-1)
        stringToReverse = stringToReverse.substr(0,length-1)
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
