// Model
const mongoose = require('./connection')
const {Schema, model} = mongoose
const animalsSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})
const Animal = model('Animal', animalsSchema)

module.exports = Animal