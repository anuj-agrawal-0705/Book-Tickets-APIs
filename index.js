const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const apis = require('./src/routes/ticket.routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',apis)

const time = new Date("2021-01-10T00:00:00.000Z")

let t = time.setHours(time.getHours() + 2)
app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT} `+ time )
})