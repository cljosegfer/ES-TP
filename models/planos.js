const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Plano = mongoose.model('Plano', {
    disciplina: {
        type: String,
        required: true
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
    created_at: {
        type: Date,
        default: Date.now,
    },

    // title: String,
    // description: String,
    
    comments: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Comment' 
    }],
    author: { 
        type: Schema.Types.ObjectId, 
        ref : 'User', 
        required: true 
    }
})

module.exports = Plano
