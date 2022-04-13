const mongoose = require("mongoose");

const EvaluationSchema = mongoose.Schema({
    pubId: {
        type: String,
        default: ""
    },
    total: {
        type: Number,
        default: 0
    },
    evaluations: [
        {
            security: {
                type: Number,
                default: 0
            },
            hygiene: {
                type: Number,
                default: 0
            },
            products: {
                type: Number,
                default: 0
            },
            attendence: {
                type: Number,
                default: 0
            },
            comments: {
                type: String,
                default: ""
            }
        },
    ]
});

module.exports = mongoose.model("Evaluation", EvaluationSchema);