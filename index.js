const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const apis = require('./src/routes/ticket.routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',apis)


app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT} `)
})