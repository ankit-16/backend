const express = require('express');

const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');
const {
  isValidAdminToken,
  login,
  logout,
} = require('../controllers/crmControllers/authJwtController');
router.route('/');
router.route('/login').post(catchErrors(login));
router.route('/logout').post(isValidAdminToken, catchErrors(logout));

module.exports = router;