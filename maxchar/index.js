// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    // const accumulator = str.split('').reduce((acc, curr) => {
    //     // Convert text into iterable array
    //     if(!Object.keys(acc).includes(curr)){
    //       // Count times
    //       count = 0
    //       for(let pos = 0; pos <= str.length; pos ++){
    //         if(str[pos] === curr) count ++;
    //       }
    //       return {
    //         ...acc,
    //         [curr]: count 
    //       }
    //     }
    //     return acc;
    // }, {});

    // return Object.entries(accumulator).sort((a,b) => b[1] - a[1])[0][0];

    const accFinal = {};
    let max = 0;
    let maxChar = '';
    for(const value of str){    
        //console.log(value)
        accFinal[value] =  !accFinal[value] ? 1 : accFinal[value] + 1;
    }
    
    for(let key in accFinal){
        if(accFinal[key] > max){
          max = accFinal[key];
          maxChar = key;
        }
    }
    // return Object.entries(accFinal).sort((a,b) => b[1] - a[1])[0][0]; //* Possible Solution (it cab be used in both solutions)
    return maxChar

}

module.exports = maxChar;
