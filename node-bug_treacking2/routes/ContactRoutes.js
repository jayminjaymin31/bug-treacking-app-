const express = require('express');
const router = express.Router();
const contactController = require('../controller/ContactController');



router.post('/contact',contactController.addContact);
router.get('/contact',contactController.getAllContact);
router.get('/contact/:id',contactController.getContactById);
router.delete('/contact/:id',contactController.deleteContact);
router.put('/contact/:id',contactController.updateContact);


module.exports = router