// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //* Own Solution 1
    // if(n.toString().includes('-') ){ //* math.sign(x) useful it returns true/false
    //    return  Number('-' + n.toString().split('-')[1].split('').reverse().join('')); //* pasrInt === Number thery convert str to numbers
    //  }
    //  return Number(n.toString().split('').reverse().join(''));

     //* Solution 2
     return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n); 
}

module.exports = reverseInt;
