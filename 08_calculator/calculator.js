const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  const sum = array.reduce((total, number)=>{
    return total += number;
  }, 0)
  return sum;
};

const multiply = function(array) {
  const multiplication = array.reduce((result, number)=>{
    return result *= number;
  }, 1);
  return multiplication;
};

const power = function(a, b) {
  let result = 1;
	for (let i=1; i<=b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  let result = 1;
	for(i=2; i<=a; i++){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
