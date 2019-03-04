const data = require('./seedFile.js')
const db = require('./dbConnection')

let payload = data

// db.Gutsydb.insertMany(payload, { upsert: true })
//   .then((success) => {
//     console.log('successfully seeded db')
//   }).catch(err => console.log('error'))
//   .then(() => { return })


console.log(data)





//if i want to insert one use findOneAndUpdate
