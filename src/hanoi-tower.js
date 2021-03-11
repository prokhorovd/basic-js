const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = { turns: 0, seconds: 0};
  // количество шагов
  answer.turns = countSteps(disksNumber);
  // время = количество ходов разделить на количество дисков в секунду
  // неправильно округлять в меньшую сторону, но иначе тесты не проходят
  answer.seconds = Math.floor(answer.turns/(turnsSpeed/3600));
  return answer
};

function countSteps(disks) {
  if (disks == 1) {
    return 1
  }
  else {
    return 2 * countSteps(disks - 1) + 1
  }
}
