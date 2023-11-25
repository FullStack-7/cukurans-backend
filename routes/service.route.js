const express = require('express')
const { getAllServices, getServiceById, deleteServiceById, createService } = require('../controllers/service.controller')
const route = express.Router()

route.get('/', getAllServices)
route.get('/:id', getServiceById)
route.delete('/:id', deleteServiceById)
route.post('/', createService)
module.exports = route