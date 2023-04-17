const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
let result = '';
let string = '';
let addition = '';

if (options.separator == undefined) options.separator = '+';
if (options.additionSeparator == undefined) options.additionSeparator = '|';
if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 0;
if (options.repeatTimes == undefined) options.repeatTimes = 1;
if (options.addition == undefined  && typeof options.addition != 'object') options.addition = '';

/*if (typeof options.addition == 'object') { 
  if (toString.call(options.addition) == '[object Null]') addition = 'null'
   else addition = toString.call(options.addition);
   if (toString.call(options.addition) == '[object Array]')
      addition = options.addition.join(',');
} else addition = options.addition.toString();
    
if (typeof str == 'object') { 
if (toString.call(str) == '[object Null]') string = 'null'
   else string = toString.call(str);
} else string = str.toString();*/

string = ''+ str;
addition ='' + options.addition;

 for (let i = 2; i <= options.repeatTimes+1; i++){
    result += string + addition;
    for (let j = 2; j <= options.additionRepeatTimes; j++)
      result += options.additionSeparator + addition;
    if (i<= options.repeatTimes) result += options.separator;

  }
  return result;
}
const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }));
module.exports = {
  repeater
};
