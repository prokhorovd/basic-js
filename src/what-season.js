const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // Check param
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }
  // Trying to catch fake date with uselessVar
  let uselessVar = date.getTime()
  // Proceed to determine the time of year
  let month = date.getMonth();
  if (month >= 0 && month <= 1 || month == 11) {
    return 'winter'
  }
  if (month >= 2 && month <= 4) {
    return 'spring'
  }
  if (month >= 5 && month <= 7) {
    return 'summer'
  }
  if (month >= 8 && month <= 10) {
    return 'autumn'
  }
};
