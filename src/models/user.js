const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
            type: String,
            required: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('user', user_schema);
