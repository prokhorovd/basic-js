const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // convert str parameter to string
  let initialString = String(str);

  //set defaults
  let repeatTimes = 0;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
  let additionSeparator = '|';

  //check object properties and change default if necessary
  if (options.repeatTimes !== undefined ) {
    repeatTimes = options.repeatTimes;
  }
  if (options.separator !== undefined ) {
    separator = options.separator;
  }
  if (options.addition !== undefined ) {
    addition = String(options.addition);
  }
  if (options.additionRepeatTimes !== undefined ) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if (options.additionSeparator !== undefined ) {
    additionSeparator = options.additionSeparator;
  }

  // let's make additionString
  let additionString = ''
  // additionString = (addition + additionSeparator) * (additionRepeat-1) + addition
  if ( additionRepeatTimes > 0 ) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i != additionRepeatTimes - 1) {
        additionString += addition
        additionString += additionSeparator  
      }
      else {
        additionString += addition  
      }
    }
  }
  // if no repeats just add once
  else if ( additionRepeatTimes == 0) {
    additionString += addition;
  }

  // subResult = string + additionString
  let subResult = str + additionString;

  // let's make result
  let result = ''
  // result = (subResult + separator) * (repeatTimes - 1) + subResult
  if (repeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i++) {
      if ( i != repeatTimes - 1) {
        result += subResult + separator
      }
      else {
        result += subResult
      }
    }
  }
  // if no repeatTimes just add once 
  else if (repeatTimes == 0) {
    result += subResult
  }
  return result
};
  