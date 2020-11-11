const { google } = require('googleapis');
const spreadsheetConfigs = require('../../configs/spreadsheet.config');

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
module.exports = (auth, range, values) => {
  return new Promise((resolve, reject) => {
    const sheets = google.sheets({ version: 'v4', auth });
    sheets.spreadsheets.values.update(
      {
        auth,
        spreadsheetId: spreadsheetConfigs.spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values,
        },
      },
      (err, response) => {
        if (err) return reject(new Error(`The API returned an error: ${err}`));
        console.log('Appended Rows to Spreadsheet');
        return resolve(response);
      }
    );
  });
};
