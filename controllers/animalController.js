const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

// Index
router.get('/', async(req, res) => {
    const animals = await Animal.find({})
    res.render('animals/index.ejs', { animals })
})

// New
router.get('/new', (req, res) => {
    res.render('animals/new.ejs')
})

// Delete

// Update

// Create
router.post('/', (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false
    Animal.create(req.body, (err, animal) => {
        res.redirect('/animals')
    })
})

// Edit
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Animal.findById(id, (err, animal) => {
        res.render('animals/edit.ejs', {animal})
    })
})

// Show
router.get('/:id', (req, res) => {
    const id = req.params.id
    Animal.findById(id, (err, animal) => {
        res.render('animals/show.ejs', {animal})
    })
})

module.exports = router