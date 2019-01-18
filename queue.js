'use strict';

class _Node {
  constructor(data){
    this.data = data;
    this.next = null; //next is towards the beginning of the queue when looking at it vertically (down)
    this.prev = null; //prev is towards the back of the queue (up)
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item){
    const node = new _Node(item);
    //if the queue is empty
    if (this.first === null){
      this.first = node;
    }
    //if the queue isnt empty
    //then take the node that is currently at the end of the queue and link it to the new node    
    if (this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue(){
    if (this.first === null){
      console.log('your queue is empty');
      return;
    }
    let first = this.first;
    this.first=first.prev;

    //if this is the last item in the queue/theres only 1 item in queue
    if (first === this.last) {
      this.first= null;
      this.last = null;
    }else{
      this.first.next = null; 
      //causes problems
    }

    return first.data;
  }

}

function display(queue){
  if (queue.first === null){
    return;
  }
  let current = queue.last;
  while(current !== null){
    console.log(current.data);
    current= current.next;
  }    
}

function peek(queue){
  if(queue.first===null){
    return null;
  }
  return queue.first.data;    
}

function isEmpty(queue){
  return peek(queue)===null ? true : false;
}

function squareDance(dancerQueue){
  let spares = new Queue();

  while(!isEmpty(dancerQueue)){
    let dancer = dancerQueue.dequeue();

    //if queue is empty, dancer gets added to it regardless
    if(isEmpty(spares)){
      spares.enqueue(dancer);
    }
    //if queue is not empty
    else{
      //if theyre diff genders, 
      if(dancer[0]!==peek(spares)[0]){
        let otherDancer = spares.dequeue();
        console.log(`The two dancers are ${dancer.slice(2)} and ${otherDancer.slice(2)}`);
      }
      //if same gender
      else{
        spares.enqueue(dancer);
      }
    }
  }
  
  //at the end, if the queue isnt empty, display the queue of "spare" dancers
  if(!isEmpty(spares)){
    console.log('The spares waiting for partners are:');
    display(spares);
  }
}


// let queue = new Queue();
// queue.enqueue('M Sam');
// queue.enqueue('F Nikkie');
// queue.enqueue('Tauhida');
// display(queue);
// console.log(peek(queue));
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();


let dancerQueue = new Queue();


dancerQueue.enqueue('F Jane');
dancerQueue.enqueue('M Frank');
dancerQueue.enqueue('M John');
dancerQueue.enqueue('M Sherlock');
dancerQueue.enqueue('F Madonna');
dancerQueue.enqueue('M David');
dancerQueue.enqueue('M Christopher');
dancerQueue.enqueue('F Beyonce');

squareDance(dancerQueue);