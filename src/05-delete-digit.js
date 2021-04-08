/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString().split('');
  return nStr.map((digit) => +nStr.filter((d, index) => !(d === digit && nStr.indexOf(d) === index)).join('')).sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
