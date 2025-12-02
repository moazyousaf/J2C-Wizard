const fs = require('fs');
const path = require('path');
const converter = require('./src/converter');

// Prende il file di input dal terzo argomento (node index.js input.json)
const inputFile = process.argv[2];
const outputFile = 'output.csv'; // Hardcoded! Non ideale, ma per ora concentrati sul farlo partire.

if (!inputFile) {
  console.error('Per favore fornisci un file JSON.');
  process.exit(1);
}

const inputPath = path.resolve(inputFile);

try {
  const data = fs.readFileSync(inputPath, 'utf8');
  const json = JSON.parse(data);

  const csv = converter.convertToCsv(json);

  fs.writeFileSync(outputFile, csv);
  console.log(`Fatto! Salvato in ${outputFile}`);
} catch (err) {
  console.error('Errore:', err.message);
}
