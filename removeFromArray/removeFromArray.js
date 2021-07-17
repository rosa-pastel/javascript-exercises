const removeFromArray = function(arrayToRemoveFrom, ...elementsToRemove) {
    
    for(x=0;x<elementsToRemove.length;x++){
        elementToRemove=elementsToRemove[x];
        for(i=0;i<arrayToRemoveFrom.length;i++){
            if (arrayToRemoveFrom[i]===elementToRemove){
                indexOfElement=i;
                arrayToRemoveFrom.splice(indexOfElement,1,)
            }
        }
    }
    
    return arrayToRemoveFrom
};

module.exports = removeFromArray;
