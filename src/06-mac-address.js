/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nArr = n.split('-');
  if (nArr.length !== 6) return false;
  let isMAC = true;
  nArr.forEach((group) => {
    if (group.length !== 2) isMAC = false;
    if (Number.isNaN(parseInt(group, 16))) isMAC = false;
  });
  return isMAC;
}

module.exports = isMAC48Address;
