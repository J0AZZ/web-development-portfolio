const mongoose = require("mongoose");

const PubSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    CNPJ: String,
    location: {
        uf: String,
        city: String,
        street: String,
        n: Number,
        neighborhood: String,
    },
    maxCapacity: Number,
    image_url: String,
    history: { 
        total: 
        {
            type: Number,
            default: 0
        },
        users: [
            {
                id: String, 
                n: Number
            }
        ]
    }
    
});

module.exports = mongoose.model("Pub", PubSchema);