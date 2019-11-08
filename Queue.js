class _Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
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


function main(){
    const starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    
    //console.log(JSON.stringify(starTrekQ));


    function peek(Queue){
        let node = Queue.first;
        return node.value;
    }
    
    //console.log(peek(starTrekQ));

    function isEmpty(Queue){
        if(Queue.first === null){
            return true;

        }
        return false;
    }

    //console.log(isEmpty(starTrekQ));

    
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    function display(Queue){
        console.log(JSON.stringify(Queue.first));
    }

    display(starTrekQ);
    

}

main();

