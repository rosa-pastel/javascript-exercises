const palindromes = function (string) {
    function reverseString(string){
        return string.toLowerCase().replace(/[,.: !]/g,'').split('').reverse().join('')
    }
    console.log(reverseString(string))
    string=string.toLowerCase().replace(/[,.: !]/g,'')
    return (reverseString(string)==string) ? true:false
};

module.exports = palindromes;
