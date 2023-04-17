const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (i = 0; i < str.length; i++){
    let n = 1;
      for (j =i+1; j<str.length; j++)
      if (str[i] == str[j]) n++;
         else break;
    if ( n==1 ) result += str[i];
      else result += n + str[i];
    i = j-1;  
  }
return result;
}
console.log(encodeLine('aabbbc'))
module.exports = {
  encodeLine
};
