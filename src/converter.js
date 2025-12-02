const { Parser } = require('json2csv');

function convertToCsv(jsonData) {
  if (!jsonData || jsonData.length === 0) {
    throw new Error('Input vuoto');
  }

  const parser = new Parser();
  const csv = parser.parse(jsonData);
  return csv;
}

module.exports = { convertToCsv };
