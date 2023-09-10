// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    //* Solution 1
    // let reverseString = '';
    // if(str.length > 0){
    //     for(let pos=str.length - 1; pos>=0; pos--){
    //       reverseString+=str[pos];
    //     }
    // }
    //* Solution 2
    // return str
    //     .split('')
    //     .reverse()
    //     .toString()
    //     .replaceAll(',','');
    //* Solution 3
    // return str
    // .split('')
    // .reverse()
    // .join('');

    //* Solution 4 
    let reverseString = '';
    if(str.length > 0){
        for(const character of str){
          reverseString = character + reverseString;
          debugger;
        }
    }
    return reverseString;

    //* Solution 5
    // return str.split('').reduce((acc, current) => current + acc, '');
}

// reverse('rara');

module.exports = reverse;
