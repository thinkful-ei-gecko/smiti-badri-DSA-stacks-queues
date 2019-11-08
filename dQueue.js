class _Node{
    constructor(value, next, prev){
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

        const node = new _Node(data, null, null);

        if(this.first === null){
            this.first = node;
        }

        if(this.last){
            node.prev = this.last
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue(){
        if(this.first === null){
            return;
        }
        const currNode = this.first;
        this.first = currNode.next;

        return currNode.value;
    }
}

function main(){
    const starTrekQ = new dQueue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    console.log(starTrekQ)
}

main()