const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direction) {
    this.direction = direction
  }
  encrypt(input, code) {
    if (input == undefined || code == undefined) throw new Error('Incorrect arguments!');
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    input = input.split('');
    code = code.split('');
    letters = letters.split('');
    input = input.map (item => { return item.toUpperCase() });
    letters = letters.map (item => { return item.toUpperCase() });
    code = code.map (item => { return item.toUpperCase() });
    let codeIndex = 0;
    input.forEach((item,index,arr) => {
        if (letters.includes(item)) {
        let nCode = letters.indexOf(code[codeIndex]);
        let nInput = letters.indexOf(item);
        nInput += nCode;
        if (nInput > 25) nInput -= 26;
        arr[index] = letters[nInput].toUpperCase(); 
        codeIndex += 1;
        if (codeIndex == code.length) codeIndex = 0;
        }
    })
    if (this.direction  == false)  input = input.reverse();
    input = input.join(''); 
    return input;
}

 decrypt(input, code) {
  if (input == undefined || code == undefined) throw new Error('Incorrect arguments!');
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    input = input.split('');
    code = code.split('');
    letters = letters.split('');
    input = input.map (item => { return item.toUpperCase() });
    letters = letters.map (item => { return item.toUpperCase() });
    code = code.map (item => { return item.toUpperCase() });
    let codeIndex = 0;
    input.forEach((item,index,arr) => {
        if (letters.includes(item)) {
        let nCode = letters.indexOf(code[codeIndex]);
        let nInput = letters.indexOf(item);
        nInput -= nCode;
        if (nInput < 0) nInput += 26;
        arr[index] = letters[nInput].toUpperCase(); 
        codeIndex += 1;
        if (codeIndex == code.length) codeIndex = 0;
        }
    })
    if (this.direction  == false)  input = input.reverse();
    input = input.join(''); 
    return input;
}
}

module.exports = {
  VigenereCipheringMachine
};
