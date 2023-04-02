const mongoose = require('mongoose');
const roleSchema = require('../../models/Role');
mongoose.model('Role');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('Role');
