const mongoose = require('mongoose');
const paymentModeSchema = require('../../models/PaymentMode');
mongoose.model('PaymentMode');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('PaymentMode');
