const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    
    value.toString();
    if (typeof value == 'undefined') value  = ' ';
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || position < 0 || typeof position != 'number' || position != Math.floor(position) ) {
      console.log("You can't remove incorrect link!");
      return false;
    }
    delete this.chain[position-1];
    return this; 
  },
  reverseChain() {
   this.chain.reverse() 
   return this; 
  },
  finishChain() {
    let result = '';
    this.chain.forEach(item => result += ('(' + item + ')' +'~~' ));
    result = result.substring(0,result.length-2);
    return result;
  }
};
chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
console.log(chainMaker);
module.exports = {
  chainMaker
};
