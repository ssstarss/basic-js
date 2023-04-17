const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (toString.call(members) != '[object Array]') return false
  let arr = [];
  let index = 0;
  members.forEach(item => {
    if (typeof item == "string") {
      arr[index] = item[item.search('\[A-Za-z]')].toUpperCase();
      index++;
    }
  });
  arr.sort();
  let name = '';
  arr.forEach(item => {name += item});
return name;
}

module.exports = {
  createDreamTeam
};