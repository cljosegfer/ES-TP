const mongoose = require('mongoose')
const mongoose_paginate = require('mongoose-paginate')

const plan_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    course: {
        type: String,
        required: true,
    },
})

plan_schema.plugin(mongoose_paginate)

mongoose.model('plan', plan_schema)
