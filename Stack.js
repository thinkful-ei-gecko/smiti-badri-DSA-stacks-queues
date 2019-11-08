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
            return;
        }
      //if the stack is not empty, we create a new node and point of new node as the top
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop(){
        const node = this.top;
        if(node) {
        	this.top = node.next;
        	return node.data;
        } else {
        	return null
        }
    }

    // peek(){
    //     if(this.top === null){
    //         return null
    //     }
    //     return this.top.data;
    // }
    // isEmpty(){
    //     if(this.top === null){
    //         return true;
    //     }
    //     return false; 
    // }
   
    // display(){
    //     if(this.top === null){
    //        return;
    //     }
    //     let currNode = this.top;
    //     while(currNode !== null){
    //         console.log(currNode.data);
    //         currNode = currNode.next;
    //     }
    // }
}
function peek(s) {
    //if the top of the stack does not have anything 
    //then the stack is empty
    //otherwise return what's on the top
    if (!s.top) {
        return null;
    } else {
    	return s.top.data;
    }
}
function display(newStack) {
    // displays the entire contents of the stack
    let node = newStack.top;
    while (node) {
        console.log(node.data);
        node = node.next;
    }
}

function isEmpty(s){
    return (s.top === null) || (s.top === undefined);
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
 
// main();

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const stack = new Stack();
    for (let i=0; i<s.length; i++) {
        stack.push(s[i])
    }
    let newStr = ''
    for (let j=0; j<s.length; j++) {
        newStr = newStr + stack.pop()
    }
    if(newStr === s) {
        return true
    }
    return false;
}

//True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function is_balanced(expression) {
    const stack = new Stack();
    for (let i=0; i<expression.length; i++){
        if (expression[i] === '(') {
            stack.push(expression[i])
        }
        if (expression[i] === ')') {
            if (stack.isEmpty()) {
                return false
            }
            stack.pop();
        }
        if (expression[i] === '{') {
            stack.push(expression[i])
        }
        if (expression[i] === '}') {
            if (stack.isEmpty()) {
                return false
            }
            stack.pop();
        }
        if (expression[i] === ']') {
            stack.push(expression[i])
        }
        if (expression[i] === '[') {
            if (stack.isEmpty()) {
                return false
            }
            stack.pop();
        }
    }
    if(stack.isEmpty()){
        return true
    }
    return false
}

// console.log(is_balanced('({[]})'))
// console.log(is_balanced('(){[]()'))

function sortStack(originalStack){
    let newStack = new Stack();
    while(!isEmpty(originalStack)){
        let temp = originalStack.pop();
        while(!isEmpty(newStack) && (peek(newStack) > temp)){
            originalStack.push(newStack.pop());
        }
        newStack.push(temp);
    }
    while(!isEmpty(newStack)){
        originalStack.push(newStack.pop());
    }
}

let stack = new Stack();
stack.push(6)
stack.push(3)
stack.push(5)
stack.push(2)
sortStack(stack)
console.log(JSON.stringify(stack))