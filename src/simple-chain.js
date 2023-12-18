const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain :[] ,

  getLength() {
    return this.chain.split('~~').length
  },

  addLink(value) {
    if (value == null) value = 'null';
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position > this.chain.length - 1 || position < 1 || typeof position != 'number' || position != Math.floor(position) ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1,1);;
    return this; 
  },

  reverseChain() {
    this.chain.reverse() 
    return this; 
  },
  
  finishChain() {
    result = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return result;
  }
}

module.exports = {
  chainMaker
};
