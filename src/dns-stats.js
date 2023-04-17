const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
/*let arr1, arr2, arr3 = [];
  for (i = 0; i < domains.length; i++){
    
    d1 = domains[i].slice(domains[i].lastIndexOf('.',domains[i],length+1));
    arr1[i] = domains[i].slice(domains[i].firstIndexOf('.')+1, domains[i].length+1);
    arr2[i] = domains[i].slice(arr1.lastIndexOf('.')+1, domains[i].length+1);
  }
*/
}


module.exports = {
  getDNSStats
};
