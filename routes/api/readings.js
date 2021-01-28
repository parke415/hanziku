const express = require('express');
const router = express.Router();
const readingsCtrl = require('../../controllers/api/readings');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/:id/readings', ensureLoggedIn, readingsCtrl.create);
router.delete('/:id/deleteReadings', ensureLoggedIn, readingsCtrl.delete);

module.exports = router;