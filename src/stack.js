const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.data = [];
    this.topIndex = -1;
  }
  push(value) {
    this.topIndex++;
    this.data[this.topIndex] = value;
  }

  pop() {
    if (this.topIndex < 0) {
      return undefined;
    }
    const topValue = this.data[this.topIndex];
    this.topIndex--;
    return topValue;
  }

  peek() {
    if (this.topIndex < 0) {
      return undefined;
    }
    return this.data[this.topIndex];
  }
}

module.exports = {
  Stack
};
