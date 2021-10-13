const Node = require("./node");

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        let node = new Node(value);
        if (this.front) {
            this.back.next = node;
            this.back = node;
        } else {
            this.front = node;
            this.back = node;
        }
    }

    dequeue() {
        if (this.front) {
            let front = this.front;
            this.front = this.front.next;
            return front.value;
        } else {
            throw new Error("Queue empty");
        }
    }

    peek() {
        if (this.front) {
            return this.front.value
        } else {
            throw new Error("Queue empty");
        }
    }

    isEmpty() {
        return this.front === null;
    }


}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(7);
queue.enqueue(6);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
console.log(queue.peek());

//module.exports = Queue;