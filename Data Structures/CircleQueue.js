class CircleQueue{
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength++;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.front]
            this.items[this.front] = null;
            this.front = (this.front + 1 ) % this.capacity;
            this.currentLength--;

            if (this.isEmpty()) {
                this.front = -1
                this.rear = -1
            }
            return item;
        }

        return null;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        else {
            let i;
            let str = "";

            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
                str += this.items[i] + " ";
            }

            str += this.items[i]
            console.log(str)
        }
    }
}

let queue = new CircleQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())

queue.print();

console.log(queue.dequeue());
queue.enqueue(60)
queue.print();
console.log(queue.peek())