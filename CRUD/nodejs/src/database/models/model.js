const mongoose = require('moongoose')

const ModelSchema = new mongoose.Schema({
    attr_str: String,
    attr_num: Number,
    attr_def: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Model", ModelSchema)