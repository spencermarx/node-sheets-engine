const fs = require('fs');
const { generatedFilePath } = require('../constants/constants');

const createJson = ({ data, fileName }) => {
  try {
    fs.writeFileSync(
      `${generatedFilePath()}/${fileName}.json`,
      JSON.stringify(data)
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createJson,
};
