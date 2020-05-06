const fs = require('fs');
const csv = require('@fast-csv/parse');

const teams = {};

// stubbing out file to handle csv parser => json

fs.readFile('./data/csv/round_1.csv', handleFile);

function handleFile(err, data) {
  const rows = data.toString().split('\n');
  rows.shift();
  rows.forEach(handleStr);
}

function handleStr(str) {
  const rows = csv.parseString(str, { headers: false} )
    .on('data', handleRow)

  console.log('rows', rows);
  
}

function handleRow(row) {
  return row;
}


