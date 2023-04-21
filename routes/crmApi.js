const express = require('express');
const multer = require('multer');
const path = require('path');
const setFilePathToBody = require('../middlewares/setFilePatToBody');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

const adminController = require('../controllers/crmControllers/adminController');
const roleController = require('../controllers/crmControllers/roleController');
const employeeController = require('../controllers/crmControllers/employeeController');
const paymentModeController = require('../controllers/crmControllers/paymentModeController');
const clientController = require('../controllers/crmControllers/clientController');
const invoiceController = require('../controllers/crmControllers/invoiceController');
const quoteController = require('../controllers/crmControllers/quoteController');
const paymentInvoiceController = require('../controllers/crmControllers/paymentInvoiceController');



// //_______________________________ Admin management_______________________________

var adminPhotoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/admin');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
});
const adminPhotoUpload = multer({ storage: adminPhotoStorage });
  
router
    .route('/admin/create')
    .post([adminPhotoUpload.single('photo'), setFilePathToBody], catchErrors(adminController.create));
router.route('/admin/read/:id').get(catchErrors(adminController.read));
router.route('/admin/search').get(catchErrors(adminController.search));
router.route('/admin/list').get(catchErrors(adminController.list));
router.route('/admin/profile').get(catchErrors(adminController.profile));
router.route('/admin/status/:id').patch(catchErrors(adminController.status));
router.route('/admin/update/:id').patch(catchErrors(adminController.update));
router.route('/admin/password-update/:id').patch(catchErrors(adminController.updatePassword));
router.route('/admin/delete/:id').delete(catchErrors(adminController.delete));
// //____________________________ Role management_______________________________

router.route('/role/create').post(catchErrors(roleController.create));
router.route('/role/read/:id').get(catchErrors(roleController.read));
router.route('/role/update/:id').patch(catchErrors(roleController.update));
router.route('/role/delete/:id').delete(catchErrors(roleController.delete));
router.route('/role/search').get(catchErrors(roleController.search));
router.route('/role/list').get(catchErrors(roleController.list));
router.route('/role/filter').get(catchErrors(roleController.filter));

// //_________________________________ API for employees_____________________
router.route('/employee/create').post(catchErrors(employeeController.create));
router.route('/employee/read/:id').get(catchErrors(employeeController.read));
router.route('/employee/update/:id').patch(catchErrors(employeeController.update));
router.route('/employee/delete/:id').delete(catchErrors(employeeController.delete));
router.route('/employee/search').get(catchErrors(employeeController.search));
router.route('/employee/list').get(catchErrors(employeeController.list));
router.route('/employee/filter').get(catchErrors(employeeController.filter));

// //_____________________________________ API for payment mode_____________________
router.route('/paymentMode/create').post(catchErrors(paymentModeController.create));
router.route('/paymentMode/read/:id').get(catchErrors(paymentModeController.read));
router.route('/paymentMode/update/:id').patch(catchErrors(paymentModeController.update));
router.route('/paymentMode/delete/:id').delete(catchErrors(paymentModeController.delete));
router.route('/paymentMode/search').get(catchErrors(paymentModeController.search));
router.route('/paymentMode/list').get(catchErrors(paymentModeController.list));
router.route('/paymentMode/filter').get(catchErrors(paymentModeController.filter));

// //_____________________________________ API for clients __________________________________________________
router.route('/client/create').post(catchErrors(clientController.create));
router.route('/client/read/:id').get(catchErrors(clientController.read));
router.route('/client/update/:id').patch(catchErrors(clientController.update));
router.route('/client/delete/:id').delete(catchErrors(clientController.delete));
router.route('/client/search').get(catchErrors(clientController.search));
router.route('/client/list').get(catchErrors(clientController.list));
router.route('/client/filter').get(catchErrors(clientController.filter));

// //_________________________________________________________________API for invoices_____________________
router.route('/invoice/create').post(catchErrors(invoiceController.create));
router.route('/invoice/read/:id').get(catchErrors(invoiceController.read));
router.route('/invoice/update/:id').patch(catchErrors(invoiceController.update));
router.route('/invoice/delete/:id').delete(catchErrors(invoiceController.delete));
router.route('/invoice/search').get(catchErrors(invoiceController.search));
router.route('/invoice/list').get(catchErrors(invoiceController.list));
router.route('/invoice/filter').get(catchErrors(invoiceController.filter));

router.route('/invoice/pdf/:id').get(catchErrors(invoiceController.generatePDF));



// //_________________________________________________________________API for Quotes_____________________

router.route('/quote/create').post(catchErrors(quoteController.create));
router.route('/quote/read/:id').get(catchErrors(quoteController.read));
router.route('/quote/update/:id').patch(catchErrors(quoteController.update));
router.route('/quote/delete/:id').delete(catchErrors(quoteController.delete));
router.route('/quote/search').get(catchErrors(quoteController.search));
router.route('/quote/list').get(catchErrors(quoteController.list));
router.route('/quote/filter').get(catchErrors(quoteController.filter));
router.route('/quote/pdf/:id').get(catchErrors(quoteController.generatePDF));


// //_____________________________________________ API for client payments_________________

router.route('/paymentInvoice/create').post(catchErrors(paymentInvoiceController.create));
router.route('/paymentInvoice/read/:id').get(catchErrors(paymentInvoiceController.read));
router.route('/paymentInvoice/update/:id').patch(catchErrors(paymentInvoiceController.update));
router.route('/paymentInvoice/delete/:id').delete(catchErrors(paymentInvoiceController.delete));
router.route('/paymentInvoice/search').get(catchErrors(paymentInvoiceController.search));
router.route('/paymentInvoice/list').get(catchErrors(paymentInvoiceController.list));
router.route('/paymentInvoice/filter').get(catchErrors(paymentInvoiceController.filter));
router.route('/paymentInvoice/pdf/:id').get(catchErrors(paymentInvoiceController.generatePDF));


module.exports = router;
