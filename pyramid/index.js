// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    // for(let row = 0; row < n; row ++){
    //     let level = '';
    //     for(let column = 0; column < 2 * n - 1 ; column ++){
    //       if(column >= n-1-row  && column <= n-1+row){
    //         level += '#';
    //       }else{
    //         level += ' ';
    //       }
    //     }
    //     console.log(level)
    //   }
    
    //* Recursive solution

    if(row === n ){
    return;
  }
  
  if(level.length === 2 * n -1){
    console.log(level)
    return pyramid(n, row + 1);
  }

  if( level.length <= n - 1 + row && level.length >= n - 1 - row ){
    level += '#';
  }else{
    level += ' ';
  }
  
  return pyramid(n, row, level);
}

module.exports = pyramid;
