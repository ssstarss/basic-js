const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr) {
  if ( ! Array.isArray(arr)) {
    console.log("'arr' parameter must be an instance of the Array! if the arr is not an Array")
    return Error;
  } 
  let length = arr.length;
  arr.forEach((item, index) => {
    if (item == '--double-next') 
      if (index < arr.length-1) arr[index] = arr[index + 1];
    
    if (item == '--double-prev') 
      if (index >0) arr[index] = arr[index - 1];
    
    if (item == '--discard-prev'){
      if ( index > 0){
       arr = arr.concat(arr.slice(0, index-1), arr.slice(index+1, arr.length+1));
       arr = arr.slice(length, arr.length);
      }
    }
    if (item == '--discard-next'){
      if ( index < arr.length-1){

       arr = arr.concat(arr.slice(0, index), arr.slice(index+2, arr.length+1));
       arr = arr.slice(length, arr.length);
      }
    }
  });
  return arr;
}
console.log(n = transform([ '--double-prev', 1, 2, 1, 2, 3]),typeof n);
module.exports = {
  transform
};
