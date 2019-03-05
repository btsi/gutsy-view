const data = require('./seedFile.json')
const db = require('./dbConnection')


let payload = data

console.log(new Date().toISOString()); // start timer
db.Gutsydb.insertMany(payload, { upsert: true })
  .then((success) => {
    console.log(new Date().toISOString()); // end timer
    console.log('successfully seeded db')
  }).catch(err => console.log('error'))
  .then(() => {
    return
  })









//if i want to insert one use findOneAndUpdate
