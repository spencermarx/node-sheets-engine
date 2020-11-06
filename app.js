const dotenv = require('dotenv');

dotenv.config();

const fs = require('fs');
const path = require('path');
const utils = require('./lib/helpers/index.helper');
const mainTask = require('./lib/tasks/main.task');

global.appRoot = path.resolve(__dirname);

const main = async () => {
  try {
    fs.readFile('./configs/google_access/credentials.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Google Sheets API.
      utils.authorize(JSON.parse(content), auth => mainTask(auth));
    });
  } catch (error) {
    console.log(error);
  }
};

main();
