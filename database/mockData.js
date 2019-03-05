const entry = require('../faker')
let fs = require('fs')

console.log(new Date().toISOString()); // start timer
let data = () => {
  let output = []
  for (let i = 0; i < 50000; i++) {
    output.push(entry())
  }

  return output
}

let dataWrite = (collection) => {
  let stream = fs.createWriteStream("seedFile.json", { flags: 'a' });
  collection.forEach(function (item, index) {
    stream.write(item + ", \n");
  });
  stream.end();
}

for (let i = 0; i < 1; i++) {
  dataWrite(data())
}

console.log(new Date().toISOString()); // end timer






