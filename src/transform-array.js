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
function transform( arr1) {
  if ( ! Array.isArray(arr1)) throw new Error ("'arr' parameter must be an instance of the Array!");
  let arr = Array.from(arr1);
  let length = arr.length;
  for (index = 0; index <arr.length; index++) {
    item = arr[index];
    if (item == '--double-next') 
      if (index < arr.length-1){ 
        arr[index] = arr[index + 1];
       
      } else arr.pop();
    
    if (item == '--double-prev') 
      if (index >0){ 
        arr[index] = arr[index - 1];
        
      } else arr.shift();
    
    if (item == '--discard-prev')
      if ( index > 0){
        arr.splice(index-1,2) 
        
      } else arr.shift();
    
    if (item == '--discard-next')
      if ( index < arr.length-1){
        arr.splice(index,2);
        if (arr[index] == "--discard-prev" || arr[index] == "--double-prev") arr.splice(index,1);
        index -= 1;
      } else arr.pop();
  
  }
  arr = arr.filter(item => item != '--double-next' &&  item != '--double-prev' && item && '--double-prev' || item == '--discard-next')
   return arr;
}
/*let n = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
console.log(transform(n));*/
module.exports = {
  transform
};
