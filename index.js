const fs = require('fs');

// TODO: parse row string data as csv
// const csv = require('@fast-csv/parse');

const dir = './data/04-18-2020/csv/'
const files = fs.readdirSync(dir)

files.forEach((f) => {
  fs.readFile(`./data/04-18-2020/csv/${f}`, handleFile);
});

function handleFile(err, data) {
  const rows = data.toString().split('\n');
  rows.shift();
  rows.forEach(handleStr);
}

function handleStr(str) {
  // TODO: 
  // const rows = csv.parseString(str, { headers: false} )
  //   .on('data', handleRow)

  console.log('str', str);
}

// TODO:
// function handleRow(row) {
//   return row;
// }
