const express = require('express')
const bodyParser = require('body-parser')
//require('dotenv').config()
const apis = require('./src/routes/ticket.routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',apis)


module.exports = app