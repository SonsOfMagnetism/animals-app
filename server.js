// Dependencies
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT
const AnimalRouter = require('./controllers/animalController')

// Middleware
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/animals', AnimalRouter)


// Server Listener
app.listen(PORT, () => {
    console.log(`You think you're better than me port ${PORT}!?`)
})