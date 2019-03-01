require('dotenv').config()
let url = process.env.DB_URI
let local = process.env.DB_URL
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: 'true' });

let gutsySchema = new mongoose.Schema({
  "id": 'number',
  "title": 'string',
  "category": 'string',
  "image_URL": 'string',
  "description": 'string',
  "price": 'string'
})

let Gutsydb = mongoose.model('GutsyDB', gutsySchema);

module.exports = {
  Gutsydb: Gutsydb
}
