const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // если array пустой - скидываем
  if (Array.isArray(members) == false) {
    return false
  }
  let secretNameArr = []
  for (let i = 0; i < members.length; i++) {
    // если член массива строка не состоящая из пробелов, записываем себе
    if (typeof(members[i]) == 'string' && String(members[i]).trim != '') {
      secretNameArr.push(String(members[i]).trim()[0].toUpperCase())
    }
  }
  // сортировать, слить, превратить в string
  let secretName = secretNameArr.sort().join("")
  return secretName;
};
