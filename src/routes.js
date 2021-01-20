const express = require('express')
const routes = express.Router()

const plan_control = require('./control/plan_control')

routes.get('/planos', plan_control.index)
routes.post('/planos', plan_control.store)
routes.get('/planos/:id', plan_control.show)
routes.put('/planos/:id', plan_control.update)
routes.delete('/planos/:id', plan_control.destroy)

module.exports = routes
