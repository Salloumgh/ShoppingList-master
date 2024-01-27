const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: strng
    },
    catg: {
        required: false,
        type: string
    }


})

module.exports = mongoose.model('shopping_categs', dataSchema)