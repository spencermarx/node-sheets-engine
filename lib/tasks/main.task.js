const operations = require('../spreadsheet-operations/index.operation');
const { createJson } = require('../helpers/index.helper');
const sheetConfigs = require('../../configs/spreadsheet.config');

const targetPage = `${sheetConfigs.sheet}!${sheetConfigs.range}`;

/**
 *
 * @description - Main task where we can run different operations
 * @param {Object} auth - standard auth object from google sdk
 */
module.exports = async auth => {
  const data = await operations.readRows(auth, targetPage);
  // Handle Data Below (Example)

  // This will be stringified for a JSON file
  const obj = {
    data,
  };

  createJson({ data: obj, fileName: 'example' });
};
