const express = require('express');
const router = express.Router();
const componentsCtrl = require('../../controllers/api/components');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/:id/components', ensureLoggedIn, componentsCtrl.create);
router.delete('/:id/deleteComponents', ensureLoggedIn, componentsCtrl.delete);

module.exports = router;