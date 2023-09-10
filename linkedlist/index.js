// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    } 

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let ref = this.head;
        let count = 0;
        while(ref){
            count ++;
            ref = ref.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head) return null;

        let ref = this.head;
        while(ref){
            if(!ref.next) return ref;
            ref = ref.next
        }
    }

    clear(){
        this.head = null;    
    }

    removeFirst(){
        if(!this.head) return;
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head) return;
        if(!this.head.next){
            this.head = null;
            return;
        }

        let current = this.head;
        let afterCurrent = this.head.next;

        while(afterCurrent.next){   
            current = afterCurrent;
            afterCurrent = afterCurrent.next;
        }

        current.next = null;

        // console.log("en la salida",{current, afterCurrent, head: this.head});
    }

    insertLast(data){
        const lastRefNode = this.getLast();
        if(lastRefNode){
            lastRefNode.next = new Node(data)
            return;
        };
        this.insertFirst(data);
    }

    getAt(index){
        let ref = this.head;
        let counter = 0;

        while(ref){
            if(counter === index){
                return ref;
            }
            ref = ref.next
            counter ++;
        }

        return null;
    }

    removeAt(index){
        if(!this.head) return;

        if(this.size() < index) return;

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        const previousIndexValue = index - 1;
        const afterIndexValue = index + 1;
        
        const previous = this.getAt(previousIndexValue);
        const after = this.getAt(afterIndexValue);
        
        // if(!previous || !previous.next){
        //     return;
        // }

        // previous.next = previous.next.next;

        if(previous){
            previous.next = after;
        }

        this.head = previous;
    }

    insertAt(data, index){
        //? Empty list
        if(!this.head){
            this.head = new Node(data);
        }

        //? Index out of bounds
        if(this.size() < index){
            this.insertLast(data);
            return;
        }

        //? Index at position 0
        if(index === 0){
            this.insertFirst(data);
            return;
        }

        //? At any position
        const previousIndexValue = index - 1;
        const afterIndexValue = index;
        
        const previous = this.getAt(previousIndexValue);
        const after = this.getAt(afterIndexValue);

        if(previous){
            previous.next = new Node(data, after);
        }
    }

    forEach(fun){
        let initialNode = this.head;
        while(initialNode){
            fun(initialNode);
            initialNode = initialNode.next;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
           node = node.next;
        }
    } 
}

module.exports = { Node, LinkedList };
