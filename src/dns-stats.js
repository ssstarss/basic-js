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

let res = new Array();

let arr =new Array();
domains.forEach( (item, index) => 
  arr[index] = item.split('.').reverse() )

 arr.forEach (item => {
  n = 0;
  str = '';
  item.forEach((it, ) => {
      str = it + str;
    let has = res.find(e => e.dns.includes(str) );
    if (! has){
        n = domains.reduce((acc, el) => {
      if (el.includes(str)) acc = acc + 1;
      return acc;
    },0 );
    
    res.push({dns: str,n: n});
    
  }
  str =  '.' + str;

  })
 })
 res.forEach(item => {
  a = item.dns.split('.');
  a = a.reverse();
  stroke = a.map(item => item = '.' + item).join('');
  item.dns = stroke;

});
let out = {};
res = res.reduce((acc,el) =>{
  acc = acc + `'${el.dns}': ${el.n},`
  out [el.dns]= el.n ;
  return acc;

},'' );
return out;

}

/*domains = [
   'code.yandex.ru',
  'music.yandex.ru',
   'yandex.ru'
 ]
 console.log (getDNSStats(domains));*/
 
module.exports = {
  getDNSStats
};

