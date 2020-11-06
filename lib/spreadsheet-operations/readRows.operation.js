const { google } = require('googleapis');
const spreadsheetConfigs = require('../../configs/spreadsheet.config');

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
module.exports = async (auth, range) => {
  return new Promise((resolve, reject) => {
    const sheets = google.sheets({ version: 'v4', auth });
    return sheets.spreadsheets.values.get(
      {
        spreadsheetId: spreadsheetConfigs.spreadsheetId,
        range,
      },
      (err, res) => {
        if (err) return reject(new Error(`The API returned an error: ${err}`));
        const rows = res.data.values;
        if (rows.length) {
          console.log('Rows Received');
          return resolve(rows);
        }
        return reject(new Error('No data found'));
      }
    );
  });
};
