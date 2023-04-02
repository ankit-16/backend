const mongoose = require('mongoose');
const clientSchema = require('../../models/Client');
mongoose.model('Client');
const crudController = require('../corsControllers/crudControllers')
module.exports = crudController.createCRUDController('Client');