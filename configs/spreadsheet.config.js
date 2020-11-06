module.exports = {
  spreadsheetId: `${process.env.SPREADSHEET_ID}`,
  sheet: `${process.env.SHEET_NAME}`,
  range: `${process.env.SHEET_RANGE || 'A:Z'}`,
};
