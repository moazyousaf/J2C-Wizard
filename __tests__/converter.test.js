const { convertToCsv } = require('../src/converter.js');

describe('JSON to CSV Converter', () => {
  test('dovrebbe convertire un array di oggetti JSON in una stringa CSV', () => {
    const inputData = [
      { nome: 'Mario', eta: 30 },
      { nome: 'Luigi', eta: 25 },
    ];

    const result = convertToCsv(inputData);

    expect(typeof result).toBe('string');

    expect(result).toContain('"nome","eta"'); // json2csv mette le virgolette di default

    expect(result).toContain('"Mario",30');
    expect(result).toContain('"Luigi",25');
  });

  test("dovrebbe lanciare un errore se l'input è vuoto o nullo", () => {
    expect(() => {
      convertToCsv(null);
    }).toThrow('Input vuoto'); // Controlla che il messaggio di errore sia esatto

    expect(() => {
      convertToCsv([]);
    }).toThrow('Input vuoto');
  });
});
