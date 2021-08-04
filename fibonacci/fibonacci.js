const fibonacci = function(numberOrder) {
    if (numberOrder<0) return 'OOPS'
    else {
    let number1=0
    let number2=1
    let lastNumber
    for(i=1;i<=numberOrder;i++){
        lastNumber=number1+number2
        number1=number2
        number2=lastNumber
    }
    return number1
    }
};

module.exports = fibonacci;
