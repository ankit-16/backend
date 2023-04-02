const mongoose = require('mongoose');
const itemSchema = require('../../models/Item');
const Model = mongoose.model('Item');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('Item');
