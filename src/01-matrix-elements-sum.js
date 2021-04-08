/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, line, lindex) => {
    const linecount = line.reduce((accl, item, index) => {
      if (lindex === 0) return accl + item;
      if (lindex > 0 && matrix[lindex - 1][index] !== 0) return accl + item;
      return 0;
    }, 0);
    return acc + linecount;
  }, 0);
}

module.exports = getMatrixElementsSum;
