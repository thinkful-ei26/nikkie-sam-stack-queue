'use strict';

class _Node{
  constructor(data, next){
    this.data = data;
    this.next = next;                
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  pop(){
    let node = this.top;
    this.top = this.top.next; 
    return node.data;
  }

  push(item){
    if(this.top===null){
      this.top = new _Node(item, null);
      return;
    }

    let node = new _Node(item, this.top);
    this.top = node;
  }
   
}

function isEmpty(stack){
  return peek(stack) === null ? true : false;
}

function peek(stack){
  if (stack.top === null){
    return null;
  }
  return stack.top.data;
}

function display(stack){
  let current = stack.top;
  if (current === null){
    console.log('You have no stack to display');
  }
  while(current !== null){
    console.log(current.data);
    current= current.next;
  }
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  //first create a stack by pushing in each letter from the string
  let stack = new Stack();
  for(let i = 0; i < s.length; i++){
    stack.push(s[i]);
  }

  //then pop off each item in the stack and check it against it letter in the string
  let bool;
  for(let i = 0; i < s.length; i++){
    let top = stack.pop();
    bool = top !== s[i] ? false : true;
    if(bool===false){
      return false;
    }
  }
  return bool;
}

// "mom" m --> o --> m

// true, true, true
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

function matchParen(str){
  let stack = new Stack();
  for( let i = 0; i<str.length; i++){
    if (str[i] === '('){
      let data = {index: i, string: str[i]};
      stack.push(data);
    }
    //If we see a closing parantheses and stack is empty its a prob
    else if (str[i] === ')' && peek(stack) !== null){
      stack.pop();
    } 
    else if (str[i] === ')' && peek(stack) === null) {
      return i;
    }
  } 
  //if theres anything left in the stack, return false
  return (peek(stack) !==null) ? peek(stack).index : -1;
}

function sortStack(stack){
  let tempStack = new Stack();
  let temp;
  while (!isEmpty(stack)){
    temp = stack.pop();
    while(peek(tempStack)< temp && !isEmpty(tempStack)){
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  return tempStack;
}

let stack = new Stack();
stack.push(5);
stack.push(1);
stack.push(10);
stack.push(3);
// display(stack);
let sortedstack = sortStack(stack);
display(sortedstack);

// [5, 4, 1, 3]
//[]
//temp = 5
//[4, 1, 3]
// Create a temporary stack say tmpStack.
// While input stack is NOT empty do this:
// Pop an element from input stack call it temp
// push temp to  tempStack

// pop off stack again 
// while temporary stack is NOT empty and top of temporary stack is greater than temp,
// pop from temporary stack and push it to the input stack
// push temp in temporary stack
// The sorted numbers are in tmpStack
// while (peek(tempStack) < temp) {
//     tempStack.pop() 
// }
