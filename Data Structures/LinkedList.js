class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size;
    }
    // O(1) - Constant
    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.tail = node
        } else {
            node.next = this.head;
        }
    
        this.head = node
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curt = this.head;
            let str = ''
            while (curt) {
                str += curt.value + ' '
                curt = curt.next;
            }
            console.log(str)
        }
    }

    //O(n) - Linear
    append(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node;

        } else {
            this.tail.next = node;
        }
        this.tail = node
        this.size++
    }

    // O(n)
    insert(value, index) {
        if (index >= this.size || index < 0) {
            throw new exception("Index is out of range")
        }

        if (index === 0) {
            this.prepend(value);
        } else {

            const node = new Node(value)

            let prev = this.head;

            for (let i = 1; i <= index; i++) {
                prev = prev.next;
            }

            node.next = prev.next
            prev.next = node;
            this.size++;
        }
    }

    // O(n)
    remove(index) {
        if (index >= this.size || index < 0) {
            return null
        }

        let removedNode
            let prev = this.head;

            for (let i = 1; i < index; i++) {
                prev = prev.next;
            }
             removedNode = prev.next
            prev.next = prev.next.next;
            
        this.size--
        return removedNode;
    }

    removeFromFront() {
        if (this.isEmpty()) {
          return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
      }
    
      removeFromEnd() {
        if (this.isEmpty()) {
          return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          let prev = this.head;
          while (prev.next !== this.tail) {
            prev = prev.next;
          }
          prev.next = null;
          this.tail = prev;
        }
        this.size--;
        return value;
      }

    // O(n)
    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }

        if (this.head.value === value) {
            this.head = this.head.next
            this.size--;
            return value;
        }

        let prev = this.head.next;

        for (let i = 1; i < this.size - 2; i++){
            if (prev.next.value === value) {
                prev.next = prev.next.next;
                this.size--;
                return value;
            }  
                prev = prev.next
            
        }

        if (this.tail.value === value) {
            this.tail = prev;
            prev.next = null
            this.size--;
            return value
        }

        return null;
    }

    // O(n)
    search(value) {
        if (this.isEmpty()) {
            return null
        }

        let curr = this.head;

        for (let i = 0; i < this.size ; i++){
            if (curr.value === value) {
                return i;
            }  
                curr = curr.next
            
        }
        return null;
    }

    // O(n)
    reverse() {
        if (this.isEmpty()) {
            return this;
        }
        this.tail = this.head
        let prev = null
        let curr = this.head; 
        
        for (let i = 0; i < this.size ; i++){
            let next = curr.next 
            curr.next = prev; 
            prev = curr; 
            curr = next; 
        }
        
        this.head = prev


    }
}

module.exports = LinkedList;

// const list = new LinkedList();

// console.log(list.isEmpty())
// console.log(list.getSize());

// list.print();
// list.prepend(10)
// list.print();
// list.prepend(5)
// list.append(30)
// list.insert(20, 1)
// list.insert(15, 1)
// list.insert(25, 3)
// list.remove(4)
// list.removeValue(15)
// list.removeValue(111)
// list.removeValue(5)
// console.log(list.search(10))
// console.log(list.search(30))
// list.print();
// list.reverse()
// list.print()
// list.removeValue(10);
// list.print()