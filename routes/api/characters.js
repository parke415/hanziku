const express = require('express');
const router = express.Router();
const charactersCtrl = require('../../controllers/api/characters');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', charactersCtrl.index);
// router.get('/new', ensureLoggedIn, charactersCtrl.new);
router.get('/:id', charactersCtrl.show);
router.post('/', ensureLoggedIn, charactersCtrl.create);
// router.get('/:id/edit', ensureLoggedIn, charactersCtrl.edit);
// router.put('/:id', ensureLoggedIn, charactersCtrl.update);
// router.delete('/:id', ensureLoggedIn, charactersCtrl.delete);
// router.put('/:id/learnToggle', ensureLoggedIn, charactersCtrl.learnToggle);

module.exports = router;