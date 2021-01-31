const mongoose = require('mongoose')
const mongoose_paginate = require('mongoose-paginate')

const plan_schema = new mongoose.Schema({
    disciplina: {
        type: String,
        required: true,
    },
    ementa: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    referencias: {
        type: String,
        required: true,
    },
    conteudo: {
        type: Array.apply,
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
})

plan_schema.plugin(mongoose_paginate)

mongoose.model('plan', plan_schema)
