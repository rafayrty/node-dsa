type Value = string | number | null;
class DoublyLinkNode {
    public value: Value;
    public next: DoublyLinkNode | null;
    public prev: DoublyLinkNode | null;
    constructor(value: Value) {
        this.value = value;
        this.next = null;
        this.prev = null;

    }
}

export default class DoublyLinkedList {
    public head: DoublyLinkNode | null;
    public tail: DoublyLinkNode | null;
    public length: number = 0;

    constructor(value: Value) {
        const newNode = new DoublyLinkNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length++;

    }
    // Add to the end
    push(value: Value) {
        // Big O(1)
        const newNode = new DoublyLinkNode(value);

        if (this.head != null) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
        return this;

    }

    // Add to beginning
    unshift(value: Value) {
        //Big O(1)

        // If head is null push it to be first element
        if (this.head == null) {
            this.push(value);
            this.length++;

        } else {
            const newNode = new DoublyLinkNode(value);
            const temp = this.head;
            // Set the Prev of the old head to the newNode
            temp.prev = newNode;
            // Set the newNode as head
            this.head = newNode;
            // Set head of the newNode to the Old Head
            this.head.next = temp;
            this.length++;
        }

        // Return the Entire LinkedList
        return this;
    }



    // Remove from the end
    pop() {

        // Big O(1)
        if(this.head==null) return false;
        // If only one element
        if(this.head.next==null){
            const pop = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return pop;
        }
        // If more than one node just set the prev element to tail next to null
        const pop = this.tail.value;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.length--;
        // Return Deleted Node Value
        return pop;


    }

        // Remove from the Beginning
        shift() {
        
            // Big O(1)
            if(this.head==null) return false;
            let shift = this.head.value;
            // If only one element
            if(this.head.next==null){
                this.head = null;
                this.tail = null;
                this.length--;
            }else{
                // If more than one node just set the tail prev to null
                this.head = this.head.next;
                this.head.prev = null;
                this.length--;
            }

            // Return Deleted Node Value
            return shift;
    
    
        }


}