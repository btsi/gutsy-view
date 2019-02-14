const mongoose = require('mongoose')
require('dotenv').config()
let user = process.env.DB_USER
let pass = process.env.DB_PASS
let host = process.env.DB_HOST
let mydb = `mongodb://${user}:${pass}@${host}`
mongoose.connect(`${mydb}`, { useNewUrlParser: true })

let gutsySchema = new mongoose.Schema({
  id: 'number',
  title: 'string',
  category: 'string',
  image_URL: 'string',
  description: 'string',
  price: 'number'
})

let Gutsydb = mongoose.model('Gutsydb', gutsySchema)

module.exports.Gutsydb = Gutsydb


