require('dotenv').config()
const mongoose = require('mongoose')
let user = process.env.DB_USER
let pass = process.env.DB_PASS
let host = process.env.DB_HOST
let mydb = process.env.DB_URI
let test = process.env.DB_URL

mongoose.connect(`${test}`, { useNewUrlParser: true })

let gutsySchema = new mongoose.Schema({
  id: 'number',
  title: 'string',
  category: 'string',
  image_URL: 'string',
  description: 'string',
  price: 'number'
})

let Gutsydb = mongoose.model('gutsydb', gutsySchema)

module.exports.Gutsydb = Gutsydb


