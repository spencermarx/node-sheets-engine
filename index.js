const fs = require('fs');
const utils = require('./lib/helpers/index.helper');
const tasks = require('./lib/spreadsheet-tasks/index.task');
const dotenv = require("dotenv");
dotenv.config();

const startingPoint = 'Sheet1!A3'

// Get component names

utils.filewalker(process.argv[2], (err, results) => {
  if (err) {
    throw err;
  }

  const componentNames = utils.parseNames(results);

  if(componentNames && componentNames.length > 0) {
    // Make changes on google spreadsheet
    fs.readFile('./configs/google_access/credentials.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);

      // Authorize a client with credentials, then call the Google Sheets API.
      utils.authorize(JSON.parse(content), (auth) => tasks.createRows(auth, startingPoint, componentNames));
    });
  }
})





