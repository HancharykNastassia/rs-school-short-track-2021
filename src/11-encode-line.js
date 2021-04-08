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
  if (!str) return '';
  const counters = [];
  const leters = [];
  const arr = str.split('');
  counters.push(1);
  leters.push(arr[0]);
  arr.forEach((item, index, ar) => {
    if (index > 0) {
      if (ar[index - 1] === item) counters[counters.length - 1]++;
      else {
        counters.push(1);
        leters.push(item);
      }
    }
  });
  return leters.reduce((st, leter, index) => {
    if (counters[index] > 1) {
      return st + counters[index] + leter;
    }
    return st + leter;
  }, '');
}

module.exports = encodeLine;
