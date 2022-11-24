const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

// Index
router.get('/', async(req, res) => {
    const animals = await Animal.find({})
    res.render('animals/index.ejs', { animals })
})

module.exports = router