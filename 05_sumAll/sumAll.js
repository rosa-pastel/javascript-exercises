const sumAll = function(number1, number2) {
    if (typeof number1 !== "number"
        || typeof number2 !== "number"
        || number1 < 0 || number2 < 0 ) return "ERROR";
    let sum = 0;
    const biggerNumber = number1 > number2 ? number1 : number2;
    const smallerNumber = number1 < number2 ? number1 : number2;
    for (let i= smallerNumber; i <= biggerNumber; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
