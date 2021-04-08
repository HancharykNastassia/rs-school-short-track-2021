const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.nodeList = null;
  }

  get size() {
    let counter = 0;
    let node = this.nodeList;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  enqueue(element) {
    const newNode = new ListNode();
    newNode.value = element;
    newNode.next = null;
    if (this.nodeList) {
      let node = this.nodeList;
      while (node) {
        if (!node.next) {
          node.next = newNode;
          node = node.next.next;
        } else node = node.next;
      }
    } else this.nodeList = newNode;
  }

  dequeue() {
    if (!this.nodeList) return 1;
    const deleteVal = this.nodeList.value;
    this.nodeList = this.nodeList.next;
    return deleteVal;
  }
}

module.exports = Queue;
