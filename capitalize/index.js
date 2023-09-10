// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //* First Solution 

    // const words = [];

    // for(let word of str.split(' ')){
    //     words.push(word[0].toUpperCase() + word.slice(1));
    // }

    // return words.join(' ');

    //* Second solution more intuitive. Clearly not the best

    const str2Array = str.split('');
    const accArray = [];

    for(let pos = 0; pos < str2Array.length; pos ++){
        if((str2Array[pos - 1] && str2Array[pos - 1] === ' ' && str2Array[pos]) || (str2Array[pos] && !str2Array[pos - 1])){
            accArray.push(str2Array[pos].toUpperCase());
        }else{
            accArray.push(str2Array[pos]);
        }
    }

    return accArray.join('');
}

module.exports = capitalize;
