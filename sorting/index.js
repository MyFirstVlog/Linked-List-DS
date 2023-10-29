// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(i = 0; i < arr.length; i ++){
        for(j = 0; j < arr.length - i ; j ++){
            if(arr[j] > arr[j + 1]){
                const current = arr[j]; 
                const next = arr[j + 1]; 
                arr[j + 1] =  current;
                arr[j] =  next
            }
        }
    }
    return arr;
}

async function selectionSort(arr) {
    for (let i = 0; i < arr.length ; i ++){
        let indexOfMin = i; 
        for ( let j = i + 1 ; j < arr.length ; j ++){
         if(arr[j] < arr[indexOfMin]){
            indexOfMin = j
         }
        }
        if(indexOfMin !== i){
            const current = arr[i];
            arr[i] = arr[indexOfMin]
            arr[indexOfMin] = current;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length === 1){
        return arr;
    }
    // Split arr in two
    const arrLengthDiv2 = Math.floor(arr.length / 2);
    const leftSplittedArray = arr.splice(0,arrLengthDiv2);
    const rightSplittedArray = arr;
    //Loop to split them on minimum pieces
    return merge(mergeSort(leftSplittedArray), mergeSort(rightSplittedArray)); //think this only with [97,0]
}

function merge(left, right) {
    const results = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift())
        }
        if(left[0] > right[0]){
            results.push(right.shift())
        }
        if(left[0] === right[0]){
            left.shift();
            results.push(right.shift());
        }
    }
    return [...results,...left,...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
