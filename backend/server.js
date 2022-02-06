require('dotenv').config({ silent: true })
const express = require('express')
const bodyParser = require('body-parser')
const routers = require('./routers')

const app = express()
app.use(bodyParser.json())
app.use(express.static('static')) //is this good?

app.get('/sync', async (req, res) => {
  try {
    await sequelize.sync({ force: true })
    // res.status(201).json({ message: 'tables created'})
    res.status(201).send('tables created')
  } catch (err) {
    console.warn(err)
    res.status(500).json({ message: 'some error occured' })
  }
})

app.use('/playlist-api', routers.playlist)

app.listen(8080)

