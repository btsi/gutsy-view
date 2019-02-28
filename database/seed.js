const data = require('./mockData.js')
const db = require('./dbConnection.js')

db.Gutsydb.remove({})
  .then(() => {
    db.Gutsydb.insertMany(data)
      .then((success) => {
        console.log('successfully seeded db')
      })
  }).catch(err => console.log('error'))






//if i want to insert one use findOneAndUpdate




