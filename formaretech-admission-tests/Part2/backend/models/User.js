const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const adminUserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        permission: {
            type: String,
            required: true
        }
    }
);

module.exports = adminUser = mongoose.model("users", adminUserSchema);