'use strict';

class _Node{
  constructor(data, next){
    this.data = null;
    this.next = null;                
  }
}


class Stack {
  constructor(){
    this.top = null;
  }

  pop(){
    let node = this.top;
    this.top = this.top.next; 
    return node;
  }

  push(item){
    if(this.top===null){
      this.top = new _Node(item, null);
    }

    let current = this.top;
    this.top = new _Node(item, current);
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
    console.log('You have no stack to display')
  }
  while(current !== null){
    console.log(current.value);
    current= current.next;
  }
}
