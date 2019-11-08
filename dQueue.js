class _Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class dQueue{
    constructor(){
        this.first = null;
        this.last = null;
    }
    enqueue(data){

        const node = new _Node(data);

        if(this.first === null){
            this.first = node;
        }
        if(this.last){
            this.last.next = node;
            let currentNode = this.first
            while(currentNode.next !== null){
                currentNode.prev = currentNode
                currentNode = currentNode.next
            }
            this.last.prev = currentNode
        }
        this.last = node;
    }

    dequeue(){
        if(this.first === null){
            return;
        }
        const currNode = this.first;
        this.first = this.first.next;

        return currNode.data;
    }
}