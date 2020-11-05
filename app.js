const dotenv = require('dotenv');

dotenv.config();

const fs = require('fs');
const utils = require('./lib/helpers/index.helper');
const tasks = require('./lib/spreadsheet-tasks/index.task');

const startingPoint = 'Sheet1!A3';

const main = async () => {
  try {
    fs.readFile('./configs/google_access/credentials.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Google Sheets API.
      utils.authorize(JSON.parse(content), auth => {
        tasks.readRows(auth);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

main();
