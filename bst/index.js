// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(newData){
        if(newData < this.data && this.left){
            this.left.insert(newData);
            return;
        }else if(newData < this.data && !this.left){
            this.left = new Node(newData);
            return;
        }
        if(newData > this.data && this.right){
            this.right.insert(newData);
            return;
        }else if(newData > this.data && !this.right){
            this.right = new Node(newData);
            return;
        }
    }

    contains(dataSearch){
        if(this.data === dataSearch){
            return this
        }
        if(dataSearch < this.data && this.left){
            return this.left.contains(dataSearch);
        }else if(dataSearch < this.data && !this.left){
            return null;
        }
        if(dataSearch > this.data && this.right){
            return this.right.contains(dataSearch);
        }else if(dataSearch > this.data && !this.right){
            return null;
        }
    }
}

module.exports = Node;
