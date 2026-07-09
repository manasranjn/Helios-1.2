const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Technology', 'Business', 'Daily News', 'Stocks']
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Article', articleSchema)