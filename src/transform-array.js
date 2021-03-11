const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // убедимся, что массив это массив не пустой
  if (Array.isArray(arr) == false) {
    throw new Error('Param is not an Array');
  }
  // если пустой - вернуть
  if (arr.length == 0) {
    return arr;
  }
  // создаем модифицируемый массив условий
  let initialArray = [...arr];
  // создаем массив под ответ
  let transformedArray = [];
  
  // начинаем проверку по условиям
  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] == '--discard-next') {
      // выполняем только если следующий элемент существует
      if (i != initialArray.length-1) {
        // удаляем элемент из изначального массива
        initialArray[i+1] = 'DELETED'; 
        i += 1;
      }
      
    }
    else if (initialArray[i] == '--discard-prev') {
      // выполняем только если предыдущий элемент существует
      if (i != 0 && initialArray[i-1] != 'DELETED') {
        transformedArray.pop()
      }
    }
    else if (initialArray[i] == '--double-next') {
      // выполняем только если следующий элемент существует
      if (i != initialArray.length-1) {
        transformedArray.push(initialArray[i+1]);
      }
      
    }
    else if (initialArray[i] == '--double-prev') {
      // выполняем только если предыдущий элемент существует
      if (i != 0 && initialArray[i-1] != 'DELETED') {
        transformedArray.push(initialArray[i-1])
      }
    }
    // если обычное число то пишем его в ряд-результат
    else {
      transformedArray.push(arr[i])
    }
  }
  return transformedArray;
}