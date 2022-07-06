type Value = string | number | null;
class LinkNode {
    public value: Value;
    public next: LinkNode | null;
    constructor(value: Value) {
        this.value = value;
        this.next = null;
    }
}
export default class LinkedList {
    public head: LinkNode | null;
    public tail: LinkNode | null;
    public length:number = 0;

    constructor(value: Value) {
        const newNode = new LinkNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length++;
    }
    // Add to the end
    push(value: Value) {
        // Big O(1)
        const newNode = new LinkNode(value);

        if (this.head != null) {
            // [14] [15] [16] -> newnode
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }else{
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        }
        return this;

    }
    // Add to beginning
    unshift(value:Value){
        //Big O(1)

        // If head is null push it to be first element
        if(this.head==null){
            this.push(value);
            this.length++;

        }else{
            const newNode = new LinkNode(value);
            const temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            this.length++;
        }

        // Return the Entire LinkedList
        return this;
  
        
    }

// Remove from the end
    pop() {
        // Big O(n)
        if (this.head == null) return false;
        // If there is only one element
        if (this.head.next == null) {
            const pop = this.head.value;
            this.tail = null;
            this.head = null;
            this.length--;
            return pop;
        }
        let temp = this.head;
        let prev = temp;
        while (temp.next != null) {
            prev = temp;
            temp = temp.next;
        }
        // Store Deleted Node Value
        const pop = prev.next.value;
        prev.next = null;
        this.tail = prev;
        this.length--;
        // Return Deleted Node Value
        return pop;

    }
// Remove from beginning
    shift(){
        //Big O(1)
        if(this.head==null) return false;
        if(this.head == this.tail){
            const shifted = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return shifted;
        }

        const shifted = this.head.value;
        this.head = this.head.next;
        this.length--;
        return shifted;
        
    }
// Remove at an index
    remove(index:number){

        //Big O(n)
        let found = null;
        let temp = this.head;
        let prev = temp;
        let val:Value;
        if(index==0){
            val = this.head.value;
            this.shift();
            return val;
        }
        for (let i = 0; i <= index; i++) {
            if(i==index){
                found = temp;
                break;
            }
            prev = temp; //head 
            temp = temp.next; // second elem
        }
        if(found!=null){
            val = found.value;
            prev.next = found.next;
            // Edge case if tail == found
            if(this.tail==found){
                this.tail = prev;
            }
            this.length--;
            return val;
        }else{
            return false;
        }

    }

    // Add at an index
    add(index:number,value:Value){

        //Big O(n)
        let found = null;
        let temp = this.head;
        let prev = temp;
        let val:Value = value;
        
        // An edge case when adding to end of linkedlist by index
        if(this.length==index){
            this.push(value);
            return val;
        }

        // When adding to beginning
        if(index==0){
            this.unshift(value);
            return val;
        }

        for (let i = 0; i <= index; i++) {
            if(i==index){
                found = temp;
                break;
            }
            prev = temp; //head 
            temp = temp.next; // second elem
        }
        if(found!=null){
            const newNode = new LinkNode(value);
            prev.next = newNode;
            newNode.next = found;
            // [17] 
            this.length++;
            return val;
        }else{
            throw Error('Index Not Found')
        }
    }

    // Splice from an index
    splice(index:number,number:number){

    //Big O(n)
    if(index>this.length){
        throw Error('Index is Out Of Bounds');
    }
    if((number+index)>this.length){
        throw Error('Index is Out Of Bounds');
    }

    for (let i = index; i < (number + index); i++) {
       this.remove(index);
    }

    return this;

}


}