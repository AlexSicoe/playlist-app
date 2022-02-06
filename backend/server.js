require('dotenv').config({ silent: true })
const express = require('express')
const bodyParser = require('body-parser')
const routers = require('./routers')

const app = express()
app.use(bodyParser.json())
// app.use(express.static('static'))

app.use('/playlist-api', routers.playlist)

app.listen(8080)

