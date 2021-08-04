const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(...numbers) {
  numbers=numbers[0]
  let total=0
  numbers.forEach(number=>{
    total+=number
  })
	return total
};

const multiply = function(...numbers) {
  numbers=numbers[0]
  let result=1
  numbers.forEach(number=>{
    result*=number
  })
  return result
};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(Num) {
  if (Num==0) return 1
  let factorialOfNum=1
  for(let multiplier=1;multiplier<=Num;multiplier++){
    factorialOfNum*=multiplier
  }
	return factorialOfNum
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
