/**
 * Parses file names and returns shorte
 *
 * @param {Array} - List of file names
 * @return {Array} - Parsed list of file names
 */
const parseNames = (arr) => {
  const resultingFileArray = [];
  // Split
  for(const filename of arr){
    const splitFileName = filename.split('/');
    const fullPath = splitFileName.slice(9, splitFileName.length).join('/');
    const targetFileName = splitFileName.slice(splitFileName.length - 2, splitFileName.length).join(' > ')
    resultingFileArray.push([String(fullPath), targetFileName]);
  }

  return resultingFileArray;
};

module.exports = {parseNames};