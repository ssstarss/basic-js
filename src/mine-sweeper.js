const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {

var  result = new Array();
result.length = matrix.length+2;
for(i = 0; i <= matrix.length+2; i++){
  result[i] = new Array();
  result[i].length = matrix[0].length+2;
  }
  for (i = 0; i < result.length; i++)
    for (j = 0; j < result[i].length; j++)
      result[i][j] = 0;
  
  for (i = 1; i <= matrix.length; i++)
    for (j = 1; j < matrix[0].length; j++){
      result[i-1][j-1] += matrix[i-1][j-1];
      result[i-1][j] += matrix[i-1][j-1];
      result[i-1][j+1] += matrix[i-1][j-1];
      result[i][j-1] += matrix[i-1][j-1];
      result[i][j+1] += matrix[i-1][j-1];
      result[i+1][j-1] += matrix[i-1][j-1];
      result[i+1][j] += matrix[i-1][j-1];
      result[i+1][j+1] += matrix[i-1][j-1];        
    }
    
    for (i = 0; i < matrix.length; i++)
      for (j = 0; j < matrix[0].length; j++)
        matrix[i][j] = result[i+1][j+1];

return(matrix);
}

n = minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
 ]);
console.log(n[0]);
console.log(n[1]);
console.log(n[2]);

module.exports = {
  minesweeper
};
