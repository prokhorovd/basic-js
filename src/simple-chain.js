const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (typeof(value) == undefined){
      this.chain.push('')
    }
    else {
      this.chain.push(value)
    }
    return this
  },
  removeLink(position) {
    if (typeof (position) != 'number' || isNaN(position) == true) {
      this.chain.length = 0;
      throw new Error('param is not valid, should be a number')
    }
    else if (position <= 0 || position > this.chain.length || position % 1 != 0) {
      this.chain.length = 0;
      throw new Error('wrong position parameter')
    }
    this.chain.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let finishedChain = ''
    for (let i = 0; i < this.chain.length; i++) {
      if (i==0) {
        finishedChain += `( ${this.chain[i]} )`
      }
      else {
        finishedChain += `~~( ${this.chain[i]} )`
      }

    }
    this.chain.length = 0;
    return finishedChain
  }
}

module.exports = chainMaker;
