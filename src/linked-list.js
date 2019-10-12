const Node = require('./node');


class LinkedList {
    constructor() {
        this._tail = null;
        this._head = null;
        this.length = 0;
    }
    append(data) {
        const node = new Node(data);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let current = this._head, count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current.data;
    }

    insertAt(index, data) {
       return this
}

    isEmpty() {
        if (this.length === 0) return true
        else return false
    }
    clear() {
        let count = 1;
        while (count < this.length) {
            this._head.next = null;
            this._tail.prev = null;
            count++;
        }
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this
    }

    deleteAt(index) {

        return this;
    }

    reverse() {
        let prev=null;
        let current=this._head;
        while(current){
           let next=current.next;
            current.next=prev;
            current.prev=current.next;
            prev=current;
            current=next;
        }
        this._tail=this._head;
        this._head=prev;
        return this
    }

    indexOf(data) {
        let current = this._head, count = 0;
        while (current.data !== data) {
            current = current.next;
            if (current === null) return -1;
            count++;
        }
        return count;

    }
}


module.exports = LinkedList;
