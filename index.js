// entry point for application
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
// import mongoose from 'mongoose'

import routes from './routes'

const port = process.env.PORT || 4000
const app = express()

// app setup
// middleware setup
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined')) // TODO: configure later
app.use(express.static('client'))

// db setup
// mongoose.connect('mongodb://localhost:db/db')

routes(app)

app.listen(port, (req, res) => {
  console.log('Listening on port: ', port)
})
