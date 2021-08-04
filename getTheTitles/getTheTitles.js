const getTheTitles = function(books) {
    return books.reduce((booktitles,currentbook)=>{
        console.log(currentbook.title)
        booktitles.push(currentbook.title)
        console.log(booktitles)
        return booktitles
    },[])
};

module.exports = getTheTitles;
