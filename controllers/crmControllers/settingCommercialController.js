const mongoose = require('mongoose');
const settingCommercialSchema = require('../../models/SettingCommercial');
mongoose.model('SettingGlobal');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('SettingCommercial');
