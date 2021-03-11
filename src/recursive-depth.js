const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let maxDepth = 0;
    let elementDepth = 0;
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        elementDepth = this.calculateDepth(arr[i])
        if (elementDepth > maxDepth) {
          maxDepth = elementDepth;
          elementDepth = 0
        }
      }
      return maxDepth + 1
    }
    else {
      return 0
    }
}
};