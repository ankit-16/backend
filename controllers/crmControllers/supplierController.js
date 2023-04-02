const mongoose = require('mongoose');
const supplierSchema = require('../../models/Supplier');
mongoose.model('Supplier');
const crudController = require('..//corsControllers/crudControllers');
module.exports = crudController.createCRUDController('Supplier');
