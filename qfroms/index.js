// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }

    add(item){
        this.firstStack.push(item);
    }

    remove(){
        while(this.firstStack.peek()){
            this.secondStack.push(this.firstStack.pop());
        }
        console.log({first: this.firstStack, second: this.secondStack});
        return this.secondStack.pop();
    }

    peek(){
        while(this.firstStack.peek()){
            this.secondStack.push(this.firstStack.pop());
        }
        return this.secondStack.peek();
    }
}

module.exports = Queue;
