const LinkedList = require("./LinkedList")

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(element) {
        this.list.append(element)
    }

    dequeue() {
        return this.list.removeFromFront();
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    peek() {
        return this.list.head.value;
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        this.list.print();
    }
}

module.exports = Queue;

let queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.getSize())
queue.print();

console.log(queue.dequeue());
console.log(queue.peek())