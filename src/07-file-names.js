/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const filesInfo = names.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {});
  const filecount = names.reduce((acc, n) => {
    acc[n] = 0;
    return acc;
  }, {});
  return names.map((fn) => {
    if (filesInfo[fn] > 1) {
      if (filecount[fn] === 0) {
        filecount[fn]++;
        return fn;
      }
      const count = filecount[fn];
      filecount[fn]++;
      const finalstring = `${fn}(${count})`;
      if (filesInfo[finalstring]) {
        filesInfo[finalstring]++;
        filecount[finalstring]++;
      }
      return finalstring;
    }
    return fn;
  });
}

module.exports = renameFiles;
