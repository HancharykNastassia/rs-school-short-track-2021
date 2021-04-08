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
function getDNSStats(domains) {
  return domains.reduce((acc, domainLine) => {
    const doms = domainLine.split('.').reverse().map((d, index, arr) => {
      let st = `.${arr[0]}`;
      for (let i = 1; i < index + 1; i++) {
        st += `.${arr[i]}`;
      }
      return st;
    });
    doms.forEach((d) => {
      acc[d] = (acc[d] || 0) + 1;
    });
    return acc;
  }, {});
}

module.exports = getDNSStats;
