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

function peek(stack){
  if (stack.top === null){
    return null;
  }
  return stack.top.value;
}

function display(stack){
  let current = stack.top;
  if (current === null){
    console.log('You have no stack to display');
  }
  while(current !== null){
    console.log(current.value);
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
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));