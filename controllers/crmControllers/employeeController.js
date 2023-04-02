const mongoose = require('mongoose');
const employeeSchema = require('../../models/Employee');
mongoose.model('Employee');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('Employee');
