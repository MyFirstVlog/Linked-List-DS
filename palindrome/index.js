// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //* Solution 1
    //return str === str.split('').reverse().join('');
    //* Solution 2
    const validate = str.split('').every((ch, index) => {
        return ch == str[str.length - index -1];
    });

    return validate;
}

module.exports = palindrome;
