const mongoose = require('mongoose');
const permissionSchema = require('../../models/Permission');
mongoose.model('Permission');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('Permission');
