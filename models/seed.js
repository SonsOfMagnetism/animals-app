require('dotenv').config()
const mongoose = require('./connection')
const Animal = require('./animal')

mongoose.connection.on('open', () => {
    const startAnimals = [
        { species: "Fox", extinct: false, location: "desert", lifeExpectancy: 9 },
        { species: "Panther", extinct: false, location: "jungle", lifeExpectancy: 20 },
        { species: "Saber-Toothed Tiger", extinct: true, location: "mountains", lifeExpectancy: 0 },
        { species: "Mammoth", extinct: true, location: "tundra", lifeExpectancy: 100 },
        { species: "Mountain Lion", extinct: false, location: "mountains", lifeExpectancy: 14 },
      ]
      Animal.remove({}, (err, data) => {
        Animal.create(startAnimals, (err, data) => {
            console.log(data)
            mongoose.connection.close()
        })
      })
})