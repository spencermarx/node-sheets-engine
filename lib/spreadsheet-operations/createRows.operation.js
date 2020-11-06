const spreadsheetConfigs = require('../../configs/spreadsheet.config')
const {google} = require('googleapis');

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
module.exports = (auth, range, values) => {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.update({
    auth: auth,
    spreadsheetId: spreadsheetConfigs.spreadsheetId,
    range: range, //Change Sheet1 if your worksheet's name is something else
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
    }
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
        console.log("Appended Rows to Spreadsheet");
    }
  });
}