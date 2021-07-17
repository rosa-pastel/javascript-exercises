const sumAll = function(number1,number2) {
    let sum=0
    if(typeof number1=='number'&&typeof number2=='number'){
        if(number1<0 || number2<0){
            sum='ERROR'
        }
        else if(number1<number2){
            for(i=number1;i<=number2;i++){
                sum=sum+i
            }
        }
        else{
            for(i=number2;i<=number1;i++){
                sum=sum+i
            }
        }
    }
    else{
        sum='ERROR'
    }
    return sum
};

module.exports = sumAll;
