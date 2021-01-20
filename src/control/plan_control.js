const mongoose = require('mongoose')

const plan = mongoose.model('plan')

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query
        const planos = await plan.paginate({}, { page, limit: 10 }) // page: page

        return res.json(planos)
    },

    async store(req, res){
        const plano = await plan.create(req.body)

        return res.json(plano)
    },

    async show(req, res){
        const plano = await plan.findById(req.params.id)
        
        return res.json(plano)
    },

    async update(req, res){
        const plano = await plan.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(plano)
    },

    async destroy(req, res){
        await plan.findByIdAndRemove(req.params.id)

        return res.send()
    }
}
