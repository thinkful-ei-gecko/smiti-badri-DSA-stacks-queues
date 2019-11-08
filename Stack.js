class _Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(data){
        if(this.top === null){
            this.top = new _Node(data, null);
            return this.top;
        }
      //if the stack is not empty, we create a new node and point of new node as the top
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;

    }

    peek(){
        if(this.top === null){

            console.log( 'The Stack is empty');
        }
        console.log(this.top.data);
    }
    isEmpty(){
        if(this.top === null){
            console.log('This Stack is empty')
            return;
        }
        console.log('This Stack is not empty')
    }
   
    display(){
        if(this.top === null){
           return;
        }
        let currNode = this.top;
        while(currNode.next !== null){
            currNode = currNode.next;
        }
        console.log('The first time in the stack is '+ currNode.data);

    }
}


function main(){
    const starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.peek();
    starTrek.isEmpty();
    starTrek.display();
    starTrek.pop();
    starTrek.pop();
    console.log(JSON.stringify(starTrek));
}
 
main();

