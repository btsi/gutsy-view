const express = require('express');
const bodyParser = require ('body-parser');
const app = express()
const port = 3002;
const db = require('../database/dbConnection.js')

app.use("/", express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/databaseRetrievalOnLoad', function(req, res) {
  console.log('success server request from client')
  db.Gutsydb.find( {} ).sort({id:0})
  .then((results) => {
    console.log('success query database')
    res.send(results)
  })
})

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
})
