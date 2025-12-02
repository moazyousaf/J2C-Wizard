const { Parser } = require('json2csv');

function convertToCsv(jsonData) {
  if (!jsonData || jsonData.length === 0) {
    throw new Error('Input vuoto');
  }

  const parser = new Parser();
  const csv = parser.parse(jsonData);
  return csv;
}

// Manca qualcosa qui? O forse è giusto così in CommonJS?
// Controlla come viene importato in index.js
exports.convertToCsv = convertToCsv;
