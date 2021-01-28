const express = require('express');
const router = express.Router();
const definitionsCtrl = require('../../controllers/api/definitions');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/:id/readings', ensureLoggedIn, definitionsCtrl.create);
router.delete('/:id/deleteReadings', ensureLoggedIn, definitionsCtrl.delete);

module.exports = router;