const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

// Index
router.get('/', async(req, res) => {
    const animals = await Animal.find({})
    res.render('animals/index.ejs', { animals })
})

// Show
router.get('/:id', (req, res) => {
    const id = req.params.id
    Animal.findById(id, (err, animal) => {
        res.render('animals/show.ejs', {animal})
    })
})

module.exports = router