const Queue = require('./QueueLL')
class node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root = this.root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root = this.root) {
        if (root) {
            this.preOrder(root.left)
            console.log(root.value)
            this.preOrder(root.right)
        }
    }

    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(root = this.root) {
        const queue = new Queue();
        queue.enqueue(root)

        while (queue.getSize()) {
            let curr = queue.dequeue();

            console.log(curr.value)
            if (curr.left) {
                queue.enqueue(curr.left)
            }

            if (curr.right) {
                queue.enqueue(curr.right)
            }
        }
    }

    min(root = this.root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left)
        }
    }

    max(root = this.root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.min(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        } else {
            if (value < root.value) {
                root.left = this.deleteNode(root.left, value);
            } else if(value > root.value) {
                root.right = this.deleteNode(root.right, value)
            } else {
                if(!root.left && !root.right) {
                    return null;
                }
                
                if (!root.left) {
                    return root.right;
                } else if (!root.right) {
                    return root.left;
                } 

                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }

            return root
        }
    }
}

const bst = new binarySearchTree();
console.log(bst.isEmpty())

bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)

// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 5))
// console.log(bst.search(bst.root, 15))
// console.log(bst.search(bst.root, 20))

// bst.preOrder()
// bst.inOrder();
// bst.postOrder();
bst.levelOrder()

// console.log(bst.max())
// console.log(bst.min())

bst.delete(10)
bst.levelOrder()
