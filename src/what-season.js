const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (typeof date == 'undefined') return('Unable to determine the time of year!');
  var d= new Date (date);
   if (d.toString() === 'Invalid Date'){
    console.log('Invalid date!')
    return Error;
  }
  let monthes = [31,28,31,30,31,30,31,31,30,31,30,31];
  dayNumber = 0;
  for (i = 0; i < date.getMonth(); i++)
  dayNumber += monthes[i];
  dayNumber += date.getDate();
  if(dayNumber >= 1 && dayNumber <= 59 || dayNumber >= 335 && dayNumber <= 365) return ('winter');
  if(dayNumber >= 60 && dayNumber <= 151) return ('spring');
  if(dayNumber >= 152 && dayNumber <= 243) return ('summer');
  if(dayNumber >= 244 && dayNumber <= 334) return ('fall');

}

module.exports = {
  getSeason
};
