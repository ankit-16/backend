const mongoose = require('mongoose');
const expenseSchema = require('../../models/Expense');
const Model = mongoose.model('Expense');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('Expense');
