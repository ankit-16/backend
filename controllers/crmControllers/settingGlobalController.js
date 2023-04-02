const mongoose = require('mongoose');
const settingGlobalSchema = require('../../models/SettingGlobal');
mongoose.model('SettingGlobal');
const crudController = require('../corsControllers/crudControllers');
module.exports = crudController.createCRUDController('SettingGlobal');
