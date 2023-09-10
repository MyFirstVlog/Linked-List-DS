// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//* First solution with two loops
// function chunk(array, size) {
//     let counter = 0;
//     const finalArray = [];
//     for(let i = 0; i < array.length; i = i + size){ // Paritition of the inner chunk arrays created
//         let tempArray = [];
//         for(let j = i; j < i + size ; j ++){ 
//             if(array[j]) tempArray.push(array[j]);
//         }
//         finalArray[counter] = tempArray;
//         counter ++ ;
//     }
//     return finalArray;
// }

//* Second solution implementing slice method.
function chunk(array, size) {
    let counter = 0;
    const finalArray = [];
    for(let i = 0; i < array.length; i = i + size){ // Paritition of the inner chunk arrays created
        finalArray[counter] =  array.slice(i, i + size);
        counter ++ ;
    }
    return finalArray;
}

module.exports = chunk;
