const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // check if sampleActivity have invalid type
  if(sampleActivity == undefined || isNaN(sampleActivity) || typeof(sampleActivity) != 'string') {
    return false
  }
  // check if sampleActivity is nonsense
  if (+sampleActivity == Infinity || +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  // proceed
  let answer = (Math.log(MODERN_ACTIVITY/+sampleActivity)/(0.693/HALF_LIFE_PERIOD));
  return Math.ceil(answer)
}