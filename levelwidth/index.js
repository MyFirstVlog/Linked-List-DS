// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const queue = [root, null];
    const counters = [];
    let localCount = 0;
    while(queue.length){
        const firstElement = queue.shift();
        if(!firstElement){
            counters.push(localCount);
            if(queue.length > 0){
                queue.push(null);
            }
            localCount = 0;
            continue
        }
        queue.push(...firstElement.children);
        localCount ++;

    }
    return counters;
}

module.exports = levelWidth;
