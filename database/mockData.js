const entry = require('../faker')
let fs = require('fs')


let data = []
let payload = JSON.stringify(data)

for (let i = 0; i < 1000000; i++) {
  data.push(entry())

}


if (__dirname + '/seedFile.js') {
  fs.appendFile(__dirname + '/seedFile.js', payload)
} else {
  fs.writeFile(__dirname + '/seedFile.js', payload)
}





