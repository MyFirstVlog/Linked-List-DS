// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    //? Steph solution
    return sortLetter(stringA) === sortLetter(stringB);

    //* mY SOLUTION
    // const quantityObjA = str2GoodFormat(stringA);
    // const quantityObjB = str2GoodFormat(stringB);

    // if(Object.keys(quantityObjA).length === Object.keys(quantityObjB).length){
    //     for(const letter in quantityObjA){
    //         if(quantityObjA[letter] !== quantityObjB[letter]){
    //             return false;
    //         }
    //     }
    //     return true
    // }
    // return false;
}

function sortLetter(string2Convert){
    return string2Convert.replace(/[^\w]/g, "")
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}
//* mY SOLUTION
// function str2GoodFormat(stringToConvert){
//     const obj = {};
//     const cleanStringB = stringToConvert.replace(/[^\w]/g, "").toLowerCase();
//     for(const letter of cleanStringB){
//         obj[letter] = obj[letter] + 1 || 1;
//     }
//     return obj;
// }

module.exports = anagrams;
