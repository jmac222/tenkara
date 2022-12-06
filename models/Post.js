const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    stars: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Post", PostSchema);