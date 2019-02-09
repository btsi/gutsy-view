const data = require('./mockData')
const db = require('./dbConnection')


db.gutsydb.remove({})
  .then( () => {
    db.gutsydb.insertMany(data.events)
    .then((success) => {
      console.log('successfully seeded db')
    })
    .catch((err) => {
      console.log('error')
    })
  })
    .catch(err => console.log('error'))

