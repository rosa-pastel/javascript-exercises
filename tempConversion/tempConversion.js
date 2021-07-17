const ftoc = function(tempToConvert) {
  let convertedTemp=(tempToConvert-32)*5/9
  return Math.round(convertedTemp*10)/10
};

const ctof = function(tempToConvert) {
  let convertedTemp=(tempToConvert*9/5)+32
  return Math.round(convertedTemp*10)/10
};

module.exports = {
  ftoc,
  ctof
};
