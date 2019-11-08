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
        //console.log(JSON.stringify(Queue.first));
    }

    //display(starTrekQ);
    const dancingteam = new Queue();
    dancingteam.enqueue({gender: 'F', name: 'Cindy'});
    dancingteam.enqueue({gender: 'M', name: 'Ben'});
    dancingteam.enqueue({gender: 'M', name: 'John'});
    dancingteam.enqueue({gender: 'F', name: 'Jessie'});
    dancingteam.enqueue({gender: 'F', name: 'Jenna'});
    //console.log(JSON.stringify(dancingteam));
    

    function pairPartner(dancingteam){
        const maleQueue = new Queue();
        const femaleQueue = new Queue();


        while(dancingteam.first !== null){
        const next = dancingteam.first.value;
        dancingteam.dequeue();

        if(next.gender === 'F'){
            femaleQueue.enqueue(next.name);
        }
        else{
            maleQueue.enqueue(next.name);
        }
    }
    while(femaleQueue.first !== null && maleQueue.first !== null){
        const pairs = 'The female dancer is ' + femaleQueue.first.value + ' and the male dancer is ' + maleQueue.first.value + '.';
        femaleQueue.dequeue();
        maleQueue.dequeue();
        console.log(pairs);
    }
    if( femaleQueue.first !== null){
        let currNode = femaleQueue.first;
        let count = 0;
        while(currNode !== null){
            currNode = currNode.next;
            count++;
        }
        console.log('There are '+ count + ' women waiting to dance.');
    }
    if( maleQueue.first !== null){
        let currNode = maleQueue.first;
        let count = 0;
        while(currNode !== null){
            currNode = currNode.next;
            count++;
        }
        console.log('There are '+ count + ' male waiting to dance.');
    }
    //console.log(maleQueue.first);
    //console.log(pairPartner(dancingteam));
    

    }
    pairPartner(dancingteam);   



    

}

main();

