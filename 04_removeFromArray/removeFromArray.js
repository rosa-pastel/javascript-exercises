const removeFromArray = function(array) {
//for each number
//loop through array and check whether item is equal to the number
//if it is, remove it and update array
//return updated array
for (const argument of arguments){
    array.map( (number, index) => {
        if (number === argument) {
            array.splice(index, 1);
        }
    })
}
return array;
}
// Do not edit below this line
module.exports = removeFromArray;
