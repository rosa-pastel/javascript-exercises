const findTheOldest = function(people) {
    let oldest
    people.reduce((lastperson,currentperson)=>{
        if (currentperson.yearOfDeath==undefined){
            currentperson.yearOfDeath=new Date().getFullYear()
        }
        currentperson.age=currentperson.yearOfDeath-currentperson.yearOfBirth
        if (lastperson.age<currentperson.age){
            return oldest=currentperson
        }
        else{
            return lastperson
        }
    },{age:0})
    return oldest
};

module.exports = findTheOldest;
