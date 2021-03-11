const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {
    // установим тип машины direct/reverse
    if (type == undefined || type == true) {
      this.machineType = 'direct';
    } else if (type == false) {
      this.machineType = 'reverse';
    }
  }

  encrypt(message, key) {
    // нет параметров - нет конфетки
    if (message == undefined || key == undefined) {
      throw new Error(`Please specify message and key as parameters`)
    }

    // создаем переменную под будущее зашифрованное сообщение и переводим изначальное сообщение в верхний регистр
    let encryptedMessage = ''
    let messageToEncrypt = message.toUpperCase();

    // Работаем только с латинскими символами, составим ключ с учетом этого требования
    let keySequence = this.adaptKey(messageToEncrypt, key);

    //теперь у нас есть ключ и сообщение для шифровки
    // зашифруем сообщение (шифруются только латинские символы)
    for (let i = 0; i < messageToEncrypt.length; i++){
      if (messageToEncrypt[i].charCodeAt() > 64 && messageToEncrypt[i].charCodeAt() < 91) {
        let messageCharCode = messageToEncrypt[i].charCodeAt() - 65;
        let keyCharCode = keySequence[i].charCodeAt() - 65;
        let encryptedCharCode = (messageCharCode + keyCharCode)%26 + 65;
        let encryptedChar = String.fromCharCode(encryptedCharCode)
        encryptedMessage += encryptedChar;
      }
      else {
        encryptedMessage += messageToEncrypt[i]
      }
    }

    // возврат прямой или обратной строки в зависимости от типа машины
    if (this.machineType == 'direct') {
      return encryptedMessage.toUpperCase();
    } else if (this.machineType == 'reverse') {
      return encryptedMessage.toUpperCase().split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    // нет параметров - нет конфетки
    if (encryptedMessage == undefined || key == undefined) {
      throw new Error(`Please specify encryptedMessage and key as parameters`)
    }

    // создаем переменную под будущее расшифрованное сообщение и переводим изначальное сообщение в верхний регистр
    let decryptedMessage = ''
    let messageToDecrypt = encryptedMessage.toUpperCase();

    // Работаем только с латинскими символами, составим ключ с учетом этого требования
    let keySequence = this.adaptKey(messageToDecrypt, key);

    // Теперь у нас есть ключ и сообщение для шифровки
    // Дешифруем (только латинские символы)
    for (let i = 0; i < messageToDecrypt.length; i++){
      if (messageToDecrypt[i].charCodeAt() > 64 && messageToDecrypt[i].charCodeAt() < 91) {
        let messageCharCode = messageToDecrypt[i].charCodeAt() - 65;
        let keyCharCode = keySequence[i].charCodeAt() - 65;
        let encryptedCharCode = (messageCharCode - keyCharCode + 26)%26 + 65;
        let encryptedChar = String.fromCharCode(encryptedCharCode)
        decryptedMessage += encryptedChar;
      }
      else {
        decryptedMessage += messageToDecrypt[i]
      }
    }

    // Возвращаем прямую или обратную строку в зависимости от типа машины
    if (this.machineType == 'direct') {
      return decryptedMessage.toUpperCase();
    } else if (this.machineType == 'reverse') {
      return decryptedMessage.toUpperCase().split('').reverse().join('');
    }
  }

  // Функция составляет keySequence с учетом символов не являющихся латинскими
  adaptKey (message, key) {
    let keySequence = '';
    let keySequencePosition = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
        if (key[keySequencePosition] !== undefined) {
          keySequence += key[keySequencePosition].toUpperCase();
          keySequencePosition ++;
        }
        else {
          keySequencePosition = 0;
          keySequence += key[keySequencePosition].toUpperCase();
          keySequencePosition ++;
        }
      }
      else {
        keySequence += ' '
      }
    }
    return keySequence
  }
}
module.exports = VigenereCipheringMachine;
