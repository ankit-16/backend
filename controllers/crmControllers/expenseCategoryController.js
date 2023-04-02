const mongoose = require('mongoose');
const expenseCategorySchema = require('../../models/ExpenseCategory');
mongoose.model('ExpenseCategory');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('ExpenseCategory');
